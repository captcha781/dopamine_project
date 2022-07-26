import { useContext } from "react";
import { StateContext } from "../App";
import Card from "./Card";
import { useSelector } from "react-redux";
import Modal from "./Modal";

const Main = () => {
  let modalData = useSelector(state => state.posts.modal)
  let modal = useSelector(state => state.posts.modalIgnite)
  const state = useContext(StateContext).state;
  
  return (
    <div className="grid items-start place-items-center h-screen ">
      <div className="card-layout">
        {state.length > 0
          ? state.map((card) => {
              return <Card key={card.id} data={card}/>
            })
          : null}
      </div>
      { modal ? <Modal data={modalData}/>
: null
      }
    </div>
  );
};

export default Main;
