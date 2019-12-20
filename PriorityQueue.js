function PriorityQueue() {
    this.collection = [];
    this.printCollection = () => {
        console.log(this.collection);
    }

    this.enqueue = function (obj) {
        this.collection.push(obj);
        bubbleUp();
    }

    const bubbleUp = () => {
        let index = this.collection.length - 1;
        while (index > 0 && this.collection[index][1] < this.collection[index - 1][1]) {
            swap(this.collection, index, index - 1);
            index--;
        }
    }

    const swap = (arr, i, j) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    this.dequeue = function() {
        return this.collection.shift();
    }

    this.size = function() {
        return this.collection.length;
    }

    this.isEmpty = function() {
        return this.collection.length === 0;
    }
}

var pq = new PriorityQueue();
console.log("is list empty: " + pq.isEmpty());
pq.enqueue(['kitten', 2]);
pq.enqueue(['human', 1]);
pq.enqueue(['master', 1]);
console.log("is list empty: " + pq.isEmpty());
pq.printCollection();
pq.dequeue();
pq.printCollection();