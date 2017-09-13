<template>
  <div>
    <Addquestion></Addquestion>
    <div class="list-group" v-for='(list, index) in lists'>
      <div class="list-group-item list-group-item-action flex-column align-items-start">
      <!-- <router-link :to="`/home/${list._id}`" class="list-group-item list-group-item-action flex-column align-items-start"> -->

        <div class="d-flex w-100 justify-content-between">
           <h3 class="mb-1">{{list.task_name}}</h3>

           <small><h5>
              <span class="badge badge-primary">{{list.status}}</span>
           </h5></small>
        </div>
          <h5 class="mb-1">
            <span class="badge badge-dark">{{list.tags[0]}}</span>
          </h5>
         <small>
        <button type="button" @click="deleteQuestion(`${list._id}`)" class="btn btn-outline-danger btn-sm">X</button>
         <!-- <small>by {{list.userid.name}}</small> -->
         <!-- <small v-if="list.userid.name === null">by {{list.name}}</small> -->
         <!-- <button type="button" @click="deleteQuestion(`${list._id}`)" class="btn btn-outline-danger btn-sm">X</button> -->
         <!-- Button trigger modal -->
        <button type="button" @click="getQuestion(`${list._id}`)" class="btn btn-outline-success btn-sm" data-toggle="modal" data-target="#exampleModalLong">
          Edit
        </button>

        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Edit question</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form @submit.prevent='editQuestion(formQuestion)'>
                  <div class="form-group">
                  <label for="title">Task Name</label>
                  <input v-model='formQuestion.task_name' type="text" class="form-control" id="title" placeholder="Task name">
                  </div>
                  <div class="form-group">
                  <label for="body">Status</label>
                  <select v-model='formQuestion.status' class="custom-select">
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
        </div>
        </small>
        <!-- end of modal -->
      <!-- </router-link> -->
      </div>
    </div>
  </div>

</template>

<script>
import { mapActions } from 'vuex'
import Addquestion from '@/components/addquestion'

export default {
  components: {
    Addquestion
  },
  data () {
    return {
      // editquestions: [],
      // id: null,
      formQuestion: {
        task_name: null,
        status: null,
        tags: null
      }
    }
  },
  methods: {
    ...mapActions([
      'getQuestions',
      'deleteQuestion',
      'editQuestion'
      // 'vote'
    ]),
    // ,
    getQuestion (id) {
      this.id = id
      this.$http.get(`tasks/${id}`)
      // axios.get('http://localhost:3000')
      .then((data) => {
        this.editquestions = data.data
        console.log(this.editquestions, 'ini tohhh')
        this.formQuestion._id = this.editquestions[0]._id
        this.formQuestion.task_name = this.editquestions[0].task_name
        this.formQuestion.status = this.editquestions[0].status
        this.formQuestion.tags = this.editquestions[0].tags
        console.log('====================================')
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  computed: {
    lists () {
      return this.$store.state.mainlist
    }
    // ,
    // nets () {
    //   return this.$store.getters.nets
    // },
    // nets () {
    //   var listNet = []
    //   this.$store.state.mainlist.forEach(q => {
    //     if (q.votes.length > 0) {
    //       var net = 0
    //       q.votes.forEach(v => {
    //         net += v.uservalue
    //       })
    //       console.log(net, 'the ones not 0')
    //       listNet.push(net)
    //     } else {
    //       listNet.push(0)
    //     }
    //   })
    //   return listNet
    // },
    // ...mapState([
    //   'userid'
    // ])
  },
  created () {
    if (localStorage.getItem('token') == null) {
      this.$router.push({ path: '/signup' })
    } else {
      this.getQuestions()
    }
  }
}
</script>

<style scoped>

</style>
