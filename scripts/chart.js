require.config({
    baseUrl: 'scripts',
    paths: {
        d3: 'libs/d3',
        jquery: 'libs/jquery',
        d3StateHandler: 'libs/d3-state-handler'
    }
});
requirejs(['d3','d3StateHandler','jquery','states/stateOne','states/stateTwo'],
    function(d3,StateHandler,$,one,two){
        var svg = d3.select("body").append('svg').attr('width',900).attr('height',560).attr('id','chart');
        var states = StateHandler(
            {
                loop: true,
                data: {}
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