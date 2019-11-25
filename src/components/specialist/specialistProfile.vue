<template>
   <div class="container-fluid">
            <div class="block-header">
                <div class="row clearfix">
                    <div class="col-md-6 col-sm-12">
                        <h1>Specialists Profile</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="../html/index.html">HRM</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Specialist Profile</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div class="row clearfix">
                <div class="col-lg-4 col-md-12">
                    <div class="card profile-header">
                        <div class="body text-center">
                            <img src="../../assets/images/user.png" class="rounded-circle" alt="">
                            <div class="mt-3">
                                <h5 class="mb-0"><strong>Chandler</strong> Bing</h5>
                                <span>Washington, d.c.</span>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="header">
                            <h2>About Me</h2>
                            <ul class="header-dropdown">
                                <li class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another Action</a></li>
                                        <li><a href="javascript:void(0);">Something else</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <small class="text-muted">Degree: </small>
                            <p>MBBS,MD</p>
                            <small class="text-muted">Designation: </small>
                            <p>Gynaecologist</p>
                            <small class="text-muted">Email address: </small>
                            <p>michael@gmail.com</p>
                            <small class="text-muted">Mobile: </small>
                            <p>+ 202-555-2828</p>
                            <small class="text-muted">Address: </small>
                            <p>795 Folsom Ave, Suite 600 San Francisco, 94107</p>
                            <hr>
                            <small class="text-muted">Social: </small>
                            <p><i class="fa fa-twitter m-r-5"></i> twitter.com/example</p>
                            <p><i class="fa fa-facebook  m-r-5"></i> facebook.com/example</p>
                            <p><i class="fa fa-github m-r-5"></i> github.com/example</p>
                            <p class="mb-0"><i class="fa fa-instagram m-r-5"></i> instagram.com/example</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-12">
                    <div class="card">
                        <div class="body">
                            <ul class="nav nav-tabs">
                                <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#Basic">Basic</a></li>
                                <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Account">Account</a></li>
                                <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#General">General</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="row profile_state">
                            <div class="col-lg-4 col-md-12">
                                <div class="body">
                                    <div class="form-group">
                                        <label class="d-block">OPD <span class="float-right">77%</span></label>
                                        <div class="progress progress-xxs">
                                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style="width: 77%;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12">
                                <div class="body">
                                    <div class="form-group">
                                        <label class="d-block">Operations <span class="float-right">50%</span></label>
                                        <div class="progress progress-xxs">
                                            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12">
                                <div class="body">
                                    <div class="form-group">
                                        <label class="d-block">Patient visit <span class="float-right">23%</span></label>
                                        <div class="progress progress-xxs">
                                            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="23" aria-valuemin="0" aria-valuemax="100" style="width: 23%;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-content padding-0">
                        <div class="tab-pane active" id="Basic">
                            <div class="card">
                                <div class="header">
                                    <h2>Basic Information</h2>
                                </div>
                                <div class="body">
                                    <div id="biography">
                                        <div class="row">
                                            <div class="col-md-3 col-sm-6">
                                                <strong>Full Name</strong>
                                                <br>
                                                <p class="text-muted">Dr.Colin Brown</p>
                                            </div>
                                            <div class="col-md-3 col-sm-6">
                                                <strong>Mobile</strong>
                                                <br>
                                                <p class="text-muted">(123) 456 7890</p>
                                            </div>
                                            <div class="col-md-3 col-sm-6">
                                                <strong>Email</strong>
                                                <br>
                                                <p class="text-muted">Colin_Brown@info.com</p>
                                            </div>
                                            <div class="col-md-3 col-sm-6">
                                                <strong>Location</strong>
                                                <br>
                                                <p class="text-muted">USA</p>
                                            </div>
                                        </div>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                        <br>
                                        <h6 class="font-bold">Education</h6>
                                        <ul class="list-group">
                                            <li class="list-group-item">M.B.B.S.,Harvard University, USA.</li>
                                            <li class="list-group-item">M.S.,Harvard University, USA.</li>
                                            <li class="list-group-item">SPINAL FELLOWSHIP Dr. John Adam, Allegimeines Krakenhaus, Schwerin, Germany.</li>
                                            <li class="list-group-item">Fellowship in Endoscopic Spine Surgery Phoenix, USA.</li>
                                            <li class="list-group-item">D.N.B from AIIMS</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="Account">
                            <div class="card">
                                <div class="header">
                                    <h2>Account Data</h2>
                                </div>
                                <div class="body">
                                    <div class="row clearfix">
                                        <div class="col-lg-12 col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" value="ChandlerBing" disabled placeholder="Username">
                                            </div>
                                            <div class="form-group">
                                                <input type="email" class="form-control" value="Chandler.info@yourdomain.com" placeholder="Email">
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Phone Number">
                                            </div>
                                        </div>

                                        <div class="col-lg-12 col-md-12">
                                            <h6>Change Password</h6>
                                            <div class="form-group">
                                                <input type="password" class="form-control" placeholder="Current Password">
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" placeholder="New Password">
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" placeholder="Confirm New Password">
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-primary">Update</button> &nbsp;&nbsp;
                                    <button class="btn btn-default">Cancel</button>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="General">
                            <div class="card">
                                <div class="header">
                                    <h2>General Information</h2>
                                </div>
                                <div class="body">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Phone Number">
                                            </div>
                                            <div class="form-group">

                                            </div>
                                            <div class="form-group">
                                                <label>Date Format</label>
                                                <div class="fancy-radio">
                                                    <label><input name="dateFormat" value="" type="radio"><span><i></i>May 18, 2018</span></label>&nbsp;&nbsp;
                                                    <label><input name="dateFormat" value="" type="radio"><span><i></i>2018, May, 18</span></label>&nbsp;&nbsp;
                                                    <label><input name="dateFormat" value="" type="radio" checked><span><i></i>2018-03-10</span></label>&nbsp;&nbsp;
                                                    <label><input name="dateFormat" value="" type="radio"><span><i></i>02/09/2018</span></label>&nbsp;&nbsp;
                                                    <label><input name="dateFormat" value="" type="radio"><span><i></i>10/05/2018</span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12">
                                            <h6>Email from Lucid</h6>
                                            <p>I'd like to receive the following emails:</p>
                                            <ul class="list-unstyled list-email-received">
                                                <li>
                                                    <label class="fancy-checkbox">
                                                        <input type="checkbox" checked><span>Weekly account summary</span></label>
                                                </li>
                                                <li>
                                                    <label class="fancy-checkbox">
                                                        <input type="checkbox"><span>Campaign reports</span></label>
                                                </li>
                                                <li>
                                                    <label class="fancy-checkbox">
                                                        <input type="checkbox" checked><span>Promotional news such as offers or discounts</span></label>
                                                </li>
                                                <li>
                                                    <label class="fancy-checkbox">
                                                        <input type="checkbox" checked><span>Tips for campaign setup, growth and client success stories</span></label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-primary">Update</button> &nbsp;&nbsp;
                                    <button class="btn btn-default">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>