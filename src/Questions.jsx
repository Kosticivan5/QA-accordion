import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";

import { useState } from "react";

const Questions = ({ info, title }) => {
  const [opened, setOpened] = useState(false);

  return (
    <article className=" w-11/12 mx-auto mb-5 shadow-2xl rounded-xl p-4 ">
      <header className="flex justify-between w-full items-center mb-3">
        <h2 className="capitalize font-medium mr-2">{title}</h2>
        <button onClick={() => setOpened(!opened)}>
          {opened ? (
            <AiFillMinusSquare
              className="w-7 h-7 
                shrink-0 cursor-pointer hover:text-sky-950 transition-all ease-in duration-300 "
            />
          ) : (
            <AiFillPlusSquare
              className="w-7 h-7 
                shrink-0 cursor-pointer hover:text-sky-950 transition-all ease-in duration-300 "
            />
          )}
        </button>
      </header>
      {opened && (
        <p className="text-sm transition-all ease-in duration-500 ">{info}</p>
      )}
    </article>
  );
};
export default Questions;
