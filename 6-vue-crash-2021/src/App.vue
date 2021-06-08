<template>
  <div class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <Header @toggle-add-task="toggleAddTask" title="task tracker"
    :showAddTask="showAddTask"/>
    <!-- 
        v-if means a vue if, so >> if(shoAddTask) << then do the follwing,
        .. but as you can see, shoAddTask is false by default.
        instead of using v-if you can use a vue attribute that specialized for this issue
        .. which is v-show, so if shoAddTask is true it will show the following.
      -->
    <div v-if="showAddTask">
      <AddTask v-if="showAddTask" @add-task="addTask"/>
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
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask
  },
  data(){
      return{
          tasks:[],
          showAddTask: false
      }
  },
  methods:{
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
    },
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
    const res = await fetch('api/tasks')
    const data = await res.json()
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
