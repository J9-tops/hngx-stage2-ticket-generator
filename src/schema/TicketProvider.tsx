import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TicketType, User } from "../types";

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
    setFormData((prev) => {
      if (field === "user") {
        return {
          ...prev,
          user: { ...prev.user, ...(value as User) },
        };
      }
      return { ...prev, [field]: value };
    });
    console.log("formdata", formData);
  };

  useEffect(() => {
    console.log("Updated ticket:", formData.ticket);
    console.log("updated profile pic", formData.profilePicture);
    console.log("updated profile pic", formData.user);
  }, [formData.ticket, formData.profilePicture, formData.user]);

  return (
    <TicketContext.Provider value={{ formData, updateField }}>
      {children}
    </TicketContext.Provider>
  );
};

export default TicketProvider;

export const useTicketContext = () => useContext(TicketContext);
