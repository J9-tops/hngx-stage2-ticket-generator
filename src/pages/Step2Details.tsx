import "react-circular-progressbar/dist/styles.css";
import Button from "../components/Button";
import ProfileUploader from "../components/ProfileUploader";
import ProgressBar from "../components/ProgressBar";
import { useStep2Form } from "../hooks/useForm";

const Step2Details = () => {
  const { register, handleSubmit, errors, onSubmit, setValue, clearErrors } =
    useStep2Form();

  return (
    <main className="flex h-full w-full items-center justify-center px-5 pt-[15px] pb-16 text-white md:pt-[54px] md:pb-28">
      <section className="border-greenish bg-bgGreener flex max-w-[700px] flex-col gap-8 rounded-[40px] border border-solid p-6 md:rounded-3xl md:p-12">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center justify-between gap-3">
            <h1 className="font-jeju text-2xl">Attendee Details</h1>
            <p>Step 2/3</p>
          </div>
          <ProgressBar prev={33} current={66} />
        </div>
        <div className="md:bg-LightGreen md:border-bgGreen bg-transparent md:rounded-4xl md:border md:border-solid md:p-6">
          <div className="flex flex-col gap-8">
            {/* <div className="md:border-transparent flex flex-col gap-8 md:rounded-4xl lg:border lg:border-solid lg:bg-transparent lg:p-6"> */}
            <ProfileUploader
              errors={errors}
              setValue={setValue}
              clearErrors={clearErrors}
            />
            <span
              className={`bg-blackygreen h-1 w-full ${errors.profilePicture ? "-mt-3" : ""}`}
            ></span>
            <div className="w-full">
              <form
                id="accessType"
                className="flex flex-col gap-6 self-stretch"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Enter your name</label>
                  <input
                    {...register("name")}
                    type="text"
                    className="border-blackygreen focus:border-blackygreen focus:ring-blackygreen rounded-xl border border-solid bg-transparent p-3 outline-none focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600"
                  />
                </div>
                {errors.name && (
                  <p className="-mt-6 text-[13px] text-red-500">
                    {errors.name.message}
                  </p>
                )}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Enter your email *</label>
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
                      {...register("email")}
                      type="text"
                      id="email"
                      className="border-blackygreen focus:border-blackygreen focus:ring-blackygreen block w-full rounded-lg border bg-transparent p-3 ps-10 text-sm text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600"
                      placeholder="name@provider.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="-mt-7.5 w-full text-[13px] text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div
                  className={`flex flex-col gap-2 ${errors.email ? "" : "-mt-6"}`}
                >
                  <label
                    htmlFor="request"
                    className="text-gray-90 block text-sm font-medium"
                  >
                    About the project
                  </label>
                  <textarea
                    {...register("request")}
                    id="request"
                    rows={3}
                    className="border-blackygreen focus:ring-blackygreen focus:border-blackygreen block w-full resize-none rounded-xl border bg-transparent p-2.5 text-sm text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
                {errors.request && (
                  <p className="-mt-7.5 w-full text-[13px] text-red-500">
                    {errors.request.message}
                  </p>
                )}
                <div className="flex flex-col gap-4 md:flex-row-reverse">
                  <Button type="submit">
                    <span>Get my free ticket</span>
                  </Button>
                  <Button variant="outlined" to="..">
                    <span>Back</span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Step2Details;
