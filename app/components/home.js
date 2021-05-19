export const HomeComponent = () => {
  const $home = document.createElement("div");
  $home.setAttribute("id", "home");
  $home.innerHTML = `
<div class="sidenav">
  <div class="login-main-text">
    <h2>
    Contact Book<br />
  
    </h2>
    <p>Login or register from here to access.</p>
  </div>
</div>
<div class="main">
  <div class="col-md-6 col-sm-12">
  <div   id="form-container" ></div>
  </div>
</div> `;
  return $home;
};
