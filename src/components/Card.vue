<template>
<div class="card">
 <img src='@/assets/images/image.png' alt="asdasd">
 <h1>projektas 1</h1>
</div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    image: {
      avatar: 'th.jpg'

    }
  }

}
</script>

<style lang='scss' scoped>
.card {
  width: 33%;
  height: 375px;
  margin-top: 40px;
  padding: 23px 24px 57px 24px;
  background-color: #3252E5;
  img {
    width: 100%;
    height: 255px;
    color: white;
  }
  h1 {
    font-family: 'helvetica';
    font-size: 24px;
    font-weight: 600;
    color: white;
    text-transform: uppercase;
    margin: 21px 0px 57px 0px;
  }
}
</style>
