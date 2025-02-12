import { Link } from "react-router-dom";
import Select from "../components/Dropdown";
import { AccessType } from "../types";

const Step1Form = () => {
  const ticketType: AccessType[] = [
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

  return (
    <main className="flex h-full w-full items-center justify-center px-5 pt-[26px] text-white">
      <section
        className="border-greenish bg-LightGreen flex flex-col gap-8 rounded-[40px] border border-solid p-6"
        aria-labelledby="ticketSelectionTitle"
      >
        <div>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <h1 id="ticketSelectionTitle" className="font-jeju text-2xl">
              Ticket Selection
            </h1>
            <p>Step 1 of 3</p>
          </div>
        </div>
        <div className="lg:border-bgGreen flex flex-col gap-8 lg:rounded-4xl lg:border lg:border-solid lg:p-6">
          <div className="border-blackygreen relative flex flex-col gap-10 self-stretch rounded-3xl border-2 border-t-0 border-solid px-6 py-4 backdrop-blur-[7px]">
            <div className="flex flex-col items-center gap-2">
              <h2 className="font-rage text-whitish text-center text-[39px] leading-10">
                Techember Fest '25
              </h2>
              <p className="text-center">
                Join us for an unforgettable experience! Secure your spot now.
              </p>
            </div>
            <p className="flex flex-col gap-1 text-center">
              <span role="img" aria-label="Location">
                📍
              </span>{" "}
              [Event Location]
              <span>March 15, 2025 | 7:00 PM</span>
            </p>
          </div>
          <span className="bg-blackygreen h-1 w-full" role="separator"></span>
          <div>
            <p className="mb-2">Select Ticket Type:</p>
            <form
              id="accessType"
              className="bg-blackergreen border-blackygreen flex flex-col gap-6 self-stretch rounded-3xl border border-solid p-4"
            >
              {ticketType.map(({ id, price, type, amount }) => (
                <label
                  key={type}
                  htmlFor={id}
                  className="flex cursor-pointer justify-between rounded-[12px] p-2"
                  tabIndex={0}
                >
                  <input
                    type="checkbox"
                    id={id}
                    name={id}
                    className="sr-only"
                  />
                  <p className="text-whitish flex flex-col text-sm">
                    <span className="mb-3">{price}</span>
                    <span>{type}</span>
                    <span>{amount} left</span>
                  </p>
                </label>
              ))}
            </form>
          </div>
          <div className="flex flex-col gap-2">
            <h2 id="ticketCountLabel">Number of Tickets</h2>
            <Select
              options={options}
              onChange={setSelectedValue}
              placeholder="Choose a ticket quantity"
              aria-labelledby="ticketCountLabel"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Link
              to="/details"
              className="bg-subGreen font-jeju w-full rounded-lg px-6 py-3 text-center"
              role="button"
              tabIndex={0}
            >
              Next
            </Link>
            <button className="border-subGreen font-jeju w-full rounded-lg border border-solid bg-transparent px-6 py-3 text-center">
              Cancel
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Step1Form;
