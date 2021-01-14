<template>
  <div>
    <p contenteditable="true" spellcheckker="false">
      <div class="card" style="margin-top: 30px;">
        <div class="card" style="margin-top: 0px;">
          <div class="card-body" style="margin-top: 0px;">
            <h4 class="card-title">
              <b>{{ location.name }}</b>
            </h4>

            <div class="row" style="">
              <div class="col-sm-4">
                <h1>{{ getFahrenheit(location.main.feels_like) }}°</h1>
                <h6 style="">{{ location.weather[0].main }}</h6>
              </div>

              <div class="col-sm-4 col-5">
              </div>

              <div class="col-sm-4">
                <h5 v-if="location.precipitation != undefined" style="">Precipitation {{ location.precipitation.value }}%</h5>
                <h5 style="">Humidity {{ location.main.humidity }}%</h5>
                <h5 style="">Wind {{ location.wind.speed }} mph</h5>
                <div class="row" style="">
                  <div class="col-sm-4"></div>
                  <div class="col-sm-4 col-5"></div>
                  <div class="col-sm-4"></div>
                </div>
              </div>
            </div>

            <a @click="addToFavorite" href="#" class="btn btn-primary">Add to favorites</a>
          </div>
        </div>
      </div> © Firstly NodeJS 2021
    </p>
  </div>
</template>

<script>
export default {
  name: 'WeatherCard',
  props: {
    location: {
      type: Object,
      required: true
    },
    zipcode: {
      type: Number,
      required: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    getFahrenheit(v) {
      return Math.round((9/5) * (parseFloat(v)-273.15) + 32)
    },
    addToFavorite() {
      this.$emit('favorite', this.location, this.zipcode)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
