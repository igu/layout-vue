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
              :readonly="mode === 'remove'"
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
              :readonly="mode === 'remove'"
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
              :readonly="mode === 'remove'"
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
              :readonly="mode === 'remove'"
              v-model="user.confirmaSenha"
              required
              placeholder="Confirme a senha"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-form-checkbox id="admin-usuario" v-model="user.admin" class="mt-2 mb-3">Admin</b-form-checkbox>
      <b-button variant="primary" v-if="mode === 'save'" @click="save">Adicionar</b-button>
      <b-button variant="primary" v-if="mode === 'edit'" @click="save">Atualizar</b-button>
      <b-button variant="danger" v-if="mode === 'remove'" @click="excluir">Excluir</b-button>
      <b-button class="ml-2" @click="cancelar">Cancelar</b-button>
    </b-form>
    <hr />
    <b-table hover striped :items="users" :fields="fields">
      <template slot="actions" slot-scope="data"> <!-- template interno para ações das fields --> 
        <b-button variant="warning" @click="carregarUsuario(data.item, 'edit')" class="mr-2">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" @click="carregarUsuario(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button> 
      </template>
    </b-table>
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
      (this.mode = "save"), (this.user = {});
      this.carregarUsuarios();
    },
    save() {
      console.log(this.user.name);
      if (this.user.nome === undefined) {
        this.$toasted.error("O nome não pode ser vazio", {
          theme: "outline",
          position: "top-right",
          duration: 2000
        });
      } else if (this.user.username === undefined) {
        this.$toasted.error("O username não pode ser vazio", {
          theme: "outline",
          position: "top-right",
          duration: 2000
        });
      } else if (this.user.senha === undefined) {
        this.$toasted.error("A senha não pode ser vazia", {
          theme: "outline",
          position: "top-right",
          duration: 2000
        });
      } else if (this.user.confirmaSenha === undefined) {
        this.$toasted.error("A confirmação de senha não pode ser vazia", {
          theme: "outline",
          position: "top-right",
          duration: 2000
        });
      } else if (this.user.confirmaSenha !== this.user.senha) {
        this.$toasted.error("As senhas não conferem", {
          theme: "outline",
          position: "top-right",
          duration: 2000
        });
      } else {
        const novoUsuario = {
          id: this.iden++,
          nome: this.user.nome,
          username: this.user.username,
          senha: this.user.senha,
          admin: this.user.admin ? "true" : "false",
          ultima_jornada: new Date().getTime()
        };
        this.users.push(novoUsuario)
        this.user = {}
        this.$toasted.success("Cadastrado com sucesso!", {
          theme: "outline",
          position: "top-right",
          duration: 2000
        })
      }
    },
    excluir() {
      const id = this.user.id;
      for (let userAtivo of this.users) { 
        if(userAtivo.id === id) {
          if (userAtivo.id > 4) {
            this.users.splice(userAtivo, 1)
            this.cancelar()
            this.mounted()
            this.$toasted.success("Excluido com sucesso!", {
              theme: "outline",
              position: "top-right",
              duration: 2000
            })
          } else {
            this.$toasted.error("Exclusao não autorizada!", {
              theme: "outline",
              position: "top-right",
              duration: 2000
            })
          }
          
        }
      }
    },
    carregarUsuario(user, mode = 'save') { /* modo padrão pra mode */
      this.mode = mode;
      this.user = { ...user } // pega todas as info dos usuario sem precisar colocar os atributos
    }
  },
  mounted() {
    this.carregarUsuarios();
  }
};
</script>

<style >
</style>