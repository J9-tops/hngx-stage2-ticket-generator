import { Link } from "react-router-dom";
import cloudDownload from "../assets/images/cloud-download.png";
const Step2Details = () => {
  return (
    <main className="flex h-full w-full items-center justify-center px-5 pt-[26px] text-white">
      <section className="border-greenish bg-LightGreen flex max-w-3xl flex-col gap-8 rounded-[40px] border border-solid p-6">
        <div>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <h1 className="font-jeju text-2xl">Ticket Selection</h1>
            <p>Step 2/3</p>
          </div>
          <span></span>
        </div>
        <div className="lg:border-bgGreen lg:bg-LightGreen flex flex-col gap-8 lg:rounded-4xl lg:border lg:border-solid lg:p-6">
          <div className="border-blackygreen relative flex flex-col gap-10 self-stretch rounded-3xl border-2 border-t-0 border-solid px-6 py-4 backdrop-blur-[7px]">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-whitish">Upload Profile Photo</h1>
            </div>
            <label
              htmlFor="profilePhoto"
              className="border-subGreen bg-bgGreen flex cursor-pointer flex-col rounded-4xl border-4 border-solid p-6 py-10"
            >
              <input type="file" className="hidden" />
              <p className="flex h-full w-full flex-col items-center gap-4 text-center">
                <span>
                  <img
                    src={cloudDownload}
                    alt="upload your picture"
                    width={40}
                  />
                </span>
                <span>Drag & drop or click to upload</span>
              </p>
            </label>
          </div>
          <span className="bg-blackygreen h-1 w-full"></span>
          <div className="w-full">
            <form id="accessType" className="flex flex-col gap-6 self-stretch">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Enter your name *</label>
                <input
                  type="text"
                  className="border-blackygreen focus:border-blackygreen focus:ring-blackygreen rounded-xl border border-solid bg-transparent outline-none"
                  name="name"
                  title="name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Enter your email *</label>
                <div className="relative mb-6">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                    <svg
                      className="h-4 w-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className="border-blackygreen focus:border-blackygreen focus:ring-blackygreen block w-full rounded-lg border bg-transparent p-2.5 ps-10 text-sm text-white"
                    placeholder="name@flowbite.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="about"
                  className="text-gray-90 block text-sm font-medium"
                >
                  About the project
                </label>
                <textarea
                  id="about"
                  rows={4}
                  className="border-blackygreen focus:ring-blackygreen focus:border-blackygreen block w-full rounded-xl border bg-transparent p-2.5 text-sm text-white"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  to="/downloadticket"
                  className="bg-subGreen font-jeju w-full rounded-lg px-6 py-3 text-center capitalize"
                >
                  Get my free ticket
                </Link>
                <button className="border-subGreen font-jeju text-subGreen lg w-full rounded-lg border border-solid bg-transparent px-6 py-3 text-center">
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>{" "}
    </main>
  );
};

export default Step2Details;
