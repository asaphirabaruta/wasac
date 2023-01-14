export default function RequestForm(){
    return(
        <div className="row d-flex justify-content-center">
            <div className="card p-3 px-md-5 mt-4 shadow col-11 col-md-8">            
                <h1 className="d-flex justify-content-center">Water Request Form</h1>
                <form>
                    <div className="row">
                        <div className="col">
                            <label>First Name:</label>
                            <input className="form-control" type="text"/><br/>
                        </div>
                        <div className="col">
                            <label>Last Name:</label>
                            <input className="form-control" type="text"/><br/>
                        </div>
                    </div>

                    <select className="form-select">
                        <option selected>Choose Branch</option>
                        <option>MUHANGA</option>
                        <option>KACYIRU</option>
                    </select> <br/>

                    <label>Address:</label>                    
                    <div className="row">

                        <div className="col-md mb-3">
                            <select className="form-select">
                                <option selected>Province</option>
                                <option>Northern</option>
                                <option>Southern</option>
                            </select>
                        </div>

                        <div className="col-md mb-3">
                            <select className="form-select">
                                <option selected>District</option>
                                <option>MUHANGA</option>
                                <option>GASABO</option>
                            </select>
                        </div>

                        <div className="col-md mb-3">
                            <select className="form-select">
                                <option selected>Sector</option>
                                <option>GISOZI</option>
                                <option>KACYIRU</option>
                            </select>
                        </div>

                        <div className="col-md mb-3">
                            <select className="form-select">
                                <option selected>Cell</option>
                                <option>MUSEZERO</option>
                                <option>KACYIRU</option>
                            </select>
                        </div>

                    </div><br/>

                    <div className="row">
                        <div className="col-md">
                            <label>Phone Number:</label>
                            <input className="form-control" type="tel"/>
                        </div>
                        <div className="col-md">
                            <label>Email (optional):</label>
                            <input className="form-control" type="email"/>
                        </div>            
                    </div><br/>                    

                    <label>Identification:</label>
                    <div className="row">
                        <div className="col-md-4">
                            <select className="form-select mb-3">
                                <option selected>Choose ID type</option>
                                <option>ID Card</option>
                                <option>Passport</option>
                            </select>
                        </div>
                        <div className="col-md-8">
                            <input className="form-control" type="text" placeholder="Type in ID number..." />
                        </div>
                    </div> <br/>
                    <div className="row mb-3">
                        <div className="col-md-6 mb-3">
                            <label>Copy of ID:</label>
                            <input className="form-control" type="file"/>
                        </div>
                        <div className="col-md-6">
                            <label>Copy of UPI:</label>
                            <input className="form-control" type="file"/>
                        </div>
                    </div>                    

                    <div className="d-flex justify-content-center mb-3">
                        <button className="btn btn-primary">Send Request</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}