

var ShoopingCartMV = function() {

    return {        
        nombre : ko.observable("Marc").extend({ 
            required: true,
            minLength: 3,
            pattern: {
                message: 'Hey this doesnt match my pattern',
                params: '^[A-Z0-9].$'
            }
        })
    };

};

$(function() {
    ko.applyBindings(new ShoopingCartMV());
});


