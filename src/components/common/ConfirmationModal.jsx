import React from 'react'

const ConfirmationModal = ({modalData}) => {
  return (
    <div className='inset-0 fixed z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm '>
      <div className='bg-gray-200 border-gray-500 rounded-lg border p-10 flex flex-col text-center '>
        <p className='text-black'>{modalData?.text1}</p>
        <p className='text-black'>{modalData?.text2}</p>
        <div className='flex gap-5 mt-5 justify-center'>
        <button
            className="cursor-pointer rounded-md bg-red-500 py-[8px] px-[20px] font-semibold text-richblack-900 text-black"
            onClick={modalData?.btn1Handler}
          >
            {modalData?.btn1Text}
          </button>
           <button
            className="cursor-pointer rounded-md bg-gray-300 py-[8px] px-[20px] font-semibold text-richblack-900 text-black"
            onClick={modalData?.btn2Handler}
          >
            {modalData?.btn2Text}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal






// import React from 'react'

// const ConfirmationModal = ({modalData}) => {
//   return (
//     <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
//     <div className="w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-richblack-800 p-6">
//       <p className="text-2xl font-semibold text-richblack-5">
//         {modalData?.text1}
//       </p>
//       <p className="mt-3 mb-5 leading-6 text-richblack-200">
//         {modalData?.text2}
//       </p>
//       <div className="flex items-center gap-x-4">
//       <button
//           className="cursor-pointer rounded-md bg-richblack-200 py-[8px] px-[20px] font-semibold text-richblack-900"
//           onClick={modalData?.btn1Handler}
//         >
//           {modalData?.btn1Text}
//         </button>
//         <button
//           className="cursor-pointer rounded-md bg-richblack-200 py-[8px] px-[20px] font-semibold text-richblack-900"
//           onClick={modalData?.btn2Handler}
//         >
//           {modalData?.btn2Text}
//         </button>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default ConfirmationModal

