<template>
  <div class="container">
    <weather-search @change="locationUpdate" :zipcode="zipcode"></weather-search>

    <footer class="footer">
      <span v-if="Object.keys(favorites).length !== 0">
        <location-favorites :locations="favorites" @load="loadFavorite" @remove="removeFavorite"></location-favorites>
      </span>

      <span v-if="location !== null">
        <weather-card @favorite="addToFavorite" :location="location" :zipcode="zipcode"></weather-card>
      </span>
    </footer>
  </div>
</template>

<script>
import WeatherCard from './WeatherCard'
import WeatherSearch from './WeatherSearch'
import LocationFavorites from './LocationFavorites'

export default {
  name: 'Layout',
  components: {
    LocationFavorites,
    WeatherSearch,
    WeatherCard
  },
  data () {
    return {
      location: null,
      zipcode: null,
      favorites: {}
    }
  },
  methods: {
    locationUpdate(location, zipcode) {
      this.location = location
      this.zipcode = parseInt(zipcode)
    },
    addToFavorite(location, zipcode) {
      this.favorites[zipcode] = {...location}
      this.favorites = {...this.favorites}
    },
    loadFavorite(zip) {
      this.zipcode = parseInt(zip)
    },
    removeFavorite(zip) {
      delete this.favorites[zip]
      this.favorites = {...this.favorites}
    }
  }
}
</script>

<style lang="css" scoped>
</style>
