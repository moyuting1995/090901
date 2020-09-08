$(function(){

    // 鼠标移入某张图片，图片的宽度变为538px，其他的图片的宽度变为100px
    changeImg();






});


function changeImg(){

    var imgLi=$('.imgBox');

    $.each(imgLi,function(index,value){
        $(value).mouseenter(function(e){
            $(this).stop().animate({'width':'538px','opacity':'1'},'200');
            $(this).siblings('.imgBox').stop().animate({'width':'100px','opacity':'0.4'},'200');
            // e.stoppropagation();
        });




    });





};