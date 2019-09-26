<template>
    <header class="header">
        <a class="toggle" @click="toggleMenu">
            <i class="fa fa-lg" :class="icon"></i>
        </a>
        <h1 class="title">{{ title }}</h1>
        <UserMenu v-if="!hideUserMenu" />
    </header>
</template>

<script>
import UserMenu from './UserMenu'
export default {
    name: 'Header',
    components: { UserMenu },
    props: {
        title: String,
        hideToggle: Boolean,
        hideUserMenu: Boolean
    },
    computed: {
        icon() {
            return this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-down"
        }
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style>
    .header {
        grid-area: header;
        background: linear-gradient(to right, #1e469a, #49a7c1);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title {
        font-size: 1.1rem;
        color: #F5F5F5;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }

    .title a {
        color: #F5F5F5;
        text-decoration: none;
    }
    header.header > a.toggle {
        width: 60px;
        height: 100%;
        color: #F5F5F5;
        justify-self: flex-start;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    header.header > a.toggle:hover {
        background-color: rgba(0, 0, 0, 0.2);
        color: #F5F5F5;
        cursor: pointer;
    }
</style>