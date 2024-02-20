import React, { useContext } from 'react';
import './sidebar.css';
import img from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faPuzzlePiece, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link} from 'react-router-dom';
import { Context } from '../../index.js';

function Sidebar() {
    const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
    

    return (
        <div className='mainsidebar text-white pe-5'>
            <div className='mb-4 text-end me-4 d-flex justify-content-end'>
                <FontAwesomeIcon icon={faUser} />
                <h6 className='ms-2'><Link to='/'><FontAwesomeIcon icon={faHouse} /> Home</Link></h6>
            </div>
            <div className='d-flex justify-content-start ms-5 mb-5'>
                <img src={img} alt="Logo" />
                <h4 className='ms-4'>Jobie</h4>
            </div>

            <div className='mb-4 text-end me-4 d-flex justify-content-end'>
              <FontAwesomeIcon icon={faHouse} />
              {!isAuthorized ? (
                <Link to={'/login'}>Display Profile</Link>
              ) : (
                <Link to={'/profile'}>Display Profile</Link>
              )}
            </div>
            <div className='mb-4 text-end me-4 d-flex justify-content-end'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <h6 className='ms-2'>Search Jobs</h6>
            </div>
            <div className='mb-4 text-end me-4 d-flex justify-content-end'>
                <FontAwesomeIcon icon={faPuzzlePiece} />
                <h6 className='ms-2'>Applications</h6>
            </div>
            <div className='mb-4 text-end me-4 d-flex justify-content-end'>
                  <FontAwesomeIcon icon={faUser} />
                  {!isAuthorized ? (
                    <h6 className='ms-2'><Link to={'/login'}>Login</Link></h6>
                  ) : (
                    <h6 className='ms-2'><Link to={'/logout'}>Logout</Link></h6>
                  )}
                </div>
                
                        </div>
                    );
                }

export default Sidebar;
