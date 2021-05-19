import { AppComponent } from "./app/app.js";

const dom = document;
dom.addEventListener("DOMContentLoaded", AppComponent);
window.addEventListener("hashchange", AppComponent);
