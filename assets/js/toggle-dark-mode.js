const toggle = document.querySelector(".dark-mode-toggle");

toggle.addEventListener("click", () => {
    const rootClassList = document.querySelector(":root").classList;
    rootClassList.toggle("dark-theme");

    const isDark = rootClassList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});