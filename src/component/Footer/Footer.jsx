import { Link } from "react-router-dom";
import logo from "../../assets/logo (2).png"
export default function Footer() {
  return (
    <div className="max-w-full py-4 lg:py-10 min-h-[200px] bg-blue-500">
      <ul className="font-medium flex  justify-center  md:p-0    md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   ">
        <li>
          <Link
            to=""
            className="block py-2 px-2 text-white "
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="about" className="block py-2 px-2 text-white">
            About
          </Link>
        </li>
        <li>
          <Link to="service" className="block py-2 px-2 text-white">
            Services
          </Link>
        </li>
        <li>
          <Link to="application" className="block py-2 px-2 text-white">
            App
          </Link>
        </li>
        <li>
          <Link to="resource" className="block py-2 px-2 text-white">
            Resource
          </Link>
        </li>
      </ul>
     <div className=" flex flex-col justify-center items-center">
     <div className="flex justify-center items-center my-2">
        <div className=" flex justify-center items-center w-6 h-6 border-2 border-white rounded-full mx-1">
          <i className="fa-brands fa-facebook-f text-white  "></i>
        </div>
        <p className=" text-white">Follow Us On Facebook</p>
      </div>
      <div className=" flex justify-center items-center">
          <img src={logo} alt="" className="h-8 " />
          <span className=" text-2xl font-semibold whitespace-nowrap text-white my-2">
           Autism
          </span>
      </div>
      <p className=" text-white my-2">@2024  Autism App , All Right Reserved</p>
     </div>
    </div>
  );
}
