<template>
    <div>
        <!-- 
            v-if means a vue if, so >> if(shoAddTask) << then do the follwing,
            .. but as you can see, showAddTask is false by default.
            instead of using v-if you can use a vue attribute that specialized for this issue
            .. which is v-show, so if shoAddTask is true it will show the following.

            you could use v-show in the div or in the AddTask directly!!!
        -->
        
        <div v-show="showAddTask">
            <AddTask  @add-task="addTask"/>
        </div>
        <!-- 
            v-bind:task or :tasks to bind the arrays

            Why not tasks="task"? like title="task tracker"???
            ..Cuz it's not string, you want to bind an array with an array,
            ..that's why you need a >> :tasks << so vue can understand that >> "tasks" <<
            ..is not a string!!  
        -->
        <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
    </div>
</template>


<script>
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'

export default {
    name: 'Home',
    props:{
        showAddTask: Boolean,
    },
    components:{
        Tasks,
        AddTask
    },
    data() {
        return {
            tasks: [],
        }
    },
     methods:{
        async addTask(task){
        const res = await fetch('api/tasks', {
            method: 'POST',
            headers:{
            'Content-type': 'application/json',
            },
            //JSON.stringify(task) is the data we're sending
            body: JSON.stringify(task)

        })

        const data = await res.json()

        this.tasks = [...this.tasks, data]
        },
        async deleteTask(id){
        if(confirm('Are you sure?')){
            const res = await fetch(`api/tasks/${id}`,{
            method: 'DELETE'
            })

            res.status === 200 ? this.tasks.filter((task) => task.id !== id) : alert('error deleting task')

            //this mean filter this tasks array where task's id !== this id:
            this.tasks = this.tasks.filter((task) => task.id !== id)
        }
        },
        async toggleReminder(id){
            const taskToToggle = await this.fetchTask(id)
            const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
            const res = await fetch(`api/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updTask),
            })
            const data = await res.json()
            this.tasks = this.tasks.map((task) =>
            task.id === id ? { ...task, reminder: data.reminder } : task)
        },
        async fetchTasks(){
        console.log('fetch gonna work')
        const res = await fetch('api/tasks')
        const data = await res.json()
        data ? console.log('fetch does work') : console.log('fetch not work')
        return data
        },
        //this function should give a single task
        async fetchTask(id){
        const res = await fetch(`api/tasks/${id}`)
        const data = await res.json()
        return data
        },
    },
    //notice the method created is outside the methods:{} object!!
    async created(){
        this.tasks = await this.fetchTasks();
    }
}
</script>