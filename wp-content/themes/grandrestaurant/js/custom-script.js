/* Custom script */

(function($) {
    var customJS = {
        paymentSelect: function() {
            var paymentBox = $('.payment_method_paypalpro .payment_box');
            if(paymentBox.length) {
                $('select', paymentBox).select2();
            };
        }
    };

    // Window ready functions //
    $(window).ready(function() {

    });

    // Window load functions //
    $(window).load(function() {
        // Payment select box
        customJS.paymentSelect();
    });

    // Window resize functions //
    $(window).resize(function() {

    });
})(jQuery);