


$(window).resize(function(){
    windowResize();
});

$(document).ready(function(){
    windowResize();
});

function windowResize() {
    if($(window).width() <  1080 ) {
        for (var i = 1 ; i < 9 ; ++i) {
            setModal(i)
            $(`ui.circular.icon.button#${i}`).popup(false);        
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
        $(`.ui.modal#mobile_image${id}`).modal('show');
    });
}

function setPopup(id) {
    $(`.ui.circular.icon.button#${id}`).popup({
        on: 'click',
        variation: 'basic',
        target: `#image${id}`,
        html: `<img src="about/Intro ${id}.png" height="380" width="auto">`
    });
}
