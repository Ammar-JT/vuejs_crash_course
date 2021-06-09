<template>
    <header>
        <h1>{{title}}</h1>
        <br>
        <Button v-show="homePage" @btn-click="$emit('toggle-add-task')"
         :text="showAddTask ? 'Close' : 'Add Task'" :color="showAddTask? 'red' : 'green'"/>
    </header>
</template>

<script>
import Button from './Button'

//this is the export details, the name of the vue file, and props (properties)
//.. which is like data() in the previous lessons 
//.. so you can use it in the template with {{title}}
//.. Props is an object which contains all the properties 
//You can use title:{type:String, Default: 'hello'} or just title:String
//.. in case you just wanna set the type not the value

// Huh?? ok, so... data() is the real data() XD
//.. yeah it's exactally like the one in the previous lessons
export default{
    name: 'Header',
    props: {
        title: String,
        showAddTask: Boolean
    },
    components:{
        Button
    },
    computed:{
        homePage(){
            if(this.$route.path === '/'){
                return true
            }else{
                return false
            }
        }
    }
    
}
</script>
<!-- style scoped means it only for this vue file -->
<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>