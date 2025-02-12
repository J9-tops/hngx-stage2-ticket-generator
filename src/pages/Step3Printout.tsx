import { Link } from "react-router-dom";

const Step3Printout = () => {
  return (
    <main className="flex h-full w-full items-center justify-center px-5 pt-[26px] text-white">
      <section className="border-greenish bg-LightGreen flex max-w-3xl flex-col gap-8 rounded-3xl border border-solid px-6 py-8">
        <div>
          <div className="flex items-center justify-between gap-3">
            <h1 className="font-jeju text-2xl">Ready</h1>
            <p>Step 3/3</p>
          </div>
          <span></span>
        </div>
        <div className="mt-8">
          <div className="mb-16 flex w-full flex-col items-center gap-3 text-center">
            <h1 className="text-2xl font-bold">Your Ticket is Booked!</h1>
            <p>You can download or Check your email for a copy</p>
          </div>
          {/* <div className="relative overflow-hidden rounded-[30px]"> */}
          <div className="relative rounded-[30px]">
            <div className="left top circle absolute"></div>
            <div className="right top circle absolute"></div>
            <div className="border-subGreen rounded-2xl border border-solid p-5">
              <div className="border-subGreen mb-5 flex flex-col items-center gap-5 rounded-2xl border border-solid p-3.5">
                <div>
                  <h2 className="font-rage text-[34px]">Techember Fest ”25</h2>
                  <p className="flex flex-col items-center gap-1 p-1 text-center text-xs">
                    <span>📍 04 Rumens road, Ikoyi, Lagos</span>
                    <span>📅 March 15, 2025 | 7:00 PM</span>
                  </p>
                </div>
                <div>
                  <div className="border-subGreen h-[140px] w-[140px] rounded-xl border-4 border-solid"></div>
                </div>
                <div className="bg-greenishbright border-greenishBorder w-full rounded-lg border border-solid p-1">
                  <ul className="grid grid-cols-2">
                    <li className="border-lighterGreen flex flex-col gap-1 border-r border-b border-solid p-1">
                      <p className="text-[10px] opacity-[33%]">
                        Enter your name
                      </p>
                      <p className="font-bold">name</p>
                    </li>
                    <li className="border-lighterGreen flex flex-col gap-1 border-b border-solid p-1 pl-2">
                      <p className="text-[10px] opacity-[33%]">
                        Enter your email *
                      </p>
                      <p className="font-bold">we</p>
                    </li>
                    <li className="border-lighterGreen flex flex-col gap-1 border-r border-b border-solid p-1">
                      <p className="text-[10px] opacity-[33%]">Ticket Type:</p>
                      <p className="font-bold">you</p>
                    </li>
                    <li className="border-lighterGreen flex flex-col gap-1 border-b border-solid p-1 pl-2">
                      <p className="text-[10px] opacity-[33%]">Ticket For:</p>
                      <p className="font-bold">get</p>
                    </li>
                  </ul>
                  <div className="flex flex-col gap-1 p-2">
                    <p className="text-[10px] opacity-[33%]">
                      Special Request?
                    </p>
                    <p className="text-[10px]">
                      Nil ? Or the users sad story they write in there gets this
                      whole space, Max of three rows
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex gap-1">
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="border-subGreen h-0.5 w-2 rounded-[14.67px] border border-solid"></div>
                <div className="left circle mid absolute"></div>
                <div className="right circle mid absolute"></div>
              </div>
              <div></div>
              <div className="flex flex-col gap-4 p-4">
                <Link
                  to="/downloadticket"
                  className="bg-subGreen font-jeju w-full rounded-lg px-6 py-3 text-center capitalize"
                >
                  Get my free ticket
                </Link>
                <button className="border-subGreen font-jeju text-subGreen lg w-full rounded-lg border border-solid bg-transparent px-6 py-3 text-center">
                  Back
                </button>
              </div>
              <div className="left circle bottom absolute"></div>
              <div className="right circle bottom absolute"></div>
            </div>
          </div>
        </div>
      </section>{" "}
    </main>
  );
};

export default Step3Printout;
