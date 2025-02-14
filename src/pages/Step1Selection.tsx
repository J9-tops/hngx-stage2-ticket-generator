import { Link } from "react-router-dom";
import Select from "../components/Dropdown";
import { selectOptions, ticketType } from "../data";
import { useTicketContext } from "../schema/TicketProvider";
import { AccessType } from "../types";

const Step1Form = () => {
  const { formData, updateField } = useTicketContext();

  const handleAmountChange = (value: number) => {
    updateField("ticket", {
      ...formData.ticket,
      amount: value,
    });
    console.log("ticket", value);
  };

  const handleTicketSelect = (selectedTicket: AccessType) => {
    updateField("ticket", {
      id: selectedTicket.id,
      price: selectedTicket.price,
      type: selectedTicket.type,
      amount: formData.ticket.amount,
    });
    console.log("selectedTicket", selectedTicket);
  };

  return (
    <main className="flex h-full w-full items-center justify-center px-5 pt-[15px] pb-16 text-white md:pt-[54px] md:pb-28">
      <section
        className="border-greenish bg-LightGreen lg:bg-bgGreener flex flex-col gap-8 rounded-[40px] border border-solid p-6 md:p-12"
        aria-labelledby="ticketSelectionTitle"
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h1 id="ticketSelectionTitle" className="font-jeju text-2xl">
              Ticket Selection
            </h1>
            <p>Step 1 / 3</p>
          </div>
          <span className="bg-bgGreen h-1 w-full">
            <span className="bg-subGreen block h-full w-[33%]"></span>
          </span>
        </div>
        <div className="lg:border-bgGreen lg:bg-LightGreen flex flex-col gap-8 lg:rounded-4xl lg:border lg:border-solid lg:p-6">
          <div className="border-blackygreen title-container relative flex flex-col items-center gap-10 self-stretch rounded-3xl border-2 border-t-0 border-solid px-6 py-4 backdrop-blur-[7px] md:gap-2 lg:p-6">
            <div className="flex w-full flex-col items-center gap-2">
              <h2 className="font-rage text-whitish w-full text-center text-[47px] leading-10 font-normal md:text-[62px] md:leading-[62px]">
                Techember Fest '25
              </h2>
              <p className="w-full max-w-[340px] text-center text-sm leading-[21px] lg:text-[16px] lg:leading-6">
                Join us for an unforgettable experience at HNG! Secure your spot
                now.
              </p>
            </div>
            <p className="flex flex-col gap-1 text-center md:flex-row md:gap-4">
              <span role="img" aria-label="Location">
                📍 [Event Location]
              </span>
              <span className="hidden md:block"> || </span>
              <span>March 15, 2025 | 7:00 PM</span>
            </p>
          </div>
          <span className="bg-blackygreen h-1 w-full" role="separator"></span>
          <div>
            <p className="mb-2 leading-6">Select Ticket Type:</p>
            <form
              id="accessType"
              className="bg-blackergreen border-blackygreen flex flex-col gap-6 self-stretch rounded-3xl border border-solid p-4 md:flex-row"
            >
              {ticketType.map((ticket) => (
                <div key={ticket.id}>
                  <input
                    type="radio"
                    id={ticket.id}
                    name="ticketType"
                    checked={formData.ticket.id === ticket.id}
                    onChange={() => handleTicketSelect(ticket)}
                    className="peer sr-only focus-within:ring-4 focus-within:ring-blue-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600"
                  />
                  <label
                    key={ticket.type}
                    htmlFor={ticket.id}
                    className="border-greenish hover:bg-greenHover peer-checked:bg-lighterGreen flex cursor-pointer justify-between rounded-[12px] border border-solid p-3 focus-within:ring-4 focus-within:ring-blue-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 md:w-[158px]"
                    tabIndex={0}
                  >
                    <p className="text-whitish flex flex-col text-sm">
                      <span className="mb-3 text-2xl leading-[26.4px] font-semibold">
                        {ticket.price}
                      </span>
                      <span className="text-[15px] leading-6 uppercase">
                        {ticket.type}
                      </span>
                      <span className="text-sm">
                        {formData.ticket.id === ticket.id
                          ? ticket.amount - 1
                          : ticket.amount}
                        /52
                      </span>
                    </p>
                  </label>
                </div>
              ))}
            </form>
          </div>
          <div className="flex flex-col gap-2">
            <h2 id="ticketCountLabel">Number of Tickets</h2>
            <Select
              options={selectOptions}
              onChange={handleAmountChange}
              placeholder="1"
              aria-labelledby="ticketCountLabel"
            />
          </div>
          <div className="flex flex-col gap-4 md:flex-row-reverse">
            <Link
              to="/details"
              className="bg-subGreen font-jeju w-full rounded-lg px-6 py-3 text-center focus-within:ring-4 focus-within:ring-blue-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600"
              role="button"
              tabIndex={0}
            >
              Next
            </Link>
            <button className="border-subGreen font-jeju text-subGreen w-full rounded-lg border border-solid bg-transparent px-6 py-3 text-center focus-within:ring-4 focus-within:ring-blue-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600">
              Cancel
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Step1Form;
