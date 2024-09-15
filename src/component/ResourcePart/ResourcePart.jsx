
import { useGetResource ,getResource} from '../../resource';
import { motion } from 'framer-motion';
import { fedIn } from '../../variants';
import Loading from '../../component/Loading';
import { Link } from 'react-router-dom';
import img from "../../assets/logo (2).png"

export default function Resource() {

  const {data,isError ,error ,isLoading} = useGetResource('resource', getResource);

  if(isError){
    <h2>{error}</h2>
  }

  return (

      <div className="lg:min-h-screen flex flex-col justify-center mx-auto bg-zinc-100  overflow-x-hidden sm:overflow-hidden px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fedIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="tracking-wider">
          <h2 className="text-center font-bold text-2xl lg:text-4xl mt-5 text-neutral-700">Resource</h2>
          <p className="text-neutral-500 mt-5 text-center mx-4 sm:mx-8 lg:mx-0">
            Resource provides us with links to international websites that talk about autism in children, its causes, and other things.
          </p>
        </motion.div>
        
        <div className="mx-2 sm:mx-8 lg:mx-20 my-10">
          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Loading />
                <Loading/>
                <Loading/>
            </div>
           ) : ( 
             <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {data?.data?.fullData?.slice(2, 5).map((resource) => (
                <motion.div
                  key={resource?.position}
                  variants={fedIn('left', 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  className="flex">
                  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow w-full">
                    <div className="flex items-center gap-5">
                      <div className="border-2 rounded-[50%] p-2 border-blue-500">
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
        
       {!isLoading && ( 
          <div className="flex justify-center items-center mx-auto my-5 md:my-0">
            <Link to="resource">
              <button className="btn mt-2">
                <span className="btn-text-one">See More</span>
                <span className="btn-text-two">Great!</span>
              </button>
            </Link>
          </div>
        )} 
      </div>
    

  );
}