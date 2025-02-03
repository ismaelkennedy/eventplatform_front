
import {Outlet } from "react-router";
import Header from "../header";
import Sidebar from "../navigation";

export default function BoardLayout() {

  return (
    <div className="p-10 flex flex-col min-h-screen w-full">
      
      <Header/>
      
      <div className="flex gap-6 flex-1">

          <Sidebar/>
      <Outlet />
      </div>
    </div>
  );
}


