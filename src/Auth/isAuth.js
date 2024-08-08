
const isAuth=async(username)=>
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
export {isAuth}