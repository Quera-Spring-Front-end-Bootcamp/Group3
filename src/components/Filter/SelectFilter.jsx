export const SelectFilter = (handleOptionChange, value) => {
  return (
    <select
      className={`text-sm text-[#1e1e1e1]  border border-[E9EBF0] rounded-md focus-visible:border-[E9EBF0]  ${handleOptionChange.className}`}
      value={value}
      onChange={() => handleOptionChange}
    >
      <option disabled className="text-[#1E1E1E] text-xs ">
        انتخاب کنید
      </option>
      {handleOptionChange.options.map((option) => (
        <option
          key={option.id}
          className="text-[#1E1E1E] text-xs "
          value={option.value}
        >
          {option.value}
        </option>
      ))}
    </select>
  );
};
