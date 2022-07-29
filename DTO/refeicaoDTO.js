var workers = {
    1: {/* std worker #1 */},
    …
};
// then the caller will look like this:
var caller = {
    callWorker: function(obj) {
        var workerName = obj.id; // just the id? Or something more complex
        if (workerName in workers)
            workers[workerName].execute(obj);
        else
            dynamicallyLoadWorker(workerName, function callbackWhenLoaded(worker) {
                workers[workerName] = worker;
                worker.execute(obj);
            });
    }
};