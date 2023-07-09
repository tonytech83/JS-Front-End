function toggle() {
  const button = document.getElementsByClassName("button")[0];
  const extraDiv = document.getElementById('extra');

  extraDiv.style.display = button.textContent === 'Less' ? "none" : "block"
  button.textContent = button.textContent === "Less" ? "More" : "Less"
  
}
