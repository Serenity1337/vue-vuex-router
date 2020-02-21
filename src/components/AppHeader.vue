<template>
<div class="header-container">
<h1 class = "name">Vardas Pavarde</h1>
<h5 class = "portfolio">Portfolio</h5>
</div>
</template>

<script>
export default {
  name: 'appHeader'
}
</script>

<style lang='scss' scoped>
.header-container {
  padding: 245px 0px 142px 0px;
  background-color: #3252E5;
  .name {
    color: #ffffff;
    font-weight: 600;
    font-size: 36px;
    text-transform: uppercase;
    text-align: center;
    width: 100%;
    padding-bottom: 12px;
  }
  .portfolio {
    font-size: 18px;
    font-weight: 600px;
    text-transform: uppercase;
    text-align: center;
    color: #ffffff;
    width: 100%;
  }
}
</style>
