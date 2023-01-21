export default function Sidebar(){
    return(
        <div className="nav flex-column nav-pills shadow-lg p-3 h-100 my-4 d-flex justify-content-start rounded" aria-orientation="vertical">
                <button className="d-flex justify-content-start nav-link active" data-bs-toggle="pill" type="button" role="tab">
                    <i className="bi bi-house-door mx-2"></i>
                    <span className="d-none d-sm-none d-lg-block">Requests</span>
                </button>
                <button className="nav-link d-flex justify-content-start" data-bs-toggle="pill" type="button" role="tab">
                    <i className="bi bi-person mx-2"></i>
                    <span className="d-none d-sm-none d-lg-block">Profile</span>
                </button>
                <button className="nav-link d-flex justify-content-start" data-bs-toggle="pill" type="button" role="tab">
                    <i className="bi bi-graph-up mx-2"></i>
                    <span className="d-none d-sm-none d-lg-block"> Dashboard </span>
                </button>
                <button className="nav-link d-flex justify-content-start" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                    <i className="bi bi-envelope mx-2"></i>
                    <span className="d-none d-sm-none d-lg-block"> Messages </span>
                </button>
                <button className="nav-link d-flex justify-content-start" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                    <i className="bi bi-gear mx-2"></i>
                    <span className="d-none d-sm-none d-lg-block"> Settings </span>
                </button>
            </div>
    )
}