
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

  const state = {
    user: '',
    currentIndex: 0,
    specialists: [
      {
        userId: '1',
        name: 'moha',
        category: 'Personal',
        email: 'moha@gmail.com',
        mobile: '0712234535',
        Designation: 'Dentist',
        address: '795 Folsom Ave, Suite 600 San Francisco,',
        image: '../../assets/images/sm/avatar1.jpg',
        bio: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
        education: [
          {
            id: 2,
            title: 'M.B.B.S.,Harvard University, USA.',
            date: new Date(),
          },
          {
            id: 2,
            title: 'SPINAL FELLOWSHIP Dr. John Adam, Allegimeines Krakenhaus, Schwerin, Germany.',
            date: new Date(),
          },
          {
            id: 2,
            title: 'Fellowship in Endoscopic Spine Surgery Phoenix, USA.',
            date: new Date(),
          },
          {
            id: 2,
            title: 'D.N.B from AIIMS',
            date: new Date(),
          }
        ],
      },
      {
        userId: '2',
        name: 'john',
        category: 'Work',
        email: 'john@gmail.com',
        mobile: '0712234535',
        Designation: 'Gynecologist',
        address: '795 Folsom Ave, Suite 600 San Francisco,',
        image: '../../assets/images/sm/avatar1.jpg',
        bio: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
        education: [
          {
            id: 2,
            title: 'M.B.B.S.,Harvard University, USA.',
            date: new Date(),
          },
          {
            id: 2,
            title: 'SPINAL FELLOWSHIP Dr. John Adam, Allegimeines Krakenhaus, Schwerin, Germany.',
            date: new Date(),
          },
          {
            id: 2,
            title: 'Fellowship in Endoscopic Spine Surgery Phoenix, USA.',
            date: new Date(),
          },
          {
            id: 2,
            title: 'D.N.B from AIIMS',
            date: new Date(),
          }
        ],
      },
      {
        userId: '3',
        name: 'mark',
        category: 'Home',
        email: 'mark@gmail.com',
        mobile: '0712234535',
        Designation: 'Audiology',
        address: '795 Folsom Ave, Suite 600 San Francisco,',
        image: '../../assets/images/sm/avatar1.jpg',
        bio: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
        education: [
          {
            id: 2,
            title: 'M.B.B.S.,Harvard University, USA.',
            date: new Date(),
          },
          {
            id: 2,
            title: 'SPINAL FELLOWSHIP Dr. John Adam, Allegimeines Krakenhaus, Schwerin, Germany.',
            date: new Date(),
          },
          {
            id: 2,
            title: 'Fellowship in Endoscopic Spine Surgery Phoenix, USA.',
            date: new Date(),
          },
          {
            id: 2,
            title: 'D.N.B from AIIMS',
            date: new Date(),
          }
        ],
      }
    ],
    patients: [
      {
        userId: 1,
        name: 'moha',
        category: 'Personal',
        email: 'moha@gmail.com',
        mobile: '0712234535',
        dob: new Date,
        address: '795 Folsom Ave, Suite 600 San Francisco,',
        image: '../../assets/images/sm/avatar1.jpg',
        bio: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
        consalts: [
          {
            id: 2,
            refNo: 'R6387953',
            condition: 'Tooth Ache',
            consulting: 'Dr. David',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            date: new Date(),
          },
          {
            id: 2,
            refNo: 'R682732',
            condition: 'Fever',
            consulting: 'Dr. David',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            date: new Date(),
          },
          {
            refNo: 'R6584277',
            condition: 'Blood pressure',
            consulting: 'Dr. David',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            date: new Date(),
          }
        ],
      },
      {
        userId: 2,
        name: 'john',
        category: 'Work',
        email: 'john@gmail.com',
        mobile: '0712234535',
        dob: new Date,
        address: '795 Folsom Ave, Suite 600 San Francisco,',
        image: '../../assets/images/sm/avatar1.jpg',
        bio: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
        consalts: [
          {
            id: 1,
            refNo: 'R6387953',
            condition: 'Tooth Ache',
            consulting: 'Dr. David',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            date: new Date(),
          },
          {
            id: 2,
            refNo: 'R682732',
            condition: 'Fever',
            consulting: 'Dr. David',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            date: new Date(),
          },
          {
            id: 3,
            refNo: 'R6584277',
            condition: 'Blood pressure',
            consulting: 'Dr. David',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            date: new Date(),
          }
        ],
      },
      {
        userId: 3,
        name: 'mark',
        category: 'Home',
        email: 'mark@gmail.com',
        mobile: '0712234535',
        dob: new Date,
        address: '795 Folsom Ave, Suite 600 San Francisco,',
        image: '../../assets/images/sm/avatar1.jpg',
        bio: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
        consalts: [
          {
            id: 1,
            refNo: 'R6387953',
            condition: 'Tooth Ache',
            consulting: 'Dr. David',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            date: new Date(),
          },
          {
            id: 2,
            refNo: 'R682732',
            condition: 'Fever',
            consulting: 'Dr. David',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            date: new Date(),
          },
          {
            id: 3,
            refNo: 'R6584277',
            condition: 'Blood pressure',
            consulting: 'Dr. David',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            date: new Date(),
          }
        ],
      }
    ]
  }
  const getters = {
    // patients (state, userId) {
    //   const consultancy = []
    //   state.patients.forEach(patient => {
    //     patient.consalts.forEach(consult => {
    //       if (consult.id == 1) {
    //         consultancy.push(consult)
    //       }
    //     })
    //   })
    //   return consultancy
    // },
    // todayTasks (state) {
    //   const tasks = []
    //   state.todos.forEach(todo => {
    //     todo.tasks.forEach(task => {
    //       if (task.date <= tomorrow && !task.image && !task.deleted) {
    //         tasks.push(task)
    //       }
    //     })
    //   })
    //   return tasks
    // }
  }
  const mutations = {

    setUser(state, user) {
			state.user = user
		},
    selectTodo (state, selected) {
      state.unselect = null
      state.selected = selected
    },
    unselectTodo (state) {
      state.unselect = state.selected
      state.selected = null
    },
    nextTodo (state) {
      if (state.currentIndex < state.todos.length - 1) {
        state.currentIndex++
      }
    },
    prevTodo (state) {
      if (state.currentIndex > 0) {
        state.currentIndex--
      }
    },
    deleteTask (_, { task }) {
      task.deleted = '../../assets/images/sm/avatar1.jpg'
    },
    toggleEditing (state) {
      if (state.editing && state.editing.text) {
        state.selected.todo.tasks.unshift({
          title: state.editing.text,
          date: new Date(),
          image: false,
          deleted: false
        })
      }
      state.editing = state.editing ? null : { text: '' }
    }
  }

  const actions = {
    setModalType ({ commit }, type) {
      commit('SET_MODAL_TYPE', type)
    },
    setSelectedPost ({ commit }, selectedPost) {
      commit('SET_SELECTED_POST', selectedPost)
    },
    async fetchPosts ({commit}) {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/')
        commit('SET_POSTS', res.data)
      } catch (err) {
        console.log(err)
      }
    },
    async fetchPost ({commit}, id) {
      try {
        const postRequest = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const userRequest = await axios.get(`https://jsonplaceholder.typicode.com/users/${postRequest.data.userId}`)
        const post = postRequest.data
        post.user = userRequest.data
        commit('SET_SELECTED_POST', post)
      } catch (err) {
        console.log(err)
      }
    },
    async fetchProfile ({commit}, id) {
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        commit('SET_PROFILE', res.data)
      } catch (err) {
        console.log(err)
      }
    },
    async updatePost ({commit}, id) {
      try {
        await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`)
      } catch (err) {
        console.log(err)
      }
    },
    async deletePost ({commit}, id) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      } catch (err) {
        console.log(err)
      }
    }
  }

  export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
  })

