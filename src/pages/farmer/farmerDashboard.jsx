import React from 'react'
import SideNav from '../../components/common/sideNav'
import TopNav from '../../components/farmerDashboard/topNav'

export default function farmerDashboard() {
  return (
    <div className='flex flex-row'>
      <section className=' sticky top-0 left-0'>
        <SideNav/>
      </section>
      <main className='w-full'>
        <section className='px-10 pt-5'>
          <TopNav />
        </section> 
      </main>
             
    </div>
  )
}
