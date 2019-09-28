<template>
  <div class="admin-seguranca">
    <b-form>
      <input id="usuario-id" type="hidden" v-model="user.id" />
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Nome Completo: " label-for="nome-usuario">
            <b-form-input
              id="nome-usuario"
              type="text"
              v-model="user.nome"
              required
              placeholder="Digite o nome do usuário"
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="Nome do usuário: " label-for="username">
            <b-form-input
              id="username"
              type="text"
              v-model="user.username"
              required
              placeholder="Digite o username do usuário"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Senha:" label-for="senha-usuario">
            <b-form-input
              id="senha-usuario"
              type="password"
              v-model="user.senha"
              required
              placeholder="Digite a senha"
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="Confirmar senha: " label-for="confirma-senha-usuario">
            <b-form-input
              id="confirma-senha-usuario"
              type="password"
              v-model="user.confirmaSenha"
              required
              placeholder="Confirme a senha"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-form-checkbox id="admin-usuario" v-model="user.admin" class="mt-2 mb-3">
          Admin
      </b-form-checkbox>
      <b-button variant="primary" v-if="mode === 'save'" @click="save">Adicionar</b-button>
      <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
      <b-button class="ml-2" @click="cancelar">Cancelar</b-button>
    </b-form>
    <hr>
    <b-table hover striped :items="users" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  name: "AdminSeguranca",
  data: function() {
    return {
      mode: "save",
      iden: 5,
      user: {},
      users: [],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "nome", label: "Nome", sortable: true },
        { key: "username", label: "Nome usuário", sortable: true },
        { key: "senha", label: "Senha" },
        { key: "admin", label: "Administrador", sortable: true },
        { key: "ultima_jornada", label: "Ultima jornada", sortable: true },
        { key: "actions", label: "Ações" }
      ]
    };
  },
  methods: {
    carregarUsuarios() {
      const usuarios = [
        {
          id: 1,
          nome: "Matheus Leão",
          username: "matheus",
          senha: "1234",
          admin: true,
          ultima_jornada: new Date(2019, 8, 25).getTime()
        },
        {
          id: 2,
          nome: "Silva",
          username: "silvas2",
          senha: "7526",
          admin: false,
          ultima_jornada: new Date(2019, 8, 27).getTime()
        },
        {
          id: 3,
          nome: "Keylly",
          username: "keyllyifcn",
          senha: "1000",
          admin: true,
          ultima_jornada: new Date(2019, 8, 26).getTime()
        },
        {
          id: 4,
          nome: "Jonathan",
          username: "jojo",
          senha: "9252",
          admin: false,
          ultima_jornada: new Date(2019, 8, 26).getTime()
        }
      ];
      this.users = usuarios;
    },
    cancelar() {
        this.mode = 'save',
        this.user = {}
        this.carregarUsuarios()
    }, 
    save() {
        const novoUsuario = {
            id: this.iden++,
            nome: this.user.nome,
            username: this.user.username,
            senha: this.user.senha,
            admin: this.user.admin ? 'true' : 'false',
            ultima_jornada: new Date().getTime()
        }
        this.users.push(novoUsuario)
        this.$toasted.register()
        this.user = {}
    },
    remove() {
        const id = this.user.id
        console.log(id)
        this.$toasted.register()
    }
  },
  mounted() {
    this.carregarUsuarios()
  }
};
</script>

<style >
</style>