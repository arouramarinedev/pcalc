'use strict';

$(document).ready(function() {
    $('body').on("click", ".oQModal", function(e) {
        var modal = $($(this).attr("data-open-modal")),
            top = e.pageY,
            left = e.pageX;

        modal.addClass("modal-opened");

        modal.css({
            top: top - modal.outerHeight() - 20,
            left: left - 32
        });

        modal.fadeIn();

        $('body').on('click', $(this).attr("data-open-modal")+' .close-button', function () {
            modal.fadeOut();
        });
    });
});