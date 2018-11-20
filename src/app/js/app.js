function generateSlides(){
    let arr = [];
    for(let i = 0; i<=10; i++){
        let slide = {};
        if(i == 0){
            slide = {
                title: `CYTOSCAPE TESTING`,
                subtitle: "Thank you for helping improve the Cytoscape experience. Use the arrow at the bottom to step through tests. ",
                input: "",
              };
        } else {
            slide = {
                title: `Slide-${i}`,
                subtitle: "",
                input: "",
            };
        }
      arr.push(slide);
    };

    let endSlids = [
        {
            title: `Thanks for testing Cytoscape!`,
            subtitle: "Please submit yout framework.log",
            input: "",
        }, 
        {
            title: `Submit your testing results`,
            subtitle: "",
        },      
            ];
    arr = [...arr, ...endSlids];
    return arr;
  } 

let app = new Vue({
    el: '#app',
    data: {
      slides: generateSlides()
    },
    mounted () {
      Reveal.initialize();
      Reveal.configure({ controls: false, slideNumber: 'c/t', progress: true });

    }
  });

