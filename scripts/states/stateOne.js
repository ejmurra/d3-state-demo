define(['jquery','d3','d3StateHandler','lodash'], function($,d3,states,_) {
    var state = {
        name: "first",
        render: function(data) {

            console.log('first state');

            // Initial run -- no data in rows
            if (_.isEmpty(data.rows.top)) {
                console.log('initializing');

                var top = d3.select('svg').append('g').attr('id','topRow');
                var center = d3.select('svg').append('g').attr('id','centerRow');
                var bottom = d3.select('svg').append('g').attr('id','bottomRow');

                _.forEach(data.dots, function(dot) {
                    if (dot.xid <= 10) data.rows.top.push(dot);
                    if (dot.xid > 10 && dot.xid <= 20) data.rows.center.push(dot);
                    if (dot.xid >20 && dot.xid <= 30) data.rows.bottom.push(dot);
                    return dot;
                });
                top.selectAll('circle').data(data.rows.top, function(d) {
                    return d.xid;
                }).enter().append('circle')
                    .attr('cx',function(d,i) {
                        return i * 88 + 50;
                    })
                    .attr('cy', -100)
                    .attr('r',10)
                    .attr('class','dot')
                    .style({
                        fill: function(d) {
                            return d.color;
                        }
                    });

                center.selectAll('circle').data(data.rows.center, function(d) {
                    return d.xid;
                }).enter().append('circle')
                    .attr('cx',function(d,i) {
                        return i * 88 + 50;
                    })
                    .attr('cy', -100)
                    .attr('r',10)
                    .attr('class','dot')
                    .style({
                        fill: function(d) {
                            return d.color;
                        }
                    });

                bottom.selectAll('circle').data(data.rows.bottom, function(d) {
                    return d.xid;
                }).enter().append('circle')
                    .attr('cx',function(d,i) {
                        return i * 88 + 50;
                    })
                    .attr('cy', -100)
                    .attr('r',10)
                    .attr('class','dot')
                    .style({
                        fill: function(d) {
                            return d.color;
                        }
                    });
            } else {
                console.log('already initialized');
                var top = d3.select('#topRow');
                var center = d3.select('#centerRow');
                var bottom = d3.select('#bottomRow');
            }

            top.selectAll('circle').transition().delay(function(d,i) {
                return i / 10 * 500;
            }).attr('cy',100)
                .attr('cx',function(d,i) {
                    return i * 88 + 50;
                });

            center.selectAll('circle').transition().delay(function(d,i) {
                return i / 10 * 500;
            }).attr('cy',250)
                .attr('cx',function(d,i) {
                    return i * 88 + 50;
                });

            bottom.selectAll('circle').transition().delay(function(d,i) {
                return i / 10 * 500;
            }).attr('cy',400)
                .attr('cx',function(d,i) {
                    return i * 88 + 50;
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

            _.forEach(data.dots, function(dot) {
                if (dot.xid < 10) data.rows.top.push(dot);
                if (dot.xid >= 10 && dot.xid < 20) data.rows.center.push(dot);
                if (dot.xid >=20 && dot.xid < 31) data.rows.bottom.push(dot);
                return dot;
            });

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