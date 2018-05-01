$(window).resize(function(){
    refreshModal();
    console.log("resize");
    windowResize();
});

$(document).ready(function(){
    windowResize();
});

function windowResize() {
    if($(window).width() <  1080 ) {
        for (var i = 1 ; i < 9 ; ++i) {
            setModal(i)
            $(`ui.circular.icon.button#${i}`).popup('remove popup');        
        }
    }
    else{
        for (var i = 1 ; i < 9 ; ++i) {
            $(`.ui.circular.icon.button#${i}`).off('click.modal');
            setPopup(i);
        }
    }
}
function setModal(id) {
    $(`.ui.circular.icon.button#${id}`).on('click.modal', function(){
        $(`.ui.modal#modal_${id}`).modal('show');
    });
}

function setPopup(id) {
    $(`.ui.circular.icon.button#${id}`).popup({
        on: 'click',
        inline: true,
        position: 'bottom left',
        lastResort: 'true',
        target: `#image${id}`,
        popup : $(`.ui.custom.popup.top.left.transition.hidden#pop_${id}`)
    });
}
