;(function(){
    //Reveal.initialize();
  
    //slide deck wrapper
    deck = $('#blank').parent();
  
    // a blank is initialized and stored as a variable
    wrap = $('#blank').clone()
                      .attr('id',null)
                      .prop('outerHTML');
    // remove the blank
    $('#blank').remove();
  
    // add some slides
    //slideCreate('Download the <br> Cytoscape Milestone Release','<a href="https://github.com/cytoscape">Go to Github Releases</a>','The installer should create an executable for you');
    //slideCreate('Close Session');
})();

function newslide(firstline,secondline,thirdline){
  // wrap the new content in the blank
  $('<em>' + '<br>'+firstline+ '<br><br>' + secondline + '<br>' + thirdline+ '</em>').appendTo(deck)
                      .wrap( wrap );
  $("em").css("font-size","25px");
};

function slideCreate(header,body,footer){
  if(isEmpty(header)){
    header="";
  }
  if(isEmpty(body)){
    body ="";
  }
  if(isEmpty(footer)){
    footer= "";
  }
  var headerContent = "<h3>" + header + "</h3>";
  var bodyContent = "<p class=paragraphText>" + body + "</p>";
  var footerContent = "<p class=paragraphText>" + footer + "</p>";
  
  $('<em>' + headerContent + bodyContent + footerContent + "</em>").appendTo(deck).wrap(wrap);
  
}

function isEmpty(str) {
  return (!str || 0 === str.length);
}