function makeDTO(id) {
    // creates a basic data structure, with empty or default values or from parameters
    return {
        id: id,
        userInput: [],
        validate: false,
        …
    };
}
var caller = {
    callWorker: function(obj) {
        // do something
    }
};

var dto = makeDTO(14);
caller.callWorker(dto);
var asString = JSON.stringify(dto);