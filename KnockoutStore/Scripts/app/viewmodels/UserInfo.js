
'use strict';


var UserInfo = function () {

    var sef = {        
        email: ko.observable().extend({ 
            required: true,
            minLength: 3
        }),
        password: ko.observable(),
        condiciones: ko.observable(false)
    };


    return self;

};


ko.applyBindings(new UserInfo(), document.getElementById("UserForm"));