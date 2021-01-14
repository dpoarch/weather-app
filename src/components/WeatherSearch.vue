<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active"></li>
        <li class="nav-item"></li>
        <li class="nav-item"></li>
      </ul>
      <form class="form-inline my-2 my-lg-0" _lpchecked="1">
        <input v-model="zip" class="form-control mr-sm-2" type="text" placeholder="Zip Code" aria-label="Zip Code" />
        <button @click="fetchWeather" class="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "WeatherSearch",

    props: {
      zipcode: {
        type: [Number, null],
        required: false,
        default: () => null
      }
    },

    data() {
      return {
        zip: ""
      }
    },

    watch: {
      zipcode(value) {
        this.zip = value
        this.fetchWeather()
      }
    },

    methods: {
      fetchWeather() {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.zip},us&appid=655dfc390726be35679ee1f171b45301`).then((response) => {
          this.$emit("change", response.data, this.zip)
          this.zip = ""
        })
      }
    }
  }
</script>

<style lang="css" scoped></style>
