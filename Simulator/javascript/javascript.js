var heditor = ace.edit("htmleditor");
            heditor.setTheme("ace/theme/monokai");
            heditor.getSession().setMode("ace/mode/javascript");
            heditor.session.setOption("useWorker", false);
            heditor.setFontSize("14px");
            heditor.resize();
            heditor.setShowPrintMargin(false);
            heditor.getSession().setUseWrapMode(true);
            
           
           

            
            var ceditor = ace.edit("csseditor");
            ceditor.setTheme("ace/theme/monokai");
            ceditor.getSession().setMode("ace/mode/javascript");
            ceditor.session.setOption("useWorker", false);
            ceditor.setFontSize("14px");
            ceditor.setShowPrintMargin(false);
            ceditor.getSession().setUseWrapMode(true);
            ceditor.getSession().setMode("ace/mode/css");
            
        
            var jeditor = ace.edit("javascripteditor");
            jeditor.setTheme("ace/theme/monokai");
            jeditor.setShowPrintMargin(false);
            jeditor.getSession().setMode("ace/mode/javascript");
            jeditor.session.setOption("useWorker", false);
            jeditor.setFontSize("14px");
            jeditor.getSession().setUseWrapMode(true);
            
        
            function updateOutput(){
                $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + ceditor.getSession().getValue() + "</style></head><body>" +
                    heditor.getSession().getValue() + "</body></html>");
               
               
                document.getElementById("outputPanel").contentWindow. eval(jeditor.getSession().getValue());
                heditor.resize();
                ceditor.resize();
                jeditor.resize();
               
           }
           
            $(".toggleButton").hover(function(){
               $(this).addClass("highlightedButton") ;
            },function(){
               $(this).removeClass("highlightedButton");
            })
           
            $(".toggleButton").click(function(){
               $(this).toggleClass("active");
               
               var panelId=$(this).attr("id")+"editor";
               // alert(panelId);
               $("#"+panelId).toggleClass("hidden");
               var num = 4-$(".hidden").length;
               $(".editor").width(($(window).width() / num)-1);
                
             //  $("#"+panelId).toggleClass("whiteback");
                heditor.resize();
                ceditor.resize();
                jeditor.resize();
               
            })
        
            $(".editor").height($(window).height()-$(".navbar").height()-10);
            
            $(".editor").width(($(window).width() / 2)-1);
                updateOutput();
                
          
        
            $("textarea").on("change keyup paste",function(){
                
                updateOutput();
               
            });
            
        
            