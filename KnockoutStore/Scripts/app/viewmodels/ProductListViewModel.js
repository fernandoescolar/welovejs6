'use strict';

var ProductListViewModel = (function () {

    var self = {
        products: ko.observableArray([]),
        storeService: null,
    };

    function loadData() {
        self.storeService.getAllItems().then(function (data) {
            self.products(data);
        });
    }

    function productListViewModel(storeService) {
        self.storeService = storeService;
        loadData();

        return {
            products: self.products,
        };
    }

    return productListViewModel;
})();

var viewModel = new ProductListViewModel(storeService);
ko.applyBindings(viewModel);