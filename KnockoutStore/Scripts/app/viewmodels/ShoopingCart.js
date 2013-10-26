'use strict';

var ShoopingCartViewModel = function (cartService) {

    //var mapping = {
    //    'children': {
    //        key: function (data) {
    //            return ko.utils.unwrapObservable(data.id);
    //        }
    //    }
    //}
    //var viewModel = ko.mapping.fromJS(data, mapping);
    
    var products = ko.observableArray([]);
    var total = ko.computed(function() {
        var result = 0;
        var list = products();
        for (var i = 0; i < list.length; i++) {
            result += list[i].price() * list[i].units();
        }

        return result;
    });

    function loadData() {
        cartService.getProducts().then(function (data) {
            var items = [];
            for (var i = 0; i < data.length; i++) {
                items.push(ko.mapping.fromJS(data[i]));
            }
            products(items);
        });
    }
    
    function saveData() {
        var items = products();
        var result = [];
        for (var i = 0; i < items.length; i++) {
            result.push(ko.mapping.toJS(items[i]));
        }

        cartService.update(result);
    }

    function removeProduct(data) {
        var items = products();
        for (var i = 0; i < items.length; i++) {
            if (items[i].id() === data.id()) {
                items.splice(i, 1);
            }
        }
        products(items);
    }

    loadData();

    return {
        products: products,
        total: total,
        removeProduct: removeProduct,
        saveData: saveData
    };

};


ko.applyBindings(new ShoopingCartViewModel(cartService));





