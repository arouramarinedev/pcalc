jQuery(function($){

	$(".share-trigger").click(function(event){
		event.preventDefault();
		var service = $(this).data('service');
		switch(service) {
			case 'facebook':
				url = document.URL;
				window_size = "width=585,height=368";
				go = 'http://www.facebook.com/sharer/sharer.php?u=' + url;
				break;
			case 'twitter':
				url = document.URL;
				window_size = "width=585,height=261";
				go = 'http://www.twitter.com/intent/tweet?url=' + url;
				break;
            case 'pinterest':
                url = document.URL;
                window_size = "width=517,height=511";
                go = 'http://pinterest.com/pin/create/bookmarklet/?url=[URL]';
                break;
			case 'google':
				url = document.URL;
				window_size = "width=517,height=511";
				go = 'http://plus.google.com/share?url=' + url;
				break;
            case 'friend':
                break;
			default:
				return false;
		}

        if(typeof go != "undefined")
		    window.open(go, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,' + window_size);
        else
            return true;
	});

    $('.radio-replace').click(function(event) {
        event.preventDefault();

        if($(this).hasClass("app-checked")) {
            $(this).removeClass('app-checked');
            $('input[data-calculator-app='+$(this).attr('id')+']').removeAttr('checked');
        }
        else {
            $(this).addClass('app-checked');
            $(this).siblings('a').removeClass('app-checked');

            var dataAppChosen = $('input[data-calculator-app='+$(this).attr('id')+']');
            dataAppChosen.attr('checked', 'checked');
            dataAppChosen.siblings('input[type=radio]').removeAttr('checked');
        }

    });
});