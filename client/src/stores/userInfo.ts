import { defineStore } from "pinia"
import { ref } from "vue"

export const useUserInfo = defineStore('userInfo', () => {
  const numberGame = ref(0)
  const lastPlay = ref('01.01.20024')
  const dateRegistr = ref('01.01.2024')
  const fastestGame = ref('1:00')
  const averageTime = ref('0:59')
  const accuracy = ref(98)
  const numberOfPoint = ref(12345)

  return{numberGame, lastPlay, dateRegistr, fastestGame, averageTime, accuracy, numberOfPoint}
})