import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const userInfo = ref({
        name: '',
        age: 0,
        email: ''
    })
    return {
        userInfo
    }
})
