

(function($) {
    $.fn.passwordSlash = function(options) {
        var settings = $.extend({}, options);
        d = document.createElement('i');
        jQuery(d).addClass('fa fa-eye password-hide-show')
            .html('')
            .insertAfter(this) 
            .click(function() {
                jQuery(this).toggleClass("fa-eye fa-eye-slash");
                var input = jQuery(this).prev();
                if (input.attr("type") == "password") {
                    input.attr("type", "text");
                } else {
                    input.attr("type", "password");
                }
            });
    };

}(jQuery));

jQuery(function() {
    jQuery("input:password").passwordSlash({});
});
