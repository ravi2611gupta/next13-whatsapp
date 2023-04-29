'use client';

import ReactSelect from 'react-select'

interface SelectProps {
  label: string;
  value?: Record<string, any>;
  onChange: (value: Record<string, any>) => void;
  options: Record<string, any>[];
}

const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options
}) => {
  return ( 
    <div>
      <label
        className="
          block 
          text-sm 
          font-medium 
          leading-6 
          text-gray-900
        "
      >
        {label}
      </label>
      <div className="mt-2">
      <ReactSelect
        value={value}
        onChange={onChange}
        isMulti
        options={options}
        classNames={{
          control: () => 'text-sm',
        }}
      />
      </div>
    </div>
   );
}
 
export default Select;