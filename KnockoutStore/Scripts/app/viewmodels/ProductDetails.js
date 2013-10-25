'use strict';

var ProductDetailsViewModel = (function () {

    var product;
    var image = ko.observable();
    var name = ko.observable();
    var description = ko.observable();
    
    var isVisible = ko.observable(false);
    var cartService;
    var notifier;

    function load() {
        image('Content/images/' + product.id + '.jpg');
        name(product.name);
        description(product.description);
    }

    function addToCart() {
        cartService.addProduct(product);
    }
    
    function close() {
        isVisible(false);
        notifier.notify('item-list');
    }

    function productDetailsViewModel(mediator, service) {
        cartService = service;
        notifier = mediator;
        
        notifier.register('item-selected', function (data) {
            product = data;
            load();
            isVisible(true);
        });

        return {
            isVisible: isVisible,
            image: image,
            name: name,
            description: description,
            addToCart: addToCart,
            close: close
        };
    }

    return productDetailsViewModel;
})();