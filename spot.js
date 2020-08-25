(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('啊，我'))
        .then(() => engine.shake())
        .then(() => engine.toText('折腾了一晚上'))
        .then(() => engine.shake())
        .then(() => engine.toText('还没弄好'))
        .then(() => engine.shake())
        .then(() => engine.toText('我太菜了'))
        .then(() => engine.shake())
        .then(() => engine.toText('_(:з」∠)_'))
        .then(() => engine.shake())
        .then(() => engine.toText('anyway'))
        .then(() => engine.shake())
        .then(() => engine.toText('生活还是要'))
        .then(() => engine.shake())
        .then(() => engine.toText('move on'))
        .then(() => engine.shake())
        .then(() => engine.toText('喵~'))
        .then(() => engine.shake())
        .then(() => engine.toText('七夕快乐❤'))
        .then(() => engine.shake())
        // .then(() => engine.toText('❤❤❤'))
        // .then(() => engine.shake())
        // .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
    start()
})();
