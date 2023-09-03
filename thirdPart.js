import { useState } from "react";

export const ThirdPart = () => {
  const [show, setShow] = useState("");
  const SelectFile = () => {
    setShow(1);
  };
  return (
    <>
      <div className="border text-sm space-y-3 ">
        <div className="flex px-2 mt-4">
          <label className="border  w-20 text-center">Name</label>
          <input
            className="w-36 border   pl-1 outline-none "
            type="text"
            placeholder="image_container"
          ></input>
        </div>
        <div className=" flex  px-2 ">
          <label className="border w-12 text-center">W</label>
          <input
            className=" w-16 border pl-1 outline-none"
            type="text"
            placeholder="1228"
          ></input>
          <label className="border w-12 text-center">H</label>
          <input
            className="w-16  border pl-1 outline-none"
            type="text"
            placeholder="776"
          ></input>
        </div>
        <div className="flex  px-2">
          <label className="border w-12 text-center"> X</label>
          <input
            className=" w-16 border pl-1 outline-none"
            type="text"
            placeholder="-1"
          ></input>
          <label className="border w-12 text-center">Y</label>
          <input
            className="w-16 border pl-1 outline-none"
            type="text"
            placeholder="-46"
          ></input>
        </div>
        <div>
          <div className=" flex px-2 my-3 ">
            <label className="border  w-20 text-center">Angle</label>
            <input
              className="w-36 outline-none  pl-1 border bg-white"
              type="text"
              placeholder="0"
            ></input>
          </div>
          <div className="flex px-2 my-3">
            <label className="border  w-20 text-center">Capcity </label>
            <input
              className="w-36 outline-none  px-1 border "
              type="text"
              placeholder="1"
            ></input>
          </div>
          <div className="flex px-2 my-3">
            {" "}
            <label className="border  w-20 text-center">Rotate X</label>
            <input
              className="w-36 outline-none  px-1 border "
              type="text"
              placeholder="0"
            ></input>
          </div>
          <div className="flex px-2 my-3">
            {" "}
            <label className="border  w-20 text-center">Rotate Y</label>
            <input
              className="w-36 outline-none  px-1 border "
              type="text"
              placeholder="0"
            ></input>
          </div>
          <div className="flex px-2 my-3">
            <label className="border  w-20 text-center">Rotate Z</label>
            <input
              className="w-36 outline-none  px-1 border "
              type="text"
              placeholder="0"
            ></input>
          </div>
        </div>
        <div className="border-b-2 "></div>
        <div className="flex px-2 mt-5">
          <input type="file"></input>
        </div>
        <div>
          <div className="flex px-2">
            <label className=" border w-20 text-center">Type</label>
            <select
              className="w-36 outline-none  pl-1 border bg-white"
              aria-label="Default select example"
            >
              <option selected></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <br />
          <div className="flex px-2">
            {" "}
            <label className=" border w-20 text-center">Anchor X</label>
            <select
              className="w-36 outline-none  pl-1 border bg-white"
              aria-label="Default select example"
            >
              <option selected></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <br />
          <div className="flex px-2">
            {" "}
            <label className=" border w-20 text-center">Anchor Y</label>
            <select
              className="w-36 outline-none  pl-1 border bg-white"
              aria-label="Default select example"
            >
              <option selected></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <br />
          <div className="flex px-2">
            {" "}
            <label className=" border w-20 text-center">Effact</label>
            <select
              className="w-36 outline-none  pl-1 border bg-white"
              aria-label="Default select example"
            >
              <option selected>none</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="border-b-2"></div>
        <div className="flex px-2">
          <label className="border  w-20 text-center">Shadow</label>
          <input
            className="w-36 outline-none  px-1 border"
            type="text"
            placeholder="0px 2px 4px 1px"
          ></input>
        </div>{" "}
        <div className="flex px-2">
          <label className="border  w-20 text-center">Border Color</label>
          <input
            className="w-36 outline-none  px-1 border"
            type="text"
            placeholder=""
          ></input>
        </div>
        <div>{show}</div>
      </div>
    </>
  );
};
