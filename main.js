(function(){

    function getData() {
        $.getJSON('data.json', function(json) {
            buildLineGraph(json);
        });
    }

    function buildLineGraph(data) {
        var salesData = data;
    }

    getData();
})();
