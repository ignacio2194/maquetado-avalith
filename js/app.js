const nav = document.querySelector(".ProyectManagement i");
const learn = document.querySelector(".learn i");
const menu = (direcion) => {
  direcion.addEventListener("click", () => {
    if (direcion.classList.contains("close")) {
      direcion.classList.remove("close");
      direcion.classList.add("open");
      direcion.parentElement.childNodes[3].classList.remove("oculto");
      direcion.parentElement.childNodes[3].classList.add("activo");
    } else {
      direcion.classList.remove("open");
      direcion.classList.add("close");
      direcion.parentElement.childNodes[3].classList.remove("activo");
      direcion.parentElement.childNodes[3].classList.add("oculto");
    }
  });
};
menu(nav);
menu(learn);
