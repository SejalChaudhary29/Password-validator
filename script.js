function checkPassword() {
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
  console.log(
    "Password:",
    password,
    "\n",
    "Confirm Password:",
    confirmpassword
  );

  let message = document.getElementById("message");

  if (password.length != 0) {
    if (password == confirmpassword) {
      message.textContent = "Password match!!";
      message.style.color = "#00D84A";
      message.style.fontSize = "10px";
    } else {
      message.textContent = "Password don't match*";
      message.style.color = "#E21717";
      message.style.fontSize = "10px";
    }
  } else {
    alert("Password can't be empty!");
    message.textContent = "";
  }
}
