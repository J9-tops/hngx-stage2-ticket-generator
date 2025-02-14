import { useEffect, useRef, useState } from "react";
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
  const { formData } = useTicketContext();
  const [selected, setSelected] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: number) => {
    setSelected(value);
    onChange(value);
    setOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!open) {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        setOpen(true);
        setHighlightedIndex(0);
      }
      return;
    }

    switch (event.key) {
      case "ArrowDown":
        setHighlightedIndex((prev) =>
          prev === null || prev === options.length - 1 ? 0 : prev + 1,
        );
        break;
      case "ArrowUp":
        setHighlightedIndex((prev) =>
          prev === null || prev === 0 ? options.length - 1 : prev - 1,
        );
        break;
      case "Enter":
        if (highlightedIndex !== null) {
          handleSelect(options[highlightedIndex].value);
        }
        break;
      case "Escape":
        setOpen(false);
        buttonRef.current?.focus();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (open) {
      setHighlightedIndex(0);
    }
  }, [open]);

  useEffect(() => {
    if (open && highlightedIndex !== null && listRef.current) {
      const items = listRef.current.children as HTMLCollectionOf<HTMLElement>;
      if (items[highlightedIndex]) {
        items[highlightedIndex].focus();
      }
    }
  }, [highlightedIndex, open]);

  return (
    <div className="relative w-full">
      <div
        role="combobox"
        ref={buttonRef}
        aria-haspopup="listbox"
        aria-expanded={open ? "true" : "false"}
        aria-controls="select-list"
        aria-activedescendant={
          highlightedIndex !== null ? `option-${highlightedIndex}` : undefined
        }
        tabIndex={0}
        title="custom select"
        className="border-blackygreen flex cursor-pointer items-center justify-between rounded-xl border border-solid bg-transparent p-2 lg:p-3"
        onClick={() => setOpen(!open)}
        onKeyDown={handleKeyDown}
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
      </div>
      {open && (
        <ul
          className="border-blackygreen mt-1 max-h-48 w-full overflow-auto rounded-xl border border-solid bg-transparent p-1 shadow-md"
          ref={listRef}
          id="select-list"
          role="listbox"
        >
          {options.map((option, index) => (
            <li
              id={`option-${index}`}
              role="option"
              key={option.value}
              aria-selected={selected === option.value ? "true" : "false"}
              tabIndex={highlightedIndex === index ? 0 : -1}
              className={`hover:bg-lighterGreen cursor-pointer border-b border-solid p-2 last:border-b-0 ${
                highlightedIndex === index ? "bg-lightBlue" : ""
              }`}
              onClick={() => handleSelect(option.value)}
              onMouseEnter={() => setHighlightedIndex(index)}
              onKeyDown={handleKeyDown} // Allow navigation within options
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
