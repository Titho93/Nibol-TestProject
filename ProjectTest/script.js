function pageReady() {
  const inputPwd = document.getElementById("password-input");
  inputPwd.addEventListener("keydown", checkPassword);
}

function checkPassword() {
  // take password input text
  const inputPwdLen = document.getElementById("password-input").value.length;
  // calculate percentage respect to max number of password chars
  const width = (inputPwdLen / 20) * 100;

  const progressLabel = document.getElementById("progress-label");
  let feedback = "too easy my friend";
  let color = "n25";

  if (width >= 0 && width < 25) {
  } else if (width >= 25 && width < 50) {
    feedback = "still too easy";
    color = "n50";
  } else if (width >= 50 && width < 75) {
    feedback = "fair enough";
    color = "n75";
  } else {
    feedback = "Good work boss";
    color = "n100";
  }

  progressLabel.setHTMLUnsafe(feedback);

  // set width of progress bar as this percentage
  document
    .getElementById("password-progress")
    .setAttribute("style", `width: ${width}%;`);
  document
    .getElementById("password-progress")
    .setAttribute("class", `progress-bar-fill ${color}`);

  const seeinputBar = (document.getElementById("pswbar").className =
    "password-bar");
}
