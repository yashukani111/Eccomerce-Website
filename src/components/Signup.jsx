import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ACCOUNT_TYPE } from '../utils/contants';
import { signup } from '../services/operations/authAPI';
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

const Signup = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showPasssword,setShowPassword] = useState(false);
  const [showConfirmPasssword,setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
        email:'',
        password:'',
        confirmPassword:'',
        AccountType:ACCOUNT_TYPE.PERSONAL        
      })
    const {email, password,confirmPassword,AccountType} = formData;

    const handleOnChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };  
  const handleOnSubmit = (e) => {
    try{
      e.preventDefault();
      dispatch(signup(email,password,confirmPassword,AccountType,navigate))
    }catch(error){
      console.log(error)
    }
  }


  return (
  <div className='container w-11/12 h-[100vh] flex justify-center items-center'>
    <div className=' bg-slate-300 shadow-md rounded-md '>
         <h3 className='text-gray-600 font-bold text-3xl flex p-5 justify-center'>Sign Up</h3>
          <form onSubmit={handleOnSubmit} className='w-[20rem] p-3 flex flex-col justify-center'>
          <label className='text-gray-700 font-semibold gap-2 flex pb-3'>
        Select Account Type:
        <select onChange={handleOnChange}  className='bg-gray-200 outline-none px-2 rounded-md'>
          <option value="personal" >Personal</option>
          <option value="business">Business</option>
        </select>
      </label>
           
        <div className="mb-5 flex flex-col gap-2 text-black text-[24px] font-semibold">
          <label htmlFor="email" >Your email</label>
          <input type="email" 
                 id="email"
                 name='email'
                 onChange={handleOnChange}
                 className="text-gray-900 bg-gray-50 text-sm p-2.5 rounded-lg  outline-none" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5 flex flex-col gap-2 text-black text-[24px] font-semibold relative">
          <label htmlFor="password" >Password</label>
          <input type={showPasssword ? "text" : "password"}
                 id="password"
                 name='password'
                 onChange={handleOnChange}
                 className="text-gray-900 bg-gray-50 text-sm p-2.5 rounded-lg  outline-none" placeholder='password' required />
                 <span
              onClick={()=>setShowPassword((prev) => !prev)}
              className='absolute right-2 bottom-2'
              >
                {
                  showPasssword ? (
                    <FaRegEye className=''/>
                  ):( 
                    <FaRegEyeSlash className=''/>
                  )
                }
               
            </span>
        </div>
        <div className="mb-5 flex flex-col gap-2 text-black text-[24px] font-semibold relative">
          <label htmlFor="confirmpassword" >Confirm Password</label>
          <input type={showConfirmPasssword ? "text" :"password"}
                 onChange={handleOnChange}
                  id="confirmPassword" 
                  name='confirmPassword'
                  className="text-gray-900 bg-gray-50 text-sm p-2.5 rounded-lg  outline-none" placeholder='password' required />
                  <span
                   onClick={()=>setShowConfirmPassword((prev) => !prev)}
                  className='absolute right-2 bottom-2'
              >
                {
                  showConfirmPasssword ? (
                    <FaRegEye className=''/>
                  ):( 
                    <FaRegEyeSlash className=''/>
                  )
                }
               
            </span>
        </div>

        <button type='submit'
          className='mt-6 rounded-[8px] bg-gray-900 hover:bg-gray-700 duration-200 py-[8px] px-[50px] font-medium text-richblack-900'
          >SignUp</button>
    </form>  
    </div>
  </div>
  )
}

export default Signup