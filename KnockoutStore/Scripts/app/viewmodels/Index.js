var IndexViewModel = (function () {

    function indexViewModel(mediator, storeService, cartService) {
        var units = ko.observable(cartService.count());
        
        mediator.register('cart-changed', function (data) {
            units(cartService.count());
        });

        return {
            ProductList: new ProductListViewModel(mediator, storeService),
            ProductDetails: new ProductDetailsViewModel(mediator, cartService),
            Cart: {
                units: units
            }
        };
    }

    return indexViewModel;
})();

var viewModel = new IndexViewModel(mediator, storeService, cartService);
ko.applyBindings(viewModel);