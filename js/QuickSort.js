class QuickSort {
    constructor(array) {
        this.array = array;
    }

    sort = function() {
        this.quickSort(this.array, 0, this.array.length - 1);
    }

    quickSort = function(array, low, high) {
        if (low < high) {
            let pivote = JSON.parse(JSON.stringify(array[high]));
            let i = low;
            let j = high;

            while (i < j) {
                while (array[i].value < pivote.value && i < high) i++;
                while (array[j].value > pivote.value && j > low) j--;
                if (i <= j) {
                    this.swap(i, j);
                    i++;
                    j--;
                }
            }

            if (low < j) {
                this.quickSort(array, low, j);
            }
            if (i < high) {
                this.quickSort(array, i, high);
            }
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