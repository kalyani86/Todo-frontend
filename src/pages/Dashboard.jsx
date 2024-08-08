import React, { useContext, useEffect, useState } from "react";
import { Link, useParams ,NavLink} from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Piechart from "../components/Piechart";
import { Navbar } from "../components/Navbar";
import { UserContext } from "../Context/UserContext";
import { Login } from "./Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Loader } from "../components/Loader";
import { Layout } from "../components/Layout";

export const Dashboard = () => {
  const {username}=useParams();
  console.log(username);

  const [isauth,setisAuth]=useState(false);
  const isAuth=async()=>
  {
    try{
      const res=await axios.get('http://localhost:8000/users/isAuth',{withCredentials:true});
       if(!res)
       {
          toast.error("unothorized request");
          return;
       }

       if(res?.data?.user?.username!==username)
       {
          toast.error("unothorized request");
          return;
       }
       setisAuth(true);
    }catch(err)
    {
      console.log(err);

    }
  }

  const [Total,setTotal]=useState(0);
  const [pending,setPending]=useState(0);
  const [Completed,setCompleted]=useState(0);
  const [Overdue,setOverdue]=useState(0);

  useEffect(()=>
  {
    async function fetchData(){
    try {
      const {data}=await axios.post("http://localhost:8000/todo/getTodoCount",{username});
     // console.log(data);
      setTotal(data.total);
      setCompleted(data.completed);
      setPending(data.pending);
      setOverdue(data.overdue);
     // console.log(data.total,data.pending)
    } catch (error) {
        console.log(error);
        toast.error("unothorized req");
    }}
    fetchData();
  },[])

  
 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  isAuth();
  return (
    // <>
    // <ToastContainer/>
    //  {isauth?
    //     <div className="min-h-screen bg-gray-100">
    //       <Navbar username={username}/>
    //       <div className="container mx-auto p-6">
    //         <h1 className="text-3xl font-semibold mb-2 mx-auto">
    //           Welcome, {username}
    //         </h1>
    //         <div className="flex justify-center mt-2">
    //           <Link
    //             to="/todo/add"
    //             className="bg-blue-500 mb-4 text-white px-4 py-2 rounded-lg shadow-md"
    //           >
    //             Add New Task
    //           </Link>
    //         </div>
    //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    //           <div className="bg-white p-6 rounded-lg shadow-md">
    //             <h2 className="text-xl font-semibold">Total Tasks</h2>
    //             <p className="text-2xl">25</p>
    //           </div>
    //           <div className="bg-white p-6 rounded-lg shadow-md">
    //             <h2 className="text-xl font-semibold">Completed Tasks</h2>
    //             <p className="text-2xl">15</p>
    //           </div>
    //           <div className="bg-white p-6 rounded-lg shadow-md">
    //             <h2 className="text-xl font-semibold">Pending Tasks</h2>
    //             <p className="text-2xl">7</p>
    //           </div>
    //           <div className="bg-white p-6 rounded-lg shadow-md">
    //             <h2 className="text-xl font-semibold">Overdue Tasks</h2>
    //             <p className="text-2xl">3</p>
    //           </div>
    //         </div>
    //         <div className="flex flex-col gap-6 mt-6">
    //           <div className="bg-white p-6 rounded-lg shadow-md">
    //             <h2 className="text-xl font-semibold mb-4">
    //               Task Distribution
    //             </h2>
    //             <Piechart />
    //           </div>
    //           <div className="bg-white p-6 rounded-lg shadow-md">
    //             <h2 className="text-xl font-semibold mb-4">
    //               Upcoming Deadlines
    //             </h2>
    //           </div>
    //           <div className="bg-white p-6 rounded-lg shadow-md mt-6">
    //             <h2 className="text-xl font-semibold mb-4">
    //               Recent Activities
    //             </h2>
    //           </div>
    //         </div>
    //       </div>
    //     </div>:<Loader/>
    //   }
    // </>
    <>
 
       <Layout username={username}/>
{
  isauth?<div className="p-4 xl:ml-80">
    
  <div className="flex justify-center mt-2">
          <Link
            to={`/${username}/todo/add`}
            className="bg-blue-500 mb-4 text-white px-4 py-2 rounded-lg shadow-md"
           >
            Add New Task
           </Link>
          </div>
  <div className="mt-12">
<div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
<div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
  
  <div className="p-4 text-right">
    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Tasks</p>
    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{Total}</h4>
  </div>

</div>
  <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
  
    <div className="p-4 text-right">
      <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Completed Tasks</p>
      <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{Completed}</h4>
    </div>

  </div>
 
  <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
  
  <div className="p-4 text-right">
    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Pending Tasks</p>
    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{pending}</h4>
  </div>

</div><div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
  
  <div className="p-4 text-right">
    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Overdue Tasks</p>
    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{Overdue}</h4>
  </div>

</div>

</div>
</div>
<div className="flex flex-col gap-6 mt-6 xl:mx-10">
             <div className="bg-white p-6 rounded-lg shadow-md">
               <h2 className="text-xl font-semibold mb-4">
                 Task Distribution
               </h2>
              <Piechart completed={Completed} pending={pending} overdue={Overdue}/>
</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-md xl:mx-10">
              <h2 className="text-xl font-semibold mb-4">
                Upcoming Deadlines
              </h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mt-6 xl:mx-10">
               <h2 className="text-xl font-semibold mb-4">
              Recent Activities
               </h2>
            </div>

</div>:<Loader/>
}
</>
  );
};
