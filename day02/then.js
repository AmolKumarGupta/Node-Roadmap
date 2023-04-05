const { EventEmitter } = require('events');

function just(cb) {
    let observer = new EventEmitter();
    let i = 0;
    let timer = setInterval(() => {
        i++;
        if (i == 3) {
            cb();
            clearInterval(timer);
        }else {
            observer.emit('click');
        }
    }, 1000);
    return observer;
}

just(() => console.log('ended!')).on('click', () => console.log('clicked!'));
