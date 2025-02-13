import {
  FieldErrors,
  UseFormClearErrors,
  UseFormSetValue,
} from "react-hook-form";
import { FormType } from "../schema";

export type AccessType = {
  id: "regularAccess" | "vipAccess" | "vvipAccess";
  price: string;
  type: "REGULAR ACCESS" | "VIP ACCESS" | "VVIP ACCESS";
  amount: number;
};

export type User = {
  name: string;
  email: string;
};

export type TicketType = {
  id: string;
  ticket: AccessType;
  profilePicture: string;
  user: User;
  request?: string;
};

export type Props = {
  setValue?: UseFormSetValue<FormType>;
  clearErrors?: UseFormClearErrors<FormType>;
  errors: FieldErrors<FormType>;
};
