import React from 'react'
import {Riple} from 'react-loading-indicators'

export default function Loading() {
  return (
    <div className='h-[300px] flex justify-center items-center bg-[#1a1a1a] dark:bg-white'>
        <Riple  color="#0891B2" size="large" text="" textColor=""  />
    </div>
  )
}
