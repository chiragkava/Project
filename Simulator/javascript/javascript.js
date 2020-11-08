 function updateOutput(){
                $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" +
                    $("#htmlPanel").val() + "</body></html>");
               
               
                document.getElementById("outputPanel").contentWindow. eval($("#javascriptPanel").val());
               
           }
           
            $(".toggleButton").hover(function(){
               $(this).addClass("highlightedButton") ;
           },function(){
               $(this).removeClass("highlightedButton");
           })
           var pan;
           $(".toggleButton").click(function(){
               $(this).toggleClass("active");
               
               var panelId=$(this).attr("id")+"Panel";
               $("#"+panelId).toggleClass("hidden");
               var num = 4-$(".hidden").length;
               $(".panel").width(($(window).width() / num)-8);
             //  $("#"+panelId).toggleClass("whiteback");
               
           })
        
           $(".panel").height($(window).height()-$(".navbar").height()-10);
            
           $(".panel").width(($(window).width() / 2)-8);
           updateOutput();
           $("textarea").hover(function(){
                pan=$(this).attr("id");
                $("#"+pan).addClass("whiteback");
              // alert(pan);
               
           }, function(){
                $("#"+pan).removeClass("whiteback");
           });
           
        
           $("textarea").on("change keyup paste",function(){
            
              updateOutput();
               
           });