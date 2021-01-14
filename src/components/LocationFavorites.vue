<template>
    <div>
     <ul class="list-group" style="">
        <a v-for="(location, zip) in locations" :key="zip" @click="loadFavorite(zip)" href="#" class="list-group-item list-group-item-action">
            <span>{{ location.name }}</span>
           <button @click="removeFavorite(zip)" type="button" class="btn btn-default" style="display: inline; float: right;">X</button>
        </a>
     </ul>
    </div>
</template>

<script>
export default {

  name: 'LocationFavorites',

  props: {
    locations: {
        type: Object,
        required: true
    }
  },

  data () {
    return {

    }
  },

  methods: {
    loadFavorite(zip) {
        this.$emit('load', zip)
    },
    removeFavorite(zip) {
        this.$emit('remove', zip)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
