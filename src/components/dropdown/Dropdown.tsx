import React, { useState } from 'react';
import './Dropdown.css';

interface DropdownProps {
  options: string[];
  selectedOption: string;
  onOptionSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onOptionSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <input
        className="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
        value={selectedOption}
        readOnly={true}
      />
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
