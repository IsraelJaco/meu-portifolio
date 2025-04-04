document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");
  
    // Aplica o tema salvo
    if (currentTheme === "dark") {
      document.body.classList.add("dark");
      toggle.textContent = "🌞 Modo Claro";
    } else if (currentTheme === "light") {
      document.body.classList.remove("dark");
      toggle.textContent = "🌙 Modo Escuro";
    } else {
      // Tema automático do sistema
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (systemPrefersDark) {
        document.body.classList.add("dark");
        toggle.textContent = "🌞 Modo Claro";
      }
    }
  
    // Alterna o tema ao clicar
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      toggle.textContent = isDark ? "🌞 Modo Claro" : "🌙 Modo Escuro";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  });
  