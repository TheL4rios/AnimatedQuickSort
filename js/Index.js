document.addEventListener('DOMContentLoaded', function() {
    generate();
});

generate = function() {
    let g = new Generator(100);
    let array = g.generate();

    let r = new Renderer(array);
    r.show();
}

document.getElementById('generate-others').addEventListener('click', function() {
    document.getElementById('container').innerHTML = '';
    generate();
});

document.getElementById('sort').addEventListener('click', function() {

});