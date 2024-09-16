import SignupForm from "@/components/SingupForm";

const Signup: React.FC = () => {
  return (
    <main>
      <div className="mt-48 text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Register
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
          Register on our website to access all our products
        </p>
      </div>
      <SignupForm />
    </main>
  );
};

export default Signup;
