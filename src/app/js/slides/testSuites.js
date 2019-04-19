/**
 * Holder file developers can define and outline test slides for a Test Suite. 
 */
function initDefaultSuite(){
    let allTestsSuite = new TestSuite({category: "Default", order: 0});
    allTestsSuite._slides = [];
    allTestsSuite._slides.push(...generateStartingSlides(),...galfilteredTest());
    return allTestsSuite;
}

function generateStartingSlides() {
    let slides = [];
    let slide = new InstructionSlide({category: "init", order:0});
    slide.title = "Cytoscape Testing";
    slide.steps = ["Thank you for helping improve the Cytoscape experience.",
    "Use the arrow at the bottom to step through tests."]
    slide.addOption("Name", "abc", "text");
    slides.push(slide);

    slide = new InstructionSlide({category: "init", order:1});
    slide.title = "Download the Cytoscape Milestone Release";
    slide.steps = [
        `<a href="https://github.com/cytoscape/cytoscape-gui-distribution/releases" target="_blank"><u>Go to Github Releases</u></a>`,
        "The installer should create an executable for you.",
    ];
    slide.addOption("Do you have Cytoscape 3.70 or higher installed?", true, "checkbox");
    slides.push(slide);
    
    slide = new InstructionSlide({category: "init", order:2});
    slide.title = "Close Session";
    slide.steps = [
        "Let's create a new session and start testing!",
    ];
    slide.addOption("Is the Cytoscape Network panel empty?", true, "checkbox");
    slides.push(slide);
    

    return slides;
}

function generateEndingSlides() {

}

function galfilteredTest() {
    const url = 'https://raw.githubusercontent.com/cytoscape/cytoscape-platform-tests-js/master/networks/galFiltered.cx'

    let slides = [];
    let slide =  new TestSlide({category: "Galfiltered", order: 1});
    slide.title = "GalFiltered.cys Test";
    slide.steps = [];
    slide.addOption("NodeCount is 330?",false,"checkbox");
    slide.addOption("Is the Edge count 359?",false,"checkbox");

    slide.addTestOperation(async ()=> {
        // Grabbing test data
        let suid =  await cyCaller.load_file_from_url(url);
        log('Loaded galfiltered with SUID ' + suid, slide.id);
        
        // Getting the edges in the test data
        let edges = await cyCaller.get('/v1/networks/' + suid + '/edges');
        log('Edges in galfiltered = ' + edges.length, slide.id)
        addResponse(slide.id);
        slide.options[1].label = `Edge count is ${edges.length}?`;
        
        // Getting the nodes in the test data
        let nodes = await cyCaller.get('/v1/networks/' + suid + '/nodes');
        nodes = JSON.parse(nodes)
        log('Nodes in galfiltered = ' + nodes.length, slide.id);
        addResponse(slide.id, {
          'cyrestNodeCount': nodes.length,
          'cyrestEdgeCount': edges.length
        });

        slide.options[0].label  = `Node count is ${nodes.length}?`;
        showControls(slide);
    });

    slides.push(slide);
    return slides;
}

function diffusionTest() {
    const url = 'https://raw.githubusercontent.com/cytoscape/cytoscape-platform-tests-js/master/networks/galFiltered.cx'
    let slides = [];
    let slide =  new TestSlide({category: "Diffusion", order: 1});
    slide.title = "Diffusion";
    slide.question = "Diffusion is a recently added core app that calls a web service.";
    slide.steps = [];
    slide.options = [{ type: "checkbox",
        label: "Did diffusion run successfully and select nodes?",
        expectedValue: false,
        actualValue: null
        }
    ];
    slides.push(slide);
    return slides;
}
 
function layoutTest() {
    const url = 'https://raw.githubusercontent.com/cytoscape/cytoscape-platform-tests-js/master/networks/galFiltered.cx'
    let slides = [];
    let slide =  new TestSlide({category: "Layout", order: 1});
    slide.title = "Diffusion";
    slide.question = "";
    slide.steps = [];
    slide.options = [{ type: "checkbox",
        label: "Has the circular layout been applied?",
        expectedValue: false,
        actualValue: null
        }
    ];
    slides.push(slide);
    return slides;
}

function jasmineTests() {
    let slides = [];
    let slide =  new TestSlide({category: "Jasmine", order: 1});
    slide.title = "Jasmine Automated tests";
    slide.question = "The test results will be shown in the bottom panel";
    slides.push(slide);
    return slides;
}