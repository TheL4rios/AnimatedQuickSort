class Renderer {
    constructor(array) {
        this.array = array;
    }

    show() {
        let container = document.getElementById('container');

        this.array.forEach (function(line) {
            let div = document.createElement('div');
            div.className = 'line';
            div.id = line.id;
            div.style.height = line.height + 'px';
            div.style.marginLeft = line.positionX + 'px';
            // div.append(line.value);

            container.appendChild(div);
        })
    }
}