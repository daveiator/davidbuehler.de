var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");
var solarisTheme = document.getElementById("solaris-mode-theme");

toggle.addEventListener("click", () => {    
    if (toggle.className === "btn fas fa-moon") {
        setTheme("dark");
    } else if (toggle.className === "btn fas fa-sun") {
        setTheme("light");
    } else if (toggle.className === "btn fas fa-yin-yang") {
        setTheme("solaris");
    }
});

function setTheme(mode) {
    localStorage.setItem("dark-mode-storage", mode);
    if (mode === "dark") {
        darkTheme.disabled = false;
        solarisTheme.disabled = true;
        toggle.className = "btn fas fa-sun";
    } else if (mode === "light") {
        darkTheme.disabled = true;
        solarisTheme.disabled = true;
        toggle.className = "btn fas fa-yin-yang";
    } else if (mode === "solaris") {
        darkTheme.disabled = true;
        solarisTheme.disabled = false;
        toggle.className = "btn fas fa-moon";
    }
}

// the default theme is light
var savedTheme = localStorage.getItem("dark-mode-storage") || "solaris";
setTheme(savedTheme);