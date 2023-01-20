import Toast from 'react-bootstrap/Toast';
import React, { useState } from 'react';
import ToastContainer from 'react-bootstrap/ToastContainer';

export default function Room(){
    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);

    const [position, setPosition] = useState('top-start');
  
    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    return(        
        <div className="row">
            <div className="nav flex-column nav-pills col-md-3 shadow p-3 h-75 mt-5 d-flex justify-content-start" aria-orientation="vertical">
                <button className="nav-link active" data-bs-toggle="pill" type="button" role="tab">
                    <i className="bi bi-house-door mx-2"></i>
                    <span>Home</span>
                </button>
                <button className="nav-link" data-bs-toggle="pill" type="button" role="tab">
                    <i className="bi bi-person mx-2"></i>
                    Profile
                </button>
                <button className="nav-link" data-bs-toggle="pill" type="button" role="tab">
                    <i className="bi bi-graph-up mx-2"></i>
                    Dashboard
                </button>
                <button className="nav-link" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                    <i className="bi bi-envelope mx-2"></i>
                    Messages
                </button>
                <button className="nav-link" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                    <i className="bi bi-gear mx-2"></i>
                    Settings
                </button>
            </div>
            <div className="col-md-8 mt-5">
                <div className="d-flex justify-content-between align-items-center">

                    <div className="mb-3 ms-3">
                        <button type="button" className="btn btn-outline-primary btn-sm me-2">Approved</button>
                        <button type="button" className="btn btn-outline-primary btn-sm me-2">Pending</button>
                        <button type="button" className="btn btn-outline-primary btn-sm me-2">Rejected</button>  
                    </div>
                    <div className="mb-3">
                        <form className="d-flex flex-row">
                            <input type="text" className="form-control" placeholder="Search..."/>
                            <button className="btn btn-primary ms-2">Search</button>
                        </form>
                    </div>
                </div>
                
                <table className="table mx-3 table-striped">
                    <thead className="">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>Habimana Mark</td>
                            <td>
                                <span class="badge rounded-pill text-bg-success">
                                    <i class="bi bi-check2 me-1"></i>
                                    Approved
                                </span>
                            </td>
                            <td>14/05/2022</td>
                            <td>
                                <button className="btn btn-primary btn-sm">View</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>
                                <span class="badge rounded-pill text-bg-danger">
                                    <i class="bi bi-x-lg me-1"></i>
                                    Rejected
                                </span>
                            </td>
                            <td>14/05/2022</td>
                            <td>
                                <button className="btn btn-primary btn-sm">View</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mark</td>
                            <td>
                                <span class="badge rounded-pill text-bg-warning">
                                    <i class="bi bi-question-lg me-1"></i>
                                    Pending
                                </span>
                            </td>
                            <td>14/05/2022</td>
                            <td>
                                <button className="btn btn-primary btn-sm">View</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Jacob</td>
                            <td>
                                <span class="badge rounded-pill text-bg-success">
                                    <i class="bi bi-check2 me-1"></i>
                                    Approved
                                </span>
                            </td>
                            <td>14/05/2022</td>
                            <td>
                                <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link">
                                <i class="bi bi-chevron-left"></i>
                            </a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                <i class="bi bi-chevron-right"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
                
            </div> 
            {/* Details modal           */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Mark Request</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#comfirmationModal">Approve</button>
                        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#comfirmationModal">Reject</button>
                    </div>
                    </div>
                </div>
            </div>

            {/* Comfirmation modal  */}

            <div className="modal fade" id="comfirmationModal" tabindex="-1" aria-labelledby="comfirmationModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1>Comfirm Decision</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to approve this</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={toggleShowA}>Yes</button>
                            <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">No</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* alert  */}
            <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                <img src="..." class="rounded me-2" alt="..."/>
                <strong class="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                Hello, world! This is a toast message.
                </div>
            </div>
            </div>
            <ToastContainer position='top-end'>
            <Toast show={showA} onClose={toggleShowA} delay={5000} autohide>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>Just Now</small>
                </Toast.Header>
                <Toast.Body>You have approved Mark's request for water connection!</Toast.Body>
            </Toast>
            </ToastContainer>
        
            
        </div>
    )
}