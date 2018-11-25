/**
 * Holder file developers can define and outline test slides for a Test Suite. 
 */
function initDefaultSuite(){
    let exampleTestSuite = new TestSuite({category: "Default", order: 0});

    
}

function galfilteredTest() {
    let slides = [];
    let slide =  new TestSlide({category: "Galfiltered", order: 1});
    slide.header = "GalFiltered.cys Test";
    slide.steps = [];
    slide.options = [{ type: "checkbox",
        label: "NodeCount is 330?",
        expectedValue: false,
        actualValue: null
        },
        { type: "checkbox",
        label: "Is the Edge count 359?",
        expectedValue: false,
        actualValue: null
        }
    ];
    slides.push(slide);
    return slides;
}

function diffusionTest() {
    let slides = [];
    let slide =  new TestSlide({category: "Diffusion", order: 1});
    slide.header = "Diffusion";
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
    let slides = [];
    let slide =  new TestSlide({category: "Layout", order: 1});
    slide.header = "Diffusion";
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
    slide.header = "Jasmine Automated tests";
    slide.question = "The test results will be shown in the bottom panel";
    slides.push(slide);
    return slides;
}