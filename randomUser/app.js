const app = Vue.createApp({

  data(){
    return {
      firstName : "Ayoub",
      lastName : "Kassi",
      email : "ayoub@io.com",
      gender : 'male',
      picture : 'https://avatars.githubusercontent.com/u/66210047?v=4',
    }
  },

  methods : {
    async getUser(){
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json();
      const data = results[0];
      this.firstName = data.name.first
      this.lastName = data.name.last
      this.email = data.email
      this.gender = data.gender
      this.picture = data.picture.large
    },
  },
})

app.mount('#app')

/* Nice Pic hhhhhh 'https://i1.sndcdn.com/artworks-000146996171-adv6ml-t500x500.jpg' */
