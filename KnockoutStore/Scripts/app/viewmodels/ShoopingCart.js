'use strict';

var ShoopingCartVm = function () {

    var self =  {        
        nombre : ko.observable("Marc").extend({ 
            required: true,
            minLength: 3,
            pattern: {
                message: 'Hey this doesnt match my pattern',
                params: '^[A-Z0-9].$'
            }
        })
    };

    function loadData() { }
    


    return self;

};


 ko.applyBindings(new ShoopingCartVm());





