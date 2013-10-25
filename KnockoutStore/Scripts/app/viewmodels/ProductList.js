'use strict';

var ProductListViewModel = (function () {

    var isVisible = ko.observable(true);
    var products = ko.observableArray([]);
    var storeService;
    var notifier;

    function loadData() {
        storeService.getAllItems().then(function (data) {
            products(data);
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
            products: products,
            select: select
        };
    }

    return productListViewModel;
})();
