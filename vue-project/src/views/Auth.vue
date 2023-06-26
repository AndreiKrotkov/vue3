<template>
    <v-row no-gutters class="d-flex justify-center">
        <v-col cols="3">
            <Header :title="title" icon="mdi-login" class="my-5" />

            <v-form v-model="valid">
              <div>
                <div class="form-input px-0">
                    <div class="form-input px-0">
                      <v-text-field
                        v-model="user.login"
                        :rules="emailRules"
                        label="E-mail"
                        required
                      ></v-text-field>
                    </div>
                </div>

                <div class="form-input px-0">
                  <v-text-field
                    v-model="user.password"
                    :rules="passwordRules"
                    label="Password"
                    required
                    password
                  ></v-text-field>
                </div>
              </div>
            </v-form>
            <div class="d-flex justify-end">
                <v-btn @click="fnSubmit" class="my-1 mx-1" :disabled="!valid">Отправить</v-btn>
            </div>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import router from '@/router/index'
    import Header from '@/components/common/Header.vue'
    import { useStore } from 'vuex'

    const title = ref('Login')
    const valid = ref(false)
    const isValidForm = ref(false)
    const user = ref({
        login: '',
        password: ''
    })

    const store = useStore()

    const passwordRules = ref([
        (value: any) => {
            if (value) return true
                return 'Password is requred.'
            },
        (value: any) => {
            if (value.length >= 4) return true
            return 'Password must contain at least 4 characters'
        }
    ])
    const emailRules = ref([
        (value: any) => {
            if (value) return true
                return 'E-mail is requred.'
        },
        (value: any) => {
            if (/.+@.+\..+/.test(value)) return true
                return 'E-mail must be valid.'
        }
    ])

    const fnSubmit = () => {
        if (valid.value) {
            localStorage.setItem('user', JSON.stringify(user.value))
            store.commit('setUser', JSON.stringify(user.value))
            isValidForm.value = true
            router.push('/')
        }
    }
</script>

<style scoped lang="scss">

</style>