$(function() {
	$('.switch-button').click(function(e) {
		e.preventDefault();
		var group = $(this).data('group');
		var target = $(this).data('target');
		$('a.switch-button[data-group=' + group + ']').removeClass('active');
		$(this).addClass('active');
		$('.switch-target[data-target=' + target + ']').fadeIn();
		$('.switch-target[data-group=' + group + ']:not([data-target=' + target + '])').fadeOut();
		$('.switch-target-noanimation[data-group=' + group + ']').hide();
		$('.switch-target-noanimation[data-target=' + target + ']').show();
	});
	
    $('.feature.workspace .icon-group').mouseenter(function() {
        $('.feature.workspace .icon-group').removeClass('highlight');
        $(this).addClass('highlight');

        var target = $(this).data('target');
        $('.feature.workspace .feature-image').removeClass('current');
        $('.feature.workspace .feature-image[data-title=' + target + ']').addClass('current');
    });
    
    /** for iPad **/
	$('.allaroundviewer-navigator').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('current')) return;

        // update dots
        $('.allaroundviewer-navigator.current').removeClass('current');
        $(this).addClass('current');

        var targetID = $(this).data('allaroundviewer-id');

        // update content
        $('.gallery-content').removeClass('current');
        $('.gallery-content[data-allaroundviewer-id=' + targetID + ']').addClass('current');
    });

    $('#prev-allaroundviewer').click(function(e) {
        e.preventDefault();

        var currentID = $('.gallery-content.current').data('allaroundviewer-id');
        var targetID = currentID - 1;
        if (targetID == 0)
            targetID = 6;

        // update dots
        $('.allaroundviewer-navigator.current').removeClass('current');
        $('.allaroundviewer-navigator[data-allaroundviewer-id=' + targetID + ']').addClass('current');

        // update content
        $('.gallery-content').removeClass('current');
        $('.gallery-content[data-allaroundviewer-id=' + targetID + ']').addClass('current');
    });

    $('#next-allaroundviewer').click(function(e) {
        e.preventDefault();

        var currentID = $('.gallery-content.current').data('allaroundviewer-id');
        var targetID = currentID + 1;
        if (targetID == 7)
            targetID = 1;

        // update dots
        $('.allaroundviewer-navigator.current').removeClass('current');
        $('.allaroundviewer-navigator[data-allaroundviewer-id=' + targetID + ']').addClass('current');

        // update content
        $('.gallery-content').removeClass('current');
        $('.gallery-content[data-allaroundviewer-id=' + targetID + ']').addClass('current');
    });
});