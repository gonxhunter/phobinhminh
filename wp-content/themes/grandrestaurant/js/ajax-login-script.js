/**
 * Created by chutienphuc on 19/10/2015.
 */
jQuery(document).ready(function() {

    // Show the login dialog box on click
    jQuery('.fa-shopping-cart').on('click', function(e){
        e.preventDefault();
        if(!jQuery(this).hasClass('active'))
        {
            jQuery('.menu .toggle').trigger('click');
            jQuery('body').prepend('<div class="login-overlay"></div>');
            jQuery('body').css('overflow-y', 'hidden');
            jQuery(this).addClass('active');
            jQuery('form#login').fadeIn(300);
            jQuery('div.login-overlay').click(function() {
                jQuery('div.login-overlay').remove();
                jQuery('body').removeAttr('style');
                jQuery('form#login').fadeOut(300);
                jQuery(this).removeClass('active');
            })
        }
        else {
            jQuery('div.login-overlay').remove();
            jQuery('body').removeAttr('style');
            jQuery('form#login').fadeOut(300);
            jQuery(this).removeClass('active');
        }
    });

    jQuery('.woocommerce-message .button').on('click', function(e){
        e.preventDefault();
        if(!jQuery(this).hasClass('active'))
        {
            jQuery('.menu .toggle').trigger('click');
            jQuery('body').prepend('<div class="login-overlay"></div>');
            jQuery('body').css('overflow-y', 'hidden');
            jQuery(this).addClass('active');
            jQuery('form#login').fadeIn(300);
            jQuery('div.login-overlay').click(function() {
                jQuery('div.login-overlay').remove();
                jQuery('body').removeAttr('style');
                jQuery('form#login').fadeOut(300);
                jQuery(this).removeClass('active');
            })
        }
        else {
            jQuery('div.login-overlay').remove();
            jQuery('body').removeAttr('style');
            jQuery('form#login').fadeOut(300);
            jQuery(this).removeClass('active');
        }
    });

    // Perform AJAX login on form submit
    jQuery('form#login').on('submit', function(e){
        jQuery('form#login p.status').show().text(ajax_login_object.loadingmessage);
        jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_login_object.ajaxurl,
            data: {
                'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
                'username': jQuery('form#login #username').val(),
                'password': jQuery('form#login #password').val(),
                'remember': jQuery('form#login #remember').val(),
                'security': jQuery('form#login #security').val() },
            success: function(data){
                jQuery('form#login p.status').text(data.message);
                if (data.loggedin == true){
                    document.location.href = ajax_login_object.redirecturl;
                }
            }
        });
        e.preventDefault();
    });

});