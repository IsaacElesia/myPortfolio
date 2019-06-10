/* 
      Author: Isaac Elesia
      Date: Oct. 13, 2018. 
*/

var red, blue, green, hexaNum, colorName, userColor;
userColor = document.getElementById("color-sample");

/*==== Put all the radio input fields in an array ============*/
var inputRadios = document.querySelectorAll(".form-check ");

/*====== Assign variable to user input fields ============= */
red = document.getElementById("red");
blue = document.getElementById("blue");
green = document.getElementById("green");
hexaNum = document.getElementById("hexaNum");
colorName = document.getElementById("colorName");

/*======= Assign variable to all the invalid feedback div============== */
var redInvalidFeedback = document.querySelector(".redFeedback");
var blueInvalidFeedback = document.querySelector(".blueFeedback");
var greenInvalidFeedback = document.querySelector(".greenFeedback");
var hexaInvalidFeedback = document.querySelector(".hexaFeedback");
var colorNameInvalidFeedback = document.querySelector(".colorNameFeedback");

/* ====================================================
                          Update The User Interface
=====================================================*/
function updateUI() {
  /* === Disable the input fields  === */
  red.disabled = "disabled";
  blue.disabled = "disabled";
  green.disabled = "disabled";
  hexaNum.disabled = "disabled";
  colorName.disabled = "disabled";
  userColor.setAttribute("readonly", "readonly");

  /* === clear the input values === */
  red.value = " ";
  blue.value = " ";
  green.value = " ";
  hexaNum.value = " ";
  colorName.value = " ";
  userColor.style.backgroundColor = "#ffffff";

  /* === Hide invalid feedbacks === */
  redInvalidFeedback.style.display = "none";
  blueInvalidFeedback.style.display = "none";
  greenInvalidFeedback.style.display = "none";
  hexaInvalidFeedback.style.display = "none";
  colorNameInvalidFeedback.style.display = "none";
}

updateUI();

/* =======================================================
                              \check which radio button was selected
=========================================================*/

/* ========   Enable the RGB input fields ================ */
inputRadios[0].addEventListener("click", function() {
  updateUI();

  red.removeAttribute("disabled");
  blue.removeAttribute("disabled");
  green.removeAttribute("disabled");

  validate();
});

/* ========   Enable the Hexadecimal input field ================ */
inputRadios[1].addEventListener("click", function() {
  updateUI();
  hexaNum.removeAttribute("disabled");
  validate();
});

/* ========   Enable the Color-Name input field ================ */
inputRadios[2].addEventListener("click", function() {
  updateUI();
  colorName.removeAttribute("disabled");
  validate();
});

/* ========================================================
                                  Validate User inputs
===========================================================*/
function validate() {
  /* === Remove validation classes=== */
  red.classList.remove("is-invalid");
  red.classList.remove("is-valid");
  blue.classList.remove("is-invalid");
  blue.classList.remove("is-valid");
  green.classList.remove("is-invalid");
  green.classList.remove("is-valid");
  hexaNum.classList.remove("is-invalid");
  hexaNum.classList.remove("is-valid");
  colorName.classList.remove("is-invalid");
  colorName.classList.remove("is-valid");

  /* ===========Validate red input =================*/
  red.addEventListener("input", function() {
    var redValue = red.value;

    if (
      inputRadios[0].checked &&
      redValue !== "" &&
      redValue !== " " &&
      redValue >= 0 &&
      redValue <= 255
    ) {
      red.classList.remove("is-invalid");
      red.classList.add("is-valid");
      redInvalidFeedback.style.display = "none";
    } else {
      red.classList.remove("is-valid");
      red.classList.add("is-invalid");
      redInvalidFeedback.style.display = "block";
    }
  });

  /* ===========Validate blue input =================*/
  blue.addEventListener("input", function() {
    var blueValue = blue.value;

    if (
      inputRadios[0].checked &&
      blueValue !== "" &&
      blueValue !== " " &&
      blueValue >= 0 &&
      blueValue <= 255
    ) {
      blue.classList.remove("is-invalid");
      blue.classList.add("is-valid");
      blueInvalidFeedback.style.display = "none";
    } else {
      blue.classList.remove("is-valid");
      blue.classList.add("is-invalid");
      blueInvalidFeedback.style.display = "block";
    }
  });

  /* ===========Validate green input =================*/
  green.addEventListener("input", function() {
    var greenValue = green.value;

    if (
      inputRadios[0].checked &&
      greenValue !== "" &&
      greenValue !== " " &&
      greenValue >= 0 &&
      greenValue <= 255
    ) {
      green.classList.remove("is-invalid");
      green.classList.add("is-valid");
      greenInvalidFeedback.style.display = "none";
    } else {
      green.classList.remove("is-valid");
      green.classList.add("is-invalid");
      greenInvalidFeedback.style.display = "block";
    }
  });

  /* =========== Validate Hexadecimal Color Input ==============*/
  hexaNum.addEventListener("input", function() {
    var hexaValue = hexaNum.value;

    if (
      inputRadios[1].checked &&
      hexaValue.charAt(1) == "#" &&
      hexaValue.length == 8
    ) {
      hexaNum.classList.remove("is-invalid");
      hexaNum.classList.add("is-valid");
      hexaInvalidFeedback.style.display = "none";
    } else {
      hexaNum.classList.remove("is-valid");
      hexaNum.classList.add("is-invalid");
      hexaInvalidFeedback.style.display = "block";
    }
  });

  /* =========== Validate Color Name Input ==============*/
  colorName.addEventListener("input", function() {
    var colorValue = colorName.value;

    if (inputRadios[2].checked && isNaN(colorValue)) {
      colorName.classList.remove("is-invalid");
      colorName.classList.add("is-valid");
      colorNameInvalidFeedback.style.display = "none";
    } else {
      colorName.classList.remove("is-valid");
      colorName.classList.add("is-invalid");
      colorNameInvalidFeedback.style.display = "block";
    }
  });
}

/* ========================================================
                                  Display the user color
===========================================================*/
const colorForm = document.forms["colorForm"];

colorForm.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent the default form submission

  /* ==== Verify that the user entered a valid input ======= */
  var invalid = document.querySelectorAll(".is-invalid");

  if (invalid.length == 0) {
    //Verify that the RGB input filed is checked
    if (inputRadios[0].checked) {
      const value = colorForm.querySelector("#red").value;
      const value1 = colorForm.querySelector("#blue").value;
      const value2 = colorForm.querySelector("#green").value;
      userColor.style.backgroundColor =
        "rgb(" + value + "," + value1 + "," + value2 + ")";

      //Verify that the Hexadecimal input filed is checked
    } else if (inputRadios[1].checked) {
      const hexaValue = colorForm.querySelector("#hexaNum").value;
      userColor.style.backgroundColor = hexaValue;

      //Verify that the Color-Name input filed is checked
    } else if (inputRadios[2].checked) {
      const colorNameValue = colorForm.querySelector("#colorName").value;
      userColor.style.backgroundColor = colorNameValue;
    }
  } else {
    alert("Check your entries");
  }
});
