import img2 from "../../assets/iPhone 15 Pro (1).png"
motion;
import { motion } from "framer-motion";
// variants
import { fedIn } from "../../variants";
import "./header.scss";

export default function Header() {
  return (
    <div className="relative  overflow-x-hidden sm:overflow-hidden  lg:min-h-[100vh] bg-zinc-100 flex justify-center items-center   ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-blue-500 absolute  -top-[40%] right-0 rounded-3xl rotate-45 -z[8] "></div>
      {/* hero section */}
      <div className="container  mx-auto px-2 lg:px-9">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* text content section */}
            <motion.div
              variants={fedIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-col justify-center mx-4 sm:mx-20 gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-700">
                Autism Detection
              </h1>
              <p className="text-sm max-w-full lg:max-w-lg my-4  lg:text-neutral-500 sm:text-neutral-500">
                For parents and caregivers of children aged 11 to 30 months, the
                FREE app
                <span className="text-blue-500 lg:text-blue-500 sm:lg:text-blue-500 ">
                 
                  Autism.
                </span>
                We hope it will be used by the largest possible number of people.
              </p>

              <div className=" my-3 lg:my-4 ">
                <button className=" bg-blue-500  text-white  py-2 rounded button">
                  <span>Download</span>
                </button>
              </div>
            </motion.div>
            {/* image section */}
            <motion.div
              variants={fedIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="order-1 sm:order-2 flex justify-center "
            >
              <div className="relative z-10 mt-5 lg:mt-12 ">
                <img
                  src={img2}
                  alt=""
                  className="max-w-[300px] h-[300px] sm:h-[450px] sm:max-w-[450px]  object-contain mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
