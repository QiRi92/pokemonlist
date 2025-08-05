import { defineStore } from 'pinia'
import axios from 'axios'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemons: [],
    loading: false,
    editedInfo: {}
  }),
  actions: {
    async fetchPokemons() {
      this.loading = true
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
        const results = res.data.results
        const detailed = await Promise.all(
          results.map(p => axios.get(p.url).then(r => r.data))
        )
        this.pokemons = detailed
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    editPokemonInfo(id, newInfo) {
      this.editedInfo[id] = newInfo
    }
  }
})
