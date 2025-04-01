import Loading from "./Loading";
import useFetchData from "../hooks/useFetchData";
const User = () => {
  const {data : users , error , loading} = useFetchData('https://fakestoreapi.com/users');
    if(loading){
      return <>
        <Loading/>
      </>
    }
    if(error){
      return <>
        <h1 style={{color : "red"}}>{error}</h1>
      </>
    }
    console.log(users)
  return (
    <div className="container">
      <h2 className="title">User List</h2>
      <ul className="list">
        {users.map((user, index) => (
          <li key={index} className="list-item">{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
