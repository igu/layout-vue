<template>
  <div>
    <TituloPagina
      icon="fa fa-home"
      primario="Dashboard"
      secundario="Navegue até sua opção desejada"
    />
    <div class="op">
      <b-card-group deck>
        <b-card
          header="Consulte os equipamentos"
          header-tag="header"
          title="Gerencia de equipamentos"
        >
          
          <b-button href="/admin" variant="primary">Equipamentos</b-button>
        </b-card>

        <b-card
          header="Consulte os seguranças"
          header-tag="header"
          title="Gerencia de seguranças"
        >
          
          <b-button href="/admin" variant="primary">Seguranças</b-button>
        </b-card>

        <b-card
          header="Consulte as escalas"
          header-tag="header"
          title="Gerencia de escalas"
        >
          
          <b-button href="/admin" variant="primary">Escalas</b-button>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import TituloPagina from "../template/TituloPagina";

export default {
  name: "Home",
  components: { TituloPagina }
};
</script>

<style>
</style>