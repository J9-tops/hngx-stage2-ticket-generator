import { useState } from "react";
import arrow from "../assets/images/icon.png";
import { useTicketContext } from "../schema/TicketProvider";

interface Option {
  value: number;
  label: string;
}

interface SelectProps {
  options: Option[];
  onChange: (value: number) => void;
  placeholder?: string;
}

export default function Select({
  options,
  onChange,
  placeholder = "Select...",
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const { formData } = useTicketContext();

  const handleSelect = (value: number) => {
    onChange(value);
    setOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        id="dropdownDefaultButton"
        title="Select amount of tickets"
        className="border-blackygreen flex w-full cursor-pointer items-center justify-between rounded-xl border border-solid bg-transparent p-2"
        onClick={() => setOpen(!open)}
      >
        <span className={!formData.ticket ? "text-greyish" : ""}>
          {formData.ticket.amount !== 1 ? formData.ticket.amount : placeholder}
        </span>
        <img
          src={arrow}
          alt=""
          width={20}
          height={10}
          className={open ? "h-3 rotate-180 opacity-80" : "h-3"}
        />
      </button>
      {open && (
        <ul
          aria-labelledby="dropdownDefaultButton"
          className="border-blackygreen mt-1 max-h-48 w-full overflow-auto rounded-t-xl border border-solid bg-transparent shadow-md"
        >
          {options.map((option) => (
            <li
              key={option.value}
              className="hover:bg-lighterGreen cursor-pointer p-2"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
