<template>
  <div id="app" :style="{ transform: 'scale(' + visualScale + ')' }">
    <router-view />
  </div>
</template>

<script>
export default {
  components: {},
  name: 'App',
  data() {
    return {
      visualScale: 0,
    }
  },
  computed: {
    iframeWidth() {
      return Math.floor(this.visualScale * 3840) + 'px'
    },
    iframeHeight() {
      return Math.floor(this.visualScale * 1080) + 'px'
    },
  },
  created() {
    this.setScale()
  },
  mounted() {
    window.addEventListener('resize', this.setScale)
  },
  methods: {
    setScale() {
      let scaleY = document.body.clientHeight / 1080
      this.visualScale = scaleY
    },
  },
}
</script>

<style lang="less">
html,
body {
  overflow-y: hidden;
  // overflow-x: hidden;
}

#app {
  width: 3840px !important; // 960
  height: 1080px !important; // 270
  transform-origin: left top;
}
</style>
