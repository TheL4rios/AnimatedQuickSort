document.addEventListener('DOMContentLoaded', function() {
    array = generate();
});

let array = [];

generate = function() {
    let g = new Generator(50);
    let array = g.generate();
    new Renderer(array).show();

    return array;
}

document.getElementById('generate-others').addEventListener('click', function() {
    document.getElementById('container').innerHTML = '';
    array = generate();
});

document.getElementById('sort').addEventListener('click', function() {
    new QuickSort(array).sort();
});