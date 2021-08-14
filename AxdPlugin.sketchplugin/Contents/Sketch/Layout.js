var onRun = function(context) {

  //reference the Application
  var app = [NSApplication sharedApplication];

    //reference the Sketch Document
    var doc = context.document;
    
    //reference all the pages in the document in an array
    var pages = [doc pages];
    
    //loop through the pages of the document
    for (var i = 0; i < pages.count(); i++){
      //reference each page
      var page = pages[i];
      
      //get the name of the page
      var pageName = [page name];
      
      //show the page name in the console
      log(pageName);
    }

  //send an alert message to the application
  alert("Accessible Design Tip: Layout", "Is your layout clear? Make it easy to distinguish sections by providing headers to identify groups of information.")
  }

  function alert(title, message){
    var app = [NSApplication sharedApplication];
    [app displayDialog:message withTitle:title];
  }