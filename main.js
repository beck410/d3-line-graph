(function(){
    config = {
        'WIDTH': 1000,
        'HEIGHT': 500,
        'MARGINS': {
            top: 20,
            right: 20,
            bottom: 20,
            left: 50
        }
    };

    function getData() {
        $.getJSON('data.json', function(json) {
            buildLineGraph(json);
        });
    }

    // range: defines area available to render graph
    // domain: max and mix values of data
    function buildLineGraph(data) {
        var salesData = data,
            minMaxValues = getMinAndMax(data),
            vis = d3.select('#visualisation'),
            xScale = d3.scale.linear().range([
                config.MARGINS.left,
                config.WIDTH - config.MARGINS.right
            ]).domain([
                salesData[0].year,
                salesData[salesData.length-1].year
            ]);
            yScale = d3.scale.linear().range([
                config.HEIGHT - config.MARGINS.top,
                config.MARGINS.bottom
            ]).domain([
                minMaxValues.min,
                minMaxValues.max
            ]);
    }

    function getMinAndMax(data) {
        var salesList = data.map(function(x) {
            return x.sale;
        });
        return {
            'min': _.min(salesList),
            'max': _.max(salesList)
        };
    }

    getData();
})();
