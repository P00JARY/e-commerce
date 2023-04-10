import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center bg-orange-300  h-screen">
        <div className="grid  grid-rows-2 gap-5 w-screen h-40 mt-96">
          <div className="flex justify-center ">
            Welcome to Sweets Galore :)
          </div>
          <div className="flex justify-center ">
            <button
              className="py-1 px-1 font-bold bg-blue-500 rounded-full"
              onClick={() => {
                navigate("/store");
              }}
            >
              Buy Sweets
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
