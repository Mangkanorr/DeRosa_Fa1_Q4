function checkInput(element) {
    if (element.value === "") {
      element.classList.add("error");
    } else {
      element.classList.remove("error");
      element.classList.add("success");
    }
  }
  
  function clearBorder(element) {
    element.classList.remove("error");
    element.classList.remove("success");
  }
  
  function clearForm() {
    document.getElementById("sign-up-form").reset();
    document.getElementById("output").innerHTML = "";
  }
  
  function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var username = document.getElementById("username").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
  
    if (fullName === "" || username === "" || gender === "" || email === "") {
      alert("Please fill out all required fields.");
      return false;
    }
  
    // Display information in output paragraph
    var output = "<b>Sign-Up Information:</b><br>";
    output += "Full Name: " + fullName + "<br>";
    output += "Username: " + username + "<br>";
    output += "Gender: " + gender + "<br>";
    output += "Email Address: " + email + "<br>";
    document.getElementById("output").innerHTML = output;
  
    return true;
  }
  