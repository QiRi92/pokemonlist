<template>
  <div class="header">
    <h1>Pokemon List</h1>
  </div>
  <div class="container mt-4">
    <input class="form-control mb-3" v-model="search" placeholder="Search Pokémon..." />
    <Loader v-if="store.loading" />
    <div class="row">
      <PokemonCard
        v-for="poke in filteredPokemons"
        :key="poke.id"
        :pokemon="poke"
        @click="goToDetail(poke.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { usePokemonStore } from '@/store/pokemonStore'
import PokemonCard from '@/components/PokemonCard.vue'
import Loader from '@/components/Loader.vue'
import { useRouter } from 'vue-router'

const store = usePokemonStore()
const router = useRouter()
const search = ref('')

onMounted(() => store.fetchPokemons())

const filteredPokemons = computed(() =>
  store.pokemons.filter(p =>
    p.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

const goToDetail = (id) => router.push(`/detail/${id}`)
</script>
