import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValid, setPasswordValid] = useState(true);

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

    // Check password requirements
    const password = event.target.value;
    const isPasswordValid =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      );

    setPasswordValid(isPasswordValid);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleCreateAccount = () => {
    // Add logic to handle account creation
    console.log("Create Account button clicked!");
  };

  return (
    <div className="bg-slate-100 flex flex-col items-center justify-center w-full">
      <div className="sm:flex flex-col justify-center items-center mt-24 space-y-4">
        <h1 className="text-3xl font-bold text-center">Create account</h1>
        <p>Get up and running and start booking appointments</p>
      </div>

      <div className="flex justify-center items-center p-4 sm:p-10 bg-white flex-col border my-8 py-10 rounded-md shadow-lg w-fit">
        <div className="flex items-center gap-4 border p-4 px-20 sm:px-36 rounded-lg shadow-lg">
          <FcGoogle size={30} />
          <p>Sign up with Google</p>
        </div>

        {/* The OR */}

        <div className="flex items-center mt-4 space-y-4">
          <div className="flex-1 border-t border-black"></div>
          <p className="mx-4 text-gray-500">OR</p>
          <div className="flex-1 border-t border-black"></div>
        </div>

        {/* Form */}

        <form className="mt-4">
          <div className="sm:flex justify-between gap-1 sm:gap-2">
            <div>
              <p>First Name</p>
              <input
                type="text"
                placeholder="Kemi"
                onChange={handleChange}
                name="firstName"
                className="border rounded-md p-2 mb-2 w-80 sm:w-36"
              />
            </div>
            <div>
              <p>Last Name</p>
              <input
                type="text"
                placeholder="Abgbebi"
                onChange={handleChange}
                name="lastName"
                className="border rounded-md p-2 mb-2  w-80 sm:w-36"
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
              className="border rounded-md p-2 mb-2 w-80 sm:w-full"
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
                className={`border rounded-md p-2 mb-2 w-full ${
                  passwordValid ? "" : "border-red-500"
                }`}
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

              <div className="text-sm sm:text-base sm:flex sm:items-center sm:gap-2 space-y-2">
                <p className="text-white bg-[#035856] rounded-2xl p-2">
                  At least one special character
                </p>
                <p className="text-white bg-[#035856]  rounded-2xl p-2">
                  At least one number
                </p>
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
                className={`border rounded-md p-2 mb-2 w-full ${
                  passwordValid ? "" : "border-red-500"
                }`}
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
          className="bg-[#035856] text-white px-32 sm:px-40 py-2 rounded-md mt-8 "
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
