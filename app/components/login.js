import { RegisterComponent } from "./register.js";
export const LoginComponent = () => {
  const $form_login = ` <div class="login-form">
      <form id="formulario-login">
        <div class="form-group">
          <label>User Name</label>
          <input type="text" class="form-control" placeholder="User Name" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" placeholder="Password" />
        </div>
        <a href="#agenda" type="submit" class="btn btn-black">Login</a>
        <a href="#Register" id="btn-show-form-register"  class="btn btn-secondary">Register</a>
      </form>
    </div>`;
  return $form_login;
};


