<template>
  <div class="custom-button custom-ui-element">
    <button :id="`${id}_${idx}`" :disabled="disabled" @click="$emit('click')">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    text: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      required: true
    },
    idx: {
      type: Number,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
.custom-button {
  button {
    cursor: pointer;
    padding: 5px 16px;
  }
}
</style>