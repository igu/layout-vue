<template>
    <div class="content">
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
export default {
    name: 'Content'
}
</script>

<style>
    .content {
        grid-area: content;
        background-color: #F5F5F5;
        padding: 20px;
    }
</style>