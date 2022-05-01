import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import QuizzesView from "./views/QuizzesView.vue";
import HighscoresView from "./views/HighscoresView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: "/",
    },
    {
      component: QuizzesView,
      path: "/quizzes",
    },
    {
      component: HighscoresView,
      path: "/highscores",
    },
  ],
});
