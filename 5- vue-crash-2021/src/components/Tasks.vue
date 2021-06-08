<!-- this v-for is a for loop in vue -->
<template>
    <div>
        <div :key='task.id' v-for="task in tasks">
            <Task @toggle-reminder="$emit('toggle-reminder',task.id)" @delete-task="$emit('delete-task', task.id)" :task="task" />
        </div>
    </div>

</template>


<script>
import Task from './Task'
export default {
    name: 'Tasks',
    props: {
        tasks: Array,
    },
    components:{
        Task
    },
    emits: ['delete-task', 'toggle-reminder'], //you need to put emits here in the export object cuz you didn't make a function
                            //.. you use emmit directly on the Task tag.. i think that's the reason
}
</script>