<template>
    <div class="admin-pages">
        <TituloPagina icon="fa fa-cogs" 
            primario="Configure sua conta"
            secundario="Atualize seus dados cadastrais" />
    </div>
</template>

<script>
import TituloPagina from '../template/TituloPagina'

export default {
    name: 'AdminPaginas',
    components: { TituloPagina }
}
</script>

<style>

</style>