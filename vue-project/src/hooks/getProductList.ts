import { computed, onMounted, ref } from 'vue'
import $http from "@/api/http";
import { Url } from "@/enum/enum";
import router from "@/router";
import { useStore } from "vuex";

export const getList = (props: string) => {
    const loading = ref(false)
    const store = useStore()

    const testQueryValue = computed(() => {
        return router.currentRoute.value.query.test
    })

    const filteredList = computed(() => {
        if (!props.search) {
            return store.getters.prodictList;
        }

        return store.getters.prodictList.filter((product: any) => product.title.indexOf(props.search) > -1)
    })

    const fnGetProductList = () => {
        loading.value = true
        $http.get(Url.productList).then((resp: any) => {
            store.commit('setProductList', resp.data)
            loading.value = false
        }).catch((err: any) => err)
    }

    const fnGetProductId = () => {
        $http.get(Url.productList +'/'+ testQueryValue.value).then(() => {}).catch((err: any) => err)
    }

    onMounted(() => {
        fnGetProductList()
        fnGetProductId()
    })

    return {
        filteredList,
        loading
    }
}