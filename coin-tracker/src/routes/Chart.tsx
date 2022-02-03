import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

const Chart = () => {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  const options: ApexOptions = {
    theme: {
      mode: "dark",
    },
    chart: {
      height: 300,
      width: 500,
      toolbar: {
        show: false,
      },
      background: "transparent",
    },
    grid: {
      show: false,
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
  };

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ReactApexChart
          type="line"
          series={[
            {
              name: "price",
              data: data?.map((price) => price.close),
            },
          ]}
          options={options}
        />
      )}
    </div>
  );
};

export default Chart;
