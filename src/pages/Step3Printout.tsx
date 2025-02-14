import { useNavigate } from "react-router-dom";
import barcode from "../assets/images/barcode.webp";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import TicketContainer from "../components/TicketContainer";
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
    <main className="flex h-full w-full items-center justify-center px-5 pt-[26px] pb-16 text-white md:pt-[54px]">
      <section className="border-greenish bg-LightGreen md:bg-bgGreener xs:max-w-[345px] flex flex-col gap-8 rounded-3xl border border-solid px-6 py-8 md:max-w-3xl lg:p-12">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <h1 className="font-jeju text-2xl">Ready</h1>
            <p>Step 3/3</p>
          </div>
          <ProgressBar prev={66} current={100} />
        </div>
        <div>
          <div className="text-whitish mb-16 flex w-full flex-col items-center gap-3 text-center">
            <h1 className="text-2xl leading-[33.6px] font-bold">
              Your Ticket is Booked!
            </h1>
            <p>You can download or Check your email for a copy</p>
          </div>

          <div className="relative mx-auto max-w-[300px] rounded-[30px]">
            <TicketContainer width="300" height="600" className="" />
            <div className="absolute top-0 min-h-[600px] w-full rounded-2xl p-5">
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
              <div className="absolute right-[16px] bottom-[22px] h-16 w-full max-w-[255px]">
                <img
                  src={barcode}
                  alt="barcode"
                  className="h-full w-full brightness-200 invert"
                />
              </div>
            </div>
          </div>
          <div className="mt-[30px] flex flex-col gap-4 pt-6 md:flex-row-reverse">
            <Button onClick={handleDownload} type="button">
              Download Ticket
            </Button>
            <Button variant="outlined" to="..">
              Book another ticket
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Step3Printout;
