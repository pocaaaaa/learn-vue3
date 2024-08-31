const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //this.message = this.currentUserInput;
      
      // $refs는 Vue가 지원하틑 프로퍼티.
      // Vue가 지원하는 모든 프로퍼티는 $로 시작.
      this.message = this.$refs.userText.value;
      console.dir(this.$refs.userText);
    },
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('unmounted()');
  },
});

app.mount('#app');

setTimeout(() => {
  app.unmount();
}, 3000);

const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: 'Pizza'
    }
  }
});

app2.mount('#app2');

// ....

// let message = 'Hello!';

// let longMessage = message + ' World!';

// console.log(longMessage);

// message = 'Hello!!!';

// console.log(longMessage);

const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!'
};

const handler = {
  // setter 함수
  // 새 값이 설정된 프로퍼티가 무엇이며 설정된 새 값은 무엇이고 래핑된 원본 객체가 무엇인지 알 수 있음.
  set(target, key, value) {
    // console.log(target);
    // console.log(key);
    // console.log(value);
    if(key === 'message') {
      target.longMessage = value + ' World';
    }
    target.message = value;
  }
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!!';

console.log(proxy.longMessage);