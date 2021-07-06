const CHART = document.getElementById("linechart");
console.log(CHART);

let linechart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: ["day1", "day2", "day3", "day4", "day5", "day6", "day7"],
        datasets: [{
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75, 192, 192, 0.4)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHitRadius: 10,
            data: [1, 20, 35, 40, 55, 65, 70],
        }]
    }
});