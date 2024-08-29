const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: [] 
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(idx) {
      // splice : 입력된 인덱스에 해당하는 항복을 goals 배열에서 찾아 삭제.
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');
