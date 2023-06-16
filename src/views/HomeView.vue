<template>
  <div class="home">
    <schema-converter :idx="null"/>
  </div>
</template>

<script>
import SchemaConverter from "@/components/SchemaConverter";
import { mapMutations } from "vuex";

export default {
  name: 'HomeView',
  components: {
    SchemaConverter
  },
  created() {
    this.clearData()
  },
  methods: {
    ...mapMutations({
      clearData: "schema/clearData"
    })
  }
}
</script>
