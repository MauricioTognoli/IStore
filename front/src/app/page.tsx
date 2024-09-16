import LandingCard from "@/components/LandingCard";

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col items-center mt-48">
      <h1 className="text-center text-8xl font-black shadow-lg">
        IStore
      </h1>
      <h2 className="text-center text-2xl mt-10">
        WELCOME TO OUR WEBSITE
      </h2>
      <p className="text-center text-lg mt-4">
        At IStore, you will find variety and quality in Apple products
      </p>

      <div className="mt-10">
        <LandingCard />
      </div>
    </main>
  );
}

export default Landing;

