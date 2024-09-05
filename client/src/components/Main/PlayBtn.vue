<script setup lang="ts">
import { ref } from 'vue';
import { useUserIsAuth } from '@/stores/userIsAuth';
import { useRouter } from 'vue-router';

const userAuthStore = useUserIsAuth()
const router = useRouter()

const dialog = ref(false)

function startBtnClickHandler(){
  if(userAuthStore.userIsAuth){
    router.push('/game')
  }
  else{
    dialog.value = true
  }
}

function authBtnClickHandler(){
  dialog.value = false
  router.push('/game')
}
function skipBtnClickHandler(){
  dialog.value = false
  router.push('/auth')
}
</script>

<template>
  <v-btn 
    :onclick="startBtnClickHandler"
    rounded
    color="success"
    size="x-large"
  >Играть</v-btn>
  
  <div class="text-center pa-4">
    <v-dialog
      v-if="dialog"
      v-model="dialog"
      max-width="400"
    >

      <v-card
        rounded="lg"
        prepend-icon="mdi-alert-box"
        title="Продолжить без аккаунта?"
        text="Вы собираетесь начать игру на сайте без аккаунта. Вы хотите пропусттиь?"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn @click="skipBtnClickHandler"  color="#72befc" variant="flat" text="white">
            Авторизоваться
          </v-btn>

          <v-btn @click="authBtnClickHandler" variant="tonal">
            Пропустить
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped lang="scss">
</style>