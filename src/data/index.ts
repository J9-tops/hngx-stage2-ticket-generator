import { AccessType } from "../types";

export const ticketType: AccessType[] = [
  {
    id: "regularAccess",
    type: "REGULAR ACCESS",
    amount: 20,
    price: "FREE",
  },
  {
    id: "vipAccess",
    type: "VIP ACCESS",
    amount: 20,
    price: "$50",
  },
  {
    id: "vvipAccess",
    type: "VVIP ACCESS",
    amount: 20,
    price: "$150",
  },
];

export const selectOptions = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
];
