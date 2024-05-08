import React, { useState } from "react";
import logo from "../assets/Vector.png";
import { useNavigate } from "react-router-dom";

import Alert from "../assets/alert.png";

const Signup = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false); // State variable to track form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Function to check if email is valid
  const isEmailValid = () => {
    return validateEmail(formData.email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if name and email fields are not empty and if the email is in a valid format
    if (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      isEmailValid()
    ) {
      // Add your signup logic here, e.g., sending data to a server
      console.log("Form submitted with data:", formData);

      // Set formSubmitted to true after form submission
      setFormSubmitted(true);

      // Reset form fields after submission
      setFormData({
        name: "",
        email: "",
      });

      // Redirect user to submission page
      Navigate("/submission");
    } else {
      // If name or email fields are empty or email is not valid, show error message
      // You can also show error message using state variables and conditionally render it in the JSX
      console.log("Please enter valid name and email.");
      setFormSubmitted(true); // Set formSubmitted to true to trigger error UI rendering
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[1392px] h-[90.17px] pl-[52.22px] pr-[20.89px] pt-[13.97px] bg-white/opacity-80 rounded-[65.28px]  backdrop-blur-[31.33px] justify-between items-center inline-flex">
        <img className="" src={logo} alt="logo"></img>
      </div>
      <div className="w-[1440px] relative bg-white mt-10">
        <div className="mx-auto w-[417px]">
          <div className="flex flex-col justify-center items-center gap-4 mb-8">
            <div className="text-green-600 text-4xl font-normal font-abc leading-10">
              Registration Form
            </div>
            <div className="text-center text-zinc-900 text-[56px] font-semibold font-['Manrope'] leading-[67.20px]">
              Start your success Journey here!
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="h-[75px] bg-zinc-100 rounded-[64px] border border-black/opacity-0 flex justify-start items-center px-9">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="text-neutral-500 bg-zinc-100 text-xl font-medium font-['Manrope'] w-full outline-none"
                />
              </div>
              <div className="h-[75px]  bg-zinc-100 rounded-[64px] border border-black/opacity-0 flex justify-start items-center px-9">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="text-neutral-500 bg-zinc-100 text-xl font-medium font-['Manrope'] w-full outline-none"
                />
              </div>
              {formSubmitted &&
                !isEmailValid() && ( // Show the validation message if form is submitted and email is not valid
                  <div className="flex gap-0">
                    <img
                      className="w-4 h-4 ml-2 relative mt-1"
                      src={Alert}
                      alt="Alert"
                    ></img>
                    <div className="w-[225px] h-[22px] justify-start items-center  inline-flex">
                      <div className="w-5 h-5 relative">
                        <div className="w-4 h-4  top-[2px] absolute">
                          <div className="w-[3.20px] h-2 left-[6.40px] top-[4px] absolute bg-white" />
                        </div>
                      </div>
                      <div className=" text-red-600 text-base font-medium font-['Manrope']">
                        Enter a valid email address
                      </div>
                    </div>
                  </div>
                )}
            </div>

            <button
              type="submit"
              className="w-full bg-stone-300 rounded-[107.06px] py-[26.11px] mt-6"
            >
              <div className="text-white text-lg font-semibold font-['Manrope'] capitalize text-center">
                Submit
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
