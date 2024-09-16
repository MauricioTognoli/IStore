import SigninForm from "@/components/SigninForm"


const Signin: React.FC = () => {

  return (
    <main className="items-center mt-48">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Sign In
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
          Welcome, please sign in to your account to enjoy all our services
        </p>
      </div>
      <SigninForm />
    </main>
  );
};

export default Signin;
