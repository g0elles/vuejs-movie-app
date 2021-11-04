<template>
  <div class="home">
    <navbar />
    <div id="main-section">
      <sidebar />
      <movie-list />

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import MovieList from '../components/MovieList.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    MovieList
  }
}
</script>
