window.renderPyramidChart = (labels, data) => {
  const el = document.querySelector("#pyramidChart");
  if (!el) return;

  if (window.pyramidChart) {
    try {
      if (typeof window.pyramidChart.destroy === "function") {
        window.pyramidChart.destroy();
      }
    } catch (e) {}
    window.pyramidChart = null;
  }

  el.innerHTML = "";

  const options = {
    chart: {
      type: "bar",
      height: 350,
      background: "transparent",
      toolbar: { show: false }, // 👈 tar bort hamburgaren
    },

    series: [
      {
        name: "% av position",
        data: data,
      },
    ],

    xaxis: {
      categories: labels,
      labels: {
        style: {
          colors: "#ffffff", // 👈 Order 1 osv vita
        },
      },
    },

    yaxis: {
      labels: {
        style: {
          colors: "#ffffff", // 👈 Y-axel siffror vita
        },
      },
    },

    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val.toFixed(2) + " %"; // 👈 lägger till % och fixar decimaler
      },
      style: {
        colors: ["#ffffff"],
      },
    },

    colors: ["#0d6efd"],

    grid: {
      borderColor: "#444",
    },

    tooltip: {
      theme: "dark",
      y: {
        formatter: function (val) {
          return val.toFixed(2) + " %";
        },
      },
    },
  };

  window.pyramidChart = new ApexCharts(el, options);
  window.pyramidChart.render();
};
