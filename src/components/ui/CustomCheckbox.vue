<template>
  <div class="custom-checkbox custom-ui-element">
    <input :id="`${id}_${idx}`" :disabled="disabled" type="checkbox" v-model="innerModel" @input="$emit('update:model', !innerModel)">
    <label :for="`${id}_${idx}`" :class="{ 'disabled': disabled }">{{ label }} <span class="required" v-if="required">*</span></label>
  </div>
</template>

<script>
export default {
  name: "CustomCheckbox",
  props: {
    label: {
      type: String,
      required: true
    },
    model: {
      type: Boolean,
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
.custom-checkbox {
  flex-direction: row;
  align-items: center;

  input {
    margin-right: 10px;
  }

  label {
    margin: 0;

    &.disabled {
      opacity: .7;
    }
  }
}
</style>