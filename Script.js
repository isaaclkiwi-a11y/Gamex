$(document).ready(function() {
    $('#classic, #new, #pop').hide();
    $('#classic').show();
    if (window.location.hash) {
        var section = window.location.hash;
        $(section).show();
    }
    $(document.body).on('click', 'header nav ul li a', function() {
        var link = $(this);
        var section = link.attr('href').replace(/^#/, '');
        $('#classic, #new, #pop').hide();
        $('section#' + section).show();
        window.location.href = link.attr('href');
    });
});
