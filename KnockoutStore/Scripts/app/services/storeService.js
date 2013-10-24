var storeService = (function () {

    function getAllItems() {
        var deferred = new $.Deferred();
        $.ajax("/Content/data/products.js")
            .done(function (data) {
                deferred.resolve(eval(data));
            })
            .fail(function (data) {
                deferred.reject(data);
            });

        return deferred.promise();
    }

    return {
        getAllItems: getAllItems,
    };
})();
