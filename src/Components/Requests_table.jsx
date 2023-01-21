import Pagination from "./Pagination";
import RequestFilter from "./Requests_filter";

export default function RequestTable(){
    return(
        <div>
            <RequestFilter/>

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
                        <tr>
                            <th scope="row">5</th>
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
                        <tr>
                            <th scope="row">6</th>
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
                        <tr>
                            <th scope="row">7</th>
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
                        <tr>
                            <th scope="row">8</th>
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

                <Pagination/>
        </div>
        
    )
}