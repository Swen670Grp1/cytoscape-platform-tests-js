function generateSlides(){
    let arr = [];
    for(let i = 0; i<=10; i++){
        let slide = {};
        if(i == 0){
            slide.title = `CYTOSCAPE TESTINGfmfsjfskfsjsfjksfdfsjkdfsjkdslkjdsklnjds`;
            slide.question = "Thank you for helping improve the Cytoscape experience. Use the arrow at the bottom to step through tests. ";
            slide.input = "";
        } else {
            slide = {
                title: `Slide-${i}`,
                question: `       <a href="https://github.com/cytoscape/cytoscape-gui-distribution/releases" target="_blank"><u>Go to Github Releases</u></a>
                `,
                input: "",
            };
        }
      arr.push(slide);
    };

    let endSlids = [
        {
            title: `Thanks for testing Cytoscape!`,
            question: "Please submit yout framework.log",
            input: "",
        }, 
        {
            title: `Submit your testing results`,
            question: "",
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

/**
 * The driver for the VueJs app. We can have the business logicig for things like grabbing 
 * the logs and submitting them. Or we can just put this in main.js. I used a different
 * file so it would be easier to review. 
 */
var app = new Vue({
    el: '#app',
    data: {
      slides: [],
      isLoading: false
    },
    // mounted () {
    //     // Initialize reveal with the options we care about.
    //     Reveal.initialize(DEFAULT_REVEAL_OPTIONS);
    //     Reveal.configure({ controls: false, slideNumber: 'c/t', progress: true });
    //     this.start();
    //     // Start with slide 0
    //     Reveal.slide(0);
    // },
    methods: {
        addSlide: (slide) => {

        },
        start: function(){
            console.log("Start Vue app", this);
             // Initialize reveal with the options we care about.
            // Reveal.initialize(DEFAULT_REVEAL_OPTIONS);
            // Reveal.configure({ controls: false, slideNumber: 'c/t', progress: true });
            let testSuite = initDefaultSuite();
            this.slides = testSuite._slides;
            // this.slides = generateSlides();
            // Reveal.slide(0);

        },
        toggleLoading: function(isOn){
            if(isOn == true){
                this.isLoading = isOn;
            }else{
                this.isLoading = !this.isLoading;
            }
        }
    }
  });

