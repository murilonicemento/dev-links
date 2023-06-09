const toggleTheme = document.getElementById("toggle-theme") as HTMLInputElement;
const imageToggle = document.getElementById("handle-icon") as HTMLImageElement;

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("dark-theme")) {
    imageToggle.setAttribute("src", "assets/images/handle-dark.svg");
    handleIcon("linkedin", "dark");
    handleIcon("github", "dark");
    handleIcon("hackerrank", "dark");
    handleIcon("instagram", "dark");
    handleIcon("twitter", "dark");
  } else {
    imageToggle.setAttribute("src", "assets/images/handle-light.svg");
    handleIcon("linkedin", "light");
    handleIcon("github", "light");
    handleIcon("hackerrank", "light");
    handleIcon("instagram", "light");
    handleIcon("twitter", "light");
  }
});

function handleIcon(icon: string, theme: string): void {
  const image = document.getElementById(icon) as HTMLImageElement;
  image.setAttribute("src", `assets/images/${theme}-theme-${icon}.svg`);
}
