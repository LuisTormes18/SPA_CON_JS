import { RegisterComponent } from "./register.js";
export const LoginComponent = () => {
  const $form_login = ` <div class="login-form">
      <form method="post" id="formulario-login">
        <div class="form-group">
          <label>Email</label>
          <input type="text" name="email" class="form-control" placeholder="@Email" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" name="password" class="form-control" placeholder="Password" />
        </div>
        <button id="btn-login" type="submit" class="btn btn-black">Login</button>
        <a href="#Register" id="btn-show-form-register"  class="btn btn-secondary">Register</a>
      </form>
    </div>`;
  return $form_login;
};


