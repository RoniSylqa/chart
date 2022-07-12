/* eslint-disable array-callback-return */
import { options } from "./helpers";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const ChartComponent = (props: any) => {
  const { prices, dates,name } = props;
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const data = {
    labels: dates,
    datasets: [
      {
        fill: true,
        label: `Asset ID: ${name}`,
        borderColor: "#9945c0",
        data: prices,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="frontpage__chartContainer">
      <Line options={options} data={data} />
    </div>
  );
};

export default ChartComponent;
