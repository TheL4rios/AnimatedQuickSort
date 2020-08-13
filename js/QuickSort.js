class QuickSort {
    constructor(array) {
        this.array = array;
    }

    sort = function() {
        this.quickSort(this.array, 0, this.array.length - 1);
        console.log(this.array);
    }

    quickSort = function(array, low, high) {
        if (low < high) {
            let p = this.partition(array, low, high);
            this.quickSort(array, low, p - 1);
            this.quickSort(array, p + 1, high);
        }
    }

    partition = function(array, low, high) {
        document.getElementById(array[high].id).style.backgroundColor = 'red';
        let pivote = array[high].value;
        let i = low;

        for (let j = low; j < high; j++) {
            if (array[j].value < pivote) {
                this.swap(j, i);
                i += 1;
            }
        }

        document.getElementById(array[high].id).style.backgroundColor = 'blue';

        this.swap(i, high);
        return i;
    }

    swap = async function(firstElement, secondElement) {
        let temp = this.array[firstElement];
        
        document.getElementById(this.array[firstElement].id).style.transitionDuration = '1s';
        document.getElementById(this.array[firstElement].id).style.marginLeft = this.array[secondElement].positionX + 'px';

        await this.sleep(1000);

        this.array[firstElement] = this.array[secondElement];

        document.getElementById(this.array[secondElement].id).style.transitionDuration = '1s';
        document.getElementById(this.array[secondElement].id).style.marginLeft = temp.positionX + 'px';

        await this.sleep(1000);

        this.array[secondElement] = temp;
    }

    sleep = function (ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}