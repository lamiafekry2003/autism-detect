import { useState } from 'react';
import {getResourcePagination, useGetResource } from '../../resource';
import { Pagination } from '@mui/material';
// motion
import { motion } from 'framer-motion';
// variants
import {fedIn} from '../../variants'
import Loading from '../../component/Loading';
import img from '../../assets/logo (2).png'


export default function Resource() {
  const [page,setPage]=useState(1)
  const {data,isError,error,isLoading} = useGetResource(['resource',page],getResourcePagination)
  console.log(data)

  if(isError){
    <h2>{error}</h2>
  }

  const handleChange = (event, value) => {
    setPage(value);
  };
  console.log(data?.data?.fullData);
  return (
    <div className='pt-11'>
    <div className="mx-auto lg:min-h-screen bg-zinc-100 py-9 ">
      <motion.div
        variants={fedIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="tracking-wider">
        <h2 className="text-center font-bold text-2xl lg:text-4xl text-neutral-700">Resource</h2>
        <p className="text-neutral-500 mt-5 text-center mx-2 lg:mx-0">
          Resource provides us with links to international websites that talk about autism in children, its causes, and other things.
        </p>
      </motion.div>
      
      <div className=" mx-10 lg:mx-20 my-10">
        {isLoading ? (
         <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {Array(9).fill(0).map((_, index) => (
                <Loading key={index} />
          ))}
         </div>
        ) : (
          
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data?.data?.fullData?.map((resource) => (
              <motion.div
                key={resource?.position}
                variants={fedIn('left', 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="flex">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow w-full">
                  <div className="flex items-center gap-4">
                    <div className="border-2 w-fit rounded-[50%] p-2 border-blue-500">
                      {resource?.favicon ?<img src={resource?.favicon} alt="" className=" max-w-7 max-h-7 object-cover" />:<img src={img} alt="" className=" max-w-7 max-h-7 object-cover" />}
                    </div>
                    <h2 className="text-2xl font-semibold line-clamp-2 overflow-hidden text-ellipsis text-neutral-700">{resource.title}</h2>
                  </div>
                  <p className="text-neutral-500 mt-4 mb-4">{resource.snippet}</p>
                  <a
                    href={resource.link}
                    className="inline-block text-blue-500 hover:text-blue-700 font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Article
                  </a>
                  <i className="fa-solid fa-arrow-right mx-2 text-blue-500"></i>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center items-center">
        <Pagination count={20} page={page} onChange={handleChange} />
      </div>
    </div>
  </div>

  )
}
