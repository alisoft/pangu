<template>
  <div class="title" :class="align">
    <h4>
      <slot />
    </h4>
  </div>
</template>

<style lang="scss" scoped>
@import './title-style.scss';
</style>

<script>
export default {
  props: {
    align: {
      type: String,
      default: 'left'
    }
  }
}
</script>
