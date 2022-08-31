<template>
  <main>

    <!-- heading -->
    <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo">
      <h1>Pinia Tasks</h1>
    </header>

    <!-- task list -->
    <div class="task-list">
      <div v-for="task in taskStore.tasks" :key="task.id">
        <!-- <p>{{ task.title }}</p> -->
        <TaskDetails :task="task" />
      </div>
    </div>

  </main>
</template>

<script>
  import TaskDetails from './components/TaskDetails.vue'

  import { useTaskStore } from './stores/TaskStore'

  export default {
    components: { TaskDetails },
    setup() {
      const taskStore = useTaskStore()

      return { taskStore }
    }
  }
</script>