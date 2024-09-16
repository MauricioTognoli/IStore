'use client'
import { validateSignin } from "@/helpers/validations";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UserContext } from "@/context/userContext";

const SigninForm: React.FC = () => {
  const { signIn } = useContext(UserContext);
  const router = useRouter();

  const [signinValues, setSigninValues] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSigninValues({ ...signinValues, [name]: value });
    setErrors(validateSignin({ ...signinValues, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const success = await signIn(signinValues);

    if (success) {
      router.push('/home');
    } else {
      alert('Invalid credentials');
    }
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
          className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
          className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
        {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password}</span>}
      </div>

      <div className="flex justify-between items-center">
        <button
          type="submit"
          disabled={Object.keys(errors).length > 0}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Sign In
        </button>

        <Link href="/auth-page/signup">
          <p className="text-blue-700 hover:underline ml-4">Dont have an account? Create one</p>
        </Link>
      </div>
    </form>
  );
}

export default SigninForm;
