export default function RequestFilter(){
    return(
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
    )
}