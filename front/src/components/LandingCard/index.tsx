import Link from "next/link";

const LandingCard: React.FC = () => {
  return (
    <div className="m-4 p-60 bg-neutral-800 text-center rounded-lg shadow-md">
      <span className="block mb-10 text-white text-4xl bold">
        To access our full catalog, please sign in to your account.
      </span>
      <Link href="/auth-page/signin">
        <span className=" text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Sign In
        </span>
      </Link>
    </div>
  );
};

export default LandingCard;
