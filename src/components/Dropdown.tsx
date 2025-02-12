import { useState } from "react";
import arrow from "../assets/images/icon.png";

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
  const [selected, setSelected] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const handleSelect = (value: number) => {
    setSelected(value);
    onChange(value);
    setOpen(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="border-blackygreen flex cursor-pointer items-center justify-between rounded-xl border border-solid bg-transparent p-2"
        onClick={() => setOpen(!open)}
      >
        <span className={!selected ? "text-greyish" : ""}>
          {selected
            ? options.find((opt) => opt.value === selected)?.label
            : placeholder}
        </span>
        <img
          src={arrow}
          alt=""
          width={20}
          height={10}
          className={open ? "h-3 rotate-180 opacity-80" : "h-3"}
        />
      </div>
      {open && (
        <ul className="border-blackygreen mt-1 max-h-48 w-full overflow-auto rounded-t-xl border border-solid bg-transparent shadow-md">
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
