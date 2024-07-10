$(document).ready(function() {
        $('#showPassword').click(function() {
        var passwordField = $('#exampleInputPassword1');
        var passwordFieldType = passwordField.attr('type');
        if (passwordFieldType === 'password') {
            passwordField.attr('type', 'text');
            $(this).removeClass('fa-eye-slash').addClass('fa-eye');
        } else {
            passwordField.attr('type', 'password');
            $(this).removeClass('fa-eye').addClass('fa-eye-slash');
        }
    });

    $('#showPassword1').click(function() {
        var passwordField = $('#exampleInputPassword2');
        var passwordFieldType = passwordField.attr('type');
        if (passwordFieldType === 'password') {
            passwordField.attr('type', 'text');
            $(this).removeClass('fa-eye-slash').addClass('fa-eye');
        } else {
            passwordField.attr('type', 'password');
            $(this).removeClass('fa-eye').addClass('fa-eye-slash');
        }
    });
});