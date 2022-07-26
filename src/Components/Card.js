
import {  useDispatch } from "react-redux";
import { modal, modalIgnite } from "../features/post";

const Card = ({ data }) => {
  // const [modaler, setModaler] = useState('')
  const dispatch = useDispatch()
  let olddate = new Date(data.date)
  
  const hoverhandler = (id) => {
    document.getElementById(`learnmore${id}`).style.visibility = "visible";
  };

  const hoverlefthandler = (id) => {
    document.getElementById(`learnmore${id}`).style.visibility = "hidden";
  };

  return (
    <div
      className="rounded-md shadow-lg shadow-zinc-200 m-3 text-black "
      onMouseOver={(e) => hoverhandler(data.id)}
      onMouseLeave={e => hoverlefthandler(data.id)}
      onClick={e => {
        dispatch(modalIgnite(true))
        dispatch(modal(data))
      }}
    >
      {window.innerWidth < 800 ? (
        <div
          className={"w-full"}
          style={{ backgroundImage: `url(${data.thumbnail.large})`, backgroundSize: "auto 150%", backgroundPosition: "bottom -30px center"}}
        >
          <div className=" w-full  text-white">
            <p
              className=" text-2xl bg-black bg-opacity-50 font-bold text-center py-28"
              id={`learnmore${data.id}`}
              style={{ visibility: "hidden" }}
            >
              Learn More
            </p>
          </div>
        </div>
      ) : (
        <div
          className={"w-full"}
          style={{ backgroundImage: `url(${data.thumbnail.large})`, backgroundSize: "auto 150%", backgroundPosition: "bottom -30px center"}}
        >
          <div className=" w-full  text-white ">
            <p
              className=" text-2xl bg-black bg-opacity-50 font-bold text-center py-28"
              id={`learnmore${data.id}`}
              style={{ visibility: "hidden" }}
            >
              Learn More
            </p>
          </div>
        </div>
      )}
      <div className="pt-5 px-12 pb-10">
        <div className="flex">
          <div className="w-5 h-5 bg-cyan-500 mx-1 rounded-full"></div>
          <div className="w-5 h-5 bg-yellow-400 mx-1 rounded-full"></div>
        </div>
        <p className="font-bold py-3 text-lg">{data.title}</p>
        <p className="font-medium text-sm py-3 text-opacity-70 text-slate-600">
          {data.content}
        </p>
        <div className="py-3 flex justify-between items-center w-full text-sm text-opacity-70 text-slate-600 mb-0">
          <p>
            {data.author.name} - {data.author.role}
          </p>
          <p>{olddate.toLocaleDateString("en-US", {dateStyle: "medium"})}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
