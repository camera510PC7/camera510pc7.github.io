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

        var img_name=$(this).attr("id");
        var modal_name=img_name.slice(0,-4);


            $('#'+modal_name).css({'z-index':'20','display':'inline'});
            $("#back_black").css({'z-index':'15','display':'inline'});
    });
    
    $('.close').click(function(){
        
        $('.works_description').css({'z-index':'0','display':'none'})
        
        $("#back_black").css({'z-index':'0','display':'none'});
    });

    
    $(document).ready(function(){
        $("#contact_form").validate({
            rules:{
                "entry.348163176":{
                    required:true
                },
                "emailAddress":{
                    required:true,
                    email:true
                },
                "entry.1316222649":{
                    required:true
                }
            },
            messages:{
                "entry.348163176":{
                    required:"<font color=#F78181>名前を入力してください</font><br>"
                },
                "emailAddress":{
                    required:"<font color=#F78181>メールアドレスを入力してください</font><br>",
                    email:"<font color=#F78181>正しいメールアドレスを入力してください</font><br>"
                },
                "entry.1316222649":{
                    required:"<font color=#F78181>内容を入力してください</font><br>"
                }
            },
            submitHandler:function(contact_form){
                contact_form.submit();
            },
            errorPlacement:function(err,elem){
                err.appendTo($('#errer'));
            }
            
        });
    });
    
$(document).ready(function(){
   $(".drawer").drawer({
       class:{
           drawerWidth:'100px'
       }
   }); 
});
};

var submitted=false;
function submit_page_change(){
    if(submitted) {
        alert("送信しました");
        document.getElementById('name_imput').value="";
        document.getElementById('e-mail_imput').value="";
        document.getElementById('contact-content_imput').value="";
    }
}
    
function sp_menu_transition(){
    $('.drawer').drawer('close');
    this.blur();
}