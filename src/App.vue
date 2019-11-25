<template>
<!-- <body class="theme-cyan font-montserrat"> -->

<!-- Page Loader -->


<div>

  <!-- <div class="page-loader-wrapper">
    <div class="loader">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <div class="bar4"></div>
        <div class="bar5"></div>
    </div>
  </div> -->

<!-- Overlay For Sidebars -->
<div class="overlay"></div>

<div id="wrapper">

    <nav class="navbar top-navbar">
        <div class="container-fluid">

            <div class="navbar-left">
                <div class="navbar-btn">
                    <a href="index.html"><img src="./assets/images/icon.svg" alt="HRM Logo" class="img-fluid logo"></a>
                    <button type="button" class="btn-toggle-offcanvas"><i class="lnr lnr-menu fa fa-bars"></i></button>
                </div>
                <ul class="nav navbar-nav">

                    <li><a class="megamenu_toggle icon-menu" title="Mega Menu">HRM</a></li>

                </ul>
            </div>
        </div>
    </nav>



    <div id="left-sidebar" class="sidebar">
        <div class="navbar-brand">
            <a href="index.html"><img src="./assets/images/icon.svg" alt="HRM Logo" class="img-fluid logo"><span>HRM</span></a>
            <button type="button" class="btn-toggle-offcanvas btn btn-sm float-right"><i class="lnr lnr-menu icon-close"></i></button>
        </div>
        <div class="sidebar-scroll">
            <div class="user-account">
                <div class="user_div">
                    <img src="./assets/images/user.png" class="user-photo" alt="User Profile Picture">
                </div>
                <div class="dropdown">
                    <span>Welcome,</span>
                    <a href="javascript:void(0);" class="dropdown-toggle user-name" data-toggle="dropdown"><strong>Louis Pierce</strong></a>
                    <ul class="dropdown-menu dropdown-menu-right account vivify flipInY">
                        <li><router-link :to="{ name: 'CurrentUserProfile' }"><i class="icon-user"></i>My Profile</router-link></li>
                        <li class="divider"></li>
                        <li><a href="../html/page-login.html"><i class="icon-power"></i>Logout</a></li>
                    </ul>
                </div>
            </div>
            <nav id="left-sidebar-nav" class="sidebar-nav">
                <ul id="main-menu" class="metismenu">
                    <!-- <li class="header">Hospital</li> -->
                    <!-- <li>
                        <router-link :to="{ name: 'DoctorList' }" class="has-arrow"><i class="icon-user-follow"></i><span>Doctors</span></router-link>
                        <ul>
                            <li> <router-link :to="{ name: 'DoctorList' }">All Doctors</router-link></li>
                            <li> <router-link :to="{ name: 'DoctorProfile' }">Doctor's Profile</router-link></li>
                            <li> <router-link :to="{ name: 'DoctorConsultancy' }">Consultancy</router-link></li>
                        </ul>
                    </li> -->
                    <li>
                        <router-link :to="{ name: 'SpecialistList' }" class="has-arrow"><i class="icon-user-follow"></i><span>Specialists</span></router-link>
                        <ul>
                            <!-- <li> <router-link :to="{ name: 'SpecialistAdd' }">Add Specialist</router-link></li> -->
                            <li> <router-link :to="{ name: 'SpecialistList' }">All Specialists</router-link></li>
                            <li> <router-link :to="{ name: 'SpecialistProfile' }">Specialist's Profile</router-link></li>
                            <li> <router-link :to="{ name: 'SpecialistSchedule' }">Specialists Schedule</router-link></li>
                            <li> <router-link :to="{ name: 'SpecialistConsultancy' }">Consultancy Appointments</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <router-link :to="{ name: 'PatientList' }" class="has-arrow"><i class="icon-user-follow"></i><span>Patient</span></router-link>
                        <ul>
                            <!-- <li> <router-link :to="{ name: 'PatientAdd' }">Add Patient</router-link></li> -->
                            <li> <router-link :to="{ name: 'PatientConsultancy' }">Consultancy</router-link></li>
                            <li> <router-link :to="{ name: 'PatientList' }">All Patients</router-link></li>
                            <li> <router-link :to="{ name: 'PatientProfile' }">Patient's Profile</router-link></li>
                        </ul>
                    </li>
                     <li>
                        <router-link :to="{ name: 'ReceptionistList' }" class="has-arrow"><i class="icon-user-follow"></i><span>Receptionist</span></router-link>
                        <ul>
                            <li> <router-link :to="{ name: 'ReceptionistAdd' }">Add Receptionist</router-link></li>
                            <li> <router-link :to="{ name: 'ReceptionistList' }">All Receptionists</router-link></li>
                            <li> <router-link :to="{ name: 'ReceptionistProfile' }">Receptionist's Profile</router-link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

    <div id="main-content">
        <div class="container-fluid">

<!-- page content here -->
  <div id="app">
    <router-view/>
  </div>

        </div>
    </div>

</div>
</div>
<!-- </body> -->


</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
