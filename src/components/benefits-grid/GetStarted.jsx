import react from "react";
import { poppinsFont } from "../../fonts";



export const GetStarted = () => {
  return (
    <div className="col-span-3 md:col-span-1 ">
        <p className={`p-4 text-2xl md:text-3xl text-zinc-500 ${poppinsFont.className}`}>
            <span className="line-through decoration-[0.14rem]">Not</span> just another tool.  <span className="text-zinc-900">An actual game changer. </span>
        </p>
    </div>
  );
};