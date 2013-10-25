'use strict';

var ProductListViewModel = (function () {

    var products = ko.observableArray([]);
    var storeService = null;

    function loadData() {
        storeService.getAllItems().then(function (data) {
            products(data);
        });
    }

    function select(item) {
        alert(item.name);
    }

    function productListViewModel(mediator, service) {
        storeService = service;
        loadData();

        return {
            products: products,
            select: select
        };
    }

    return productListViewModel;
})();

var viewModel = new ProductListViewModel(mediator, storeService);
ko.applyBindings(viewModel);