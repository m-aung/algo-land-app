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

export interface ChartProps extends Pick<BarComponentProps, 'options'> {
  xLabels: number[];
  data: number[];
}

const Chart: React.FC<ChartProps> = ({ data, options,xLabels }) => {
  const barData = useMemo<BarComponentProps['data']>(() => {
    return {
      labels:xLabels,
      datasets: [{data, label:'Random Data', backgroundColor: 'rgba(0, 104, 239, 0.2)', borderColor: 'rgb(112, 99, 255)', borderWidth: 1}],
    }
  }, [xLabels,data]);

    return <Bar data={barData} options={options}  />;
};

export default Chart;