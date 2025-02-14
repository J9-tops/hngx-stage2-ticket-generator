import { useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import cloudDownload from "../assets/images/cloud-download.png";
import useFileUpload from "../hooks/useFileUpload";
import { useTicketContext } from "../schema/TicketProvider";
import { Props } from "../types";

const ProfileUploader = ({ errors, setValue, clearErrors }: Props) => {
  const { formData } = useTicketContext();
  const fileRef = useRef<HTMLInputElement>(null);
  const [hover, setHover] = useState(false);
  const {
    progress,
    status,
    imageLoading,
    setImageLoading,
    handleFileUpload,
    handleDragOver,
    handleDrop,
  } = useFileUpload({ setValue, clearErrors, errors });

  const triggerFileSelect = () => {
    if (fileRef.current) {
      fileRef.current.value = "";
      fileRef.current.click();
    }
  };

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <>
      <div className="border-blackygreen bg-blackergreen relative flex flex-col gap-3 self-stretch overflow-hidden rounded-3xl border-2 border-solid px-6 pt-6 pb-6 backdrop-blur-[7px]">
        <h1 className="text-whitish">Upload Profile Photo</h1>
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="md:bg-hiddenBg hidden w-full md:absolute md:top-1/2 md:-z-10 md:block md:h-[80%] md:-translate-y-1/2 md:transform"></div>
          {formData.profilePicture !== "" ? (
            <>
              {imageLoading && (
                <p className="absolute top-[60%] left-[50%] translate-x-[-50%] transform text-sm text-white">
                  Loading image...
                </p>
              )}
              {status === "uploading" ? (
                <div className="border-subGreen pointer-events-none relative flex aspect-square h-[240px] w-[240px] items-center justify-center rounded-4xl border-4 border-solid">
                  <div className="w-24">
                    <CircularProgressbar
                      value={progress}
                      text={`${progress}%`}
                    />
                  </div>
                </div>
              ) : (
                <>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                    id="profilePhoto"
                    ref={fileRef}
                  />
                  <div
                    className="border-subGreen relative h-[240px] w-[240px] cursor-pointer overflow-hidden rounded-4xl border-4 border-solid"
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={formData.profilePicture}
                      alt=""
                      onLoad={() => setImageLoading(false)}
                      onClick={triggerFileSelect}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      className={`aspect-square h-full w-full ${hover ? "opacity-60" : ""}`}
                    />
                    {hover && (
                      <div
                        className="absolute top-1/2 flex w-[200px] -translate-y-1/2 translate-x-[18px] transform cursor-pointer flex-col items-center gap-4 text-center"
                        onClick={triggerFileSelect}
                      >
                        <span>
                          <img
                            src={cloudDownload}
                            alt="upload your picture"
                            width={40}
                          />
                        </span>
                        <span>Drag & drop or click to upload</span>
                      </div>
                    )}
                  </div>
                </>
              )}
            </>
          ) : (
            <label
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              htmlFor="profilePhoto"
              className="border-subGreen bg-bgGreen flex h-[240px] w-[240px] cursor-pointer flex-col justify-center rounded-4xl border-4 border-solid p-6 py-10"
            >
              <input
                type="file"
                className="sr-only"
                onChange={handleFileUpload}
                id="profilePhoto"
                ref={fileRef}
              />
              <p className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
                {status === "uploading" ? (
                  <div className="w-24">
                    <CircularProgressbar
                      value={progress}
                      text={`${progress}%`}
                    />
                  </div>
                ) : (
                  <>
                    <span>
                      <img
                        src={cloudDownload}
                        alt="upload your picture"
                        width={40}
                      />
                    </span>
                    <span>Drag & drop or click to upload</span>
                  </>
                )}
              </p>
            </label>
          )}
        </div>
      </div>
      {errors.profilePicture && (
        <p className="-mt-7.5 text-[13px] text-red-500">
          {errors.profilePicture.message}
        </p>
      )}
    </>
  );
};

export default ProfileUploader;
