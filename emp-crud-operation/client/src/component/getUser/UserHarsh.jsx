import React,{useState,useEffect} from "react";
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import"@fortawesome/fontawesome-free/css/all.min.css";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/getall`);
        setUsers(response.data);
      }
      catch (error) {
       
          if (error.response?.status === 401) {
            toast.error("Unauthorized,Please login Again!!", {
              position: 'top-right'
            });
          }
          else {
            toast.error("Failed to Fetch the User data", {
              position: 'top-right'
            });

          }
       
      }

    };
    fetchData();
  }, []);


  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8000/api/delete/${userId}`);
      setUsers((prevUsers)=>prevUsers.filter((user)=>user._id!==userId));
      toast.success("User Deleted Successfully!");
    } catch (error) {
      toast.error("Failed to Delete the User!");
    }
  };

//   return(<div>
//     <div>
//          <h1>User list</h1>
//          <Link to={'/add'}>Add user</Link>

//     </div>
//     <div>
//          <table>
//               <thead>
//                    <tr>
//                         <th>S.No.</th>
//                         <th>User Name</th>
//                         <th>User Email Action</th>
//                    </tr>
//               </thead>
//               <tbody>
//                    {users.map((user,index)=>(
//                         <tr key={user._id}>
//                              <td>{index+1}</td>
//                              <td>{user.name}</td>
//                              <td>{user.email}</td>
//                              <td>

//                               <button className="btn" onClick={()=>deleteUser(user._id)}>
//                                 <Link><i className="fa fa-trash">Delete</i></Link>
//                               </button>
//                               <button className="btn btn-info">
//                                 <Link to={"/edit"}>
//                                 <i className="fa fa-pen">Edit</i></Link>
//                               </button>
                                  
//                              </td>
//                         </tr>
//                    ))}
//                    <tr>
                        
//                    </tr>
//               </tbody>
//          </table>
//     </div>
//  </div>

// )

return (
  <div className="container mt-5">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h1 className="text-body">User List</h1>
      <Link to="/add" className="btn btn-success">
        <i className="fa fa-plus"></i> Add User
      </Link>
    </div>

    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>S.No.</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <div className="btn-group" role="group">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteUser(user._id)}
                  >
                    <i className="fa fa-trash"></i> Delete
                  </button>
                  <Link
                    to={'/edit/${user._id}'}
                    className="btn btn-dark btn-sm"
                  >
                    <i className="fa fa-pen"></i> Edit
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {users.length === 0 && (
      <div className="alert alert-info text-center" role="alert">
        No users found. Click on "Add User" to create a new one.
      </div>
    )}
  </div>
);
};

export default User;