
import Sidebar from '../Components/Sidebar';
import RequestTable from '../Components/Requests_table';
import Pagination from '../Components/Pagination';
import DetailsModal from '../Components/Details_modal';
import ComfirmationModal from '../Components/Comfirmation_modal';

export default function Room(){
    

    return(        
        <div className="row">
            <div className="col-3">
                <Sidebar/>
            </div>
            
            <div className="col-8 mt-5">                
                
                <RequestTable/>
                
                
            </div> 
            {/* Details modal           */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <DetailsModal/>
            </div>

            {/* Comfirmation modal  */}

            <div className="modal fade" id="comfirmationModal" tabindex="-1" aria-labelledby="comfirmationModalLabel" aria-hidden="true">
                <ComfirmationModal/>
            </div>      
             
        </div>
    )
}