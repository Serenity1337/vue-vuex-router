<template>
  <div class="navbar">

     <router-link  :to="{ name: 'Home' }" class = "nav-btn" v-bind:class="{ 'current-nav': navHomeState === true}"> namai </router-link>

    <router-link :to=" { name: 'About'} " class = "nav-btn second" v-bind:class="{ 'current-nav': navAboutState === true}"> apie mane </router-link>

    <router-link :to=" { name: 'Contacts' } " class = "nav-btn third" v-bind:class="{ 'current-nav': navContactsState === true}"> kontaktai </router-link>

    </div>
</template>

<script>

import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {

  name: 'Navbar',
  components: {

  },
  data () {
    return {

    }
  },
  watch: {
    '$route' () {
      if (this.$route.path === '/about' || this.$route.path === '/about/education' || this.$route.path === '/about/carreer' || this.$route.path === '/about/knowledge') {
        this.setNavHomeState(false)
        this.setNavAboutState(true)
        this.setNavContactsState(false)
        console.log(this.$route.path)
      } else if (this.$route.path === '/contacts') {
        this.setNavHomeState(false)
        this.setNavAboutState(false)
        this.setNavContactsState(true)
        console.log(this.$route.path)
      } else {
        this.setNavHomeState(true)
        this.setNavAboutState(false)
        this.setNavContactsState(false)
        console.log(this.$route.path)
      }
    }
  },
  computed: {
    ...mapGetters({
      navHomeState: 'navHomeState',
      navAboutState: 'navAboutState',
      navContactsState: 'navContactsState'
    })
  },
  created () {
    // this.checkRoute()
    // console.log(this.navHomeState)
  },
  methods: {
    ...mapActions({
      checkRoute: 'checkRoute'
    }),
    ...mapMutations({
      setNavHomeState: 'setNavHomeState',
      setNavAboutState: 'setNavAboutState',
      setNavContactsState: 'setNavContactsState'
    })
  },
  mounted () {
    // this.checkRoute()
  }

}

</script>

<style lang = 'scss' scoped>
.navbar {
  position: absolute;
  top: 42px;
  right: 91px;
  .second {
    margin: 0px 20px;
  }
  .third {
    margin: 0px 30px 0px 0px;
  }
  .nav-btn {
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    text-transform: uppercase;
    text-decoration: none;
  }
  .current-nav {
    color: #35bbc5;
    text-decoration: underline;

  }
}
</style>
