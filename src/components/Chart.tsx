import React, { useMemo } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js' ;
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
type BarComponentProps = React.ComponentProps<typeof Bar>;

export type CharData = {
  label: string;
  data: number;
};

export interface ChartProps extends Pick<BarComponentProps, 'options'> {
  data: CharData[];
}

const Chart: React.FC<ChartProps> = ({ data:charData, options, }) => {
  const barData = useMemo<BarComponentProps['data']>(() => {
    const labels = charData.map(({ label }) => label);
    const data = charData.map(({ data }) => data);
    return {
      labels,
      datasets: [{data, label:'Random Data', backgroundColor: 'rgba(0, 104, 239, 0.2)', borderColor: 'rgb(112, 99, 255)', borderWidth: 1}],
    }
  }, [charData]);

  return <Bar data={barData} options={options} />
};

export default Chart;