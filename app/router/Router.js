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
  const $form_container = d.getElementById("form-container");

  // Routes
  if (!hash) {
    $root.appendChild(HomeComponent());
    d.getElementById("form-container").innerHTML = LoginComponent();
  }
  if (hash === "#Register") {
    $form_container.innerHTML = RegisterComponent();
  }
  if (hash === "#Login") {
    $form_container.innerHTML = LoginComponent();
  }
  if (hash === "#agenda") {
    $root.removeChild(HomeComponent());
    // $root.appendChild(AgendaComponent());
  }
};
