import React,{useState} from 'react'
import hero from './assets/hero-img.jpg'
import laptop from './assets/laptops.jpg'
import {FiArrowRightCircle} from 'react-icons/fi'
import {FiArrowLeftCircle} from 'react-icons/fi'
const Slider = () => {
  const [index, setindex] = useState(0)
    const data = [
        hero ,
        laptop
    ]
    const next =()=>{
      const isfslide = index === 0;
      const nexindex = isfslide ? data.length-1 : index-1 ;
      setindex(nexindex)
    
    }
      const prev = ()=>{
        const isfindex = index === data.length -1;
        const nextindex = isfindex ? 0  : index +1;
      setindex(nextindex)     
    }
    
  return (
    
   <section className='w-full h-5/6 overflow-hidden relative transition duration-500 mb-10'>
    <div className="absolute h-full w-full flex justify-center py-40 px-16 z-10 bg-black bg-opacity-40 flex-col items-start">
    <h1 className='text-6xl font-bold text-white'>TOP NEWS</h1>
    <p className='text-white text-2xl w-4/5'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, voluptatum.
    </p>
    </div>
    <img alt="" className='w-full h-full object-cover '  src={data[index]} />
    <div className="flex justify-between items-center w-full  h-3/4 absolute top-0">

    <FiArrowLeftCircle className='text-slate-400 text-4xl z-30' onClick={prev}/>
    <FiArrowRightCircle className='text-slate-400 text-4xl transition z-30' onClick={next}/>
    </div>
   </section>
  )
}

export default Slider