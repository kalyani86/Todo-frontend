import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import { Cards } from "../components/Cards";
import { Layout } from "../components/Layout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const Todo = () => {
  const [all, setAll] = useState(true);
  const [pending, setPending] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [overdue, setOverdue] = useState(false);

  const [ptasks,setptasks]=useState();
  const [ctasks,setctasks]=useState();
  const [otasks,setotasks]=useState();
  const [alltasks,setalltasks]=useState();
  const {username}=useParams();
  const [data,setdata]=useState([]);
  const All = () => {
    setAll(true);
    setCompleted(false);
    setPending(false);
    setOverdue(false);
    setdata(alltasks);
  };
  const Pending = () => {
    setAll(false);
    setCompleted(false);
    setPending(true);
    setOverdue(false);
    setdata(ptasks);
  };
  const Completed = () => {
    setAll(false);
    setCompleted(true);
    setPending(false);
    setOverdue(false);
    setdata(ctasks);
  };
  const Overdue = () => {
    setAll(false);
    setCompleted(false);
    setPending(false);
    setOverdue(true);
    setdata(otasks);
  };

  useEffect(()=>
  {
      const getData=async()=>
      {
          try
          {
            //console.log(username);
            const {data}=await axios.post("http://localhost:8000/todo/getTodo",{username});
           // console.log(data)
            setalltasks(data.todo);
            setctasks(data.completed);
            setotasks(data.overdue);
            setptasks(data.pending);
          }catch(err)
          {
            console.log(err);
            toast.error("Unable to load todo")
          }
      }
      getData();
  },[])
  return (
    <>
    <Layout username={username}/>
    <ToastContainer/>
    <div className="xl:ml-80">
      
      <div className="flex flex-row justify-evenly mt-10">
        <button
          className={` px-1 sm:px-2 text-sm sm:text-xl ${all ? "bg-blue-500 text-white" : "bg-slate-200"}`}
          onClick={All}
        >
          All
        </button>
        <button
          className={` px-1 sm:px-2 text-sm sm:text-xl ${pending ? "bg-blue-500 text-white" : "bg-slate-200"}`}
          onClick={Pending}
        >
          Pending Tasks
        </button>
        <button
          className={` px-1 sm:px-2 text-sm sm:text-xl ${completed ? "bg-blue-500 text-white" : "bg-slate-200"}`}
          onClick={Completed}
        >
          Completed Tasks
        </button>
        <button
          className={` px-1 sm:px-2 text-sm sm:text-xl ${overdue ? "bg-blue-500 text-white" : "bg-slate-200"}`}
          onClick={Overdue}
        >
          Overdue Tasks
        </button>
      </div>
      <div className="flex-grow overflow-auto mt-5 px-4 justify-evenly ml-20">
        <div className="grid grid-cols-1 gap-4 justify-items-center lg:grid-cols-2 xl:grid-cols-2 lg:justify-items-stretch">
         
         { 
          data.map((todo)=>
          {
            console.log(todo);
            <Cards title={todo.title} description={todo.description} state={todo.state}/>
          })}
         
        </div>
      </div>
    </div>
    </>
  );
};
