<template>
  <div class="admin-pages">
    <TituloPagina
      icon="fa fa-cogs"
      primario="Administre o sistema"
      secundario="Crie, edite e exclua a hora que quiser"
    />
    <div class="abas-admin">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Equipamentos" active>
            <AdminEquipamento />
          </b-tab>
          <b-tab title="Seguranças">
            <AdminSeguranca />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import TituloPagina from "../template/TituloPagina"
import AdminEquipamento from './AdminEquipamento'
import AdminSeguranca from './AdminSeguranca'

export default {
  name: "AdminPaginas",
  components: { TituloPagina, AdminEquipamento, AdminSeguranca }
};
</script>

<style>
</style>