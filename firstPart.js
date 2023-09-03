import Home from "..";
import { ThirdPart } from "./thirdPart";

export default function PrimaryPart() {
  return (
    <>
      <div className="border text-sm  ml-5 bg-zinc-100">
        <div className="px-4 my-5">
          <button className="bg-indigo-500  text-white rounded-sm  w-full p-2">
            Save Template
          </button>
        </div>
        <div className="border-b-2 border-gray-300"></div>
        <div className="px-4 my-3 p-1">
          <h1>Name</h1>
          <input
            className="pl-2  p-1 rounded-sm outline-none  border"
            type="text"
            placeholder="Template 2"
          ></input>
        </div>
        <div className="border-b-2 border-gray-300"></div>

        <div className="px-4 space-x-1 flex my-4">
          <button className="bg-indigo-500 rounded-sm  p-1 w-full  ">
            Undo
          </button>
          <button className="bg-indigo-500 rounded-sm  p-1 w-full ">
            Redo
          </button>
        </div>

        <div className="border-b-2 border-gray-300"></div>

        <div className="px-4 p-1 my-4">
          <label>New Layer</label>
          <button className="ml-24 ">+</button>
        </div>
        <div className="border-b-2 border-gray-300"></div>
        <form className="px-4 p-1 grid gap-3 my-4">
          <label>Layers</label>

          <input
            className="pl-1  p-1  outline-none border "
            type="text"
            placeholder="text-1"
          ></input>

          <input
            className="pl-1  p-1   outline-none border"
            type="text"
            placeholder="text-2"
          ></input>

          <input
            className="pl-1  p-1  outline-none  border"
            type="text"
            placeholder="text-3"
          ></input>

          <input
            className="pl-1  p-1  outline-none border "
            type="text"
            placeholder="image_container"
          ></input>
        </form>
        <div className="border-b-2 border-gray-300"></div>
        <div className="my-4">
          <button className="bg-indigo-500 text-white rounded-sm w-full  p-1 px-4 ">
            Disable Guide
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
