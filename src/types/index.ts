export type AccessType = {
  id: "regularAccess" | "vipAccess" | "vvipAccess";
  price: string;
  type: "REGULAR ACCESS" | "VIP ACCESS" | "VVIP ACCESS";
  amount: number;
};

type User = {
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
