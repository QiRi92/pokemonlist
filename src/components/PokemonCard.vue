<template>
  <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
    <div class="card h-100 shadow cursor-pointer" @click="$emit('click')" style="background-color: #ffdab9;">
      <img :src="pokemon.sprites.front_default" class="card-img-top" alt="Pokemon Image">
      <div class="card-body">
        <h5 class="card-title text-capitalize">{{ pokemon.name }}</h5>
        <p class="card-text">Height: {{ pokemon.height }}, Weight: {{ pokemon.weight }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['pokemon'])
</script>
