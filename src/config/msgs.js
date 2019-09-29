import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 2500
})


/* ================================
    
|   ATT QND TIVER UTILIZANDO YII2 
|  Resolvi deixar a estrutura criada
    
=========================================
*/ 
Vue.toasted.register(
    'defaultSucess',
    'Operação realizada com sucesso',
    { type: 'success', icon: 'check' }
)

Vue.toasted.register(
    'defaultError',
    data => !data.msg ? 'Algo deu errado' : data.msg, // !data.msg msg n foi setada no data
    { type: 'error', icon: 'times' }
)