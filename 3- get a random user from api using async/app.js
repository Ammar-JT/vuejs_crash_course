//Vue.createApp() will create app obviously
//..which will have an object as params contains = template + data() + methods:

//template: is will have the view or the template

//data(): and data function will have an object that returns an object of properties
//.. which return variables that you can use in the template

//------
//lesson 2: 
//methods: just a methods!
//getUser() will change the properties values


//-----
// lesson 3: get a random user using 'https://randomuser.me/api'
// we used async getUser() to get the user from the api asyncronosly (in the backgound or in paralel)

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
        //in folder 2 we used getUser()
        //now we changed it to async getUser(), so we can do stuff asyncronised (in paralel)
        async getUser(){
            //in this method we want to
                //have a random user data
                //change the data() variables values
            
            //res will fetch a data for one random user,
            // res is a response for the api request, so it has to use await along with async
            //.. to do that in the background.. it will get a respose which means you have to get the result out of it
            const res = await fetch('https://randomuser.me/api');

            //to get the results out of the response you can use res.json() which will give you an 
            //.. an array of results, you still has to use await along with async to get the results asyncronosly

            //To get only the array of results without having and object containg info + array of results
            // use {results} instead of results
            const {results} = await res.json();

            //console.log(results);
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large 
        }
    }
})

app.mount('#app')