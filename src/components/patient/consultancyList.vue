<template>
        <div class="container-fluid">
            <div class="block-header">
                <div class="row clearfix">
                    <div class="col-md-6 col-sm-12">
                        <h1>All Patient</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="../html/index.html">HRM</a></li>
                            <li class="breadcrumb-item active" aria-current="page">All Patient</li>
                            </ol>
                        </nav>
                    </div>
                    <div class="col-md-6 col-sm-12 text-right hidden-xs">
                        <a class="btn btn-sm btn-primary" data-toggle="modal" data-target="#addPatient" title="">Add New</a>
                    </div>
                </div>
            </div>

            <div class="row clearfix">
                <div class="col-sm-12">
                    <div class="table-responsive">
                        <table class="table table-hover table-custom spacing5">
                            <thead>
                                <tr>
                                    <th>Media</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Date & Time</th>
                                    <th>Consulting</th>
                                    <th>Injury/Condition</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="w60">
                                        <img src="../../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" class="w35 rounded" data-original-title="Avatar Name">
                                    </td>
                                    <td>
                                        <div>Jason Porter</div>
                                        <p class="mb-0">+ 264-625-5858</p>
                                    </td>
                                    <td>jason-porter@example.com</td>
                                    <td>
                                        <div>13 June 2019</div>
                                        <span class="text-muted">7:12PM to 8:30PM</span>
                                    </td>
                                    <td>Dr. David</td>
                                    <td>Fever</td>
                                    <td><span class="badge badge-success">Approved</span></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

                    <div class="modal fade" id="addPatient" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="title" id="defaultModalLabel">Add Patient</h4>
            </div>
            <div class="modal-body">
                <div class="body">
                    <form>
                        <div class="form-group row">
                            <label class="col-md-2 col-sm-4 col-form-label">Basic Information</label>
                            <div class="col-md-6 col-sm-8">
                                <div class="row clearfix">
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="First Name">
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Last Name">
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Phone No.">
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-md-3 col-sm-6">
                                        <div class="input-group">
                                            <input type="text" data-provide="datepicker" data-date-autoclose="true" class="form-control" placeholder="Select Date">
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Age">
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="form-group">
                                            <select class="form-control show-tick">
                                                <option value="">- Gender -</option>
                                                <option value="10">Male</option>
                                                <option value="20">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Enter Your Email">
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-lg-12">
                                        <input type="file" class="dropify">
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group m-t-20">
                                            <textarea rows="6" class="form-control" placeholder="Description"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row mt-5">
                            <label class="col-md-2 col-sm-4 col-form-label">Registration Information</label>
                            <div class="col-md-6 col-sm-10">
                                <div class="row clearfix">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Doctor Name">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Staff on Duty">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Ward No.">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="text" data-provide="datepicker" data-date-autoclose="true" class="form-control" placeholder="Please choose date">
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                        <button type="submit" class="btn btn-outline-secondary">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
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
export default {

}
</script>

<style>

</style>