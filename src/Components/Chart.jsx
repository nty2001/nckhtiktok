import React from "react";
import "./Chart.css";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import video from "./videos.json";
ChartJS.register(...registerables);
const Chart = () => {
  return (
    <Bar
      data={{
        labels: video.map((item) => item.title),
        datasets: [
          {
            label: "Lượt Thích",
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850",
            ],
            data: video.map((item) => item.commentCount),
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text: "Like",
        },
      }}
    />
  );
};

export default Chart;
