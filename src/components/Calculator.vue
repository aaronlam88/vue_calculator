<template>
  <h1>Calculator</h1>
  <div class="calculator">
    <!-- Top row for display -->
    <div class="display">{{ current }}</div>
    <!-- Input section -->
    <div class="buttons">
      <!-- Row 1 -->
      <button @click="append(7)">7</button>
      <button @click="append(8)">8</button>
      <button @click="append(9)">9</button>
      <button @click="append('/')">/</button>
      <!-- Row 2 -->
      <button @click="append(4)">4</button>
      <button @click="append(5)">5</button>
      <button @click="append(6)">6</button>
      <button @click="append('*')">*</button>
      <!-- Row 3 -->
      <button @click="append(1)">1</button>
      <button @click="append(2)">2</button>
      <button @click="append(3)">3</button>
      <button @click="append('-')">-</button>
      <!-- Row 4 -->
      <button @click="clear">C</button>
      <button @click="append(0)">0</button>
      <button @click="append('.')">.</button>
      <button @click="append('+')">+</button>
      <!-- Row 5 -->
      <button class="equal" @click="calculate">=</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalculatorApp",
  data() {
    return {
      current: '',
    };
  },
  methods: {
    append(character) {
      this.current += character;
    },
    clear() {
      this.current = '';
    },
    calculate() {
      try {
        this.current = eval(this.current);
      } catch (e) {
        this.current = 'Error';
      }
    },
  },
};
</script>

<style scoped>
.calculator {
  max-width: 300px;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.display {
  font-size: 2em;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  text-align: right;
  height: 1em;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.buttons button {
  font-size: 1.5em;
  padding: 20px;
  cursor: pointer;
  border: none;
  background-color: #f0f0f0;
  border-radius: 5px;
}

.buttons button.equal {
  grid-column: span 4;
}
</style>