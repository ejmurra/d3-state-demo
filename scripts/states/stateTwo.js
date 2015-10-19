define(['jquery','d3','d3StateHandler','lodash'], function($,d3,states,_) {
    var state = {
        name: "second",
        render: function(data) {
            console.log('second state')
            var center = {
                x: 900/2,
                y: 500/2
            };
            var radius = 200;
            var slice = 2 * Math.PI / 30;

            data.dots = _.forEach(data.dots,function(dot,i) {
                var angle = slice * i;
                dot.x = (center.x + radius * Math.cos(angle));
                dot.y = (center.y + radius * Math.sin(angle));
                return dot;
            });

            var dots = d3.selectAll('.dot');

            dots.transition().delay(function(d,i) {
                return i / 30 * 500;
            }).attr('cx',function(d) {
                return d.x;
            }).attr('cy', function(d) {
                return d.y;
            });
            return data;
        },
        nextOut: function(data) {
            return data;
        },
        prevIn: function(data) {
            return data;
        },
        prevOut: function(data) {
            return data;
        },
        nextIn: function(data) {
            data.rows = {
                top: [],
                center: [],
                bottom: []
            }
            return data;
        },
        jumpOut: function(data) {
            return data;
        },
        jumpIn: function(data) {
            return data;
        },
        resize: function(data) {
            return data;
        }
    };
    return state;
});