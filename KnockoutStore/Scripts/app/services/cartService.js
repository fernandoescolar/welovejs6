var cartService = (function () {

    if (!sessionStorage['cart-products']) {
        sessionStorage['cart-products'] = '[]';
    }

    function allItems() {
        return JSON.parse(sessionStorage['cart-products']);
    }

    function contains(items, id) {
        for (var i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                return i;
            }
        }

        return -1;
    }

    function count() {
        var items = allItems();
        var units = 0;
        for (var i = 0; i < items.length; i++) {
            units += parseInt(items[i].units);
        }

        return units;
    }

    function addProduct(item) {
        item.units = 1;
        var items = allItems();
        
        if (items.length === 0) {
            items = [item];
        } else {
            var index = contains(items, item.id);
            if (index >= 0) {
                items[index].units += 1;
            } else {
                items.push(item);
            }
        }
        
        sessionStorage['cart-products'] = JSON.stringify(items);
        mediator.notify('cart-changed');
    }
   
    function clean() {
        sessionStorage['cart-products'] = '[]';
        mediator.notify('cart-changed');
    }

    function update(items) {
        sessionStorage['cart-products'] = JSON.stringify(items);
        mediator.notify('cart-changed');
    }

    function getProducts() {
        var deferred = new $.Deferred();
        deferred.resolve(allItems());
        return deferred.promise();
    }

    return {
        addProduct: addProduct,
        clean: clean,
        update: update,
        getProducts: getProducts,
        count: count
    };
})();