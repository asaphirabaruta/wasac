export default function DetailsModal(){
    return(
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
    )
}