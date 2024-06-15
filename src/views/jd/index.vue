<script setup lang='ts'>
import { ref } from 'vue'
const source = ref({
  src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
  type: 'video/mp4'
})
const options = ref({
  controls: true
})
const play = (el) => {
  console.log('play', el)
}
const pause = (el) => {
  console.log('pause', el)
}
const playend = (el) => {
  console.log('playend', el)
}
</script>

<template>
    <div class="m-4">
        <nut-cell>
            <nut-video :source="source" :options="options" @play="play" @pause="pause" @playend="playend" />
          </nut-cell>
    </div>
</template>

<style scoped>

</style>