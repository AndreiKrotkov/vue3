<template>
  <v-dialog
    v-model="props.dialog"
    persistent
    width="560"
  >
    <v-card v-if="!isValidForm">
      <v-card-title>
        <span class="text-h5">Сообщить куда следует</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row class="d-flex flex-column">
            <v-form v-model="valid">
              <v-col cols="12" class="d-flex flex-column justify-space-between">
                <div class="px-0 mr-3">
                  <v-select
                    v-model="departament"
                    label="Ведомство"
                    :items="['Следственный коммитет РФ', 'Генеральная прокуратура', 'МВД РФ', 'ФСБ РФ', 'ГОСТдума', 'Сечин']"
                    variant="outlined"
                    required
                  />
                </div>

                <div class="">
                  <v-textarea label="Довожу до вашего сведения, что" variant="outlined"></v-textarea>
                </div>

                <div class="form-input px-0 d-flex justify-space-between align-center">
                  <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    label="ФИО*"
                    variant="outlined"
                    required
                    class="mr-2"
                  />
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail*"
                    variant="outlined"
                    required
                    class="mr-2"
                  />
                  <v-text-field
                    v-model="phone"
                    label="Телефон"
                    variant="outlined"
                    required
                  />
                </div>
              </v-col>
            </v-form>
            <div class="d-flex justify-end">
              <v-btn @click="fnSubmit" class="my-1 mx-1" :disabled="!valid">Донести</v-btn>
              <v-btn @click="fnCloseDialog" class="my-1 mx-1">Помиловать</v-btn>
            </div>
          </v-row>
        </v-container>

      </v-card-text>
    </v-card>

    <v-card v-else class="pa-10">
      <span class="text-center">ДОНЕСЕНО</span>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue'

  const props = defineProps(['dialog'])
  const emit = defineEmits(['closeDialog'])

  const valid = ref(false)
  const isValidForm = ref(false)
  const departament = ref('Следственный коммитет РФ')
  const firstname = ref('')
  const email= ref('')
  const phone= ref('')
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
    }
  ])

  const fnSubmit = () => {
    if (valid.value) {
      isValidForm.value = true

      setTimeout(() => {
        fnCloseDialog()
      }, 1000)
    }
  }

  const fnCloseDialog = () => {
    emit('closeDialog', false)
  }
</script>

<style scoped lang="scss">

</style>