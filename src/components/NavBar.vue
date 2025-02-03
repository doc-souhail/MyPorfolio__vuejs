<script setup>
</script>

<template>
<nav class="container">
  <ul class="d-flex justify-content-between align-items-center ps-0 py-3">
    <li class="logo__name position-relative">
      <span class="time text-nowrap" id="date"></span>
      <a href="#">
        <img src="../assets/imgs/noun-happy-face-6015012.svg" alt="smily-face">
      </a>
    </li>
    <li id="menu__button" class="menu__burger">
      <img src="../assets/imgs/Menu.svg" alt="menu-icon">
    </li>
  </ul>
</nav>
<div id="modale" class="menu__modale ps-5 pe-5 rounded-3 d-flex flex-column justify-content-between">
  <div class="modale_body pt-5">
    <ul class="p-0">
      <li class="pb-2 "><a class="hover__link__white" href="#">HOME</a></li>
      <li class="pb-2"><a class="hover__link__white" href="#">ABOUT</a></li>
      <li class="pb-2"><a class="hover__link__white" href="#">WORKS</a></li>
    </ul>
  </div>
  <div class="modale_footer pb-3 d-flex justify-content-between align-items-center">
    <div>
      <p class="mb-0">souhail888@hotmail.com</p>
      <p>@moooore__protein</p>
    </div>
    <div>
      <div class="text-capitalize">Web Developer & UI Designer 🫡</div>
    </div>
  </div>
</div>
</template>

<style scoped>

.menu__burger{
  width: 50px;
  position: relative;
  z-index: 1000;
}
.logo__name{
  width: 60px;
}

.time{
  position: absolute;
  left: 80px;
  top: 20px;
  font-size: 13px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.menu__modale{
  display: none;
  opacity: 0;
  transition: opacity 0.5s ease;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  width: 60%;
  height: 55%;
  position: absolute;
  right: 180px;
  top: 20px;
  z-index: 1000;
}

.modale_body ul li a{
  font-size: 55px;
}

.modale_footer{
  text-transform: lowercase;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0;
  font-size: 13px;
}


.active_modale{
  display: block;
  opacity: 1;
  transition: opacity 0.5s ease;
}

</style>
