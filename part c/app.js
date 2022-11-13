const express = require("express");
const { query } = require("./db/query");
const { distance } = require("./distance");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(__dirname + "/public"));

app.get("/api/search/:lat/:lng", async (req, res) => {
  try {
    const lat = req.params.lat;
    const lng = req.params.lng;
    const saveQuery = `INSERT INTO SEARCHES (latitude, longitude) VALUES (?, ?)`;
    await query(saveQuery, [lat, lng]);

    const searchQuery = `SELECT * FROM SITTERS`;
    const [rows] = await query(searchQuery);
    let sitters = [];
    for (const row of rows.slice(0, 5)) {
      sitters.push({
        ...row,
        distance: distance(lat, row.latitude, lng, row.longitude),
      });
    }
    sitters.sort((a, b) => a.distance - b.distance);
    res.json(sitters);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
app.post("/api/contact", async (req, res) => {
  try {
    const { message } = req.body;
    const addQuery = `INSERT INTO ADD_REQUESTS (message) VALUES (?)`;
    await query(addQuery, [message]);
    res.status(301).redirect("/public/thanks.html");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
app.listen(3000, function () {
  console.log("Server started: http://localhost:3000/public");
});
