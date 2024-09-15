import img3 from "../../assets/about.png";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { fedIn } from "../../variants";
import men from "../../assets/men.jfif";
import wamen from "../../assets/wamen.jpg";
import video from "../../assets/autismDetect (online-video-cutter.com).mp4";
export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState({});

  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const peop = [
    {
      name: "Mohammad Abdel-Gawad Rajab Ibrahim",
      src: men,
      desc: " is Team leader ,work on  Machine learning,Deep Learning",
    },
    {
      name: "Mohanad Adel Abdulaziz Mohammad",
      src: men,
      desc: "work on Machine Learning ,Flutter ",
    },
    {
      name: "Mohammad Mahmoud Muhammad Mahmoud",
      src: men,
      desc: "work on Machine Learning , Deep Learning",
    },
    {
      name: "Mohammad AbdelAleem Mustafa AbdelDayem",
      src: men,
      desc: "work on Machine Learning , Deeep Learning",
    },
    {
      name: "Lamia Fekry Mohammad Ali",
      src: wamen,
      desc: "work on frontend ,and ui/ux",
    },
    {
      name: "Nourhan Mahmoud Attia Khalil",
      src: wamen,
      desc: "work on Machine Learning ,and Ui/ux",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % peop.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + peop.length) % peop.length);
  };

  const faqs = [
    {
      question: "How sensitive is Autism?",
      answer:
        "While Autism is not a diagnostic tool, the method on which the app is based is 83% accurate in identifying early signs of autism. However, no autism surveillance or screening method is perfectly accurate, so there is a chance that either:A child could be assessed as ‘low likelihood’ and still go on to meet criteria for autism later in life, orA child could be assessed as ‘high likelihood’ and after formal developmental assessment by a health professional, not receive a diagnosis of autism.Regardless of the assessment result in ASDetect, parents should still seek professional advice if they have concerns about their children.",
    },
    {
      question:
        "My child was born prematurely; should I put in their actual birth date or their adjusted birth date?",
      answer:
        "Autism will prompt your to select the number of weeks gestation that applies to your child.",
    },
    {
      question: "Can Autism be installed on iPads and tablets?",
      answer:
        "Yes. Autism can be installed on iPads, iPhones as well as Android phones and tablets.",
    },
    {
      question:
        "My child was assessed by ASDetect as “low likelihood” for autism, but he/she got a number of atypical results; what should I do?",
      answer:
        "It is not uncommon to receive an ASDetect assessment of “low likelihood” for autism, but still receive atypical results for a number of behaviours. This is because ASDetect determines your child’s “likelihood” for autism based on whether your child is meeting very specific behavioural milestones for their age, which is based on research. As children develop at slightly different rates, not all children are displaying ALL of the behaviours in ASDetect. Furthermore, please note that ASDetect is designed to measure a child’s likelihood for autism specifically; therefore, the assessment results are not indicative of a child’s likelihood for other developmental conditions, such as developmental or language delay.",
    },
    {
      question:
        " My child has been assessed by ASDetect as ‘high likelihood” for autism; what should I do?",
      answer:
        "Your next step is to seek a formal developmental assessment for autism. See your primary healthcare physician or general practitioner (doctor), who can advise on who is qualified to perform autism assessments in your area.",
    },
    {
      question:
        " ASDetect said that my child had a “high likelihood” for autism, but following a formal assessment no autism diagnosis was made; why is this?",
      answer:
        "It’s important to remember that ASDetect does not provide a diagnosis. A formal assessment is the only method that can lead to an autism diagnosis. However, if you continue to have concerns about your child’s development, you should discuss these with your primary healthcare physician or general practitioner (doctor).",
    },
  ];
  const openModal = (faq) => {
    setSelectedQuestion(faq);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
      {/* important */}
<div className="order-1 lg:order-2 w-full mt-0 lg:min-h-screen relative lg:-top-32 lg:pt-5">
  <video
    ref={videoRef}
    className="w-full h-full object-cover rounded-md mx-auto"
    autoPlay
    loop
    muted={isMuted}
    playsInline
    controls={false}
  >
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  {/* Sound Toggle Button */}
   <button
    onClick={toggleMute}
    className={`absolute bottom-3  sm:bottom-5 md:bottom-7  lg:bottom-36  xl:bottom-[58px] right-3 sm:right-5 md:right-6 lg:right-11 xl:right-12 text-white px-4 md:px-8 lg:px-12 xl:px-24 py-2 md:py-3 lg:py-4 xl:py-5 rounded-full ${
      isMuted ? "bg-blue-500" : "bg-neutral-800"
    }`}
  >
    {isMuted ? "Un Mute Video" : "Mute Video"}
  </button>
</div> 





      {/* 2 */}
      {/* <div className="mx-auto mb-6 lg:mb-8  lg:min-h-screen">
        <div className="flex flex-col lg:flex-row lg:gap-12 justify-center items-center py-11 px-4 lg:px-0">
          <motion.div
            variants={fedIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="order-2 lg:order-1 max-w-xs md:max-w-sm lg:max-w-md tracking-wider"
          >
            <h2 className="text-2xl lg:text-4xl my-2 font-bold text-neutral-700">
              Our Website{`'`}s Goal is
            </h2>
            <h2 className="text-2xl lg:text-4xl my-2 font-bold  text-neutral-700">
              How to Use the App for
            </h2>
            <span className="block text-2xl lg:text-4xl font-bold my-2 text-blue-500">
              Autism Detection
            </span>
            <p className="text-neutral-500 leading-9">
              FREE app Autism was launched in 2024 and has been parents and
              caregivers of children aged 11 to 30 months, the parents and
              caregivers of children aged 11 to 30 months. Autism provides a
              community for Autism and tests for Autism. It is based on research
              by the Olga Tennison Autism Research Centre at La Trobe
              University, Australia. The early autism detection method used in
              ASDetect is 83% accurate.
            </p>
          </motion.div>

          <div className="order-1 lg:order-2 lg:w-auto mt-0 lg:ml-5">
            <img
              src={img3}
              alt="About Image"
              className="w-80 lg:w-96 h-[400px] lg:h-[600px] object-cover rounded-md mx-auto"
            />
          </div>
        </div>
      </div> */}
      <div className="flex justify-center items-center lg:min-h-screen">
  <div className="mx-auto mb-6 lg:mb-8 lg:min-h-screen">
    <div className="flex flex-col lg:flex-row lg:gap-12 justify-center items-center py-11 px-4 lg:px-0">
      <motion.div
        variants={fedIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="order-2 lg:order-1 max-w-xs md:max-w-sm lg:max-w-md tracking-wider"
      >
        <h2 className="text-2xl lg:text-4xl my-2 font-bold text-neutral-700">
          Our Website{`'`}s Goal is
        </h2>
        <h2 className="text-2xl lg:text-4xl my-2 font-bold text-neutral-700">
          How to Use the App for
        </h2>
        <span className="block text-2xl lg:text-4xl font-bold my-2 text-blue-500">
          Autism Detection
        </span>
        <p className="text-neutral-500 leading-9">
          FREE app Autism was launched in 2024 and has been parents and caregivers of children aged 11 to 30 months. a mobile application
powered by artificial intelligence to assist newly
graduated doctors in diagnosing autism in
children.The app also provides support for parents and
offers reliable resources to educate them about
their children.Additionally, the system facilitates experience
sharing among doctors and interaction with
parents through a specialized community.

        </p>
      </motion.div>

      <div className="order-1 lg:order-2 lg:w-auto mt-0 lg:ml-5">
        <img
          src={img3}
          alt="About Image"
          className="w-80 lg:w-96 h-[400px] lg:h-[600px] object-cover rounded-md mx-auto"
        />
      </div>
    </div>
  </div>
</div>

      
      {/* Section 3 */}
      {/* <div className="mx-auto py-10 lg:px-10  max-w-full min-h-[84vh] bg-gray-50">
        <motion.div
          variants={fedIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className=" "
        >
          <h2 className="text-3xl font-bold text-center mx-1 text-neutral-700">
            Frequently Asked Questions
          </h2>
        </motion.div>
        <div>
          {faqs.map((faq, index) => (
            <motion.div
              variants={fedIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              key={index}
              className="p-7"
            >
              <div
                className="cursor-pointer flex gap-3"
                onClick={() => openModal(faq)}
              >
                <span className="font-bold inline-flex justify-center items-center p-1 w-6 h-6 text-blue-500 rounded-full border-2 border-blue-500  hover:text-white hover:bg-blue-500">
                  ?
                </span>
                <h3 className="text-base lg:text-lg font-semibold text-neutral-500 hover:underline hover:text-blue-500">
                  {faq.question}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}
      <div className="mx-auto py-10 lg:px-10 max-w-full lg:min-h-screen bg-zinc-100 flex flex-col justify-center items-center">
  <motion.div
    variants={fedIn("up", 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.2 }}
    className="w-full"
  >
    <h2 className="text-3xl font-bold text-center mx-1 text-neutral-700">
      Frequently Asked Questions
    </h2>
  </motion.div>
  <div className="w-full">
    {faqs.map((faq, index) => (
      <motion.div
        variants={fedIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        key={index}
        className="p-7"
      >
        <div
          className="cursor-pointer flex gap-3"
          onClick={() => openModal(faq)}
        >
          <span className="font-bold inline-flex justify-center items-center p-1 w-6 h-6 text-blue-500 rounded-full border-2 border-blue-500 hover:text-white hover:bg-blue-500">
            ?
          </span>
          <h3 className="text-base lg:text-lg font-semibold text-neutral-500 hover:underline hover:text-blue-500">
            {faq.question}
          </h3>
        </div>
      </motion.div>
    ))}
  </div>
</div>

      {/* section 4 */}
      <div className="mx-auto py-9 lg:min-h-screen w-full md:max-w-screen-xl flex flex-col justify-center items-center">
  <div className="text-center">
    <h2 className="font-bold text-2xl lg:text-4xl tracking-wider pt-6 text-neutral-700">
      365-Develope Team
    </h2>
  </div>

  <div
    id="animation-carousel"
    className="relative w-full max-w-lg md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center"
    data-carousel="static"
  >
    {/* Carousel wrapper */}
    <div className="relative w-full h-56 overflow-hidden rounded-lg md:h-96">
      {peop.map((person, index) => (
        <div
          key={index}
          className={`${
            index === activeIndex ? "block" : "hidden"
          } duration-200 ease-linear`}
          data-carousel-item
        >
          <div className="flex flex-col justify-center items-center mt-8 lg:mt-12">
            <img
              src={person.src}
              className="block w-[90px] h-[90px] md:w-24 md:h-24 rounded-full"
              alt={person.name}
            />
            <p className="mt-3 text-sm md:text-base text-neutral-500 md:leading-9 text-center max-w-xs md:max-w-lg lg:max-w-xl">
              {person.desc}
            </p>
            <p className="h4 mt-3 md:mt-5 text-sm md:text-lg text-blue-500">
              {person.name}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Slider controls */}
    <button
      type="button"
      onClick={prevSlide}
      className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2"
      data-carousel-prev
    >
      <span className="inline-flex items-center justify-center group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
          className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 1 1 5l4 4"
          />
        </svg>
      </span>
    </button>
    <button
      type="button"
      onClick={nextSlide}
      className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2"
      data-carousel-next
    >
      <span className="inline-flex items-center justify-center group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
        <svg
          className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 9 4-4L1 1"
          />
        </svg>
      </span>
    </button>

    {/* Additional text */}
    <div className="text-center text-sm md:text-xl font-bold tracking-wide my-2 text-neutral-500">
      <h3>Zagazig University</h3>
      <h3>Faculty of Computer and Information</h3>
    </div>
  </div>
</div>
     

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              {selectedQuestion.question}
            </h3>
            <hr />
            <p className="text-neutral-500">{selectedQuestion.answer}</p>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
