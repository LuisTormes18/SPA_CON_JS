export const RegisterComponent = () => {
  const $register = ` <div class="register-form">
    <form id="formulario-login">
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" class="form-control" placeholder="Full Name" />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="text" class="form-control" placeholder="Email" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" placeholder="Password" />
      </div>
      <div class="form-group">
        <label>Confirn Password</label>
        <input type="text" class="form-control" placeholder="Confirn Password" />
      </div>
      <a href="#Login" id="btn-show-form-login" class="btn btn-secondary" >Login</a>

      <button type="submit" class="btn btn-black">Register</button>
    </form>
  </div>`;
  return $register;
};
