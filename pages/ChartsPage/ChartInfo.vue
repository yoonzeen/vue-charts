<template>
  <div class="wrapper">
    <div class="btnWrap nav"><nuxt-link to="/" class="btnMain">메인으로 가기</nuxt-link></div>
    <h2>{{ title }}</h2>
    <p v-html="desc"></p>
  </div>
</template>

<script>
export default {
  props: ['title', 'desc'],
}
</script>

<style>

</style>