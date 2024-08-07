const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullname: '',
    };
  },
  watch: {
    counter(value) {
      if(value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
      }
    }
    // name(value) {
    //   // data에 있는 name이 watch에 사용되면서 연결이 설정
    //   if(value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   // data에 있는 name이 watch에 사용되면서 연결이 설정
    //   if(value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullname() {
      console.log('Running again...');
      if(this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    },
  },
  methods: {
    outputFullname() {
      console.log('Running again...');
      if(this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Test';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
    }
  }
});

app.mount('#events');
