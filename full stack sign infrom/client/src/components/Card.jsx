import React, { useState } from 'react'

const Card = () => {

  const [value,setValue]=useState({
    name :"",
    fathername:"",
    email:"",
    password:""
  })

  async function handleSubmit(e)
  {
    e.preventDefault();
    console.log(value);
    try {
      const res = await fetch("http://localhost:5000/user_auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
      });
      window.location = "/";
    } catch (err) {
      console.error(err);
    }

    setNote({
      name: "",
      fathername: "",
      email:"",
      password:""
    });
  }

  return (
    <div className='max-w-md shadow-lg bg-gray-100 h-[600px] mx-auto mt-7 rounded-md'>
      <div >
        <form className='flex flex-col items-center gap-6 pt-24 ' onSubmit={handleSubmit}>
          <input value={value.name} onChange={(e)=>setValue({...value,name:e.target.value})} className='outline-none text-lg p-1 px-6 rounded-lg focus:border-blue-600 border-2 bg-slate-100' type="text" placeholder='Enter your Name' />
          <input value={value.fatherName} onChange={(e)=>setValue({...value,fathername:e.target.value})} className='outline-none text-lg p-1 px-6 rounded-lg focus:border-blue-600 border-2 bg-slate-100' type="text" placeholder='Enter your Father' />
          <input value={value.email} onChange={(e)=>setValue({...value,email:e.target.value})} className='outline-none text-lg p-1 px-6 rounded-lg focus:border-blue-600 border-2 bg-slate-100' type="email"  placeholder='Enter your email' />
          <input value={value.password} onChange={(e)=>setValue({...value,password:e.target.value})} className='outline-none text-lg p-1 px-6 rounded-lg focus:border-blue-600 border-2 bg-slate-100' type="password" placeholder='Enter your password' />
          <button className='bg-blue-600 p-3 px-12 text-white rounded-lg active:bg-blue-700 '>Sign In</button>
          </form>
      </div>
    </div>
  )
}

export default Card