<script setup lang="ts">
import PlayBtn from './PlayBtn.vue';

</script>

<template>
  <div>
    <v-container>
      <v-card
        class="align-centerfill-height mx-auto"
        max-width="auto"
        rounded="lg"
      >
        <v-row>
          <v-col>
            <v-container>
              <v-img src="@/assets/logo.png" height="100"></v-img>
              <div class="text-center">
                <h1 class="text-h5 font-weight" >Добро пожаловать в</h1>
                <h1 class="text-h3 font-weight-bold">Судоку</h1>
                <v-container class="mt-10 mx-auto">
                  <PlayBtn/>
                </v-container>
              </div>
            </v-container> 
          </v-col>
          <v-col>
            <v-container>
              <v-img src="@/assets/gameExample.png" height="300"></v-img>
            </v-container>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
</style>