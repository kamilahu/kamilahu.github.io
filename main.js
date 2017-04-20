console.log("linked"); 

var ctx = document.getElementById("myChart");

var data = {
    labels: ["Sleep", "School", "Social Life"],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: ["#FF6394", "#36A2EB", "#FFCE56"]
        }]
};

var myChart = new Chart(ctx, {
    
    type: 'pie',
    data: data,
    options: {
        title: {
            display: true,
            text: 'Pie Chart Title'
        }
    }
});
