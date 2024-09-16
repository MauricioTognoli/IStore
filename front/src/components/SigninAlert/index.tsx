import Link from "next/link";

const SigninAlert: React.FC = () => {
  return (
    <div className="bg-neutral-800 rounded-lg relative mx-auto mt-20 p-10 mb-20">
      <h1 className="font-bold text-4xl mb-2 p3">Only available for logged in users</h1>
      <p className="mb-4 text-gray-400 p2">
        You must be logged in to use this page. If you do not have an account,
        you can create one by clicking the button below.
      </p>
      <div className="text-center mt-5 p-5" >
        <Link href="/auth-page/signin">
          <span className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">

            LOGIN OR REGISTER
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SigninAlert;
