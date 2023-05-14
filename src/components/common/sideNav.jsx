import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import useUserData from '../../hooks/useUserData'
import { NavLink } from 'react-router-dom'

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(!true)
  let fullname = useUserData()?.surname + useUserData()?.lastname
  let email = useUserData()?.email
    let links = [
    { name: 'dashboard', link: '/*' },
    { name: 'my orders', link: '/#' },
    { name: 'statistics', link: '/#' },
    { name: 'messages', link: '/#' },
    { name: 'customers', link: '/#' },
  ]

  return (
    <>
        { isOpen ? 
        (<div onMouseLeave={() => setIsOpen(!true)} className=" transition-all ease-in-out duration-300 flex flex-col items-center h-screen w-[18rem] rounded-r-xl bg-primary bg-opacity-5">
          {/* <div className='absolute right-4 top-4'>
            <button onClick={() => setIsOpen(false)} className='bg-primary bg-opacity-70 w-[3rem] h-[3rem] rounded-full flex items-center justify-center '>
              <ChevronLeftIcon className="ui-open:rotate-90 ui-open:transform h-8 w-8 text-white" />
            </button>
          </div> */}
          <div>
            <div>
              <div className='pt-24 flex justify-center items-center gap-3 flex-col'>
                <img 
                src="https://res.cloudinary.com/phantom1245/image/upload/v1677942806/agromart/IMG_jpqdmy.jpg" 
                alt="profile picture" 
                className='w-32 h-32 rounded-full'/>
              </div>
              <h1 className='pt-4 font-extrabold text-center text-xl'>{"Elimihele Osekhuamen" || fullname}</h1>
              <h3 className='pt-2 text-[#525C60] text-center text-md font-roboto '>{"godsfavour1975@gmail.com" || email}</h3>
            </div>
            <ul className='flex justify-center items-center flex-col'>
              {links.map(link => (
                <li
                  key={link.name}
                  className='text-xl pt-5 text-left  capitalize  font-poppins font-medium '
                >
                  <NavLink
                    to={link.link}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-black duration-300  hover:text-slate-800'
                        : 'text-slate-900 duration-300  hover:text-slate-800'
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
          </ul>
          </div>
        </div>
        ) : (
          <div onMouseEnter={() => setIsOpen(true)} className="transition-all ease-in-out duration-300 flex flex-col items-center h-screen w-[5rem] rounded-r-xl bg-primary bg-opacity-5">
            {/* <div className='absolute left-20 top-4'>
              <button onClick={() => setIsOpen(true)} className='bg-primary bg-opacity-60 w-[3rem] h-[3rem] rounded-full flex items-center justify-center '>
                <ChevronRightIcon className="ui-open:rotate-90 ui-open:transform h-8 w-8 text-white" />
              </button>
            </div> */}
            <div className='pt-24 cursor-pointer flex justify-center items-center gap-3 flex-col'>
              <img 
                src="https://res.cloudinary.com/phantom1245/image/upload/v1677942806/agromart/IMG_jpqdmy.jpg" 
                alt="profile picture" 
                className='w-10 h-10 rounded-full'/>
            </div>
          </div>
        )}
    </>
    
  )
}
