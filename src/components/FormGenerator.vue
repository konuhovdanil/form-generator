<template>
  <div class="form-generator">
    <component
      v-bind="item.props"
      v-for="item in components[idx]"
      :id="item.id"
      :idx="+idx"
      :key="item.id"
      :is="item.component"
      :model="model[idx][item.props.model]"
      @update:model="value => model[idx][item.props.model] = value"
      @click="() => onClickHandler(item.id)"
    />
  </div>
</template>

<script>
import CustomButton from "@/components/ui/CustomButton";
import CustomTextarea from "@/components/ui/CustomTextarea";
import CustomCheckbox from "@/components/ui/CustomCheckbox";
import CustomSelect from "@/components/ui/CustomSelect";
import CustomInput from "@/components/ui/CustomInput";
import { mapState } from "vuex";

export default {
  name: "FormGenerator",
  components: { CustomInput, CustomSelect, CustomCheckbox, CustomTextarea, CustomButton },
  props: {
    idx: Number
  },
  computed: {
    ...mapState('schema', ['model', 'components'])
  },
  methods: {
    onClickHandler(id) {
      if (id.includes('button')) {
        const { on } = this.components[this.idx].find(item => item.id === id).props

        return new Function(on.arguments, on.body)()
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>