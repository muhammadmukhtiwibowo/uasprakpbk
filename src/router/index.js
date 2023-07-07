import { createRouter, createWebHistory } from 'vue-router';

import WeatherWidget from '../components/WeatherWidget.vue';
import LocationWidget from '../components/LocationWidget.vue';
import StopwatchWidget from '../components/StopwatchWidget.vue';
import TicTacToeWidget from '../components/TicTacToeWidget.vue';
import PhotoWidget from '../components/PhotoWidget.vue';
import widget from '../components/widget.vue';

const routes = [
  { path: '/', component: WeatherWidget },
  { path: '/location', component: LocationWidget },
  { path: '/stopwatch', component: StopwatchWidget },
  { path: '/tictactoe', component: TicTacToeWidget },
  { path: '/photo', component: PhotoWidget },
  {path: '/widget', component: widget},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
