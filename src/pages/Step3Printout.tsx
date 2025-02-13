import { Link, useNavigate } from "react-router-dom";
import barcode from "../assets/images/barcode.webp";
import ticketBg from "../assets/images/bg.png";
import { CURRENT_TICKET_KEY } from "../data";
import { useTicketContext } from "../schema/TicketProvider";

const Step3Printout = () => {
  const { formData } = useTicketContext();
  const trimedWord = formData.ticket.type.replace("ACCESS", "");
  const navigate = useNavigate();

  const handleDownload = () => {
    localStorage.removeItem(CURRENT_TICKET_KEY);
    navigate("/tickets");
  };

  return (
    <main className="flex h-full w-full items-center justify-center px-5 pt-[26px] pb-16 text-white">
      <section className="border-greenish bg-LightGreen md:bg-bgGreener flex max-w-3xl flex-col gap-8 rounded-3xl border border-solid px-6 py-8">
        <div>
          <div className="flex items-center justify-between gap-3">
            <h1 className="font-jeju text-2xl">Ready</h1>
            <p>Step 3/3</p>
          </div>
        </div>
        <span className="bg-bgGreen -mt-5 h-1 w-full md:-mt-6 md:-mb-6">
          <span className="bg-subGreen block h-full w-full"></span>
        </span>
        <div className="mt-8">
          <div className="mb-16 flex w-full flex-col items-center gap-3 text-center">
            <h1 className="text-2xl font-bold">Your Ticket is Booked!</h1>
            <p>You can download or Check your email for a copy</p>
          </div>

          <div className="relative mx-auto max-w-[300px] rounded-[30px]">
            <img
              src={ticketBg}
              alt=""
              className="xs:h-[670px] i13:h-[610px] i14:h-[620px] i14p:h-[595px] w-full"
            />
            <div className="absolute top-0 w-full rounded-2xl p-5">
              <div className="border-subGreen flex flex-col items-center gap-5 rounded-2xl border border-solid p-3.5">
                <div>
                  <h2 className="font-rage text-center text-[34px] leading-8">
                    Techember Fest ”25
                  </h2>
                  <p className="flex flex-col items-center gap-1 pt-1.5 text-center text-[10px]">
                    <span>📍 04 Rumens road, Ikoyi, Lagos</span>
                    <span>📅 March 15, 2025 | 7:00 PM</span>
                  </p>
                </div>
                <div className="border-subGreen h-[140px] w-[140px] overflow-hidden rounded-xl border-4 border-solid">
                  <img
                    src={formData.profilePicture}
                    alt="profile picture"
                    className="aspect-square h-full w-full"
                  />
                </div>
                <div className="bg-greenishbright border-greenishBorder w-full rounded-lg border border-solid p-1">
                  <ul className="grid grid-cols-2">
                    <li className="border-lighterGreen flex flex-col gap-1 border-r border-b border-solid p-1 text-wrap">
                      <p className="text-[10px] leading-[15px] opacity-[33%]">
                        Enter your name
                      </p>
                      <p className="text-xs leading-[18px] font-bold text-wrap">
                        {formData.user.name}
                      </p>
                    </li>
                    <li className="border-lighterGreen flex flex-col gap-1 border-b border-solid p-1 pl-2 text-wrap">
                      <p className="text-[10px] leading-[15px] opacity-[33%]">
                        Enter your email *
                      </p>
                      <p className="block text-xs leading-[18px] font-bold break-words">
                        {formData.user.email}
                      </p>
                    </li>
                    <li className="border-lighterGreen flex flex-col gap-1 border-r border-b border-solid p-1 text-wrap">
                      <p className="text-[10px] leading-[15px] opacity-[33%]">
                        Ticket Type:
                      </p>
                      <p className="text-xs leading-[18px] font-bold">
                        {trimedWord}{" "}
                      </p>
                    </li>
                    <li className="border-lighterGreen flex flex-col gap-1 border-b border-solid p-1 pl-2 text-wrap">
                      <p className="text-[10px] leading-[15px] opacity-[33%]">
                        Ticket For:
                      </p>
                      <p className="text-xs leading-[18px] font-bold">
                        {formData.ticket.amount}
                      </p>
                    </li>
                  </ul>
                  <div className="flex flex-col gap-1 p-2">
                    <p className="text-[10px] opacity-[33%]">
                      Special Request?
                    </p>
                    <p className="text-[10px]">
                      {formData.request === "" ? "Nil..." : formData.request}
                    </p>
                  </div>
                </div>
              </div>
              <div className="xs:mt-15 i13:mt-13 i14:mt-15 i14p:mt-14 h-16">
                <img
                  src={barcode}
                  alt="barcode"
                  className="h-full w-full brightness-200 invert"
                />
              </div>
            </div>
          </div>
          <div className="mt-[30px] flex flex-col gap-4 pt-6 md:flex-row-reverse">
            <button
              onClick={handleDownload}
              className="bg-subGreen font-jeju w-full rounded-lg px-6 py-3 text-center capitalize md:w-[290px]"
            >
              Download Ticket
            </button>
            <Link
              to=".."
              relative="path"
              className="border-subGreen font-jeju text-subGreen lg w-full rounded-lg border border-solid bg-transparent px-6 py-3 text-center md:w-[290px]"
            >
              Book Another Ticket
            </Link>
          </div>
        </div>
      </section>{" "}
    </main>
  );
};

export default Step3Printout;
