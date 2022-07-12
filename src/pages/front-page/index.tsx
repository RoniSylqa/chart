import { useEffect, useState } from "react";
import ChartComponent from "../../components/chart";
import axios from "axios";
import { FETCH_DATA } from "../../constants/endpoints";
import { SinglePriceType } from "../../types/prices";

const FrontPage = () => {
  const [data, setData] = useState<any>([]);
  const [dailyPrices, setDailyPrices] = useState<number[]>([]);
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    axios.get(FETCH_DATA).then((res) => {
      const datas = res.data.data;
      setData(
        datas.filter(
          (item: any) => item.assetId === "ETH_Sushiswap_USDC-WETH_exchange"
        )
      );
    });
  }, []);

  useEffect(() => {
    if (data?.length) {
      data[0].dailyAPRHistorical?.map(
        (item: SinglePriceType, index: number) => {
          setDailyPrices((dailyPrices) => [...dailyPrices, item.value]);
          setDates((dates) => [...dates, item.date]);
        }
      );
    }
  }, [data]);

  return (
    <div className="frontpage">
      {dailyPrices.length > 0 ? (
        <ChartComponent prices={dailyPrices} dates={dates} name={data[0].assetId} />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default FrontPage;
