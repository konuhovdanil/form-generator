import { capitalize } from "@/helpers/strings";

export default {
  namespaced: true,
  state: () => ({
    innerSchema: [],
    model: [],
    components: []
  }),
  mutations: {
    setInnerSchema(state, schema) {
      state.innerSchema.push(schema);
    },
    setModel(state, schema) {
      state.model.push(Object.fromEntries(schema.filter(field => field.type !== 'button').map(field => {
        let value = ''

        if (field.type === 'checkbox') {
          value = false
        }

        if (field.type === 'select' && field.props.multiSelect) {
          value = field.props.multiSelect ? [] : ''
        }

        return [field.props.model, value]
      })))
    },
    setComponents(state, schema) {
      state.components.push(schema.map((field, idx) => ({
        id: `${ field.type }_${ idx }`,
        component: `Custom${ capitalize(field.type) }`,
        props: field.props
      })))
    },
    clearData(state) {
      state.innerSchema = []
      state.model = []
      state.components = []
    }
  },
  actions: {
    setData({commit}, payload) {
      commit('setInnerSchema', payload)
      commit('setModel', payload)
      commit('setComponents', payload)
    }
  }
}