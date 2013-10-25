var IndexViewModel = (function () {

    function indexViewModel(mediator, storeService, cartService) {
        return {
            ProductList: new ProductListViewModel(mediator, storeService),
            ProductDetails: new ProductDetailsViewModel(mediator, cartService)
        };
    }

    return indexViewModel;
})();

var viewModel = new IndexViewModel(mediator, storeService, cartService);
ko.applyBindings(viewModel);