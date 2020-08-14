class QuickSort {
    constructor(array) {
        this.array = array;
    }

    sort() {
        this.quickSort(this.array, 0, this.array.length - 1);
    }

    async quickSort(array, low, high) {
        if (low < high) {
            let pivote = JSON.parse(JSON.stringify(array[high]));
            let i = low;
            let j = high;

            for (let l = low; l <= high; l++) {
                document.getElementById(array[l].id).style.backgroundColor = 'yellow';
            }
            document.getElementById(pivote.id).style.backgroundColor = 'red';

            while (i < j) {
                while (array[i].value < pivote.value && i < high) i++;
                while (array[j].value > pivote.value && j > low) j--;
                if (i <= j) {
                    await this.swap(i, j);
                    i++;
                    j--;
                }
            }

            for (let l = low; l <= high; l++) {
                document.getElementById(array[l].id).style.backgroundColor = 'white';
            }

            if (low < j) {
                await this.quickSort(array, low, j);
            }
            if (i < high) {
                await this.quickSort(array, i, high);
            }
        }
    }

    async swap(firstElement, secondElement) {
        await this.sleep(50);
        let aux = JSON.parse(JSON.stringify(this.array[firstElement]));
        let aux2 = JSON.parse(JSON.stringify(this.array[secondElement]));

        //document.getElementById(this.array[firstElement].id).style.transitionDuration = '1s';
        document.getElementById(this.array[firstElement].id).style.marginLeft = aux2.positionX + 'px';
        //document.getElementById(this.array[secondElement].id).style.transitionDuration = '1s';
        document.getElementById(this.array[secondElement].id).style.marginLeft = aux.positionX + 'px';

        this.array[firstElement] = JSON.parse(JSON.stringify(aux2));
        this.array[firstElement].positionX = aux.positionX;
        this.array[secondElement] = JSON.parse(JSON.stringify(aux));
        this.array[secondElement].positionX = aux2.positionX;
    }

    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
}