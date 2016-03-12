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
        var vis = d3.select('#visualisation'),
            xAxis = d3.svg.axis().scale(buildXScale(data)),
            yAxis = d3.svg.axis().scale(buildYScale(data));

        vis.append("svg:g")
            .attr("transform", "translate(0," + (config.HEIGHT - (2 * config.MARGINS.bottom)) + ")")
            .call(xAxis);

    }

    function buildXScale(data) {
        return d3.scale.linear().range([
            config.MARGINS.left,
            config.WIDTH - config.MARGINS.right
        ]).domain([
            data[0].year,
            data[data.length-1].year
        ]);
    }

    function buildYScale(data) {
        return d3.scale.linear().range([
            config.HEIGHT - config.MARGINS.top,
            config.MARGINS.bottom
        ]).domain([
            getMinValue(data),
            getMaxValue(data)
        ]);
    }

    function getMaxValue(data) {
        var salesList = data.map(function(x) {
            return x.sale;
        });
        return _.max(salesList);
    }

    function getMinValue(data) {
        var salesList = data.map(function(x) {
            return x.sale;
        });
        return _.min(salesList);
    }

    getData();
})();
