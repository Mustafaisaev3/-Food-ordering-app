import React from 'react'

const NotificationContainer = () => {
  return (
    <div className='w-[400px] h-auto rounded-md bg-[#2D303E] flex flex-col'>
      <div className='notification-header w-full flex items-center justify-between px-5 py-3 border-b-[0.3px] border-[#aeaeae9c]'>
        <h2 className='text-white'>Notifications</h2>
        <div className='text-[#01ff6be5] px-2 bg-[#01ff6b35] rounded-full'>5 new</div>
      </div>
      <div className='notification-body grow'>

        <div className='notification-body__item w-full flex items-center justify-between px-5 py-3 border-b-[0.3px] border-[#aeaeae9c]'>
          <div className='w-[50px] h-[50px] rounded-full bg-[#21ffff93]'></div>
          <div className='grow px-3'>
            <div className='text-white'>New user registered.</div>
            <div className='text-[#aeaeae9c]'>5 hours ago</div>
          </div>
          <div className='text-sm text-[#aeaeae9c]'>
            Today
          </div>
        </div>

        <div className='notification-body__item w-full flex items-center justify-between px-5 py-3 border-b-[0.3px] border-[#aeaeae9c]'>
          <div className='w-[50px] h-[50px] rounded-full bg-[#218cff93]'></div>
          <div className='grow px-3'>
            <div className='text-white'>Congratulation Flora! 🎉</div>
            <div className='text-[#aeaeae9c]'>Won the monthly best seller badge</div>
          </div>
          <div className='text-sm text-[#aeaeae9c]'>
            Yesterday
          </div>
        </div>

        <div className='notification-body__item w-full flex items-center justify-between px-5 py-3 border-b-[0.3px] border-[#aeaeae9c]'>
          <div className='w-[50px] h-[50px] rounded-full bg-[#e121ff7a]'></div>
          <div className='grow px-3'>
            <div className='text-white'>New message received 👋🏻</div>
            <div className='text-[#aeaeae9c]'>You have 10 unread messages</div>
          </div>
          <div className='text-sm text-[#aeaeae9c]'>
            21 Aug
          </div>
        </div>

        <div className='notification-body__item w-full flex items-center justify-between px-5 py-3 border-b-[0.3px] border-[#aeaeae9c]'>
          <div className='w-[50px] h-[50px] rounded-full bg-[#ffe92193]'></div>
          <div className='grow px-3'>
            <div className='text-white'>Paypal</div>
            <div className='text-[#aeaeae9c]'>Received Payment</div>
          </div>
          <div className='text-sm text-[#aeaeae9c]'>
            15 May
          </div>
        </div>

        <div className='notification-body__item w-full flex items-center justify-between px-5 py-3 border-b-[0.3px] border-[#aeaeae9c]'>
          <div className='w-[50px] h-[50px] rounded-full bg-[#ff212171]'></div>
          <div className='grow px-3'>
            <div className='text-white'>Received Order 📦</div>
            <div className='text-[#aeaeae9c]'>New order received from john</div>
          </div>
          <div className='text-sm text-[#aeaeae9c]'>
            1 Mar
          </div>
        </div>


      </div>
      <div className='notification-bottom w-full flex items-center justify-center px-5 py-4'>
        <div className='w-full text-center text-white py-2 rounded-md bg-[#01ff6b8a]'>READ ALL NOTIFICATIONS</div>
      </div>  
    </div>
  )
}

export default NotificationContainer