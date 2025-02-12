import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TicketType } from "../types";

const defaultValues: TicketType = {
  id: uuidv4(),
  ticket: {
    id: "regularAccess",
    price: "FREE",
    type: "REGULAR ACCESS",
    amount: 1,
  },
  profilePicture: "",
  user: {
    name: "",
    email: "",
  },
  request: "",
};

type TicketContextType = {
  formData: TicketType;
  updateField: (
    field: keyof TicketType,
    value: string | number | object,
  ) => void;
};

export const TicketContext = createContext<TicketContextType>({
  formData: defaultValues,
  updateField: () => {},
});

const TicketProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<TicketType>(defaultValues);

  const updateField = (
    field: keyof TicketType,
    value: string | number | object,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    console.log("formdata", formData);
  };

  useEffect(() => {
    console.log("Updated ticket:", formData.ticket);
  }, [formData.ticket]);

  return (
    <TicketContext.Provider value={{ formData, updateField }}>
      {children}
    </TicketContext.Provider>
  );
};

export default TicketProvider;

export const useTicketContext = () => useContext(TicketContext);
