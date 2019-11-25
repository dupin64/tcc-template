<template>
        <div class="container-fluid">
            <div class="block-header">
                <div class="row clearfix">
                    <div class="col-md-6 col-sm-12">
                        <h1>Receptionist Profile</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="../html/index.html">HRM</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Receptionist Profile</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div class="row clearfix">
                <div class="col-md-12">
                    <div class="card social">
                        <div class="profile-header d-flex justify-content-between justify-content-center">
                            <div class="d-flex">
                                <div class="mr-3">
                                    <img src="../../assets/images/user.png" class="rounded" alt="">
                                </div>
                                <div class="details">
                                    <h5 class="mb-0">Louis Pierce</h5>
                                    <span class="text-light">will.smith@info.com</span>
                                    <div>+123 456 789</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-5">
                    <div class="card">
                        <div class="body">
                            <small class="text-muted">Address: </small>
                            <p>795 Folsom Ave, Suite 600 San Francisco, 94107</p>
                            <hr>
                            <small class="text-muted">Email address: </small>
                            <p>louispierce@example.com</p>
                            <hr>
                            <small class="text-muted">Mobile: </small>
                            <p>+ 202-222-2121</p>
                            <hr>
                            <small class="text-muted">Birth Date: </small>
                            <p class="m-b-0">October 17th, 93</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="header">
                            <h2>Blood Report</h2>
                        </div>
                        <div class="body">
                            <table class="table table-hover table-striped mb-0">
                                <tbody>
                                    <tr>
                                        <td>Down Cluster</td>
                                        <td>90.9% </td>
                                    </tr>
                                    <tr>
                                        <td>Down Fiber</td>
                                        <td>1.8%</td>
                                    </tr>
                                    <tr>
                                        <td>Waterfowl Feathers </td>
                                        <td>1.7%</td>
                                    </tr>
                                    <tr>
                                        <td>Quill</td>
                                        <td>0.0%</td>
                                    </tr>
                                    <tr>
                                        <td>Landfowl</td>
                                        <td>0.1%</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>100.0%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8 col-lg-8 col-md-7">
                    <div class="card">
                        <div class="body">
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters readable English.</p>
                            <ul class="list-unstyled mt-5 mb-5">
                                <li>
                                    <div>Blood Pressure</div>
                                    <div class="progress m-b-20">
                                        <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"> <span class="sr-only">40% Complete (success)</span> </div>
                                    </div>
                                </li>
                                <li>
                                    <div>Heart Beat</div>
                                    <div class="progress m-b-20">
                                        <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"> <span class="sr-only">20% Complete</span> </div>
                                    </div>
                                </li>
                                <li>
                                    <div>Haemoglobin</div>
                                    <div class="progress m-b-20">
                                        <div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"> <span class="sr-only">60% Complete (warning)</span> </div>
                                    </div>
                                </li>
                                <li>
                                    <div>Sugar</div>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80% Complete (danger)</span> </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="table-responsive">
                                <table class="table table-striped custom-table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Doctor</th>
                                            <th>Treatment</th>
                                            <th>Charges($)</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>11/05/2019</td>
                                            <td>Dr.Michelle</td>
                                            <td>Check up</td>
                                            <td>14$</td>
                                            <td>
                                                <button type="button" class="btn btn-default btn-sm" title="Edit"><i class="fa fa-pencil"></i></button>
                                                <button type="button" class="btn btn-default btn-sm" title="Delete"><i class="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>13/05/2019</td>
                                            <td>Dr.Porter</td>
                                            <td>X-Ray</td>
                                            <td>16$</td>
                                            <td>
                                                <button type="button" class="btn btn-default btn-sm" title="Edit"><i class="fa fa-pencil"></i></button>
                                                <button type="button" class="btn btn-default btn-sm" title="Delete"><i class="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>13/05/2019</td>
                                            <td>Dr.David</td>
                                            <td>Blood Test</td>
                                            <td>24$</td>
                                            <td>
                                                <button type="button" class="btn btn-default btn-sm" title="Edit"><i class="fa fa-pencil"></i></button>
                                                <button type="button" class="btn btn-default btn-sm" title="Delete"><i class="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>14/05/2019</td>
                                            <td>Dr.David</td>
                                            <td>Admit</td>
                                            <td>14$</td>
                                            <td>
                                                <button type="button" class="btn btn-default btn-sm" title="Edit"><i class="fa fa-pencil"></i></button>
                                                <button type="button" class="btn btn-default btn-sm" title="Delete"><i class="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>15/05/2019</td>
                                            <td>Dr.Michelle</td>
                                            <td>Operation</td>
                                            <td>14$</td>
                                            <td>
                                                <button type="button" class="btn btn-default btn-sm" title="Edit"><i class="fa fa-pencil"></i></button>
                                                <button type="button" class="btn btn-default btn-sm" title="Delete"><i class="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>18/05/2019</td>
                                            <td>Dr.Michelle</td>
                                            <td>Discharge</td>
                                            <td>14$</td>
                                            <td>
                                                <button type="button" class="btn btn-default btn-sm" title="Edit"><i class="fa fa-pencil"></i></button>
                                                <button type="button" class="btn btn-default btn-sm" title="Delete"><i class="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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