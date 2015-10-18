define(['jquery','d3','d3StateHandler'], function($,d3,states) {
    var state = {
        name: "second",
        render: function(data) {
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