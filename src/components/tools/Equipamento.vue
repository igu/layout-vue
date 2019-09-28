<template>
  <div class="item">
    <div class="dados-eqp">
        <span class="nome-equipamento">{{ nome }}</span>
        <span class="qtd-equipamento">{{ qtd }}</span>
    </div>
    <div class="btn-final">
      <span>
        <i class="fa fa-pencil-square-o"></i>
      </span>
      <span>
        <i class="fa fa-times"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Equipamento",
  props: ["nome", "qtd"]
};
</script>

<style>

</style>