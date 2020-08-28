<template>
  <div>
    <div>
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a href="#" class="navbar-brand">GitHub Finder</a>
        </div>
      </nav>
      <div class="container search-container">
        <div class="search card card-body">
          <h1>Search GitHub Users</h1>
          <p class="lead">Enter a username to fetch a user profile and repos</p>
          <input
            type="text"
            id="search-user"
            class="form-control"
            placeholder="GutHub username..."
          />
        </div>
        <br />
        <div class="profile"></div>
        <div class="repos"></div>
      </div>
    </div>
    <div v-if="showProfile">
      <Profile />
    </div>
    <footer class="mt-5 p-3 text-center bg-light">
      GitHub Finder &copy; 2020 Emiya Consulting
    </footer>
  </div>
</template>

<script>
import Profile from "@/components/Profile.vue";

export default {
  name: "Main",
  data() {
    return {
      showProfile: true,
    };
  },
  components: {
    Profile,
  },
};
</script>

<style lang="scss" scoped></style>
