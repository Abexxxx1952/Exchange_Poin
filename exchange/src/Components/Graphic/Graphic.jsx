import { Line } from "react-chartjs-2";

const Graphic = ({ value, valueYestarday, date, yestarday, legenDisplay }) => {
  return (
    <Line
      data={{
        labels: [yestarday, date],
        datasets: [
          {
            label: "1",
            data: [valueYestarday, value],
            backgroundColor: "aqua",
            borderColor: "#15dd90",
            borderJoinStyle: "round",
            borderCapStyle: "round",
            fill: true,
            tension: 10,
          },
        ],
      }}
      options={{
        scales: {
          y: {
            /* beginAtZero: true, */
            offset: true,
          },
        },
      }}
    />
  );
};
export default Graphic;
