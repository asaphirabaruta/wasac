export default function SignUpForm(){
    return(
        <div className="row d-flex justify-content-center">
            <div className="card p-3 px-md-5 mt-5 shadow col-10 col-md-8">            
                <h1 className="d-flex justify-content-center">Create Your Account!</h1>
                <form>
                    <label>Email:</label>
                    <input className="form-control" type="text"/><br/>

                    <label>Password:</label>
                    <input className="form-control" type="password"/><br/>

                    <label>Comfirm Password:</label>
                    <input className="form-control" type="password"/><br/>

                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}