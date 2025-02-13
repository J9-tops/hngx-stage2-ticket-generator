import axios, { AxiosProgressEvent } from "axios";
import React, { useRef, useState } from "react";
import { formSchema } from "../schema";
import { useTicketContext } from "../schema/TicketProvider";
import { Props } from "../types";

const CLOUD_NAME = "docadfxld";
const preset_key = "hnginternship";

const useFileUpload = ({ setValue, clearErrors }: Props) => {
  const { updateField } = useTicketContext();
  const [progress, setProgress] = useState(0);
  const fileRef = useRef(null);
  const [status, setStatus] = useState<"idle" | "uploading">("idle");
  const [imageLoading, setImageLoading] = useState(true);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (setValue) {
        setValue("profilePicture", selectedFile, { shouldValidate: true });
      }

      const result = formSchema.shape.profilePicture.safeParse(selectedFile);

      if (!result.success) {
        if (setValue && clearErrors) {
          setValue("profilePicture", undefined as unknown as File, {
            shouldValidate: true,
          });

          clearErrors("profilePicture");
        }
        return;
      }

      setStatus("uploading");
      setProgress(0);

      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", preset_key);

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent: AxiosProgressEvent) => {
              if (progressEvent.total) {
                const percentageCompleted = Math.round(
                  (progressEvent.loaded * 100) / progressEvent.total,
                );
                setProgress(percentageCompleted);
                console.log(percentageCompleted);
              }
            },
          },
        );

        setStatus("idle");
        updateField("profilePicture", response.data.secure_url);
        console.log("Upload successful:", response.data);
        setProgress(100);
        setTimeout(() => {
          setStatus("idle");
        }, 500);
      } catch (error) {
        console.error("Upload error:", error);
      }
    } else {
      setStatus("idle");
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    if (event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      const changeEvent = {
        target: { files: [file] },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      handleFileUpload(changeEvent);
    }
  };

  return {
    handleFileUpload,
    progress,
    fileRef,
    status,
    imageLoading,
    setImageLoading,
    handleDragOver,
    handleDrop,
  };
};

export default useFileUpload;
