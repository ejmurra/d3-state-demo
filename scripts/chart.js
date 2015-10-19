require.config({
    baseUrl: 'scripts',
    paths: {
        d3: 'libs/d3',
        jquery: 'libs/jquery',
        d3StateHandler: 'libs/d3-state-handler',
        lodash: 'libs/lodash'
    }
});
requirejs(['d3','d3StateHandler','jquery','lodash','states/stateOne','states/stateTwo'],
    function(d3,StateHandler,$,_,one,two){
        var svg = d3.select("body").append('svg').attr('width',900).attr('height',560).attr('id','chart')
            .style({
                display: 'block',
                margin: '0 auto'
            }).append('rect').attr('width',900).attr('height',500)
            .style({
                stroke: 'none',
                fill: 'black'
            });

        var generatedData = (function setupData() {

            function colorPicker() {
                var rand = Math.random() * 3;
                if (rand <= 1) return 'red';
                else if (rand <=2) return 'blue';
                else return 'green';
            }

            var dotData = [];
            for (var k = 1; k <= 30; k++) {
                dotData.push({
                    xid: Number(k),     // something is overriding the id attribute so it's gonna be xid for now
                    color: colorPicker()
                });
            }

            return dotData;
        })();

        var states = StateHandler(
            {
                loop: true,
                data: {
                    dots: generatedData,
                    rows: {
                        top: [],
                        center: [],
                        bottom: []
                    }
                }
            }
        );

        states.add(one);
        states.add(two);
        states.start();

        $('#next').on('click',function() {
            states.next();
        });
        $('#prev').on('click',function() {
            states.prev();
        });
});