<template>
  <div class="demo">
    <div class="demo__item" v-for="(item, idx) in demoItems" :key="item.id">
      <schema-converter :init-schema="JSON.stringify(item.schema) | pretty" :idx="idx"/>
    </div>
  </div>
</template>

<script>
import SchemaConverter from "@/components/SchemaConverter";
import demoData from '@/assets/demoData.json'
import { mapMutations } from "vuex";

export default {
  components: { SchemaConverter },
  created() {
    this.clearData()
    this.demoItems = demoData.items
  },
  data() {
    return {
      demoItems: []
    }
  },
  methods: {
    ...mapMutations({
      clearData: "schema/clearData"
    })
  }
}
</script>

<style scoped lang="scss">
.demo {

  &__item {
    margin-bottom: 15px;
  }
}
</style>