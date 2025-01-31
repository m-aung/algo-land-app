import React, { useState } from 'react';
import Chart, { CharData } from './components/Chart';
import { faker } from '@faker-js/faker';
import DataControllerPanel from './views/data-controller-panel/DataControllerPanel';

const initialXLabels = [1, 2, 3, 4, 5];
const initialData: CharData[] = initialXLabels.map((label) => ({
  label: `Item ${label}`,
  data: faker.number.int({ min: 0, max: 3500 }),
}));

const App: React.FC = () => {
  const [data, setData] = useState<CharData[]>(initialData);
  return (
    <div>
      <h1>Algo Visualizer</h1>
      <Chart data={data} />
      <DataControllerPanel data={data} setData={setData} />
    </div>
  );
};

export default App;
