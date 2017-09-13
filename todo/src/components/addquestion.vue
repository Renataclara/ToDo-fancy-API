<template>
  <div>
    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    + Add
  </button>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        <form @submit.prevent='submitQuestion(formQuestion)'>
        <div class="form-group">
        <label for="title">Task Name</label>
        <input v-model='formQuestion.task_name' type="text" class="form-control" id="title" placeholder="Task name">
        </div>
        <div class="form-group">
        <label for="body">Status</label>
        <select v-model='formQuestion.status' class="custom-select">
          <option selected>Select your status</option>
          <option value="to-do">to-do</option>
          <option value="on-progress">on-progress</option>
          <option value="done">done</option>
        </select>
        </div>
        <div class="form-group">
        <label for="tags">Tags</label>
        <input v-model='formQuestion.tags' type="text" class="form-control" id="tags" placeholder="Any tag?">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    </div>
  </div>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formQuestion: {
        task_name: null,
        status: null,
        tags: null
      }
    }
  },
  methods: {
    ...mapActions([
      'submitQuestion'
    ])

  }
}
</script>

<style scoped>

</style>
