import { useDispatch } from "react-redux";
import { modal, modalIgnite } from "../features/post";


const Modal = ({data}) => {
    const dispatch = useDispatch()
    return <div className="w-full h-screen fixed bg-gray-500 bg-opacity-40">
        <div className="w-full h-screen bg-transparent grid place-items-center">
            <div className="w-11/12 lg:w-4/12 bg-white rounded-md">
              <div className="w-full flex justify-end p-3">
                <div className="w-7 h-7 " style={{backgroundImage: "url('https://img.icons8.com/ios-glyphs/344/delete-sign.png')", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}} onClick={e => {
                    dispatch(modal({}))
                    dispatch(modalIgnite(false))
                }}></div>
              </div>
              <div className="">
                <img src={data.thumbnail.large} alt={data.thumbnail.title}/>
              </div>
              <div className="pt-8 px-8 font-bold text-lg">
                <p>{data.title}</p>
              </div>
              <div className="font-medium text-sm pt-8 px-8 text-opacity-70 text-slate-600">
                {data.content}
              </div>
              <div className="flex justify-start items-center px-8 py-8">
                    <div className="mx-0 w-10 h-10 rounded-full"><img className="rounded-full" src={data.author.avatar} alt={"author_avatar"}></img></div>
                    <div className="ml-5 text-sm text-opacity-70 text-slate-600">{data.author.name}</div>
              </div>
            </div>
        </div>
    </div>
}

export default Modal