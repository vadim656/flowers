<template>
  <div class="w-full">
    <splide :options="options">
      <splide-slide>
        <img src="../assets/img/prod1.jpg" />
      </splide-slide>
      <splide-slide>
        <img src="../assets/img/prod2.jpg" />
      </splide-slide>
      <splide-slide>
        <img src="../assets/img/prod3.jpg" />
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import '@splidejs/splide/dist/css/splide.min.css'

export default {
  data () {
    return {
      options: {
        rewind: true,
        autoplay: true,
        height: 800,
        cover: true,
        type: 'loop'
      }
    }
  }
}
</script>
