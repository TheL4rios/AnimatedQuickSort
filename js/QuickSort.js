class QuickSort {
    constructor(array) {
        this.array = array;
    }

    sort = function() {
        //this.quickSort(this.array, 0, this.array.length - 1);
        this.swap(0, 1);
        this.swap(1, 2);
        //console.log(this.array);
    }

    quickSort = function(array, low, high) {
        let pivote = array[high];
        let i = low;
        let j = high;

        while (i < j) {
            while (array[i].value <= pivote.value && i < j) i++;
            while (array[j].value > pivote.value) j--;
            if (i < j) {
                this.swap(i, j);
            }
        }

        document.getElementById(this.array[j].id).style.transitionDuration = '1s';
        document.getElementById(this.array[j].id).style.marginLeft = this.array[low].positionX + 'px';
        array[low] = array[j];
        array[j] = pivote;
        document.getElementById(pivote.id).style.transitionDuration = '1s';
        document.getElementById(pivote.id).style.marginLeft = this.array[j].positionX + 'px';

        if (low < j - 1) {
            this.quickSort(array, low, j - 1);
        }
        if (j + 1 < high) {
            this.quickSort(array, j + 1, high);
        }
    }

    swap = function(firstElement, secondElement) {
        let aux = JSON.parse(JSON.stringify(this.array[firstElement]));
        let aux2 = JSON.parse(JSON.stringify(this.array[secondElement]));

        document.getElementById(this.array[firstElement].id).style.transitionDuration = '1s';
        document.getElementById(this.array[firstElement].id).style.marginLeft = aux2.positionX + 'px';
        document.getElementById(this.array[secondElement].id).style.transitionDuration = '1s';
        document.getElementById(this.array[secondElement].id).style.marginLeft = aux.positionX + 'px';

        this.array[firstElement] = JSON.parse(JSON.stringify(aux2));
        this.array[firstElement].positionX = aux.positionX;
        this.array[secondElement] = JSON.parse(JSON.stringify(aux));
        this.array[secondElement].positionX = aux2.positionX;
    }
}