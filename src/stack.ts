export class Stack {
    items: any[];
    index: number;

    constructor (){
        this.items = [];
        this.index = 0;
    }

    push (val: number | string) {
        this.items[this.index] = val;
        this.index++;
        return this.index -1; // O(1)
    }

    pop () {
        if(this.index == 0) return undefined;
        const popped = this.items[this.index-1];
        this.index -= 1;
        return popped; // O(1)
    }

    length () {
        return this.index; // O(1)
    }

    peek () {
        return this.items[this.index-1]; // O(1)
    }

    isEmpty () {
        return (this.index==0) ? true : false; // O(1)
    }

}

