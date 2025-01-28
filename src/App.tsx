import React, { useCallback, useMemo, useState } from 'react';
import Chart from './components/Chart';
import { faker } from '@faker-js/faker';

type Data = {
  label: string;
  data: number;
};
const initialXLabels = [1,2,3,4,5]
const initialData: Data[] = initialXLabels.map((label) => ({ label: `Item ${label}`, data: faker.number.int({ min: 0, max: 3500 }) }));

const App: React.FC = () => {
  const [labelAndDataMap, setLabelAndDataMap] = useState<Data[]>(initialData);
  const [xLabels, setXLabels] = React.useState(initialXLabels);

  const onAddOne = useCallback(() => {
    // max 20 x labels
    setXLabels((prev) => prev.length >= 20 ? prev : [...prev, prev.length + 1]);
    setLabelAndDataMap((prev) => {
      return prev.length >= 20 ? prev: [...prev, {label: `Item ${prev.length}`, data: faker.number.int({min:0, max: 3500})}];
    })
  }, []);
  const onRemoveOne = useCallback(() => {
    // need at least 2 x labels
    setXLabels((prev) => prev.length <= 2 ? prev : [...prev.slice(0, prev.length - 1)]);
    setLabelAndDataMap((prev) => {
      return prev.length <= 2 ? prev : prev.slice(0, prev.length - 1);
    });
  }, []);
  
  const data = useMemo(() => {
    return labelAndDataMap.map(({data}) => data);
  }, [labelAndDataMap]);
  return (
    <div>
      <h1>Algo Visualizer</h1>
      <Chart data={data} xLabels={xLabels} />
      <button className="animated-button" onClick={onAddOne}>add one</button>
      <button className="animated-button" onClick={onRemoveOne}>remove one</button>
    </div>
  );
};

export default App;
