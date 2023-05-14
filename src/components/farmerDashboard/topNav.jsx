import React from 'react'
import Card from '../interface/Card'
import { Icon } from '@iconify/react'


export default function TopNav() {
  return (
    <div>
        <nav className='flex w-full justify-between items-center'>
            <div>
                <h1 className='text-black font-ubuntu font-bold text-3xl'>Welcome <span className='text-primary '>Elimihele E. 👋🏾</span></h1>
            </div>
            <div className='gap-3 flex flex-row'>
                <Card className='flex max-w-2xl items-center bg-green-100 bg-opacity-10 px-5 py-3'>
                    <label
                        htmlFor='search'
                    >
                        <Icon
                        icon='ri:search-line'
                        className='text-2xl font-extrabold text-green-100'
                        />
                    </label>
                    <input
                        type='text'
                        name='search'
                        id='search'
                        placeholder='search anything...'
                        className='peer basis-full bg-transparent font-roboto text-black placeholder:text-black pl-2 pr-10 focus:border-none focus:outline-none'
                    />
                    <button className='hidden text-3xl peer-focus:block'>
                        <Icon icon='ri:close-fill' />
                    </button>
                </Card>
                <div className='flex max-w-2xl rounded-lg items-center bg-green-100 bg-opacity-10 px-3 py-3'>
                    <Icon
                        icon='ri:search-line'
                        className='text-2xl font-extrabold text-green-100'
                    />
                </div>
                <div className='flex max-w-2xl rounded-lg items-center bg-white shadow-xl bg-opacity-10 px-3 py-3'>
                    <Icon
                        icon='ri:search-line'
                        className='text-2xl font-extrabold text-green-100'
                    />
                </div>
            </div>
        </nav>
    </div>
  )
}
