<script setup lang="ts">
import { useUserInfo } from '@/stores/userInfo';

const userInfoStore = useUserInfo()
</script>

<template>
  <div>
    <v-card
      class="align-centerfill-height mx-auto"
      max-width="900"
      rounded="lg"
      color="#72befc"
    >
      <v-container class="d-flex">
        <v-avatar image="@/assets/logo.png" rounded="0" size="100" class="border-lg"></v-avatar>
        <div class="ml-10 mt-5 text-h5 text-white"><p class="border-b-lg">romurs</p></div>
        <v-spacer></v-spacer>
        <v-btn variant="plain" color="white" size="x-small" rounded="lg" :ripple="false">Редактирвоать</v-btn>
        
      </v-container>
      <v-container>
        <div class="d-flex justify-md-space-between flex-wrap text-body-2 text-white">
          <div>
            <div class="userInfo"><b>Количество игр:</b>{{ userInfoStore.numberGame }}</div>
            <div class="userInfo"><b>Быстрая игра:</b>{{ userInfoStore.fastestGame }}</div>
            <div class="userInfo"><b>Среднее время:</b>{{ userInfoStore.averageTime }}</div>
          </div>
          <div>
            <div class="userInfo"><b>Дата регестрации:</b>{{ userInfoStore.dateRegistr }}</div>
            <div class="userInfo"><b>Последняя игра:</b>{{userInfoStore.lastPlay}}</div>
          </div>
          <div>
            <div class="userInfo"><b>Количество очков:</b>{{ userInfoStore.numberOfPoint }}</div>
            <div class="userInfo"><b>Точность:</b>{{ userInfoStore.accuracy }}%</div>
          </div>
        </div>
      </v-container>
    </v-card>
  </div>
</template>

<style scoped lang="scss">
.userInfo b{
  color: #e7e5e5;
  margin-right: 5px;
  letter-spacing: 1px;
}
</style>