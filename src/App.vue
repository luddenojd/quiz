<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    // hide() {
    //   console.log("Hej");
    //   this.show = true;
    // },
  },
};
</script>

<template>
  <ul class="menu">
    <li class="quizLogo">
      <RouterLink class="routing" to="/">.quiz</RouterLink>
    </li>
    <li v-if="show">
      <RouterLink class="routing" to="/quizzes"></RouterLink>
    </li>
    <li class="menuListItems" v-else>
      <RouterLink class="routing" to="/quizzes">Quizzes</RouterLink>
    </li>
    <li v-if="show">
      <RouterLink class="routing" to="/highscores"></RouterLink>
    </li>
    <li class="menuListItems" v-else>
      <RouterLink class="routing" to="/highscores">Highscores</RouterLink>
    </li>
    <li>
      <img @click="show = !show" src="../assets/icons8-menu-24.png" alt="" />
    </li>
  </ul>
  <main>
    <RouterView />
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Koulen&family=Roboto:wght@300&display=swap");
body {
  margin: 0;
}
.menu {
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-evenly;
  background-color: #6200ee;
  height: 40px;
  margin-top: 0;
  align-items: center;
  box-shadow: 3px 3px 3px 3px #6200ee;
}

.routing {
  text-decoration: none;
  color: white;
}

.quizLogo {
  font-family: "Koulen", cursive;
  font-size: 20px;
}

.menuListItems {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
}
</style>
