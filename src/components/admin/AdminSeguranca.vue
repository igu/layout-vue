<template>
    <div class="admin-seguranca">
        <b-table hover striped :items="users" :fields="fields"></b-table>
    </div>
</template>

<script>


export default {
    name: 'AdminSeguranca',
    data: function () {
        return {
            mode: 'save',
            user: {},
            users: [],
            fields: [
                { key: 'id', label: 'Código', sortable: true  },
                { key: 'nome', label: 'Nome', sortable: true  },
                { key: 'senha', label: 'Senha' },
                { key: 'admin', label: 'Administrador', sortable: true},
                { key: 'ultima_jornada', label: 'Ultima jornada', sortable: true },
                { key: 'actions', label: 'Ações' }
            ]
        } 
    },
    methods: {
        carregarUsuarios() {
            const usuarios = [
                {
                    id: 1,
                    nome: 'Matheus',
                    senha: '1234',
                    admin: true,
                    ultima_jornada: new Date(2019, 8, 25).getTime()
                },
                {
                    id: 2,
                    nome: 'Silva',
                    senha: '7526',
                    admin: false,
                    ultima_jornada: new Date(2019, 8, 27).getTime()
                },
                {
                    id: 3,
                    nome: 'Keylly',
                    senha: '1000',
                    admin: true,
                    ultima_jornada: new Date(2019, 8, 26).getTime()
                },
                {
                    id: 4,
                    nome: 'Jonathan',
                    senha: '9252',
                    admin: false,
                    ultima_jornada: new Date(2019, 8, 26).getTime()
                }
            ]
            this.users = usuarios
        }
    },
    mounted() {
        this.carregarUsuarios()
    }
}
</script>

<style >

</style>