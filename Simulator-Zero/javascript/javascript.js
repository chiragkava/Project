var heditor = ace.edit("htmleditor");
            heditor.setTheme("ace/theme/monokai");
            heditor.session.setOption("useWorker", false);
            heditor.setFontSize("14px");
            heditor.resize();
            heditor.setShowPrintMargin(false);
            heditor.getSession().setUseWrapMode(true);
            ace.require("ace/ext/language_tools");
            heditor.getSession().setMode("ace/mode/html");
            heditor.setShowPrintMargin(false);
            heditor.setOption("enableBasicAutocompletion", true);
            heditor.setOption("enableLiveAutocompletion", true);
            heditor.setOption("enableSnippets", true);
          
            
        
           
            
var ceditor = ace.edit("csseditor");
            ceditor.setTheme("ace/theme/monokai");
            ceditor.session.setOption("useWorker", false);
            ceditor.setFontSize("14px");
            ceditor.setShowPrintMargin(false);
            ceditor.getSession().setUseWrapMode(true);
            ceditor.getSession().setMode("ace/mode/css");
            ceditor.setOption("enableBasicAutocompletion", true);
            ceditor.setOption("enableLiveAutocompletion", true);
            ceditor.setOption("enableSnippets", true);
            ceditor.renderer.setOption('showLineNumbers', false);
           




var jeditor = ace.edit("javascripteditor");
            jeditor.setTheme("ace/theme/monokai");
            jeditor.setShowPrintMargin(false);
            jeditor.getSession().setMode("ace/mode/javascript");
            jeditor.session.setOption("useWorker", false);
            jeditor.setFontSize("14px");
            jeditor.getSession().setUseWrapMode(true);
            jeditor.setOption("enableBasicAutocompletion", true);
            jeditor.setOption("enableLiveAutocompletion", true);
            jeditor.setOption("enableSnippets", true);
            
        

            function updateOutput(){
                $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + ceditor.getSession().getValue() + "</style></head><body>" +
                    heditor.getSession().getValue() + "</body></html>");
               
               
                document.getElementById("outputPanel").contentWindow. eval(jeditor.getSession().getValue());
                heditor.resize();
                ceditor.resize();
                jeditor.resize();
               
           }
           
           /* $(".toggleButton").hover(function(){
               $(this).addClass("highlightedButton") ;
            },function(){
               $(this).removeClass("highlightedButton");
            })*/
           
            /*$(".toggleButton").click(function(){
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
               alert($(".editor").height());
            })*/
           //  alert($(".outputeditor").css("width"));
            
           /* $(".editor").height($(window).height()-$(".navbar").height()-10);
            
            $(".editor").width(($(window).width() / 2)-1);*/
                updateOutput();
                
          
        
            $("textarea").on("change keyup paste",function(){
                
                updateOutput();
               
            });
            
        
            