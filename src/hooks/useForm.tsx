import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { formSchema, FormType } from "../schema";
import { useTicketContext } from "../schema/TicketProvider";

export const useStep2Form = () => {
  const { updateField, formData } = useTicketContext();

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: FormType) => {
    updateField("user", {
      name: data.name,
      email: data.email,
    });
    updateField("request", data.request || "");
    navigate("/downloadticket");
    console.log("submitted Data:", data);
    console.log("Final Form Data:", formData);
  };

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
