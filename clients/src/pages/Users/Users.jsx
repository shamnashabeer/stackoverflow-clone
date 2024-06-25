// import React from 'react'
// import { useLocation } from 'react-router-dom'

// import './Users.css'
// import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
// import UsersList from './UsersList'

// const Users = () => {

//   const location = useLocation()

//   console.log(location)

//   return (
//     <div className='home-conatiner-1'>
//       <LeftSidebar/>
//     <div className='home-conatiner-2' >
//       {
//         location.pathname === '/Users' ?
//         <UsersList/> :
//         <></>
//       }
//     </div>
//     </div>
//   )
// }

// export default Users
import React from "react";

import "./Users.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;