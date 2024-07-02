/*
  [중요]
  1. Vue로 HTML 요소를 제어하는 경우, 해당 요소의 자식 요소 또한 제어할 수 있습니다. 
  2. Vue와 같은 프레임워크를 사용할 때 보통 선언형 접근 방식을 사용한다고 말하거나 Vue가 선언형 접근 방식을 사용한다고 표현.
*/

const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: '<h2>Master Vue and build amazing apps!</h2>',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if(randomNumber < 0.5) {
        // Vue 때문에 data 내의 객체를 참조할 수 있음.
        // Vue는 data 객체에서 반환하는 데이터 전체를 가져다가 데이터를 병합해서
        // 전역 Vue 인스턴스 객체를 만듬.
        // Vue.createApp 객체로 만든다고 할 수도 있음.
        // this 키워드를 사용하면 전역 Vue 인스턴스 객체에 저장된 모든 데이터에 액세스 가능.
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount('#user-goal');