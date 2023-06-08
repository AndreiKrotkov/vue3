import { createStore } from 'vuex'

const state = {
  basket: [],
  loading: false
}

const mutations = {
  setLoading(state: any, value: boolean) {
    state.loading = value
  },
  setPurchasedGoods(state: any, value: Object) {
    if (state.basket.includes(value)) {
        state.basket = state.basket.filter(
            (item: any) => item !== value
        )
    } else {
        state.basket.push(value)
    }
  },
  updatePurchasedGoods(state: any, value: any) {
    state.basket.forEach((item: any) => {
      if (item.id === value.id) {
        if (item.counter === 0) {
          state.basket = state.basket.filter(
              (item: any) => item !== value
          )
        } else {
          item = value
        }
      }
    })
  },
  clearBasket(state: any) {
    state.basket = []
  }
}

const actions = {
  // @ts-ignore
  increment: ({ commit }) => commit('increment'),
}

const getters = {
  basket: (state: any) => state.basket
}

export default createStore({
  state,
  getters,
  actions,
  mutations
})