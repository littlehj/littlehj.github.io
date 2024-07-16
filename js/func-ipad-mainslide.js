$(function() {
    /** for iPad **/
	$('.organize-navigator').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('current')) return;

        // update dots
        $('.organize-navigator.current').removeClass('current');
        $(this).addClass('current');

        var targetID = $(this).data('organize-id');

        // update content
        $('.gallery2-content').removeClass('current');
        $('.gallery2-content[data-organize-id=' + targetID + ']').addClass('current');
    });

    $('#prev-organize').click(function(e) {
        e.preventDefault();

        var currentID = $('.gallery2-content.current').data('organize-id');
        var targetID = currentID - 1;
        if (targetID == 0)
            targetID = 6;

        // update dots
        $('.organize-navigator.current').removeClass('current');
        $('.organize-navigator[data-organize-id=' + targetID + ']').addClass('current');

        // update content
        $('.gallery2-content').removeClass('current');
        $('.gallery2-content[data-organize-id=' + targetID + ']').addClass('current');
    });

    $('#next-organize').click(function(e) {
        e.preventDefault();

        var currentID = $('.gallery2-content.current').data('organize-id');
        var targetID = currentID + 1;
        if (targetID == 7)
            targetID = 1;

        // update dots
        $('.organize-navigator.current').removeClass('current');
        $('.organize-navigator[data-organize-id=' + targetID + ']').addClass('current');

        // update content
        $('.gallery2-content').removeClass('current');
        $('.gallery2-content[data-organize-id=' + targetID + ']').addClass('current');
    });
});