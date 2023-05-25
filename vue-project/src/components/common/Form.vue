<template>
    <div class="">
        <template v-if="!isValidForm">
            <v-form v-model="valid">
              <div class="d-flex justify-space-between">
                <div class="form-input px-0 mr-3">
                  <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    :counter="10"
                    label="First name"
                    required
                  ></v-text-field>
                </div>

                <div class="form-input px-0 mr-3">
                  <v-text-field
                    v-model="lastname"
                    :rules="nameRules"
                    :counter="10"
                    label="Last name"
                    required
                  ></v-text-field>
                </div>

                <div class="form-input px-0">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                </div>
              </div>
            </v-form>
            <div class="d-flex justify-end">
                <v-btn @click="fnSubmit" class="my-1 mx-1">Отправить</v-btn>
            </div>
        </template>
        <template v-else>
            <span>Форма отправлена!</span>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const valid = ref(false)
const isValidForm = ref(false)
const firstname = ref('')
const lastname = ref('')
const email = ref('')

const nameRules = ref([
    (value: any) => {
        if (value) return true
            return 'Name is requred.'
        },
    (value: any) => {
        if (value?.length <= 10) return true
        return 'Name must be less than 10 characters.'
    },
])
const emailRules = ref([
    (value: any) => {
        if (value) return true
            return 'E-mail is requred.'
        },
    (value: any) => {
        if (/.+@.+\..+/.test(value)) return true
            return 'E-mail must be valid.'
        },
    ])

const fnSubmit = () => {
    if (valid.value) {
        isValidForm.value = true
    }
}
</script>

<style scoped lang="scss">
    .form-input {
        width: 30%;
    }
</style>