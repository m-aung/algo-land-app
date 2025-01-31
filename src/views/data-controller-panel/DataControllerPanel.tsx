import React, { useCallback } from 'react';
import { Button } from '../../components/button/Button';
import './DataControllerPanel.css';
import { faker } from '@faker-js/faker';
import Dropdown from '../../components/dropdown/Dropdown';

const options = ['merge sort', 'quick sort', 'bubble sort', 'insertion sort'];

export interface DataControllerPanelProps<IData = any> {
  data: IData[];
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
}
const DataControllerPanel: React.FC<DataControllerPanelProps> = ({
  data,
  setData,
}) => {
  const onAddOne = useCallback(() => {
    // max 20 x labels
    setData((prev) => {
      return prev.length >= 20
        ? prev
        : [
            ...prev,
            {
              label: `Item ${prev.length}`,
              data: faker.number.int({ min: 0, max: 3500 }),
            },
          ];
    });
  }, [setData]);
  const onRemoveOne = useCallback(() => {
    // need at least 2 x labels
    setData((prev) => {
      return prev.length <= 2 ? prev : prev.slice(0, prev.length - 1);
    });
  }, [setData]);
  const [selectedOption, setSelectedOption] = React.useState(options[0]);
  const onOptionSelect = (option: string) => {
    setSelectedOption(option);
    alert(`Selected option: ${option}`);
  };
  return (
    <div className="data-controller-panel">
    <div className="button-container">
      <Button onClick={onAddOne} label="add one" />
      <Button onClick={onRemoveOne} label="remove one" />
    </div>
      <Dropdown
        options={options}
        onOptionSelect={onOptionSelect}
        selectedOption={selectedOption}
      />
      </div>
  );
};

export default DataControllerPanel;
