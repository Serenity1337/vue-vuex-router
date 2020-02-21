<template>
  <div id="About">
  <h1 class="about-title"> apie mane </h1>
  <p class = "whitebox-paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maiores ex maxime et est? Quae illum odio voluptates eaque esse quas libero earum voluptatum ex rem dolorem, officiis sit culpa assumenda, exercitationem qui minus eveniet minima autem. Quos quidem debitis aperiam sequi, ut ad alias? Ullam consequatur unde vel expedita debitis vitae ipsam soluta, recusandae id enim, optio, temporibus excepturi voluptate blanditiis. Voluptatem omnis alias voluptas, dolore minima error impedit optio eius, sit laborum fuga magnam dignissimos aliquid iusto doloribus non ipsam esse iure odit voluptatibus soluta explicabo corrupti commodi? Suscipit ab dolor est consectetur doloribus, voluptate aperiam totam. Quasi saepe quod rerum voluptatum molestias qui? Possimus repudiandae odio quibusdam maiores cumque tenetur illum unde ex facilis, maxime dolorum magni id eveniet quam voluptate fuga pariatur? Cum et, sapiente aut veritatis fugit aliquam dolores laudantium fugiat! Quo, saepe. Error reprehenderit tempore consectetur, aperiam quae quidem itaque totam atque iusto assumenda?</p>
  <div class="info-navigation">
  <router-link :to="{ name: 'Education' }" class = "info-nav-btn first" v-bind:class="{'current-nav': navEducationState === true}"> issilavinimas </router-link>

    <router-link :to=" { name: 'Carreer'} " class = "info-nav-btn second" v-bind:class="{'current-nav': navCarreerState === true}"> karjera </router-link>

    <router-link :to=" { name: 'Knowledge' } " class = "info-nav-btn third" v-bind:class="{'current-nav': navKnowledgeState === true}"> zinios </router-link>

    <div class="child-container">
      <router-view></router-view>
    </div>
</div>

  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'About',
  components: {

  },
  data () {
    return {

    }
  },
  watch: {
    '$route' () {
      if (this.$route.path === '/about/education') {
        this.setNavEducationState(true)
        this.setNavCarreerState(false)
        this.setNavKnowledgeState(false)
        console.log(this.$route.path)
        console.log(this.navEducationState)
        console.log('this works')
      } else if (this.$route.path === '/about/carreer') {
        this.setNavEducationState(false)
        this.setNavCarreerState(true)
        this.setNavKnowledgeState(false)
        console.log(this.$route.path)
      } else {
        this.setNavEducationState(false)
        this.setNavCarreerState(false)
        this.setNavKnowledgeState(true)
        console.log(this.$route.path)
      }
    }
  },
  computed: {
    ...mapGetters({
      navEducationState: 'navEducationState',
      navCarreerState: 'navCarreerState',
      navKnowledgeState: 'navKnowledgeState'
    })
  },
  methods: {
    ...mapActions({

    }),
    ...mapMutations({
      setNavEducationState: 'setNavEducationState',
      setNavCarreerState: 'setNavCarreerState',
      setNavKnowledgeState: 'setNavKnowledgeState'
    })
  }
}
</script>

<style lang="scss" scoped>
  .about-title {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 40px;
  }
  .whitebox-paragraph {
font-size: 14px;
  }
.mg100 {
  margin: 40px 100px 0px 100px;
}
.info-navigation {
margin: 40px 0px 0px 0px;
.info-nav-btn {
  text-decoration: none;
  color: #111111;
  text-transform: uppercase;
  font-size: 16px;

}
.second {
    margin: 0px 31px;
  }
  .current-nav {
  color: blue;
  text-decoration: underline;
}
}
.child-container {
  width: 100%;
  background-color: #EEEFF3;
  margin: 30px 0 135px 0;
  padding: 76px 0px 102px 61px;
}

</style>
