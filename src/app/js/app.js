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
 
 let appSlides = []; 
 const DEFAULT_REVEAL_OPTIONS = {
    dependencies: [
        { src: 'plugin/anything/anything.js' },
        { src: 'plugin/markdown/marked.js' },
        { src: 'plugin/markdown/markdown.js' },
        { src: 'plugin/notes/notes.js', async: true },
        { src: 'plugin/highlight/highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } }
      ],
      anything: [{
        className: 'cyrest',
        defaults: { 'title': 'Cytoscape Testing' },
        initialize: function (container, options) {
          if (!options) {
            options = {}
          }
        //   buildSlide(options, container)
        }
      }],
      controlsBackArrows: 'hidden',
      controlsTutorial: false,
      progress: true,
      keyboard: false,
      overview: false
  }


var app = new Vue({
    el: '#app',
    data: {
      slides: null
    },
    mounted () {
        // Initialize reveal with the options we care about.
        Reveal.initialize(DEFAULT_REVEAL_OPTIONS);
        Reveal.configure({ controls: false, slideNumber: 'c/t', progress: true });
        this.slides = appSlides;
        // Start with slide 0
        Reveal.slide(0);
    },
    methods: {
        addSlide: (slide) => {

        },
        start: () => {
            
        }
    }
  });

