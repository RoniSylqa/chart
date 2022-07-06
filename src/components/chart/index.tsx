/* eslint-disable array-callback-return */
import { labels, options } from "./helpers";
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

const ChartComponent = () => {
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

  //This function increases price by 5%.
  const increasePercentage = () => {
    let initialPrice: number = 1500;
    let values: Array<any> = [];
    console.log(labels);
    labels.map((_item, index) => {
      //This push the first value to array of prices without increasing value
      if (index === 0) {
        values.push(initialPrice);
      }
      //Here i increase the value and then push it to array
      else {
        let fivePercentOfValue: number = (10 / 100) * initialPrice;
        initialPrice += fivePercentOfValue;
        values.push(initialPrice?.toFixed(2));
      }
    });
    return values;
  };

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "ETH Chart",
        borderColor: "#9945c0",
        data: increasePercentage(),
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