<template>
        <div class="container-fluid">
            <div class="block-header">
                <div class="row clearfix">
                    <div class="col-md-6 col-sm-12">
                        <h1>Consultancy List</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="../html/index.html">HRM</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Consultancy List</li>
                            </ol>
                        </nav>
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
                                    <th>status</th>
                                    <th>Action</th>
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
                                    <td>
                                        <button type="button" class="badge badge-success" title="Approve"><i class="fa fa-check"></i></button>
                                        <button type="button" class="badge badge-danger" title="Deny"><i class="fa fa-times"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                   <td class="w60">
                                        <img src="../../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" class="w35 rounded" data-original-title="Avatar Name">
                                    </td>
                                    <td>
                                        <div>Jason Porter</div>
                                        <p class="mb-0">+ 264-625-5858</p>
                                    </td>
                                    <td>jason-porter@example.com</td>
                                    <td>
                                        <div>13 June 2019</div>
                                        <span class="text-muted">8:08PM to 8:30PM</span>
                                    </td>
                                    <td>Dr. Theresa</td>
                                    <td>Malaria</td>
                                    <td><span class="badge badge-warning">Pending</span></td>
                                    <td>
                                        <button type="button" class="badge badge-success" title="Approve"><i class="fa fa-check"></i></button>
                                        <button type="button" class="badge badge-danger" title="Deny"><i class="fa fa-times"></i></button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
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