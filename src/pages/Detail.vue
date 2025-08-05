<template>
  <div class="container mt-4" v-if="pokemon">
    <h1 class="text-capitalize">{{ pokemon.name }}</h1>
    <img :src="pokemon.sprites.front_default" class="mb-3" />
    <p><strong>Base Experience:</strong> {{ pokemon.base_experience }}</p>
    <p><strong>Types:</strong> {{ pokemon.types.map(t => t.type.name).join(', ') }}</p>
    <p><strong>Abilities:</strong> {{ pokemon.abilities.map(a => a.ability.name).join(', ') }}</p>

    <form @submit.prevent="saveEdit">
      <div class="mb-3">
        <label for="info" class="form-label"><strong>Custom Info:</strong></label>
        <textarea v-model="customInfo" class="form-control" rows="3" />
      </div>
      <button class="btn btn-outline-dark">Save</button>
    </form>

    <div v-if="store.editedInfo[pokemon.id]" class="alert alert-info mt-3">
      <strong>Custom Info:</strong> {{ store.editedInfo[pokemon.id] }}
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, ref, onMounted } from 'vue'
import { usePokemonStore } from '@/store/pokemonStore'

const route = useRoute()
const store = usePokemonStore()
const pokemon = computed(() => store.pokemons.find(p => p.id == route.params.id))
const customInfo = ref('')

onMounted(() => {
  if (pokemon.value && store.editedInfo[pokemon.value.id]) {
    customInfo.value = store.editedInfo[pokemon.value.id]
  }
})

const saveEdit = () => {
  store.editPokemonInfo(pokemon.value.id, customInfo.value)
}
</script>
