const emailBtn = document.getElementById("profile-contact-email");
const emailText = document.getElementById("profile-contact-email-text")
  .innerHTML;
const alertContainer = document.getElementById("copy-complete-message");

emailBtn.addEventListener("click", () => {
  console.log(emailText);
  copyToClipboard(emailText);
  alertContainer.style.display = "block";
  setTimeout(function () {
    alertContainer.style.display = "none";
  }, 4000);
});

// Source: https://stackoverflow.com/questions/22581345/click-button-copy-to-clipboard-using-jquery
function copyToClipboard(text) {
  // Create a "hidden" input
  var aux = document.createElement("input");

  // Assign it the value of the specified element
  aux.setAttribute("value", text);

  // Append it to the body
  document.body.appendChild(aux);

  // Highlight its content
  aux.select();

  // Copy the highlighted text
  document.execCommand("copy");

  // Remove it from the body
  document.body.removeChild(aux);
}
