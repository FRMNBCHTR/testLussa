<template>
<div class="home">
<navbar />
<div class="container">
<Hero/>
</div>
</div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/navbar.vue'
import Hero from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: {
    navbar,
    Hero
  }
}
</script>
