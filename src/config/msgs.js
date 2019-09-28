import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 2500
})


Vue.toasted.register(
    'defaultSucess',
    'Operação realizada com sucesso',
    { type: 'success', icon: 'check' }
)

Vue.toasted.register(
    'defaultError',
    data => !data.msg ? 'Algo deu errado' : data.msg,
    { type: 'error', icon: 'times' }
)