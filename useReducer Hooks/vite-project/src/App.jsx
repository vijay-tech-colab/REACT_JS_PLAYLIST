import { useReducer } from "react";
import "./App.css";
const initialState = {
  name: "",
  email: "",
  password: "",
};
const reducerFun = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, [action.type]: action.data };
    case "email":
      return { ...state, [action.type]: action.data };
    case "password":
      return { ...state, [action.type]: action.data };
  }
};
const App = () => {
  const [state, formDispatch] = useReducer(reducerFun, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  }

  return (
    <div className="w-full h-screen flex bg-red-950 gap-1 text-white">
      <form className=" m-10 flex gap-1 items-center justify-center w-full flex-col" 
      onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-2"
          name="name"
          value={state.name}
          onChange={(event) =>
            formDispatch({ type: "name", data: event.target.value })
          }
        />
        <input
          type="email"
          className="border-2"
          name="email"
          value={state.email}
          onChange={(event) =>
            formDispatch({ type: "email", data: event.target.value })
          }
        />
        <input
          type="password"
          className="border-2"
          name="password"
          value={state.password}
          onChange={(event) =>
            formDispatch({ type: "password", data: event.target.value })
          }
        />
        <button className="border-2 py-2 px-4 cursor-pointer">submit</button>
      </form>
    </div>
  );
};

export default App;
