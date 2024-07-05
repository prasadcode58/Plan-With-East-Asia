import React from 'react'
import Card from './Card'

function Tours({tours, removeTour}) {
  return (
    <div className='flex items-center justify-center flex-col'>
        <div>
            <h2 className='text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-bold m-[6vh] border-4 md:border-[6px] lg:border-8 px-14 border-dashed border-[#df9cdf] rounded-md'>
                Plan With East Asia
            </h2>
        </div>
        <div className='flex flex-wrap max-w-[1300px] mx-auto my-0'>
            {
                tours.map( (tour) => {
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                } )
            }
        </div>
    </div>
  )
}

export default Tours