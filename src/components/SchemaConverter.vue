<template>
  <div class="schema-converter">
    <textarea v-if="!isDemoItem" class="schema-converter__fields column" :class="{ 'error': hasError }" v-model="schema"></textarea>
    <textarea v-else class="schema-converter__fields column" :class="{ 'error': hasError }" :value="initSchema" disabled></textarea>
    <div class="schema-converter__form column">
      <form-generator v-if="schema.length > 0" :key="key" :idx="idx === null ? 0 : idx"/>
    </div>
  </div>
</template>

<script>
import FormGenerator from "@/components/FormGenerator";
import { mapActions, mapMutations } from "vuex";
export default {
  name: "SchemaConverter",
  components: { FormGenerator },
  props: {
    initSchema: {
      type: String,
      default: ''
    },
    idx: [Number, null]
  },
  created() {
    if (this.isDemoItem) {
      this.schema = this.initSchema
    }
  },
  data() {
    return {
      schema: '',
      key: 0,
      hasError: false
    }
  },
  watch: {
    schema: {
      handler(newVal) {
        try {
          const schema = JSON.parse(this.schema)
          this.hasError = false

          if (this.idx === null) this.clearData()

          this.setData(schema.fields)
        } catch (e) {
          this.hasError = true
        }

        if (newVal.length === 0) {
          this.hasError = false
        }

        this.key++
      }
    }
  },
  computed: {
    isDemoItem() {
      return this.initSchema.length > 0
    }
  },
  methods: {
    ...mapActions({
      setData: 'schema/setData'
    }),
    ...mapMutations({
      clearData: 'schema/clearData'
    })
  }
}
</script>

<style scoped lang="scss">
.schema-converter {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .column {
    width: 400px;
    height: 600px;
    border: 1px solid black;
    padding: 20px;
  }

  &__fields {
    resize: none;

    &.error {
      border: 1px solid red;
    }
  }

  &__form {
    overflow: hidden;
    overflow-y: scroll;
  }
}
</style>