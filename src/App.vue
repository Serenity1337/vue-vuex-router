<template>
  <div id="app">
    <Navbar/>
<AppHeader/>
<Whitebox>
<router-view></router-view>
  </whitebox>
<Footer/>
  </div>

</template>

<script>
import AppHeader from '@/components/AppHeader/'
import Whitebox from '@/components/Whitebox'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    AppHeader,
    Whitebox,
    Navbar,
    Footer
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Open Sans', sans-serif;
  line-height: 1;
  background-color: #EEEFF3;
}
</style>
