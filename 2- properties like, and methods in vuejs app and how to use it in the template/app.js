//Vue.createApp() will create app obviously
//..which will have an object as params contains = template + data() + methods:

//template: is will have the view or the template

//data(): and data function will have an object that returns an object of properties
//.. which return variables that you can use in the template

//methods: just a methods!
//getUser() will change the properties values
const app = Vue.createApp({
    data(){
        return {
            firstName: 'Ammar',
            lastName: 'JT',
            email: 'AmmarJT@ammarjt.com',
            gender: 'male', 
            picture: 'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg'

        }
    },
    methods: {
        getUser(){
            this.firstName = 'Sam',
            this.lastName = 'Doe',
            this.email = 'sam@doe.com',
            this.gender = 'female', 
            this.picture = 'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg'
        }
    }
})

app.mount('#app')