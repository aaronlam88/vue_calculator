<template>
  <div>
    <h1>Tic-Tac-Toe</h1>
    <div class="board">
      <button v-for="(cell, index) in state.board" :key="index" class="cell" @click="makeMove(index)"
        :disabled="!!cell || !!state.winner">
        {{ cell }}
      </button>
    </div>
    <div v-if="state.winner" class="winner">
      <p>{{ winnerMessage }}</p>
      <button @click="resetGame">Play Again</button>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  setup() {
    const state = reactive({
      board: Array(9).fill(''),
      currentPlayer: 'X',
      winner: null,
    });

    const winnerMessage = computed(() => {
      return state.winner ? `${state.winner} wins!` : '';
    });

    const makeMove = (index) => {
      if (!state.board[index] && !state.winner) {
        state.board[index] = state.currentPlayer;
        if (checkWinner()) {
          state.winner = state.currentPlayer;
        } else {
          state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    };

    const checkWinner = () => {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return (
          state.board[a] &&
          state.board[a] === state.board[b] &&
          state.board[a] === state.board[c]
        );
      });
    };

    const resetGame = () => {
      state.board = Array(9).fill('');
      state.currentPlayer = 'X';
      state.winner = null;
    };

    return {
      state,
      winnerMessage,
      makeMove,
      resetGame,
    };
  }
};
</script>

<style>
.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 10px;
  margin: auto;
  /* need to set width to center */
  width: 300px;
}

.cell {
  width: 100px;
  height: 100px;
  background: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  border: 1px solid #ccc;
  outline: none;
  padding: 0;
  margin: 0;
}

.cell:disabled {
  cursor: not-allowed;
  background: #e0e0e0;
}

.winner {
  margin-top: 20px;
}
</style>
