$(window).resize(function(){
//    refreshModal();
//    refreshModal();
    windowResize();
});

$(document).ready(function(){
    windowResize();
});

function windowResize() {
    if($(window).width() <  1480 ) {
        for (var i = 1 ; i < 9 ; ++i) {
            setModal(i);
            $(`.ui.circular.icon.button#${i}`).popup(false);        
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
 //       position: 'bottom left',
        lastResort : 'left bottom',
        target: `#image${id}`,
        popup : $(`.ui.custom.popup.top.left.transition.hidden#pop_${id}`)
    });
}
