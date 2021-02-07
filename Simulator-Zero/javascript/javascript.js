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


    document.getElementById("outputPanel").contentWindow.eval(jeditor.getSession().getValue());
    heditor.resize();
    ceditor.resize();
    jeditor.resize();

}
           
         
updateOutput();
                
          
        
$("textarea").on("change keyup paste",function(){

    updateOutput();

});
            
        
            