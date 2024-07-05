import React, {useState} from 'react'

function Card({id, image, info, price, name, removeTour}) {
  const[readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}....`

  function readmoreHandler() {
    setReadmore(!readmore);
  }
  

  return (
    <div className='w-[400px] h-max m-4 p-4 flex flex-col rounded-[10px] shadow-[0_3px_8px_rgba(0,0,0,0.25)]'>
        <img src={image} className='width-[380px] aspect-square object-cover'></img>
        <div className='my-[20px] mx-[5px]'>
          <div>
              <h4 className='text-[#7FA658] text-[1.3rem] font-bold'>₹ {price}</h4>
              <h4 className='text-2xl font-bold text-[#736E2F]'>{name}</h4>
          </div>
          <div className=''>
            {description}
            <span className='text-[#df9cdf] font-bold cursor-pointer' onClick = {readmoreHandler}>{readmore ? `Show Less` : `Read More`}</span>
          </div>
        </div>
        <button className='mt-[3px] py-[10px] px-[80px] border-[1px] border-solid border-[#736E2F] rounded-[10px] text-lg font-bold bg-[#b4161b21] hover:bg-[#D95F43] hover:text-white transition-all duration-200' onClick={() => removeTour(id)}>
          Not Interested
        </button>
    </div>
  )
}

export default Card