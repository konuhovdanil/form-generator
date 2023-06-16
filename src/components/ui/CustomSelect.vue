<template>
  <div class="custom-select custom-ui-element">
    <label :for="`${id}_${idx}`">{{ label }}</label>
    <select
      v-model="innerModel"
      :id="`${id}_${idx}`"
      :required="required"
      :multiple="multiSelect"
      :disabled="disabled"
      @change="$emit('update:model', innerModel)"
    >
      <option v-for="value in values" :value="value" :key="value">{{ value }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    label: {
      type: String,
      required: true
    },
    model: {
      type: [String, Array],
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
    multiSelect: {
      type: Boolean,
      default: false
    },
    values: {
      type: Array,
      required: true
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