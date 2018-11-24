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

 