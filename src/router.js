import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue'
import CalculatorApp from './components/Calculator.vue';
import TicTacToe from './components/TicTacToe.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/calculator', component: CalculatorApp },
  { path: '/tictactoe', component: TicTacToe },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
