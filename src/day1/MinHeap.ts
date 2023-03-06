export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const out = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return out;
        }
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const parent_index = this.parent(idx);
        const parent_value = this.data[parent_index];
        const value = this.data[idx];
        if (parent_value > value) {
            // swap to the parent_index
            this.data[idx] = parent_value;
            this.data[parent_index] = value;
            this.heapifyUp(parent_index);
        }
    }
    private heapifyDown(idx: number): void {
        const left_index = this.leftChild(idx);
        const right_index = this.rightChild(idx);

        if (idx >= this.length || left_index >= this.length) {
            return;
        }
        const left_value = this.data[left_index];
        const right_value = this.data[right_index];
        const value = this.data[idx];
        if (left_value > right_value && value > right_value) {
            this.data[right_index] = value;
            this.data[idx] = right_value;
            this.heapifyDown(right_index);
        } else if (right_value > left_value && value > left_value) {
            this.data[left_index] = value;
            this.data[idx] = left_value;
            this.heapifyDown(left_index);
        }
    }
    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
    private leftChild(idx: number): number {
        return 2 * idx + 1;
    }
    private rightChild(idx: number): number {
        return 2 * idx + 2;
    }
}
