import { ajax } from "../helpers/ajax.js";
import { api } from "../helpers/contact_api.js";
import { LoginComponent } from "../components/login.js";
import { RegisterComponent } from "../components/register.js";
import { HomeComponent } from "../components/home.js";
import { AgendaComponent } from "../components/agenda.js";
export const Router = () => {
  // variables
  let d = document;
  let w = window;
  let { hash } = location;
  const $root = d.getElementById("root");
  ajax(api.URL, {}, (res) => console.log(res));
  // Routes
  if (!hash) {
    $root.appendChild(HomeComponent());
    const $form_container = d.getElementById("form-container");
    // d.getElementById("form-container").innerHTML = LoginComponent();
    hash = "#Login";
  }
  if (hash === "#Login") {
    d.getElementById("form-container").innerHTML = LoginComponent();
    const $formLogin = d.getElementById("formulario-login");
    $formLogin.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData($formLogin);
      console.log(data.get("email"));
      localStorage.token = "ESTEESUNTOKENDEPRUEBA";
    });
  }
  if (hash === "#Register") {
    $form_container.innerHTML = RegisterComponent();
  }
  if (hash === "#agenda") {
    $root.innerHTML = ``;
    $root.appendChild(AgendaComponent());
  }
};
