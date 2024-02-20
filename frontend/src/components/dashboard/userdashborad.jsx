
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Searchjobs from '../sidebar/searchjobs/searchjobs';
import Specificfield from '../specific field/specificfield';
import Displayjob from '../displayjob/displayjob';
import { BrowserRouter,Route, Routes, useParams} from 'react-router-dom';
import Login from '../specific field/Login/login';
function UserDashboard() {
  const {name} =  useParams();
  return (

    <>
    <div>
      <Header />
      <div className='d-flex'>
        <Sidebar name = {name}/>
        <div>
          <Searchjobs />
          <Specificfield />
        </div>
      </div>
    </div>

    

    </>
  );
}
export default UserDashboard;
