
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { fedIn } from '../../variants';

export default function ServicePart() {
  const services = [
    { id: 1, text: "Autism Spectrum Disorder" },
    { id: 2, text: "Testing Autism" },
    { id: 3, text: "Community" },
    { id: 4, text: "Resources" },
    { id: 5, text: "Awareness Videos" },
    { id: 6, text: "Testing Using Child Image" },
    { id: 7, text: "Testing Using Drawing Image" },
    { id: 8, text: "Testing Using Coloring Image" }
  ];
  
  return (
    //   <div className="  mx-auto lg:min-h-[84vh]  bg-gray-50 overflow-x-hidden">
    // <div className="mx-auto w-fit">
    //  <motion.div 
    //   variants={fedIn('up', 0.2)} 
    //   initial="hidden"
    //   whileInView="show"
    //   viewport={{ once: false, amount: 0.2 }}
    //  className="tracking-wider">
    //     <h2 className=" text-center font-bold text-2xl lg:text-4xl pt-5 text-neutral-700">
    //       Services
    //     </h2>
    //     <p className=" text-neutral-500  my-5 text-center mx-2 lg:mx-0 ">
    //       We provide auailty behavioral services based on the principles of
    //       applied Behavior analysis .ABA and Behavioral Services are provided to
    //       childern and adults with:
    //     </p>
    //   </motion.div>
    //   <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 sm:grid-cols-2 lg:my-9 text-center">
    //       {services.map((service) => (
    //         <motion.div
    //           key={service.id}
    //           variants={fedIn('left', 0.2)}
    //           initial="hidden"
    //           whileInView="show"
    //           viewport={{ once: false, amount: 0.2 }}
    //           className="flex flex-col justify-center items-center mx-auto md-mx-5 lg:mx-5 my-5 bg-white shadow-xl w-72 h-[150px] rounded-md text-center hover:shadow-lg transition-shadow"
    //         >
    //           <div className="flex justify-center items-center w-10 h-10 border-2 border-green-600 rounded-full mb-4">
    //             <i className="fa-solid fa-check text-green-500 text-2xl"></i>
    //           </div>
    //           <p className="w-full text-neutral-500">{service.text}</p>
    //         </motion.div>
    //       ))}
    //     </div>
    //     <div className="flex justify-center items-center mx-auto mb-4">
    //     <Link to="service">
    //          <button className="btn">
    //         <span className="btn-text-one">See More</span>
    //           <span className="btn-text-two">Great!</span>
    //        </button>
    //       </Link>
    //     </div>
    //  </div>
    // </div>
    <div className="flex justify-center items-center lg:min-h-screen bg-zinc-100">
  <div className="mx-auto w-fit">
    <motion.div 
      variants={fedIn('up', 0.2)} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="tracking-wider text-center">
      <h2 className="font-bold text-2xl lg:text-4xl pt-5 text-neutral-700">
        Services
      </h2>
      <p className="text-neutral-500 my-5 mx-2 lg:mx-0">
        We provide quality behavioral services based on the principles of applied behavior analysis. ABA and Behavioral Services are provided to children and adults with:
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 my-9">
      {services.map((service) => (
        <motion.div
          key={service.id}
          variants={fedIn('left', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col justify-center items-center mx-auto bg-white shadow-xl w-72 h-[150px] rounded-md hover:shadow-lg transition-shadow p-4"
        >
          <div className="flex justify-center items-center w-10 h-10 border-2 border-green-600 rounded-full mb-4">
            <i className="fa-solid fa-check text-green-500 text-2xl"></i>
          </div>
          <p className="text-neutral-500">{service.text}</p>
        </motion.div>
      ))}
    </div>

    <div className="flex justify-center items-center mx-auto lg:mx-0 mb-4 lg:mb-0">
      <Link to="service">
        <button className="btn">
          <span className="btn-text-one">See More</span>
          <span className="btn-text-two">Great!</span>
        </button>
      </Link>
    </div>
  </div>
</div>

  );
}