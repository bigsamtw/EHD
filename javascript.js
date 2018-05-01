
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
        $(`#popup_item_${id}`).modal('show');
    });
}

function setPopup(id) {
    $(`.ui.circular.icon.button#${id}`).popup({
        on: 'click',
        target: `#profile_item${id}`,
        popup: :{
            <div class = "ui special popup" class = "popup_items" id="popup_item_1" >
            <div class="popup_image_content">
                <div class="ui medium image" >    
                    <img src="about/Intro_1.jpg">
                </div>
                <p class = "popup_name">李致賢<br>Glen Lee</p>
            </div>
            <div class = "popup_description">
                <div class = "popup_left_decription">
                    <p class = "popup_motto">吃飯皇帝大</p>
                </div>
                <div class = "popup_right_decription">
                    <div class = "popup_line"></div>
                    <a class = "popup_mail" href="mailto:glen84910@gmail.com?subject=subject&cc=cc@example.com">
                        <img src="about/Mail.png" width="50px" >
                    </a>
                    <a class = "popup_fb" href="https://www.facebook.com/glen.lee.71"  >
                        <img src = "about/Fb%20.png" width="50px" >
                    </a>
                    <img class = "popup_major" src="about/computer.png" width="70px">
                </div>
            </div>
        </div>
        }
    });
}
