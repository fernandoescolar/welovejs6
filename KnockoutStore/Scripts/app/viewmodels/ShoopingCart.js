'use strict';

var ShoopingCartVm = function (storeService) {

    var self = {        
        products: ko.observableArray([])
        //,
        //nombre : ko.observable("Marc").extend({ 
        //    required: true,
        //    minLength: 3,
        //    pattern: {
        //        message: 'Hey this doesnt match my pattern',
        //        params: '^[A-Z0-9].$'
        //    }
        //})
    };

    function loadData() {
        storeService.getAllItems().then(function (data) {
            self.products(data);
        });
    }

    loadData();

    return self;

};


ko.applyBindings(new ShoopingCartVm(storeService));





