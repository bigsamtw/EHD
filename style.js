$(document).ready(function(){


    function windowSize(){
        if($(window).width() >  480 ){
            $('.ui.circular.icon.button#1').onclick({   
                $('.ui.modal').modal('show');});
        }else{
            $('.ui.circular.icon.button#1').popup({
                on: 'click',
                position: 'top right',
                variation: 'basic',
                target: '#image1',
                html: '<img src="about/Intro 1.png" height="380" width="auto" border="0">'
            });

            $('.ui.circular.icon.button#2').popup({
                    on: 'click',
                    position: 'top right',
                    variation: 'basic',
                    target: '#image2',
                    html: '<img src="about/Intro 2.png" height="380" width="auto">',
            });
            $('.ui.circular.icon.button#3').popup({
                on: 'click',
                position: 'top center',
                variation: 'basic',
                target: '#image3',
                html: '<img src="about/Intro 3.png" height="380" width="auto">'
            });
            $('.ui.circular.icon.button#4').popup({
                on: 'click',
                position: 'top center',
                variation: 'basic',
                target: '#image4',
                html: '<img src="about/Intro 4.png" height="380" width="auto">'
            });
            $('.ui.circular.icon.button#5').popup({
                on: 'click',
                position: 'top right',
                variation: 'basic',
                target: '#image5',
                html: '<img src="about/Intro 5.png" height="380" width="auto">'
            });
            $('.ui.circular.icon.button#6').popup({
                on: 'click',
                position: 'top right',
                variation: 'basic',
                target: '#image6',
                html: '<img src="about/Intro 6.png" height="380" width="auto">'
            });
            $('.ui.circular.icon.button#7').popup({
                on: 'click',
                position: 'top center',
                variation: 'basic',
                target: '#image7',
                html: '<img src="about/Intro 7.png" height="380" width="auto">'
            });
        }
    };
    $(window).resize(function() {
        windowSize();
    });
    windowSize();
});