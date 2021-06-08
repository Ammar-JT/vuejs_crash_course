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
    addTask(task){
      this.tasks = [...this.tasks, task]
    },
    deleteTask(id){
      console.log('task',id);
      if(confirm('Are you sure?')){
        //this mean filter this tasks array where task's id !== this id:
        this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    },
    toggleReminder(id){
      console.log(id)
      //array.map allows you to manipulate the array and return the array you want:
              //this means foreach(task)where task.id===id? return this {...} if in not : return this task
      this.tasks = this.tasks.map((task) => task.id === id? {...task, reminder: !task.reminder} : task);
      /*
      WTF is {...task, reminder: !task.reminder} ??????????
      this called Spread Operator in Javascript!
      it means, return same object, but change only this property, in our case..
      so you can do:
          task = {...task, reminder: !task.reminder}
      This means return task object but change reminder to !task.reminder


      you can also use it in another way if you have an array and you want to add a new element in the array: 
          tasks = {...tasks, task} 
      this means append task object to tasks array of object, we already used that in the addTask() function

      */
    }
  },
  created(){
    this.tasks = [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'March 1st at 2:00pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at school',
        day: 'March 3st at 4:00pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Gym session',
        day: 'March 4st at 12:00pm',
        reminder: false,
      },
    ]
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
