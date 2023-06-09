const toggleTheme = document.getElementById("toggle-theme") as HTMLInputElement;
const imageToggle = document.getElementById("handle-icon") as HTMLImageElement;

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("dark-theme")) {
    imageToggle.setAttribute("src", "assets/images/handle-dark.svg");
  } else {
    imageToggle.setAttribute("src", "assets/images/handle-light.svg");
  }
});
