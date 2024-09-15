
import img2 from "../../assets/iPhone 15 Pro (1).png";
import logo from "../../assets/logos_google-play-icon.png";
import { motion } from "framer-motion";
import { fedIn } from "../../variants";

export default function AppPart() {
  const features = [
    "For children 2 years and younger (between 11 and 30 months)",
    "Based on research with an 83% accuracy for detecting autism",
    "Features extensive video footage of children both with and without autism",
    "Contains 3 age-appropriate assessments for children aged 12, 18, and 24 months",
    "Based on world-class, rigorous research at the Olga Tennison Autism Research Centre",
  ];

  return (
    // <div className=" mx-auto  overflow-x-hidden gl:min-h-[84vh] py-7">
    //    <div className="mx-auto w-fit">
    //  <motion.div 
    //   variants={fedIn('up', 0.2)} 
    //   initial="hidden"
    //   whileInView="show"
    //   viewport={{ once: false, amount: 0.2 }}
    //  className="tracking-wider">
    //     <h2 className=" text-center font-bold text-2xl lg:text-4xl text-neutral-700">
    //       Download App
    //     </h2>
    //   </motion.div>
    //   </div>
    //   <div className="flex flex-wrap lg:flex-row justify-center items-center my-4">
    //     <motion.div
    //       variants={fedIn('left', 0.2)}
    //       initial="hidden"
    //       whileInView="show"
    //       viewport={{ once: false, amount: 0.2 }}
    //       className="mt-9 mx-auto lg:mx-5 w-fit min-w-80"
    //     >
    //       <img
    //         src={img2}
    //         alt="App Preview"
    //         className="lg:max-w-md 2xl:max-w-lg h-80 lg:h-[450px] object-cover"
    //       />
    //     </motion.div>
    //     <motion.div
    //       variants={fedIn('right', 0.2)}
    //       initial="hidden"
    //       whileInView="show"
    //       viewport={{ once: false, amount: 0.2 }}
    //       className="max-w-sm lg:max-w-lg ml-4 mt-4 tracking-wider"
    //     >
    //       <p className="text-xl text-neutral-700 font-bold px-3 lg:px-0">
    //         Autism is a free app that empowers parents to assess their young children for early signs of autism
    //       </p>
    //       <ul className="text-neutral-500 list-disc  my-3 px-5 lg:px-0 leading-6">
    //         {features.map((feature, index) => (
    //           <li key={index} className="mb-2">
    //             {feature}
    //           </li>
    //         ))}
    //       </ul>
    //       <div className="px-5 lg:px-0 md:mx-auto">
    //       <button className="btn mt-3">
    //         <div className="flex justify-between items-center">
    //           <img src={logo} alt="Google Play Logo" className="w-4 ml-2" />
    //           <span className="btn-text-one">Download</span>
    //         </div>
    //         <span className="btn-text-two ml-2">By Google Play</span>
    //       </button>
    //       </div>
    //     </motion.div>
    //   </div>
    // </div>
    <div className="flex justify-center items-center lg:min-h-screen">
  <div className="mx-auto overflow-x-hidden py-7">
    <div className="mx-auto w-fit">
      <motion.div
        variants={fedIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="tracking-wider"
      >
        <h2 className="text-center font-bold text-2xl lg:text-4xl text-neutral-700">
          Download App
        </h2>
      </motion.div>
    </div>

    <div className="flex flex-wrap lg:flex-row justify-center items-center my-4">
      <motion.div
        variants={fedIn('left', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="mt-9 mx-auto lg:mx-5 w-fit min-w-80"
      >
        <img
          src={img2}
          alt="App Preview"
          className="lg:max-w-md 2xl:max-w-lg h-80 lg:h-[450px] object-cover"
        />
      </motion.div>

      <motion.div
        variants={fedIn('right', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-sm lg:max-w-lg ml-4 mt-4 tracking-wider"
      >
        <p className="text-xl text-neutral-700 font-bold px-3 lg:px-0">
          Autism is a free app that empowers parents to assess their young children for early signs of autism.
        </p>
        <ul className="text-neutral-500 list-disc my-3 px-5 lg:px-0 leading-6">
          {features.map((feature, index) => (
            <li key={index} className="mb-2">
              {feature}
            </li>
          ))}
        </ul>
        <div className="px-5 lg:px-0 md:mx-auto">
          <button className="btn mt-3">
            <div className="flex justify-between items-center">
              <img src={logo} alt="Google Play Logo" className="w-4 ml-2" />
              <span className="btn-text-one">Download</span>
            </div>
            <span className="btn-text-two ml-2">By Google Play</span>
          </button>
        </div>
      </motion.div>
    </div>
  </div>
</div>

  );
}