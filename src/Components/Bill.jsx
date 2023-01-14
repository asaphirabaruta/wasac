export default function Bill(){
    return(
        <div className="row d-flex justify-content-center mt-3">
        <div className="col-md-10">
            <h6 className="fw-bold mt-3">I. Client Description </h6>
            <div className="row m-3">
                <div className="col-md-6">
                    <h6>Names:</h6>
                    <h6>ID Number:</h6>
                    <h6>District:</h6>
                    <h6>Sector:</h6>
                    <h6>Cell:</h6>
                    <h6>Village:</h6>
                    <h6>Plot Number:</h6>
                    <h6>Telephone:</h6>
                </div>
                <div className="col-md-6">
                    <h6>Quotation Number:</h6>
                    <h6>Request Date:</h6>
                    <h6>Measurement Date:</h6>
                    <h6>Date Quotation:</h6>
                </div>
            </div>
            <h5 className="d-flex justify-content-center fw-bold">BILLING OF QUANTITIES FOR NEW WATER CONNECTION</h5>
            <table className="table table-bordered border-primary">
                <tbody>
                    <tr>
                        <th colspan="6">BRANCH NAME</th>
                        <th colspan="6">xxxxxxxxx</th>
                    </tr>
                    <tr>
                        <th colspan="12">II.Description of the material to be used for connection </th>
                    </tr>

                    <tr>
                        <th>#</th>
                        <th colspan="4">Item Description</th>
                        <th colspan="2">Quantity</th>
                        <th colspan="2">Unit Price</th>
                        <th colspan="3">Total Price</th>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td colspan="4">Item 1</td>
                        <td colspan="2"></td>
                        <td colspan="2"></td>
                        <td colspan="3"></td>                        
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td colspan="4">Item 2</td>
                        <td colspan="2"></td>
                        <td colspan="2"></td>
                        <td colspan="3"></td>                        
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="4">......</td>
                        <td colspan="2"></td>
                        <td colspan="2"></td>
                        <td colspan="3"></td>                        
                    </tr>
                    <tr>
                        <th scope="row">n</th>
                        <td colspan="4">Item n</td>
                        <td colspan="2"></td>
                        <td colspan="2"></td>
                        <td colspan="3"></td>                        
                    </tr>
                    <tr>
                        <th colspan="9">S/TOTAL II</th>
                        <td colspan="3">*******</td>                                                
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th colspan="12">III. MANPOWER </th>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td colspan="4">Technician</td>
                        <td colspan="2">*</td>
                        <td colspan="2">***</td>
                        <td colspan="3">***</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td colspan="4">Technician Helper</td>
                        <td colspan="2">*</td>
                        <td colspan="2">***</td>
                        <td colspan="3">***</td>
                    </tr>
                    <tr>
                        <th colspan="9">S/TOTAL II</th>
                        <td colspan="3">*******</td>                                                
                    </tr>
                    <tr>
                        <th colspan="9">S/TOTAL III</th>
                        <td colspan="3">*******</td>                                                
                    </tr>
                    <tr>
                        <th colspan="9">VAT(18%)</th>
                        <td colspan="3">*******</td>                                                
                    </tr>
                    <tr>
                        <th colspan="9">TOTAL (All taxes included)</th>
                        <td colspan="3">*******</td>                                                
                    </tr>
                </tbody>
            </table>
            <h6>Amount in words:***********</h6>

            <div className="row mb-5 mt-5">
                <div className="col-md-4 mb-3">
                    <h6 className="fw-bold">Prepared by:</h6>
                    <h6>Title and Names</h6>
                </div>
                <div className="col-md-4 mb-3">
                    <h6 className="fw-bold">Verified by:</h6>
                    <h6>Water Distribution Officer</h6>
                </div>
                <div className="col-md-4 mb-3">
                    <h6 className="fw-bold">Approved by:</h6>
                    <h6>Title and Names</h6>
                </div>
            </div>
        </div>
        </div>
    )
}