import React from 'react'

export default function Contact() {
  return (
    <React.Fragment>
    <div className="flex items-center justify-center mb-12">
      <div className="w-[90%] h-[600px] bg-[#FEFEFE] rounded-[40px]">
        <div className="px-10 text-black md:flex md:justify-between md:items-center">
          <div className="mt-[70px]">
            <div className="mb-[47px]">  
              <label className="block font-[400] text-[20px] leading-[24px] " htmlFor="name">Name:</label>
              <input className="w-[300px] h-[50px] md:w-[438px] md:h-[80px] bg-[#D9D9D9] rounded-[12px]" type="text" required />
            </div>
            <div className="mb-16 md:mb-[109px]">  
              <label className="block font-[400] text-[20px] leading-[24px] " htmlFor="email">Email:</label>
              <input className="w-[300px] h-[50px] md:w-[438px] md:h-[80px] bg-[#D9D9D9] rounded-[12px]" type="text" required />
            </div>
            <div className="md:mb-10">
              <h1 className="font-[400] text-[24px] leading-[24px] mb-[20px]">Email me: tazrt@mail.com</h1>
              <p className="font-[400] text-[24px] leading-[24px] mb-[20px]">Whatsapp Line: 0814115183</p>
              <p className="font-[400] text-[24px] leading-[24px] mb-[20px]">linktr.eee/i</p>
            </div>
          </div>
          <div className="md:mt-[-150px]">
            <div className="mb-[47px]">  
              <label className="block font-[400] text-[20px] leading-[24px] " htmlFor="name">Message:</label>
              <textarea className="w-[300px]  md:w-[438px] md:h-[246px] bg-[#D9D9D9] rounded-[12px]" type="text" required />
            </div>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}