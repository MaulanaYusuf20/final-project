import { Line } from "react-chartjs-2";

const Activity = () => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = ["Minggu ke 1", "Minggu ke 2", "Minggu ke 3", "Minggu ke 4"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Aktifitas Belajarku",
        data: labels.map(() => [10, 40, 60, 90]),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      <div>
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default Activity;
