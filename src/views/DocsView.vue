<template>
  <div class="docs">
    <div class="docs__schema" v-for="schema in docsData" :key="schema.id">
      <div class="schema__title">{{ schema.title }}</div>
      <textarea class="schema__props" disabled :value="JSON.stringify(schema.props) | pretty"></textarea>
      <div class="schema__view"></div>
    </div>
  </div>
</template>
<script>
import docsData from '@/assets/docsData.json'

export default {
  components: {},
  created() {
    this.docsData = docsData.schemas
  },
  data() {
    return {
      docsData: []
    }
  },
}
</script>

<style scoped lang="scss">
.docs {
  width: 600px;
  margin: 0 auto;
  text-align: left;

  &__schema {
    margin-bottom: 20px;
  }

  .schema {

    &__title {
      margin-bottom: 5px;
    }

    &__props {
      padding: 20px;
      resize: none;
      height: 250px;
      min-height: fit-content;
      width: 100%;
    }
  }
}
</style>