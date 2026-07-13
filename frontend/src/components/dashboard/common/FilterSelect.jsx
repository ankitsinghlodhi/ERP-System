import { ChevronDown } from "lucide-react";

const FilterSelect = ({
  value,
  onChange,
  options,
  placeholder = "Select",
}) => {
  return (
    <div className="relative">

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
        appearance-none
        bg-slate-50
        border
        border-slate-200
        rounded-xl
        px-4
        pr-10
        py-3
        text-sm
        font-medium
        text-slate-700
        outline-none
        focus:ring-2
        focus:ring-blue-500
        hover:bg-white
        transition
        "
      >

        <option value="">
          {placeholder}
        </option>

        {options.map((item) => (

          <option
            key={item.value}
            value={item.value}
          >
            {item.label}
          </option>

        ))}

      </select>

      <ChevronDown
        size={18}
        className="
        absolute
        right-3
        top-1/2
        -translate-y-1/2
        text-slate-400
        pointer-events-none
        "
      />

    </div>
  );
};

export default FilterSelect;