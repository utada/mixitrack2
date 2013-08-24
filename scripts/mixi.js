
(function() {

    $('[href]').each(function() {
        var href = $(this).attr('href');
        var path = $.url('path', href);
        if (path === '/show_friend.pl') {
            var id = $.url('?id', href);
            var new_href = 'http://mixi.jp/show_friend.pl?id=' + id;
            $(this).attr('href', new_href);
        }

        if (href.split('?')[0] === 'show_friend.pl') {
            var id = $.url('?id', href);
            var new_href = 'show_friend.pl?id=' + id;
            $(this).attr('href', new_href);
        }
    });

}());


