import { Link } from "react-router-dom";

const MyTickets = () => {
  return (
    <main className="text-whitish flex h-[80vh] w-screen flex-col items-center justify-center gap-5">
      <p className="font-rage text-7xl capitalize">my ticket</p>
      <Link
        to="/downloadTicket"
        className="border-subGreen font-jeju lg bg-subGreen w-[150px] rounded-lg border border-solid px-6 py-3 text-center text-white"
      >
        See Ticket
      </Link>
    </main>
  );
};

export default MyTickets;
