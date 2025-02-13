import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CURRENT_TICKET_KEY, STORAGE_KEY } from "../data";
import { TicketType, User } from "../types";

const loadTickets = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : {};
};

const loadCurrentTicket = () => {
  const saved = localStorage.getItem(CURRENT_TICKET_KEY);
  return saved ? JSON.parse(saved) : null;
};

const defaultValues: TicketType = loadCurrentTicket() || {
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
  saveTicket: () => void;
};

export const TicketContext = createContext<TicketContextType>({
  formData: defaultValues,
  updateField: () => {},
  saveTicket: () => {},
});

const TicketProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<TicketType>(defaultValues);
  const [tickets, setTickets] = useState<{ [key: string]: TicketType }>(
    loadTickets(),
  );

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
  };

  const saveTicket = () => {
    const updatedTickets = { ...tickets, [formData.id]: formData };
    setTickets(updatedTickets);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTickets));

    localStorage.setItem(CURRENT_TICKET_KEY, JSON.stringify(formData));
  };

  useEffect(() => {
    if (formData.id) {
      localStorage.setItem(CURRENT_TICKET_KEY, JSON.stringify(formData));
    }
  }, [formData]);

  return (
    <TicketContext.Provider value={{ formData, updateField, saveTicket }}>
      {children}
    </TicketContext.Provider>
  );
};

export default TicketProvider;

export const useTicketContext = () => useContext(TicketContext);
