import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { createContext, useEffect } from "react";
import {initialise} from "./features/post"
import Main from "./Components/Main";

export const StateContext = createContext("")  
function App() {
  const dispatch = useDispatch()
  let state = useSelector((state) => state.posts.value)
  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts").then(res => {
      dispatch(initialise(res.data))
    })
  }, [])
  return (
    <StateContext.Provider value={{state: state}}>
      <Main/>
    </StateContext.Provider>
  );
}

export default App;
