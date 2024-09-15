
// motion
import { motion } from 'framer-motion';
// variants
import {fedIn} from '../../variants'
export default function Services() {
  const services = [
    { id: 1, text: "Autism Spectrum Disorder" },
    { id: 2, text: "Testing Autism"  },
    { id: 3, text: "Community" },
    { id: 4, text: "Resources"  },
    { id: 5, text: "Awareness Videos"},
    { id: 6, text: "Testing Using Child Image" },
    { id: 7, text: "Testing Using Drawing Image" },
    { id: 8, text: "Testing Using Coloring Image" }
  ];
  const detailedServices = [
    { id: 1, title: "Autism Spectrum Disorder", description: "While ASDetect is not a diagnostic tool, the method on which the app is based is 83% accurate in identifying early signs of autism. However, no autism surveillance or screening method is perfectly accurate, so there is a chance that either:" },
    { id: 2, title: "Testing Autism", description: "While ASDetect is not a diagnostic tool, the method on which the app is based is 83% accurate in identifying early signs of autism. However, no autism surveillance or screening method is perfectly accurate, so there is a chance that either:" },
    { id: 3, title: "Community", description: "While ASDetect is not a diagnostic tool, the method on which the app is based is 83% accurate in identifying early signs of autism. However, no autism surveillance or screening method is perfectly accurate, so there is a chance that either:" },
    { id: 4, title: "Resource", description: "While ASDetect is not a diagnostic tool, the method on which the app is based is 83% accurate in identifying early signs of autism. However, no autism surveillance or screening method is perfectly accurate, so there is a chance that either:" },
  ];
  return (
    <div className=" pt-11">
     {/* <div className="  mx-auto max-w-full min-h-screen bg-gray-50 py-14">
     <div className="mx-auto w-fit">
     <motion.div 
      variants={fedIn('up', 0.2)} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
     className="tracking-wider">
        <h2 className=" text-center font-bold text-2xl lg:text-4xl text-neutral-700">
          Services
        </h2>
        <p className="text-neutral-500  my-5 text-center mx-2 lg:mx-0 ">
          We provide auailty behavioral services based on the principles of
          applied Behavior analysis .ABA and Behavioral Services are provided to
          childern and adults with:
        </p>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 sm:grid-cols-2 lg:my-9 text-center">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fedIn('left', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col justify-center items-center mx-auto md-mx-5 lg:mx-5 my-5 bg-white shadow-xl w-72 h-[150px] rounded-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center items-center w-10 h-10 border-2 border-green-600 rounded-full mb-4">
                <i className="fa-solid fa-check text-green-500 text-2xl"></i>
              </div>
              <p className="w-full text-neutral-500">{service.text}</p>
            </motion.div>
          ))}
        </div>
     </div>
    </div> */}
    <div className="mx-auto max-w-full lg:min-h-screen bg-zinc-100 py-14 flex flex-col items-center justify-center">
  <div className="w-full max-w-screen-xl">
    <motion.div
      variants={fedIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="tracking-wider text-center"
    >
      <h2 className="font-bold text-2xl lg:text-4xl text-neutral-700">
        Services
      </h2>
      <p className="text-neutral-500 my-5 mx-2 lg:mx-0">
        We provide quality behavioral services based on the principles of
        Applied Behavior Analysis (ABA). Behavioral Services are provided to
        children and adults with:
      </p>
    </motion.div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:my-9 text-center">
      {services.map((service) => (
        <motion.div
          key={service.id}
          variants={fedIn('left', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col justify-center items-center mx-auto bg-white shadow-xl w-72 h-[150px] rounded-md text-center hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-center items-center w-10 h-10 border-2 border-green-600 rounded-full mb-4">
            <i className="fa-solid fa-check text-green-500 text-2xl"></i>
          </div>
          <p className="text-neutral-500">{service.text}</p>
        </motion.div>
      ))}
    </div>
  </div>
</div>

     {/* Detailed Services Section */}
     {/* <section className="container  min-h-[84vh]: mx-auto text-center py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {detailedServices.map(service => (
            <div key={service.id} className=" p-3 flex flex-col items-center ">
              <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center mb-2">
                <span className="text-blue-500 text-2xl font-bold">{service.id}</span>
              </div>
               <motion.div
              key={service.id}
              variants={fedIn('left', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col justify-center items-center mx-auto md-mx-5 lg:mx-5 my-5 bg-white shadow-2xl  w-72 h-[150px] rounded-md text-center hover:shadow-lg transition-shadow"
            >
              <p className="w-full text-neutral-700">{service.title}</p>
            </motion.div>
              <motion.p 
              key={service.id}
              variants={fedIn('left', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="text-neutral-500 max-w-xs lg:max-w-[40%]">{service.description}</motion.p>
            </div>
          ))}
        </div>
      </section> */}
      <section className="container mx-auto text-center py-12 lg:min-h-screen">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {detailedServices.map(service => (
      <div key={service.id} className="flex flex-col items-center p-3">
        <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center mb-2">
          <span className="text-blue-500 text-2xl font-bold">{service.id}</span>
        </div>
        <motion.div
          variants={fedIn('left', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col justify-center items-center bg-white shadow-2xl w-72 h-[150px] rounded-md text-center hover:shadow-lg transition-shadow"
        >
          <p className="text-neutral-700">{service.title}</p>
        </motion.div>
        <motion.p
          variants={fedIn('left', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-neutral-500 max-w-xs lg:max-w-[40%] mt-4"
        >
          {service.description}
        </motion.p>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}
