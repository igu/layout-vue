<template>
  <div class="admin-seguranca">
    <b-table hover striped :items="users" :fields="fields">
      <template slot="actions" slot-scope="data">
        <!-- template interno para ações das fields -->
        <b-button variant="warning" @click="selectUser(data.item, 'swap')" class="mr-2">
          <i class="fa fa-retweet"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "AdminEscalas",
  data: function() {
    return {
      mode: "default",
      iden: 4,
      user: {},
      userSwap: [],
      users: [
        {
          id: 1,
          nome_completo: "Matheus Leão",
          ultima_jornada: (new Date(2019, 8, 25, 13, 55, 22) + '').substring(0, 24),
          proxima_jornada: (new Date(2019, 8, 29, 13, 55, 22) + '').substring(0, 24)
        },
        {
          id: 2,
          nome_completo: "Thiago Leão",
          ultima_jornada: (new Date(2019, 8, 26, 22, 13, 35) + '').substring(0, 24),
          proxima_jornada: (new Date(2019, 8, 30, 22, 18, 13) + '').substring(0, 24)
        },
        {
          id: 3,
          nome_completo: "Moises Leão",
          ultima_jornada: (new Date(2019, 8, 27, 21, 52, 18) + '').substring(0, 24),
          proxima_jornada: (new Date(2019, 9, 1, 21, 55, 32) + '').substring(0, 24)
        }
      ],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "nome_completo", label: "Nome Usuário", sortable: true },
        { key: "ultima_jornada", label: "Ultima jornada", sortable: true },
        { key: "proxima_jornada", label: "Proxima jornada", sortable: true },
        { key: "actions", label: "Ações" }
      ]
    };
  },
  methods: {
    selectUser(user, mode = "default") {
      this.userSwap.push(user)
      console.log(this.userSwap)
      if(this.userSwap.length === 2) {
          let proxima_jornada_swap = this.userSwap[0].proxima_jornada
          console.log(`Proxima jornada 1: ${proxima_jornada_swap}`)
          console.log(`Proxima jornada 2: ${this.userSwap[1].proxima_jornada}`)
          this.userSwap[0].proxima_jornada = this.userSwap[1].proxima_jornada
          this.userSwap[1].proxima_jornada = proxima_jornada_swap 
          console.log(`Swap proxima jornada 1: ${this.userSwap[0].proxima_jornada}`)
          console.log(`Swap proxima jornada 2: ${this.userSwap[1].proxima_jornada}`)
          this.$toasted.success("Horários trocados com sucesso, verifique o console", {
            theme: "outline",
            position: "top-right",
            duration: 2000
        })
        this.userSwap.pop()
        this.userSwap.pop()
      }
    }
  }
};
</script>

<style>
</style>