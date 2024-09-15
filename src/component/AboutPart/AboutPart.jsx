
import img3 from "../../assets/about.png";
import { motion } from "framer-motion";
import { fedIn } from "../../variants";
import { Link } from "react-router-dom";
import "./about.scss";

export default function AboutPart() {
  return (
  //  <div className=" flex justify-center items-center">
  //    <div className=" min-h-[84vh] mx-auto overflow-x-hidden ">
  //     <motion.div
  //       variants={fedIn("up", 0.2)}
  //       initial="hidden"
  //       whileInView="show"
  //       viewport={{ once: false, amount: 0.2 }}
  //       className="text-center "
  //     >
  //       <h2 className="font-bold text-2xl lg:text-4xl tracking-wider pt-5 text-neutral-700 ">Welcome To Autism Web</h2>
  //     </motion.div>
  //     <div className="flex flex-col lg:flex-row lg:gap-12 justify-center items-center px-4 lg:px-2 py-9">
  //       <motion.div
  //         variants={fedIn("left", 0.2)}
  //         initial="hidden"
  //         whileInView="show"
  //         viewport={{ once: false, amount: 0.2 }}
  //         className=" mx-auto lg:mx-5 w-fit  min-w-80"
  //       >
  //         <img
  //           src={img3}
  //           alt="About Autism"
  //           className="lg:max-w-md h-80 lg:h-[500px] object-cover rounded-lg"
  //         />
  //       </motion.div>
  //       <motion.div
  //         variants={fedIn("right", 0.2)}
  //         initial="hidden"
  //         whileInView="show"
  //         viewport={{ once: false, amount: 0.2 }}
  //         className="mt-4 sm:mt-0 max-w-fit sm:max-w-lg  lg:ml-2 tracking-wider"
  //       >
  //         <p className="text-neutral-500 leading-9 mx-2">
  //           Autism provides a community for Autism and tests for parents and caregivers of children aged 11 to 30 months. The FREE app Autism was launched in 2024 and has been downloaded 90,000 times.
  //           It is based on research by the Olga Tennison Autism Research Centre at La Trobe University, Australia. The early autism detection method used in ASDetect is 83% accurate.
  //         </p>
  //         <div className="mx-auto mt-3">
  //           <Link to="about">
  //             <button className="btn ml-2">
  //               <span className="btn-text-one">See More</span>
  //               <span className="btn-text-two">Great!</span>
  //             </button>
  //           </Link>
  //         </div>
  //       </motion.div>
  //     </div>
  //   </div>
  //  </div>
  <div className="flex justify-center items-center lg:min-h-screen">
  <div className="mx-auto overflow-x-hidden">
    <motion.div
      variants={fedIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="text-center"
    >
      <h2 className="font-bold text-2xl lg:text-4xl tracking-wider pt-5 text-neutral-700">
        Welcome To Autism Web
      </h2>
    </motion.div>

    <div className="flex flex-col lg:flex-row lg:gap-12 justify-center items-center px-4 lg:px-2 py-9">
      <motion.div
        variants={fedIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="mx-auto lg:mx-5 w-fit min-w-80"
      >
        <img
          src={img3}
          alt="About Autism"
          className="lg:max-w-md h-80 lg:h-[500px] object-cover rounded-lg"
        />
      </motion.div>
      <motion.div
        variants={fedIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="mt-4 sm:mt-0 max-w-fit sm:max-w-lg lg:ml-2 tracking-wider"
      >
        <p className="text-neutral-500 leading-9 mx-2">
          Autism provides a community for Autism and tests for parents and caregivers of children aged 11 to 30 months. FREE app Autism was launched in 2024 and has been parents and caregivers of children aged 11 to 30 months. a mobile application
powered by artificial intelligence to assist newly
graduated doctors in diagnosing autism in
children. The early autism detection method used in ASDetect is 98%  accurate.
        </p>
        <div className="mx-auto mt-3">
          <Link to="about">
            <button className="btn ml-2">
              <span className="btn-text-one">See More</span>
              <span className="btn-text-two">Great!</span>
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  </div>
</div>

  );
}