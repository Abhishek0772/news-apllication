import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Slider from './Slider'

function App() {
  const [news, setnews] = useState([])
  const [categoy , setcategoy]=useState([])
  const category_url = 'https://newsapi.org/v2/top-headlines/sources?apiKey=26c4c03cdf4c49ce9b3ea27ae53db38a'
  const url = 'https://newsapi.org/v2/everything?q=Apple&from=2022-12-28&sortBy=popularity&apiKey=26c4c03cdf4c49ce9b3ea27ae53db38a'
  useEffect(() => {
    axios.get(url).then((res) => {
      setnews(res.data.articles)
    })
  }, [])




  useEffect(() => {
      axios.get(category_url).then((res)=>{setcategoy(res.data.sources)})
}, [])

  console.log(categoy)
  return (
    <>
      <section className='h-screen w-full  ' >
<Slider />
        <nav className='w-full bg-transparent flex justify-start items-center p-2 fixed top-0 z-30'>
          <div className='flex justify-center items-center font-bold text-3xl bg-purple-600 p-2'> NEWS APP</div>
          <div></div>
        </nav>

        <main>
        </main>
        <div className='flex justify-center items-center flex-wrap'>
          {
            categoy.map((val)=>{
              return(
                <div className="p-2 bg-slate-300 m-2">
                  {val.category}
                </div>
              )
            })
          }
        </div>
        {/* cards sections  */}
                <h1 className='text-center text-3xl font-bold my-3'>NEWS TODAY</h1>
          <div className='flex justify-center items-center flex-wrap gap-4 bg-slate-200'>
            {
              news.map((value)=>{
                return (
                  <a href={value.url} target='__blank'>

                  <div className="h-[350px] w-[250px] shadow-md shadow-gray-400 rounded-md p-2" key={value.title}>
                    <div className='w-full h-48 '>
                      <img src={value.urlToImage} alt="" className='w-full h-full object-cover rounded-md'/>
                    </div>
                    <div>
                      <h2 className='text-lg font-bold my-1'>{value.title.slice(0,30)}</h2>
                      <p className='text-slate-800 overflow-hidden'>{value.description? value.description.slice(0,70):''}</p>
                    </div>
                  </div>
                  </a>
                )
              })
            }
          </div>
      </section>
    </>)
}

export default App