import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5 text-white">
      <p className="font-rage text-8xl">
        <span>
          ERROR <span className="text-6xl text-red-600">!!!!</span>
        </span>
      </p>
      <p className="w-70 text-center">
        Now do the right thing and go back to fill those forms. Thank you.
      </p>
      <Link
        to="/"
        className="border-subGreen font-jeju lg bg-subGreen w-full rounded-lg border border-solid px-6 py-3 text-center text-white md:w-[150px]"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorElement;
