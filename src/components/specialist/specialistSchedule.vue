<template>
  <div class="container-fluid">
            <div class="block-header">
                <div class="row clearfix">
                    <div class="col-md-6 col-sm-12">
                        <h1>Specialist Schedule</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="../html/index.html">HRM</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Specialist Schedule</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="row clearfix">
                <div class="col-lg-4 col-md-12">
                    <div class="card c_grid c_pink">
                        <div class="body text-center">
                            <div class="circle">
                                <img class="rounded-circle" src="../../assets/images/sm/avatar3.jpg" alt="">
                            </div>
                            <h6 class="mt-3 mb-0">David Wallace</h6>
                            <span>Michelle@info.com</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="body">
                            <table class="table table-calendar mb-0">
                                <tbody>
                                    <tr>
                                        <th>Mo</th>
                                        <th>Tu</th>
                                        <th>We</th>
                                        <th>Th</th>
                                        <th>Fr</th>
                                        <th>Sa</th>
                                        <th>Su</th>
                                    </tr>
                                    <tr>
                                        <td class="text-muted">27</td>
                                        <td class="text-muted">28</td>
                                        <td class="text-muted">29</td>
                                        <td class="text-muted">30</td>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td><a href="javascript:void(0)" class="table-calendar-link" title="Meeting" data-toggle="tooltip">4</a></td>
                                        <td>5</td>
                                        <td><a href="javascript:void(0)" class="table-calendar-link" title="Event" data-toggle="tooltip">6</a></td>
                                        <td>7</td>
                                        <td>8</td>
                                        <td>9</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td><a href="javascript:void(0)" class="table-calendar-link" title="Outing with Friends" data-toggle="tooltip">12</a></td>
                                        <td>13</td>
                                        <td>14</td>
                                        <td><a href="javascript:void(0)">15</a></td>
                                        <td>16</td>
                                        <td>17</td>
                                    </tr>
                                    <tr>
                                        <td>18</td>
                                        <td><a href="javascript:void(0)" class="table-calendar-link" title="Product Event" data-toggle="tooltip">19</a></td>
                                        <td><a href="javascript:void(0)" class="table-calendar-link" title="Meeting" data-toggle="tooltip">20</a></td>
                                        <td>21</td>
                                        <td>22</td>
                                        <td>23</td>
                                        <td>24</td>
                                    </tr>
                                    <tr>
                                        <td>25</td>
                                        <td>26</td>
                                        <td>27</td>
                                        <td>28</td>
                                        <td>29</td>
                                        <td>30</td>
                                        <td class="text-muted">1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card">
                        <div class="header">
                            <h2>Todo List</h2>
                        </div>
                        <div class="body">
                            <ul class="todo_list list-unstyled">
                                <li>
                                    <label class="fancy-checkbox">
                                        <input type="checkbox" name="checkbox" checked>
                                        <span>Product Event at New York</span>
                                    </label>
                                    <a href="javascript:void(0);" class="todo-delete"><i class="icon-trash"></i></a>
                                </li>
                                <li>
                                    <label class="fancy-checkbox">
                                        <input type="checkbox" name="checkbox" checked>
                                        <span>Meeting with Team</span>
                                    </label>
                                    <a href="javascript:void(0);" class="todo-delete"><i class="icon-trash"></i></a>
                                </li>
                                <li>
                                    <label class="fancy-checkbox">
                                        <input type="checkbox" name="checkbox">
                                        <span>Product Event for new product</span>
                                    </label>
                                    <a href="javascript:void(0);" class="todo-delete"><i class="icon-trash"></i></a>
                                </li>
                                <li>
                                    <label class="fancy-checkbox">
                                        <input type="checkbox" name="checkbox" checked>
                                        <span>Lunch friends in Sunday</span>
                                    </label>
                                    <a href="javascript:void(0);" class="todo-delete"><i class="icon-trash"></i></a>
                                </li>
                                <li>
                                    <label class="fancy-checkbox">
                                        <input type="checkbox" name="checkbox">
                                        <span>Meeting with Team</span>
                                    </label>
                                    <a href="javascript:void(0);" class="todo-delete"><i class="icon-trash"></i></a>
                                </li>
                                <li>
                                    <label class="fancy-checkbox">
                                        <input type="checkbox" name="checkbox">
                                        <span>Product Event for new product</span>
                                    </label>
                                    <a href="javascript:void(0);" class="todo-delete"><i class="icon-trash"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-12">
                    <div class="card">
                        <div class="body">
                            <div id="calendar"></div>
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