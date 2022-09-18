
//from main btn to find babysiter page -> to parents users
  function redirectFind(){
    location.href = './findKS.html';
  }

  //from main btn to add babysiter -> to babysiter users 
  function redirectJob(){
    location.href = './regKS.html';
  }


  //form validations and find results
  function findKS(){
    let isValid = validateFindKSForm();
    if(isValid){
        
        location.href = './results.html';  
    }
    else{
        event.preventDefault();
    }
    
  }

  //form validations and save babysiter details
  function saveDetails(){
    let isValid = validateRegForm();
    if(isValid){
        $("#tnxModal").modal() 
        //
    }
    else{
        event.preventDefault();
    }
        
}


//js validation on babysiter form
    function validateRegForm(){
        let validForm = true;
        let inpObj = document.getElementById("rp");
        if(inpObj.validity.patternMismatch){
            document.getElementById("rpErr").innerHTML = "not valid phone"; 
        }
        else if (!inpObj.checkValidity()) {
            document.getElementById("rpErr").innerHTML = "phone required";
            validForm =  false;
        }
        else{
            document.getElementById("rpErr").innerHTML = " ";
            validForm =  true;
        }

        inpObj = document.getElementById("remail");
        if(inpObj.validity.patternMismatch){
            document.getElementById("remailErr").innerHTML = "not valid email"; 
        }
        else if (!inpObj.checkValidity()) {
            document.getElementById("remailErr").innerHTML = "phone required";
            validForm =  false;
        }
        else{
            document.getElementById("remailErr").innerHTML = " ";
            validForm =  true;
        }

        inpObj = document.getElementById("rnc");
        if (!inpObj.checkValidity()) {
            document.getElementById("rncErr").innerHTML = "enter num of childs";
            validForm =  false;
        }
        else{
            document.getElementById("rncErr").innerHTML = " ";
            validForm =  true;
        }

        inpObj = document.getElementById("rName");
        if (!inpObj.checkValidity()) {
            document.getElementById("rNameErr").innerHTML = "enter num of childs";
            validForm =  false;
        }
        else{
            document.getElementById("rNameErr").innerHTML = " ";
            validForm =  true;
        }
        inpObj = document.getElementById("rapptFrom");
        if (!inpObj.checkValidity()) {
            document.getElementById("rapptFromErr").innerHTML = "enter time";
            validForm =  false;
        }
        else{
            document.getElementById("rapptFromErr").innerHTML = " ";
            validForm =  true;
        }
    
        inpObj = document.getElementById("rapptTo");
        if (!inpObj.checkValidity()) {
            document.getElementById("rapptToErr").innerHTML = "enter time";
            validForm =  false;
        }
        else{
            document.getElementById("rapptToErr").innerHTML = " ";
            validForm =  true;
        }
    
        if(validForm){
            return true;
        }
        else
            return false;
    
    
    
      }

//js validation on find babysiter form
  function validateFindKSForm(){
    let validForm = true;
    let inpObj = document.getElementById("fPhone");
    if(inpObj.validity.patternMismatch){
        document.getElementById("fPhoneErr").innerHTML = "not valid phone"; 
    }
    else if (!inpObj.checkValidity()) {
        document.getElementById("fPhoneErr").innerHTML = "phone required";
        validForm =  false;
    }
    else{
        document.getElementById("fPhoneErr").innerHTML = " ";
        validForm =  true;
    }

    inpObj = document.getElementById("fchildNum");
    if (!inpObj.checkValidity()) {
        document.getElementById("fChildNumErr").innerHTML = "enter num of childs";
        validForm =  false;
    }
    else{
        document.getElementById("fChildNumErr").innerHTML = " ";
        validForm =  true;
    }
    inpObj = document.getElementById("apptFrom");
    if (!inpObj.checkValidity()) {
        document.getElementById("fTimeFromErr").innerHTML = "enter time";
        validForm =  false;
    }
    else{
        document.getElementById("fTimeFromErr").innerHTML = " ";
        validForm =  true;
    }

    inpObj = document.getElementById("apptTo");
    if (!inpObj.checkValidity()) {
        document.getElementById("fTimeToErr").innerHTML = "enter time";
        validForm =  false;
    }
    else{
        document.getElementById("fTimeToErr").innerHTML = " ";
        validForm =  true;
    }


    if(validForm){
        return true;
    }
    else
        return false;


  }



