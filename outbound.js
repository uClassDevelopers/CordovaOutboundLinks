$(document).ready( function() { 
    $('a').each(function() { 
        var url = ($(this).attr('href')); 
        if (url.indexOf('http') == 0) {
            $(this).css('text-decoration', 'none');
            $(this).attr('href', '#' );
            $(this).click(function() {
                var ref = window.open(url, '_blank', 'location=yes');             
            });       
        }
    });
});