import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(formData);

  const handleChange = (event) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleCreateAccount = () => {
    // Add logic to handle account creation
    console.log("Create Account button clicked!");
  };

  return (
    <div className="bg-slate-100 flex flex-col items-center justify-center">
      <div className="sm:flex flex-col justify-center items-center mt-24 space-y-4">
        <h1 className="text-3xl font-bold text-center">Create account</h1>
        <p>Get up and running and start booking appointments</p>
      </div>

      <div className="flex justify-center items-center bg-white flex-col border m-10 rounded-md shadow-lg w-fit">
        <div className="flex items-center gap-4 border p-4 px-28 sm:px-36 rounded-lg shadow-lg">
          <FcGoogle size={30} />
          <p>Sign up with Google</p>
        </div>
        <form className="mt-4">
          <div className="flex gap-1 sm:gap-8">
            <div>
              <p>First Name</p>
              <input
                type="text"
                placeholder="Kemi"
                onChange={handleChange}
                name="firstName"
                className="border rounded-md p-2 mb-2"
              />
            </div>
            <div>
              <p>Last Name</p>
              <input
                type="text"
                placeholder="Abgbebi"
                onChange={handleChange}
                name="lastName"
                className="border rounded-md p-2 mb-2"
              />
            </div>
          </div>
          <div className="mt-2">
            <p>Email address</p>
            <input
              type="email"
              placeholder="kemiade@alethian.com"
              onChange={handleChange}
              name="email"
              className="border rounded-md p-2 mb-2 sm:w-full"
            />
          </div>
          <div className="mt-2 ">
            <div className="relative">
              <p>Password</p>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={handleChange}
                name="password"
                className=" border rounded-md p-2 mb-2 w-full"
              />

              <div
                className="absolute inset-y-0 right-0 top-4 flex items-center pr-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
            </div>

            {/* password requirements */}

            <div className="space-y-2 bg-slate-200 p-3 rounded-md">
              <p>Password must contain:</p>
              <p className="text-white bg-[#035856] text-sm sm:text-base rounded-2xl p-2 w-fit">
                Lower and Upper case character
              </p>
              <div className="text-sm sm:text-base">
                <span className="text-white bg-[#035856] rounded-2xl p-2">
                  At least one special character
                </span>{" "}
                <span className="text-white bg-[#035856]  rounded-2xl p-2">
                  At least one special character
                </span>
              </div>
              <p className="bg-slate-100 rounded-2xl p-2 w-fit">
                8 Characters long
              </p>
            </div>
          </div>

          <div className="mt-4 relative">
            <div className="">
              <p>Confirm password</p>
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                name="confirmPassword"
                className="border rounded-md p-2 mb-2 w-full"
              />
            </div>

            <div
              className="absolute inset-y-0 right-0 top-4 flex items-center pr-2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>
        </form>
        <button
          type="button"
          onClick={handleCreateAccount}
          className="bg-[#035856] text-white px-48 py-2 rounded-md mt-8 "
        >
          Create Account
        </button>
      </div>
      <div className="text-center mb-24 space-y-4">
        <span>Already have an account?</span>{" "}
        <span className="text-green-900 text-lg font-bold">Log in</span>
      </div>
    </div>
  );
}

export default App;
