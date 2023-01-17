<template>
  <header>
    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src="../assets/washingMachine.png"
            alt=""
            width="32"
            height="28"
            class="d-inline-block align-text-top w3-animate-left"
          />
          <span
            class="text-light w3-animate-right"
            style="padding-top: 10px"
            id="logo-name"
          >
            EasyWash Maejo
          </span>
        </a>
        <div class="menu">
          <a><RouterLink to="/">Home</RouterLink></a>
          <a><RouterLink to="/about">About</RouterLink></a>
          <a><RouterLink to="/contact">Contact</RouterLink></a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+Thai:wght@700&display=swap");
header {
  background: rgb(5, 136, 255);
  background: linear-gradient(
    90deg,
    rgba(5, 136, 255, 1) 0%,
    rgba(5, 199, 255, 1) 51%,
    rgba(0, 255, 222, 1) 100%
  );
  z-index: 99;
  transition: 0.5s ease all;
  list-style: none;
  text-transform: uppercase;
}

#logo-name {
  font-family: "Shadows Into Light", cursive;
}

.menu a {
  color: #030303;
  padding: 5px 5px;
  margin: 0 5px;
  text-decoration: none;
  border-bottom: 1px solid transparent;
}

.menu a:hover {
  color: #00afea;
  border-color: #00afea;
}
</style>