import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const ApexRadialGraph = (props) => {
  const [performance, serPerformance] = useState(0);
  const [optionsRadial, setOptionsRadial] = useState({
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "#fff",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: "#fff",
          strokeWidth: "67%",
          margin: 0,
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },

        dataLabels: {
          showOn: "always",
          name: {
            offsetY: -20,
            show: true,
            color: "#888",
            fontSize: "13px",
          },
          value: {
            formatter: function (val) {
              return val;
            },
            color: "#111",
            fontSize: "30px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#ABE5A1"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Performance"],
  });
  useEffect(() => {
    serPerformance(props.data);
  }, [props]);

  return (
    <div className="container">
      <div className="chart">
        <Chart
          options={optionsRadial}
          series={[performance]}
          type="radialBar"
          width="380"
        />
      </div>
    </div>
  );
};

export default ApexRadialGraph;
