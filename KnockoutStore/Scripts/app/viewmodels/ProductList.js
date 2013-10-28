'use strict';

var ProductListViewModel = (function () {

    var isVisible = ko.observable(true);
    var filter = ko.observable();
    var products = ko.observableArray([]);
    var storeService;
    var notifier;
    var allProducts;

    filter.subscribe(function(value) {
        var result = [];
        for (var i = 0; i < allProducts.length; i++) {
            if (allProducts[i].name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                result.push(allProducts[i]);
            }
        }

        products(result);
    });
    
    function loadData() {
        storeService.getAllItems().then(function (data) {
            allProducts = data;
            products(allProducts);
        });
    }

    function select(item) {
        notifier.notify('item-selected', item);
        isVisible(false);
    }

    function productListViewModel(mediator, service) {
        storeService = service;
        notifier = mediator;

        notifier.register('item-list', function () {
            isVisible(true);
        });
        
        loadData();

        return {
            isVisible: isVisible,
            filter: filter,
            products: products,
            select: select
        };
    }

    return productListViewModel;
})();
