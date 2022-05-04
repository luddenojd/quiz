<template>
  <ul class="startMenu">
    <li class="items">
      <RouterLink class="routing" to="/register">Start quizzing</RouterLink>
    </li>
    <li class="items">
      <RouterLink class="routing" to="/highscores">Highscores</RouterLink>
    </li>
  </ul>
</template>

<style>
.startMenu {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
}

.items {
  background-color: #6200ee;
  margin-bottom: 100px;
  margin-top: 100px;
  color: white;
  padding: 20px;
}
</style>
