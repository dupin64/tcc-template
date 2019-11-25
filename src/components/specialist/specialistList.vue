<template>
        <div class="container-fluid">
            <div class="block-header">
                <div class="row clearfix">
                    <div class="col-md-6 col-sm-12">
                        <h1>All Specialists</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="../html/index.html">HRM</a></li>
                            <li class="breadcrumb-item active" aria-current="page">All Specialists</li>
                            </ol>
                        </nav>
                    </div>
                    <div class="col-md-6 col-sm-12 text-right hidden-xs">
                        <a class="badge badge-primary" data-toggle="modal" data-target="#addSpecialist" title="">Add New Specialist</a>
                    </div>
                </div>
            </div>

            <div class="row clearfix">
                <div class="col-lg-3 col-md-4 col-sm-12">
                    <ul class="list-group mt-0 mb-4">
                        <li class="list-group-item d-flex justify-content-between align-items-center">All Contacts<span class="badge badge-info">14</span></li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Dentist<span class="badge badge-primary">2</span></li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Gynecologist<span class="badge badge-warning">1</span></li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Nursing<span class="badge badge-danger">14</span></li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Audiology<span class="badge badge-success">2</span></li>
                    </ul>
                    <br class="mt-3">
                </div>
                <div class="col-lg-9 col-md-8 col-sm-12">
                    <div class="row clearfix">
                        <div v-for="profile in specialists"  :key="profile.id" class="col-lg-4 col-md-6">
                            <div class="card c_grid c_yellow">
                                <div class="body text-center">
                                    <div class="circle">
                                        <img class="rounded-circle" src="../../assets/images/sm/avatar1.jpg" alt="">
                                    </div>
                                    <h6 class="mt-3 mb-0">{{profile.name}}</h6>
                                    <span>jason-porter@info.com</span>
                                    <br class="mt-3">

                                    <!-- <a @click="goUser(profile.name)" class="badge badge-success">Profile</a>
                                     -->
                                    <router-link class="badge badge-success" :to="{ name: 'SpecialistProfile' }">Profile</router-link>

                                    <router-link class="badge badge-danger" :to="{ name: '' }">Delete</router-link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
                    <div class="modal fade" id="addSpecialist" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="title" id="defaultModalLabel">Add Specialist</h4>
            </div>
            <div class="modal-body">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="body">
                            <div class="row clearfix">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="First Name">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Last Name">
                                    </div>
                                </div>
                            </div>
                            <div class="row clearfix">
                                <div class="col-sm-3">
                                    <div class="form-group">
                                        <input type="text" data-provide="datepicker" data-date-autoclose="true" class="form-control" placeholder="Date of Birth">
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="form-group">
                                        <select class="form-control show-tick">
                                            <option value="">- Gender -</option>
                                            <option value="10">Male</option>
                                            <option value="20">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="form-group">
                                        <select class="form-control show-tick">
                                            <option value="">- category -</option>
                                            <option value="10">optician</option>
                                            <option value="20">Dematologist</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Phone">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Enter Your Email">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Website URL">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <input type="file" class="dropify">
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group mt-3">
                                        <textarea rows="4" class="form-control no-resize" placeholder="Please type what you want..."></textarea>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="User Name">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Password">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Confirm Password">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-round btn-primary">Add</button>
                <button type="button" class="btn btn-round btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

        </div>
</template>

<script>
import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'
export default {
     data(){
    return{
      message:[]
      }
  },
    computed: {
        ...mapState(['specialists']),
        ...mapState(['currentIndex'])
        },

  methods: {
    ...mapActions(['fetchPosts']),
    goUser(m) {
        console.log('dom', m)
    this.$store.commit('setUser', m)
console.log(this.$store.state.user) // access the user
    //   this.$router.push('/SpecialistAdd/')

    }
  }
}
</script>

<style>

</style>