// Vanilla JS 
// document.querySelector('button').addEventListener(); 

const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted!');
    },
    setName(event, lastName) {
      // $event : 예약된 이름. 
      // Vue에서 제공하는 변수로서 브라우저를 통해 자동으로 얻는 기본 내장 이벤트 객체에 대한 액세스 제공.
      this.name = `${event.target.value} ${lastName}`;
    },
    add(num) {
      // this.counter++;
      // 버튼 클릭할 때 실행되도록 하니까 반환값이 필요하지 않음.
      this.counter = this.counter + num;
    },
    reduce(num) {
      // this.counter--;
      this.counter = this.counter - num;
    }
  },
});

app.mount('#events');
