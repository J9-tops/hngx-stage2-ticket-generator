import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { formSchema, FormType } from "../schema";
import { useTicketContext } from "../schema/TicketProvider";

export const useStep2Form = () => {
  const { updateField, formData, saveTicket } = useTicketContext();

  const defaultValues = {
    name: formData.user.name,
    email: formData.user.email,
    profilePicture: undefined,
    request: formData.request || "",
  };

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const navigate = useNavigate();

  const onSubmit = (data: FormType, event?: React.BaseSyntheticEvent) => {
    event?.preventDefault();
    updateField("user", {
      name: data.name,
      email: data.email,
    });

    updateField("request", data.request || "");

    if (data.profilePicture instanceof File) {
      updateField("profilePicture", formData.profilePicture); // Save URL instead of file object
    }

    saveTicket();

    navigate("/downloadticket");

    console.log("submitted Data:", data);
    console.log("Final Form Data:", formData);
  };

  useEffect(() => {
    if (formData.profilePicture !== "") {
      fetch(formData.profilePicture)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "profile.jpg", { type: blob.type });
          setValue("profilePicture", file, { shouldValidate: true });
          clearErrors("profilePicture");
        })
        .catch(() => console.error("Failed to convert URL to File"));
    }
  }, [formData.profilePicture, setValue, clearErrors]);

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    setValue,
    clearErrors,
    setError,
  };
};
