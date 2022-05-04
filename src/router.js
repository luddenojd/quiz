import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import QuizzesView from "./views/QuizzesView.vue";
import HighscoresView from "./views/HighscoresView.vue";
import RegisterUser from "./views/RegisterUser.vue";
import QuizView from "./views/QuizView.vue";

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
    {
      component: RegisterUser,
      path: "/register",
    },
    {
      component: QuizView,
      path: "/quiz",
    },
  ],
});
