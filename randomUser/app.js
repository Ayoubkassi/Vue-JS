const app = Vue.createApp({

  data(){
    return {
      firstName : "Ayoub",
      lastName : "Kassi",
      email : "ayoub@io.com",
      gender : 'male',
      picture : 'https://avatars.githubusercontent.com/u/66210047?v=4',
    }
  }
})

app.mount('#app')
