const currentTheme = localStorage.getItem("theme");
const rootClassList = document.querySelector(":root").classList;

switch (currentTheme) {
    case "dark":
        rootClassList.add("dark-theme");
        break;
    case "light":
        rootClassList.remove("dark-theme");
        break;
}