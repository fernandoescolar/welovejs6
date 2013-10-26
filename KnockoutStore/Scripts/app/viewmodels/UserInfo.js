
'use strict';


var UserInfo = ko.validatedObservable( {
       
        email: ko.observable().extend({ 
            required: { message: 'Campo obligatorio.' },
            minLength: 3
        }),
        password: ko.observable(),
        condiciones: ko.observable(false),
        submit: function () {
            if (this.isValid()) {
                alert('Thank you.');
            } else {
                alert('Please check your submission.');
            }
            return false;
        }


});


ko.applyBindings(UserInfo, document.getElementById("UserForm"));