angular.module('thinkSmart').
    directive('barchart', function ($parse) {
        return {
            restrict: 'E',
            replace: true,
            template: '<div id="chart"></div>',
            link: function (scope, element, attrs) {
                var tmp = attrs.data.substring(1);
                tmp = tmp.substring(0, tmp.length - 1);
                var data = tmp.split(','),
                    chart = d3.select('#chart')
                        .append("div").attr("class", "chart")
                        .selectAll('div')
                        .data(data).enter()
                        .append("div")
                        .transition().ease("elastic")
                        .style("width", function(d) { return d + "%"; })
                        .text(function(d) { return d + "%"; });
            }
        };
    });