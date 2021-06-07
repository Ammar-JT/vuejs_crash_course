//Vue.createApp will create app obviously
//..which will have an object as params contains template and data():
//template: is will have the view or the template
//data(): and data function will have an object that returns another object
//.. which return variables that you can use in the template: 
const app = Vue.createApp({
    template: '<h1>Hello {{firstName}}</h1>',
    data(){
        return {
            firstName: 'Ammar',
        }
    }
})

app.mount('#app')