const app = Vue.createApp({
  data() {
    return {
      friends: [
        { 
          id: 'manuel', 
          name: 'Manuel Lorenz', 
          phone: '01234 5678 991',
          email: 'manuel@localhost.com'
        },
        { 
          id: 'julie', 
          name: 'Julie Jones', 
          phone: '09876 543 221',
          email: 'julie@localhost.com'
        }
      ]
    };
  }
});

// component(식별자, createApp에 전달한 것과 같은 구성 객체)
app.component('friend-contact', {
  props: {
    friend: Object
  },
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
  data() {
    return { 
      detailsAreVisible: false
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});

app.mount('#app');