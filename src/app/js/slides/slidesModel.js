/**
 * The base class for Slides.
 */


class BaseSlide {
    constructor(label = Object.assign({},DEFAULT_LABEL)) {
        if (!BaseSlide._id) { BaseSlide._id = 0; }
        BaseSlide._id++;
        this._uid = `${this.constructor.name}-${BaseSlide._id}`;
        this._label = label;
        /**
         * [Optional] Options for the slide. If it's a test, then it would be possible options for the 
         * question's answer. The user inputs for the slide are stored in here. This takes in the format of
         *      `{"id": "input1",
                "label": "XYZ",
                "type": "checkbox",
                "expectedValue": true,
                "actualValue": null
                },
                {"id": "input2",
                "label": "Value 2",
                "type": "text",
                "expectedValue": true,
                "actualValue": null
                }`
         */
        this.options = [];

        /**
         * The title of the slide.
         */
        this.title = "";

    }
    /**
     * The Id number of the slide instances created.
     */
    static get id() {
        return BaseSlide._id;
    }
    /**
     * Returns the unique identifier for the slide instance
     */
    get uid() {
        return this._uid;
    }
    /**
     * Returns the unique idenfing ID of the slide instance.
     */
    toString() {
        return this._uid;
    }

    addOption(label, expectedValue, type = "checkbox" || "text"){
        if (!BaseSlide.optionId) { BaseSlide.optionId = 0; }
        BaseSlide.optionId++;
        let newOption = {
            id:BaseSlide.optionId,
            type: type,
            label: label,
            expectedValue: expectedValue,
            actualValue: null
        }
        this.options.push(newOption);
    }
}

/**
 * Class to hold the model of the Test Case. It holds the necessary parts of a test case
 * including, but not limited to: the question, a series of steps, test operations, and
 * the user answer.
 */
class TestSlide extends BaseSlide {
    constructor(label) {
        super(label);
        /**
         * The question or text for the slide.
         */
        this.question = "";
        /**
         * Breadcrum steps for the slide. These can be instructions for the user to follow.
         */
        this.steps = [];
        /**
         * [Optional] The answer to the question. 
         */
        this.expectedAnswer = "";
        /**
         * The user's response to the slide's question.
         */
        this.userResponse = "";
        /**
         * [Optional] The function operations that the slide will perform. 
         */
        this.operations = [];
    }

    toString() {
        return `\n` +
            `\tName: ${this.uid}\n` +
            `\tCategory: ${this._label}\n ` +
            `\tQuestion: ${this.question}\n ` +
            `\tOptions: ${this.options}\n ` +
            `\tSteps: ${this.steps}\n ` +
            `\tUser Response: ${this.userResponse}\n ` +
            `\tCorrect Response: ${this.answer}\n ` +
            `\tResult... ${this.userResponse == this.answer ? "Pass!" : "Fail!"}\n ` +
            `\n`;
    }

    /**
     * Starts the test slide and it's operations.
     */
    run() {
        if (this.question == null || this.question.trim() === "") {
            return;
        }
        console.debug(`Starting ${this.uid}...`);
        this.runOperations();
    }

    /**
     * Runs the operations for the current slide.
     */
    runOperations() {
        if (this.operations.constructor.name != "Array") {
            return;
        }
        // Running each operation in the test slide.
        let currentOperation = 0;
        console.debug(`\t\tStarting operations for ${this.uid}...`);
        this.operations.forEach(operation => {
            try {
                currentOperation++;
                console.debug(`\t\t\tAttempting to run operation ${currentOperation}...`);
                operation();
                console.debug(`\t\t\tFinished running operation ${currentOperation}.`);
            } catch (err) {
                console.error(`\t\t\tTest operation ${currentOperation} failed.`, err);
                return err;
            }
        });
    }

    /**
     * Adds the passed in function operation to the TestSlide's list of operations.
     * These would get added to the test instance to run.
     * @param {*} operation function to run
     */
    addTestOperation(operation) {
        if (operation.constructor.name === "Function" || operation.constructor.name === "AsyncFunction") {
            this.operations.push(operation);
        } else {
            console.error("An invalid operation was attepted to be added.");
        }
    }
}

class TestSuite {
    constructor(label = DEFAULT_LABEL){
        
        /**
         *  Optional label for the test suite. This can be used to specify a group of related tests.
         */
        this._label = Object.assign({},label);

        /**
         * A collection of Test Slides in the Test Suite.
         */
        this._slides = [];
    }

    /**
     * Returns an optional label for the test suite. 
     * This can be used to specify a group of related tests.
     */
    get label(){
        return this._label;
    }

    /**
     * Returns the collection of Test Slides in the Test Suite.
     */
    get slides(){
        return this._slides;
    }

    generateBaseSlides(){
        let starterSlide = new InstructionSlide();
        // TODO: Add things to do with the starter slides

        this._slides.push(starterSlide);
    }
}

class InstructionSlide extends BaseSlide {
    constructor(label) {
        super(label);
        /**
         * The text for the slide.
         */
        this.header = "";
        /**
         * Breadcrum steps for the slide. These are instructions for the user to follow.
         */
        this.steps = [];
        /**
         * The user's response to the slide's question.
         */
        this.userResponse = "";
        /**
         * [Optional] The function operations that the slide will perform. 
         */
        this.operations = [];
    }
}

let DEFAULT_LABEL = {
    category: "",
    order: 0 // Opitonal property that specifies the ordering this test will take place.
}

function main() {
    let slides = [new TestSlide(), new TestSlide(), new TestSlide()];
    slides[0].question = "Starting Test";
    slides[slides.length - 1].question = "Ending Test";
    // console.log("Making slide(s)...", ...slides.toString());
    slides.forEach(slide => {
        console.log("Starting slide...", ...slide.uid);
        slide.run();
    });

}

// main();
// console.log($.ua.os); 