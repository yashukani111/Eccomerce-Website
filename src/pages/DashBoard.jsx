// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar';


const DashBoard = () => {
  return (
    <div className="relative flex ">
    <Sidebar/>
    <div className=" mt-20 flex-1 overflow-auto">
      <div className="mx-auto w-11/12 max-w-[50px] sm:max-w-[100px] lg:max-w-[500px] xl:max-w-[800px] 2xl:max-w-[1000px] py-10">
        <Outlet />
      </div>
    </div>
  </div>
  );
};

export default DashBoard;
