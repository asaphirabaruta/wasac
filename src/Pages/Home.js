import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

export default function Home() {
  const options1 = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {},
      },
    },
    legend: {},
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
        symbolSize: 10,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(61, 93, 222, 0.8)",
            },
            {
              offset: 1,
              color: "rgba(213,72,120,0.0)",
            },
          ]),
        },
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  const options2 = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {},
      },
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };

  const options3 = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      //   top: "0%",
      left: "center",
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {},
      },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["50%", "60%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            // fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };

  const options4 = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%",
    },
    series: [
      {
        name: "Pressure",
        type: "gauge",
        progress: {
          show: true,
        },
        detail: {
          valueAnimation: true,
          formatter: "{value}",
        },
        data: [
          {
            value: 50,
            name: "SCORE",
          },
        ],
      },
    ],
  };

  const options5 = {
    graphic: {
      elements: [
        {
          type: "text",
          left: "center",
          top: "center",
          style: {
            text: "Vanguard Economics",
            fontSize: 50,
            // fontWeight: "bold",
            lineDash: [0, 200],
            lineDashOffset: 0,
            fill: "transparent",
            stroke: "#000",
            lineWidth: 1,
          },
          keyframeAnimation: {
            duration: 5000,
            loop: false,
            keyframes: [
              {
                percent: 0.7,
                style: {
                  fill: "transparent",
                  lineDashOffset: 200,
                  lineDash: [200, 0],
                },
              },
              {
                // Stop for a while.
                percent: 0.8,
                style: {
                  fill: "transparent",
                },
              },
              {
                percent: 1,
                style: {
                  fill: "blue",
                },
              },
            ],
          },
        },
      ],
    },
  };

  //   const weatherIcons = {
  //     Sunny: ROOT_PATH + "/data/asset/img/weather/sunny_128.png",
  //     Cloudy: ROOT_PATH + "/data/asset/img/weather/cloudy_128.png",
  //     Showers: ROOT_PATH + "/data/asset/img/weather/showers_128.png",
  //   };
  const options6 = {
    title: {
      text: "Weather Statistics",
      subtext: "Fake Data",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      bottom: 10,
      left: "center",
      data: ["CityA", "CityB", "CityD", "CityC", "CityE"],
    },
    series: [
      {
        type: "pie",
        radius: "65%",
        center: ["50%", "50%"],
        selectedMode: "single",
        data: [
          {
            value: 1548,
            name: "CityE",
            label: {
              //   formatter: [
              //     "{title|{b}}{abg|}",
              //     "  {weatherHead|Weather}{valueHead|Days}{rateHead|Percent}",
              //     "{hr|}",
              //     "  {Sunny|}{value|202}{rate|55.3%}",
              //     "  {Cloudy|}{value|142}{rate|38.9%}",
              //     "  {Showers|}{value|21}{rate|5.8%}",
              //   ].join("\n"),
              //   backgroundColor: "#eee",
              //   borderColor: "#777",
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                title: {
                  color: "#eee",
                  align: "center",
                },
                abg: {
                  backgroundColor: "#333",
                  width: "100%",
                  align: "right",
                  height: 25,
                  borderRadius: [4, 4, 0, 0],
                },
                Sunny: {
                  height: 30,
                  align: "left",
                  backgroundColor: {
                    // image: weatherIcons.Sunny,
                  },
                },
                Cloudy: {
                  height: 30,
                  align: "left",
                  backgroundColor: {
                    // image: weatherIcons.Cloudy,
                  },
                },
                Showers: {
                  height: 30,
                  align: "left",
                  backgroundColor: {
                    // image: weatherIcons.Showers,
                  },
                },
                weatherHead: {
                  color: "#333",
                  height: 24,
                  align: "left",
                },
                hr: {
                  borderColor: "#777",
                  width: "100%",
                  borderWidth: 0.5,
                  height: 0,
                },
                value: {
                  width: 20,
                  padding: [0, 20, 0, 30],
                  align: "left",
                },
                valueHead: {
                  color: "#333",
                  width: 20,
                  padding: [0, 20, 0, 30],
                  align: "center",
                },
                rate: {
                  width: 40,
                  align: "right",
                  padding: [0, 10, 0, 0],
                },
                rateHead: {
                  color: "#333",
                  width: 40,
                  align: "center",
                  padding: [0, 10, 0, 0],
                },
              },
            },
          },
          { value: 735, name: "CityC" },
          { value: 510, name: "CityD" },
          { value: 434, name: "CityB" },
          { value: 335, name: "CityA" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  const options7 = {
    title: {
      text: "Rainfall vs Evaporation",
      subtext: "Fake Data",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Rainfall", "Evaporation"],
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    calculable: true,
    xAxis: [
      {
        type: "category",
        // prettier-ignore
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Rainfall",
        type: "bar",
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
        ],
        markPoint: {
          data: [
            { type: "max", name: "Max" },
            { type: "min", name: "Min" },
          ],
        },
        markLine: {
          data: [{ type: "average", name: "Avg" }],
        },
      },
      {
        name: "Evaporation",
        type: "bar",
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
        markPoint: {
          data: [
            { name: "Max", value: 182.2, xAxis: 7, yAxis: 183 },
            { name: "Min", value: 2.3, xAxis: 11, yAxis: 3 },
          ],
        },
        markLine: {
          data: [{ type: "average", name: "Avg" }],
        },
      },
    ],
  };

  return (
    <div className="container m-5">
      <h5>A simple line Graph</h5>
      <div className="row mt-3">
        {/* <div className="col-md-4">
          <div className="card p-3 shadow">
            <ReactECharts option={options} />
          </div>
        </div> */}
        <div className="col-md-8">
          <div className="card p-3 shadow">
            <ReactECharts option={options5} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow">
            <ReactECharts option={options3} />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          <div className="card p-3 shadow">
            <ReactECharts option={options4} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow">
            <ReactECharts option={options1} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow">
            <ReactECharts option={options2} />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          <div className="card p-3 shadow">
            <ReactECharts option={options6} />
          </div>
        </div>
        <div className="col-md-8">
          <div className="card p-3 shadow">
            <ReactECharts option={options7} />
          </div>
        </div>
        {/* <div className="col-md-4">
          <div className="card p-3 shadow">
            <ReactECharts option={options2} />
          </div>
        </div> */}
      </div>
    </div>
  );
}
