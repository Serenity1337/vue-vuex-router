<template>
  <div id="Home">

  <h1 class = 'home-title'> projektai </h1>
  <div class="card-container">
  <Card/>
  <Card class = "mg100">
  </card>
  <Card/>
  </div>
  </div>
</template>

<script>

import Card from '@/components/Card'

export default {
  name: 'App',
  components: {
    Card
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

  .home-title {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 600;
  }
.card-container {
  display: flex;
}
.mg100 {
  margin: 40px 100px 0px 100px;
}
</style>
