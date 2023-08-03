import {Pinia} from 'pinia'

export default defineNuxtPlugin(({$pinia}) => {
  $pinia.use(context => {
    context.options.test = 'test123'
  })
})
