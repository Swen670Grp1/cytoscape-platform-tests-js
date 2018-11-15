;(function(){
    Reveal.initialize();
  
    //slide deck wrapper
    deck = $('#blank').parent();
  
    // a blank is initialized and stored as a variable
    wrap = $('#blank').clone()
                      .attr('id',null)
                      .prop('outerHTML');
    // remove the blank
    $('#blank').remove();
  
    // add some slides
    newslide('Download the Cytoscape Milestone Release');
    newslide('Close Session');
})();

function newslide(i){
  // wrap the new content in the blank
  $('<em>' + '<br>'+i+'</em>').appendTo(deck)
                      .wrap( wrap );
};