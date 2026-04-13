<template>
  <div class="au_v_html" v-html="html"></div>
</template>

<script setup lang="ts" name="TVHtml">
defineProps({
  html: {
    type: String,
    default: ""
  }
})
</script>
