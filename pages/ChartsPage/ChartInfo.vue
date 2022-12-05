<template>
  <div class="wrapper">
    <div class="btnWrap nav"><nuxt-link to="/" class="btnMain">메인으로 가기</nuxt-link></div>
    <h2>{{ info.title }}</h2>
    <p v-html="info.desc.replaceAll(/\n/g, '<br/>')"></p>
  </div>
</template>
<script>
export default {
  props: ['info'],
}
</script>

<style>

</style>