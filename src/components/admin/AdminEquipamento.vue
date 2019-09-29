<template>
  <div class="equipamento-admin">
    <b-form>
      <input id="equipamento-id" type="hidden" v-model="eqp.id" />
      <b-row>
        <b-col md="8" sm="10">
          <b-form-group label="Nome" label-for="nome-equipamento">
            <b-form-input
              id="nome-equipamento"
              type="text"
              :readonly="mode === 'remove'"
              v-model="eqp.nome"
              required
              placeholder="Digite o nome do equipamento"
            />
          </b-form-group>
        </b-col>
        <b-col md="4" sm="2">
          <b-form-group label="Quantidade equipamento" label-for="qtd-equipamento">
            <b-form-input
              id="qtd-equipamento"
              type="number"
              :readonly="mode === 'remove'"
              v-model="eqp.qtd"
              required
              placeholder="Digite a quantidade do equipamento"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-button variant="primary" v-if="mode === 'save'" @click="save">Adicionar</b-button>
      <b-button variant="primary" v-if="mode === 'edit'" @click="att">Atualizar</b-button>
      <b-button variant="danger" v-if="mode === 'remove'" @click="excluir">Excluir</b-button>
      <b-button class="ml-2" @click="cancelar">Cancelar</b-button>
    </b-form>
    <hr />
    <b-table hover striped :items="eqps" :fields="fields">
      <template slot="actions" slot-scope="data">
        <!-- template interno para ações das fields -->
        <b-button variant="warning" @click="carregarEqp(data.item, 'edit')" class="mr-2">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" @click="carregarEqp(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "AdminEquipamento",
  data: function() {
    return {
      mode: "save",
      iden: 4,
      eqp: {},
      eqps: [
        {
          id: 1,
          nome: "Armas K8",
          qtd: 12
        },
        {
          id: 2,
          nome: "Mochilas LEE",
          qtd: 4
        },
        {
          id: 3,
          nome: "Carteiras VN",
          qtd: 30
        }
      ],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "nome", label: "Nome", sortable: true },
        { key: "qtd", label: "Quantidade", sortable: true },
        { key: "actions", label: "Ações" }
      ]
    };
  },
  methods: {
    cancelar() {
      this.mode = "save", 
      this.eqp = {};
    },
    att() {
     const novoEqp = {
          id: this.eqp.id,
          nome: this.eqp.nome,
          qtd: this.eqp.qtd
      };
      this.eqps.splice(this.eqp, 1, novoEqp)
      this.cancelar()
      this.$toasted.success("Atualizado com sucesso!", {
          theme: "outline",
          position: "top-right",
          duration: 2000
        });
    },
    save() {
      console.log(this.eqp.nome); /// ver se os dados estao vindo corretos
      if (this.eqp.nome === undefined) {
        this.$toasted.error("O nome não pode ser vazio", {
          theme: "outline",
          position: "top-right",
          duration: 2000
        });
      } else if (this.eqp.qtd === undefined) {
        this.$toasted.error("A quantidade não pode ser nula", {
          theme: "outline",
          position: "top-right",
          duration: 2000
        });
      } else {
        const novoEqp = {
          id: this.iden++,
          nome: this.eqp.nome,
          qtd: this.eqp.qtd
        };
        this.eqps.push(novoEqp);
        this.$toasted.success("Cadastrado com sucesso!", {
          theme: "outline",
          position: "top-right",
          duration: 2000
        });
        this.eqp = {};
      }
    },
    excluir() {
      this.eqps.splice(this.eqp, 1);
      this.cancelar();
      this.$toasted.success("Excluido com sucesso!", {
        theme: "outline",
        position: "top-right",
        duration: 2000
      });
    },
    carregarEqp(eqp, mode = "save") {
      /* modo padrão pra mode */
      this.mode = mode;
      this.eqp = { ...eqp }; // pega todas as info do equipamento sem precisar colocar os atributos
    }
  }
};
</script>

<style>
</style>