//from main btn to find babysiter page -> to parents users
function redirectFind() {
  location.href = "./findKS.html";
}

function redirectJob() {
  location.href = "./contact.html";
}

function findKS(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    location.href = "./results.html?lat=" + latitude + "&lng=" + longitude;
  }),
    (err) => {
      console.log(err);
    };
}

//form validations and save babysiter details
function saveDetails() {
  let isValid = validateRegForm();
  if (isValid) {
    $("#tnxModal").modal();
    //
  } else {
    event.preventDefault();
  }
}

//js validation on babysiter form
function validateRegForm() {
  let validForm = true;
  let inpObj = document.getElementById("rp");
  if (inpObj.validity.patternMismatch) {
    document.getElementById("rpErr").innerHTML = "not valid phone";
  } else if (!inpObj.checkValidity()) {
    document.getElementById("rpErr").innerHTML = "phone required";
    validForm = false;
  } else {
    document.getElementById("rpErr").innerHTML = " ";
    validForm = true;
  }

  inpObj = document.getElementById("remail");
  if (inpObj.validity.patternMismatch) {
    document.getElementById("remailErr").innerHTML = "not valid email";
  } else if (!inpObj.checkValidity()) {
    document.getElementById("remailErr").innerHTML = "phone required";
    validForm = false;
  } else {
    document.getElementById("remailErr").innerHTML = " ";
    validForm = true;
  }

  inpObj = document.getElementById("rnc");
  if (!inpObj.checkValidity()) {
    document.getElementById("rncErr").innerHTML = "enter num of childs";
    validForm = false;
  } else {
    document.getElementById("rncErr").innerHTML = " ";
    validForm = true;
  }

  inpObj = document.getElementById("rName");
  if (!inpObj.checkValidity()) {
    document.getElementById("rNameErr").innerHTML = "enter num of childs";
    validForm = false;
  } else {
    document.getElementById("rNameErr").innerHTML = " ";
    validForm = true;
  }
  inpObj = document.getElementById("rapptFrom");
  if (!inpObj.checkValidity()) {
    document.getElementById("rapptFromErr").innerHTML = "enter time";
    validForm = false;
  } else {
    document.getElementById("rapptFromErr").innerHTML = " ";
    validForm = true;
  }

  inpObj = document.getElementById("rapptTo");
  if (!inpObj.checkValidity()) {
    document.getElementById("rapptToErr").innerHTML = "enter time";
    validForm = false;
  } else {
    document.getElementById("rapptToErr").innerHTML = " ";
    validForm = true;
  }

  if (validForm) {
    return true;
  } else return false;
}

if (window.location.pathname.includes("results.html")) {
  const params = new URLSearchParams(window.location.search);
  const lat = params.get("lat");
  const lng = params.get("lng");
  const url = `/api/search/${lat}/${lng}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let html = "";

      for (const sitter of data) {
        html += `
            <div class="card">
            <div class="card-body">
                <h5 class="card-title
                ">${sitter.name}</h5>
                <p class="card-text">Distance: ${sitter.distance.toFixed(
                  2
                )} km</p>
                <p class="card-text">Phone: ${sitter.phone}</p>
                </div>
                <iframe
                    width="300"
                    height="170"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?q=${sitter.latitude},${
          sitter.longitude
        }&hl=es&z=14&amp;output=embed"
                ></iframe>
            </div>`;
      }
      document.getElementById("results").innerHTML = html;
    });
}
