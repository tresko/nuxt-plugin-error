import {getActivePinia} from 'pinia'

const useSecret = () => {
  console.log(getActivePinia())
}

export const useTodoStore = defineStore('todo', () => {
  const count = ref(0)
  const secret = useSecret()

  const addCount = () => {
    count.value++
    console.log('this hahha', useTodoStore().secret)
  }

  return {
    count,
    addCount,
  }
})
