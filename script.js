$(document).ready(function() {
    $('input[type="password"]').on('focus', function() {
        $('.hand, .hand-r, .arm, .arm-r').addClass('password');
    }).on('focusout', function() {
        $('.hand, .hand-r, .arm, .arm-r').removeClass('password');
    });
});
