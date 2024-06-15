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
    <h1>Beetles</h1>
    <h6>Icon使用:</h6>
    <div class="m-2">
      <h4>Icon使用:</h4>
      <Icon-ep-aim style="font-size: 2em;color: red;"/> 
      <Icon-ri-24-hours-fill style="font-size: 2em; color: red"/>
      <Icon-ri-4k-line style="font-size: 2em; color: red"/>
      <van-icon name="chat-o" size="40" />
  
    </div>
</template>

<style scoped>

</style>