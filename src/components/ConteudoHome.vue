<template>
<div id="main-container">
  <div id="background-image"></div>
  <span id="welcome-text">
    SEJA BEM-VINDO!!!
  </span>
</div>
</template>

<script>
export default {
  name: 'conteudo-home',
}
</script>

<style scoped>
#main-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

#background-image {
  width: 100%;
  height: 100%;
  background-image: url(../assets/background-home.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  opacity: 0.5;
}

#welcome-text {
  position: absolute;
  right: 100px;
  bottom: 80px;
  font-size: 50px;
  font-weight: 900;
  margin-left: 20px;
  color: var(--roxo-basico);
}

</style>
