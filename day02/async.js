function run() {
    setImmediate(function () {
        console.log("setImmediate");
    });
    process.nextTick(function () {
        console.log("next tick");
    });
}

run();