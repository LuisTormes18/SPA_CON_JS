import { login } from "./components/login.js";
export const app = () => {
  // cargando el main body
  const root = document.getElementById("root");
  root.innerHTML = `<div id="home"></div>`;
  const home = document.getElementById("home");
  home.innerHTML = login;
};
