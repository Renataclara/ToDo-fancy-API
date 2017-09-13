<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
         <div class="col-sm-12">
           <router-view></router-view>
         </div>
         <!-- <div class="col-sm-4">
           <div class="container">
            LOLOLOLOLOL
           </div>
         </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'

export default {
  components: {
    Navbar
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
