<template>
  <div class="custom-input custom-ui-element">
    <label :for="`${id}_${idx}`">{{ label }} <span class="required" v-if="required">*</span></label>
    <input
      autocomplete="off"
      v-model="innerModel"
      :id="`${id}_${idx}`"
      :type="inputType"
      :required="required"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="$emit('update:model', innerModel)"
    >
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    inputType: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
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
.custom-ui-element {
  display: flex;
  flex-direction: column;
}
</style>