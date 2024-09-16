'use client'
import { UserContext } from "@/context/userContext";
import { validateSignup } from "@/helpers/validations";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const SignupForm: React.FC = () => {
  const { signUp } = useContext(UserContext);
  const router = useRouter();

  const [signUpValues, setSignUpValues] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpValues({ ...signUpValues, [name]: value });
    setErrors(validateSignup({ ...signUpValues, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = {
      email: signUpValues.email,
      password: signUpValues.password,
      name: `${signUpValues.first_name} ${signUpValues.last_name}`,
      phone: signUpValues.phone,
      address: signUpValues.address,
    };

    const success = await signUp(user);
    if (success) router.push('/home');
    if (!success) alert('Check your info');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 mb-36">
      {/* Email */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="email"
          id="email"
          className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={handleChange}
          required
        />
        <label
          htmlFor="email"
          className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email
        </label>
        {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
      </div>

      {/* Password */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="password"
          name="password"
          id="password"
          className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={handleChange}
          required
        />
        <label
          htmlFor="password"
          className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
        {errors.password && (<span className="text-red-500 text-xs mt-1">{errors.password}</span>)}
      </div>

      {/* Phone */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="number"
          name="phone"
          id="phone"
          className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={handleChange}
          required
        />
        <label
          htmlFor="phone"
          className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Phone Number
        </label>
        {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone}</span>}
      </div>

      {/* Address */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="address"
          id="address"
          className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={handleChange}
          required
        />
        <label
          htmlFor="address"
          className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Address
        </label>
        {errors.address && (<span className="text-red-500 text-xs mt-1">{errors.address}</span>)}
      </div>

      {/* First Name */}
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="first_name"
            id="first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={handleChange}
            required
          />
          <label
            htmlFor="first_name"
            className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First Name
          </label>
          {errors.first_name && <span className="text-red-500 text-xs mt-1">{errors.first_name}</span>}
        </div>

        {/* Last Name */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="last_name"
            id="last_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={handleChange}
            required
          />
          <label
            htmlFor="last_name"
            className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last Name
          </label>
          {errors.last_name && <span className="text-red-500 text-xs mt-1">{errors.last_name}</span>}
        </div>
      </div>

      <button
        type="submit"
        disabled={Object.keys(errors).length > 0}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Sign up
      </button>
    </form>
  );
}

export default SignupForm;
