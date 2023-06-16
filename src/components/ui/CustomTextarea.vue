<template>
  <div class="custom-textarea custom-ui-element">
    <label :for="`${id}_${idx}`">{{ label }} <span class="required" v-if="required">*</span></label>
    <textarea :id="`${id}_${idx}`" v-model="innerModel" @input="$emit('update:model', innerModel)" :disabled="disabled" :required="required"></textarea>
  </div>
</template>

<script>
export default {
  name: "CustomTextarea",
  props: {
    label: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
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
  data() {
    return {
      innerModel: this.model
    }
  }
}
</script>

<style scoped lang="scss">
.custom-textarea {
  textarea {
    resize: none;
    width: 100%;
    height: 80px;
    padding: 5px 8px;
  }
}
</style>