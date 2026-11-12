// Control del menú desplegable en pantallas móviles.
const botonMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");

if (botonMenu && menu) {
  document.documentElement.classList.add("js-menu");
  botonMenu.hidden = false;

  function cambiarMenu(abierto) {
    menu.classList.toggle("is-open", abierto);
    botonMenu.setAttribute("aria-expanded", String(abierto));
    botonMenu.textContent = abierto ? "Cerrar menú" : "Menú";
  }

  botonMenu.addEventListener("click", () => {
    const abierto = botonMenu.getAttribute("aria-expanded") === "true";
    cambiarMenu(!abierto);
  });

  menu.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      cambiarMenu(false);
    });
  });

  document.addEventListener("keydown", (evento) => {
    if (
      evento.key === "Escape" &&
      botonMenu.getAttribute("aria-expanded") === "true"
    ) {
      cambiarMenu(false);
      botonMenu.focus();
    }
  });

  const pantallaMovil = window.matchMedia("(max-width: 960px)");
  pantallaMovil.addEventListener("change", () => {
    cambiarMenu(false);
  });
}

// Resaltado automático de la sección activa en la barra de navegación.
const enlacesSecciones = document.querySelectorAll(
  '#menu-principal a[href^="#"]'
);

const secciones = [...enlacesSecciones]
  .map((enlace) => document.querySelector(enlace.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;

        enlacesSecciones.forEach((enlace) => {
          const activo =
            enlace.getAttribute("href") === `#${entrada.target.id}`;

          enlace.classList.toggle("is-active", activo);

          if (activo) {
            enlace.setAttribute("aria-current", "location");
          } else {
            enlace.removeAttribute("aria-current");
          }
        });
      });
    },
    {
      rootMargin: "-15% 0px -55% 0px",
      threshold: 0
    }
  );

  secciones.forEach((seccion) => observador.observe(seccion));
}

// Control explícito de inicio (START) para cada sección de videojuego.
const botonesStart = document.querySelectorAll(".btn-start");

botonesStart.forEach((boton) => {
  boton.addEventListener("click", () => {
    const idIframe = boton.getAttribute("data-target");
    const idOverlay = boton.getAttribute("data-overlay");
    const idStatus = boton.getAttribute("data-status");

    const iframe = document.getElementById(idIframe);
    const overlay = document.getElementById(idOverlay);
    const status = document.getElementById(idStatus);

    if (!iframe) return;

    const rutaJuego = iframe.getAttribute("data-src");

    // Carga o recarga el videojuego únicamente cuando el usuario presiona el botón.
    if (rutaJuego) {
      iframe.setAttribute("src", rutaJuego);
    }

    if (overlay) {
      overlay.classList.add("is-hidden");
    }

    if (status) {
      status.textContent = "Estado: En ejecución (Haz clic dentro del juego para usar el teclado)";
    }

    boton.textContent = "REINICIAR";
    boton.classList.add("is-running");

    iframe.addEventListener(
      "load",
      () => {
        iframe.focus();
      },
      { once: true }
    );
  });
});
