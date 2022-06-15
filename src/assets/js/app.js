// Statistics
var statistics;
var statisticsData = {
    years: [2018, 2019, 2020, 2021],
    labels: [
        ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct", "Nov", "Dec"],
        ["Winter", "Spring", "Summer", "Autumn"]
    ],
    points:[
        [180, 150, 160, 200, 235, 250, 230, 190, 170, 190, 250, 300],
        [320, 250, 210, 180, 230, 260, 240, 200, 190, 200, 210, 200],
        [180, 150, 160, 200, 235, 250, 260, 220, 190, 200, 250, 340],
        [350, 300, 290, 300, 270, 250, 230, 270, 300, 310, 350, 400]
    ] ,
    pointhForSeason: [
        [490, 685, 590, 740],
        [780, 670, 630, 610],
        [490, 685, 670, 790],
        [940, 820, 800, 1060]
    ]
}
const statsData = {
    categoryPercentage: 50,
    labels: statisticsData.labels[0],
    datasets: [
        {
        data: statisticsData.points[0],
        pointRadius: 3,
        pointHoverRadius: 3,
        pointBackgroundColor:'#ffffff',
        fill: true,
        borderColor: function(context) {
            const chart = context.chart;
            const {ctx, chartArea} = chart;
            if (!chartArea) {
            return null;
            }
            return getGradient(ctx, chartArea);
        },
        backgroundColor: function(context) {
            const chart = context.chart;
            const {ctx, chartArea} = chart;
            if (!chartArea) {
            return null;
            }
            return getBgGradient(ctx, chartArea);
        },
        
        cubicInterpolationMode: 'monotone',
        tension: 0.4
        }
    ]
};
let width, width1, height, height1, gradient, gradientBG;
function getGradient(ctx, chartArea) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (gradient === null || width !== chartWidth || height !== chartHeight) {
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(500, 0, 90, 0);
      gradient.addColorStop(0, `rgba(250, 5, 5, 0.9)`);
      gradient.addColorStop(1, `rgba(245, 145, 0, 0.9)`);
    }
  
    return gradient;
  }
function getBgGradient(ctx, chartArea) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (gradientBG === null || width1 !== chartWidth || height1 !== chartHeight) {
    width1 = chartWidth;
    height = chartHeight;
    gradientBG = ctx.createLinearGradient(500, 0, 90, 0);
    gradientBG.addColorStop(0, `rgba(250, 5, 5, 0.05)`);
    gradientBG.addColorStop(1, `rgba(245, 145, 0, 0.05)`);
    }

    return gradientBG;
}
function updateStatsConfigByMutating(year, label) {
    statistics.data.labels = statisticsData.labels[label];
    if(label == 1){
        statistics.data.datasets[0].data = statisticsData.pointhForSeason[year]
    } else
        statistics.data.datasets[0].data = statisticsData.points[year];
    
    statistics.update();
}
function updateStatsYear(year){
    if(statistics.data.labels == statisticsData.labels[1]){
        statistics.data.datasets[0].data = statisticsData.pointhForSeason[year]
    } else
        statistics.data.datasets[0].data = statisticsData.points[year];
    
    statistics.update();
}
function updateStatsLabel(label){
    if(statistics.data.labels == statisticsData.labels[1] && label == 0){
        console.log("from season to month");
        var index = statisticsData.pointhForSeason.indexOf(statistics.data.datasets[0].data);
        statistics.data.datasets[0].data = statisticsData.points[index]
    }
    if(statistics.data.labels == statisticsData.labels[0] && label == 1){
        console.log("from month to season");
        var index = statisticsData.points.indexOf(statistics.data.datasets[0].data);
        statistics.data.datasets[0].data = statisticsData.pointhForSeason[index]
    }
    statistics.data.labels = statisticsData.labels[label]
    statistics.update();
}
function renderStatsChart(ctx, statsData){
    statistics = new Chart(ctx, {
        type: 'line',
        data: statsData,
        options: {
            maintainAspectRatio: false,
            responsive: false,
            plugins: {
                title: {
                    display: false,
                    text: 'Chart.js Line Chart - Cubic interpolation mode'
                },
                legend: {
                    display: false
                },
            },
            interaction: {
                intersect: true,
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: false
                    },
                    stacked: true,
                    ticks:{
                        minRotation: 0
                        
                    },
                    grid:{
                        display: false,
                        tickBorderDash: [0, 10],
                        tickLength: 20,
                    },
                    grace:1
                },  
                y: {
                    
                    display: true,
                    title: {
                        display: false,
                    },
                    suggestedMin: 0,
                    suggestedMax: 500,
                    ticks:{
                        stepSize: 100,
                        reverse: false,
                    }
                }
            }
        }
    });
}

//Earning
var earning;
var earningData = {
    percentOne: 25,
    percentTwo: 35,
    percentThree: 15,
    deposit: 20541875574.00,
    expense: 541875574.00,
    payable: 805875574.00
}
let earnData =  [
    earningData.percentOne, 
    earningData.percentTwo, 
    earningData.percentThree, 
    100-(earningData.percentOne + earningData.percentTwo + earningData.percentThree)
];
function renderEarnChart(ctx, earnData){
    earning = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: earnData,
                backgroundColor: [
                    '#ffb35e',
                    '#58deb6',
                    '#62a7ff',
                    '#eeeeee',
                ],
                borderWidth: 0,
                borderRadius: [30,0,30,0],
                
            }]
        },
        options: {
            responsive: true,
            cutout: 95,
            showTooltips: false,
            events: [],
        }
    });
}
function updateEarnConfigByMutating(earnArr) {
    earning.data.datasets[0].data = earnArr;
    
    earning.update();
}

//Sales
var salesData = {
    monthlySale: 20541,
    yearlySale: 2054125,
    monthlyPercent: 50,
    yearlyPercent: 70,
    monthlyIndicator: 'down',
    yearlyIndicator: 'up'

}

window.onload = function() {  

    // Statistics Chart  
    const ctxStats = document.getElementById('statistics').getContext('2d');
    renderStatsChart(ctxStats, statsData);
    //updateStatsConfigByMutating(3,0);     
    //updateStatsLabel(1);
    //updateStatsLabel(0);
    //updateStatsLabel(0);
    //updateStatsYear(3);
    //updateStatsLabel(1);
    //updateStatsLabel(0);
    //updateStatsLabel(1);
    
    // Earning Chart
    const ctxEarn = document.getElementById('myChart').getContext('2d');
    renderEarnChart(ctxEarn,earnData);
    //updateEarnConfigByMutating([20,20,5,55])
}
export {earningData, updateStatsYear, updateStatsLabel, salesData }
