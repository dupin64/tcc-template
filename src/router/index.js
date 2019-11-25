import Vue from 'vue'
import Router from 'vue-router'
import CurrentUserProfile from '@/components/user/currentUserProfile'

import PatientConsultancy from '@/components/patient/consultancyList.vue'
import PatientList from '@/components/patient/patientList.vue'
import PatientProfile from '@/components/patient/patientProfile.vue'

import ReceptionistAdd from '@/components/receptionist/receptionistAdd.vue'
import ReceptionistList from '@/components/receptionist/receptionistList.vue'
import ReceptionistProfile from '@/components/receptionist/receptionistProfile.vue'

import SpecialistAdd from '@/components/specialist/specialistAdd.vue'
import SpecialistList from '@/components/specialist/specialistList.vue'
import SpecialistProfile from '@/components/specialist/specialistProfile.vue'
import SpecialistSchedule from '@/components/specialist/specialistSchedule.vue'
import SpecialistConsultancy from '@/components/specialist/consultancy.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'SpecialistList',
      component: SpecialistList
    },
    {
      path: '/CurrentUserProfile',
      name: 'CurrentUserProfile',
      component: CurrentUserProfile
    },
    {
      path: '/SpecialistConsultancy',
      name: 'SpecialistConsultancy',
      component: SpecialistConsultancy
    },
    {
      path: '/SpecialistAdd',
      name: 'SpecialistAdd',
      component: SpecialistAdd
    },
    {
      path: '/SpecialistList',
      name: 'SpecialistList',
      component: SpecialistList
    },
    {
      path: '/SpecialistProfile',
      name: 'SpecialistProfile',
      component: SpecialistProfile
    },
    {
      path: '/SpecialistSchedule',
      name: 'SpecialistSchedule',
      component: SpecialistSchedule
    },
    {
      path: '/SpecialistConsultancy',
      name: 'SpecialistConsultancy',
      component: SpecialistConsultancy
    },
    {
      path: '/PatientConsultancy',
      name: 'PatientConsultancy',
      component: PatientConsultancy
    },
    {
      path: '/PatientList',
      name: 'PatientList',
      component: PatientList
    },
    {
      path: '/PatientProfile',
      name: 'PatientProfile',
      component: PatientProfile
    },
    {
      path: '/ReceptionistAdd',
      name: 'ReceptionistAdd',
      component: ReceptionistAdd
    },
    {
      path: '/ReceptionistList',
      name: 'ReceptionistList',
      component: ReceptionistList
    },
    {
      path: '/ReceptionistProfile',
      name: 'ReceptionistProfile',
      component: ReceptionistProfile
    }
  ]
})
