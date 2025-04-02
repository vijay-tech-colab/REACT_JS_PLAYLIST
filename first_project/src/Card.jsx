import React, { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, fetchUserData } from "./store/slices/userSlice";
// Sample data (replace with dynamic data or API call)

const CrudCard = () => {
  const {users ,isLoading , isError} = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    console.log("User deleted:", id);
  };
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);
  console.log(users);
  if(isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: "10px",
        gap: "6px",
      }}
    >
      {users.map((user) => (
        <>
          <div className="card">
            <div className="card-header">
              <h2>{user.name.firstname}</h2>
              <button
                onClick={() => handleDelete(user.id)}
                className="delete-btn"
              >
                <FaTrashAlt />
              </button>
            </div>
            <div className="card-body">
              <p>
                Name: {user.name.firstname} {user.name.lastname}
              </p>
              <p>Email: {user.email}</p>
              <p>Username: {user.username}</p>
              <p>Phone: {user.phone}</p>
              <p>
                Address: {user.address.number} {user.address.street},{" "}
                {user.address.city}, {user.address.zipcode}
              </p>
              <p>
                Geolocation: Lat: {user.address.geolocation.lat}, Long:{" "}
                {user.address.geolocation.long}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default CrudCard;
