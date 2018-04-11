window.onload=function(){
    var menu = document.getElementById("menu");
    var back = document.getElementById("back");
    
    window.addEventListener('scroll',_handleScroll,false);
    
    function _handleScroll(){
        menu.style.left=60-window.scrollX+ "px";
        back.style.left=60-window.scrollX+ "px";
    }
    
    $('a[href^="#"]').click(function(){
        var speed=600;
        var href=$(this).attr("href");
        var target=$(href=="#" || href=="" ? 'html':href);
        var position=target.offset().top;
        
        $('body,html').animate({scrollTop:position},speed,'swing');
        return false;
        
    });
        $('.sub_title').children().addBack().contents().each(function(){
           if(this.nodeType == 3){
               $(this).replaceWith($(this).text().replace(/(\S)/g,'<span>$1</span>'));
           }
        
    });
    
    $('.sub_title').css({'opacity':1});
    for (var i=0 ;i<=$('.sub_title').children().length ;i++){
        $('.sub_title').children('span:eq('+i+')').delay(150*i).animate({'opacity':1},150);
    }
    
    $('.works_img').click(function(){
        $("#back_black").css({'z-index':'15','display':'inline'});

        var img_name=$(this).attr("id");
        var modal_name=img_name.slice(0,-4);
        
        $('.modal_img').attr('src','img/works/'+modal_name+'.png');
        
        $('#'+modal_name).css({'z-index':'20','display':'inline'});

    });
    
    $('.close').click(function(){
        
        document.querySelector("[data-crno]").dataset.crno=1;
        
        $('.works_description').css({'z-index':'0','display':'none'})
        
        $("#back_black").css({'z-index':'0','display':'none'});
        
        $('.go_right').css('display','inline');
       
       $('.go_left').css('display','none');
    });

    $('.go_right').click(function(){
        //document.querySelectorは一致する最初のElementしか返さないためバグの原因となる。修正の必要あり。
        //修正内容:document.querySelectorを消去し、<img>にidを設定して.dataでカスタムデータを取得する。
        var cr_no=Number(document.querySelector("[data-crno]").dataset.crno);
        var current_img;
        if(cr_no==1){
            current_img=$('.modal_img').attr('src').slice(0,-4);
        }else{
            current_img=$('.modal_img').attr('src').slice(0,-5);
        }
        
        var next_no=cr_no+1;
        var max_no=Number(document.querySelector("[data-maxno]").dataset.maxno);
        
        if(next_no==2){
            $('.go_left').css('display','inline');
        }
        if(next_no==max_no){
            $('.go_right').css('display','none');
        }
        
        $('.modal_img').attr('src',current_img+next_no+'.png');
        document.querySelector("[data-crno]").dataset.crno=next_no;
    });
    
    $('.go_left').click(function(){
        var current_img=$('.modal_img').attr('src').slice(0,-5);
        var back_no=Number(document.querySelector("[data-crno]").dataset.crno)-1;
        var max_no=Number(document.querySelector("[data-maxno]").dataset.maxno);
        
        if(back_no==max_no-1){
            $('.go_right').css('display','inline');
        }
        
        document.querySelector("[data-crno]").dataset.crno=back_no;
        
        if(back_no==1){
            $('.go_left').css('display','none');
            back_no="";
        }
        
        $('.modal_img').attr('src',current_img+back_no+'.png');
        
    });
    
};