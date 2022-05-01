<script></script>

<template>
  <ul class="menu">
    <li><RouterLink class="routing" to="/">QuizLogo</RouterLink></li>
    <li><RouterLink class="routing" to="/quizzes">Quizzes</RouterLink></li>
    <li>
      <RouterLink class="routing" to="/highscores">Highscores</RouterLink>
    </li>
    <li><img src="../assets/icons8-menu-24.png" alt="" /></li>
  </ul>
  <main>
    <RouterView />
  </main>
</template>

<style>
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
}

.routing {
  text-decoration: none;
  color: white;
}
</style>
