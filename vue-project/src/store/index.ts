import { createStore } from 'vuex'

const state = {
  basket: [],
  loading: false,
  user: null,
  productList: []
}

const mutations = {
  setProductList(state: any, value: any) {
    state.productList = value
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
  },
  setUser(state: any, value: any) {
    state.user = value
  },
  setLoading(state: any, value: boolean) {
    state.loading = value
  }
}

const actions = {
  // @ts-ignore
  increment: ({ commit }) => commit('increment'),
}

const getters = {
  basket: (state: any) => state.basket,
  prodictList: (state: any) => state.productList
}

export default createStore({
  state,
  getters,
  actions,
  mutations
})