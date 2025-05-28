// function addNumbers() {
//   let a = prompt("What is your first number?");
//   let b = prompt("What is your second number?");
//   const result = parseInt(a) + parseInt(b);
//   alert("Your number is " + result);
// }

const addNumbers = () => {
  //   let a = prompt("What is your first number?");
  //   let b = prompt("What is your second number?");

  const firstNum = document.querySelector("#firstNum").value;
  const secondNum = document.querySelector("#secondNum").value;

  const result = parseInt(firstNum) + parseInt(secondNum);

  //   alert("Your number is " + result);
  //   const newDiv = document.createElement("div");
  //   const buttonContainer = document.querySelector("#buttonContainer");
  //   newDiv.innerHTML = "Your result is " + result;
  //   buttonContainer.appendChild(newDiv);

  const resultDiv = document.querySelector("#result");
  resultDiv.innerHTML = "Your result is " + result;
};

const changeBackgroundButton = document.querySelector(
  "#changeBackgroundButton"
);

changeBackgroundButton.addEventListener("click", () => {
  document.body.style.background = "purple";
});
