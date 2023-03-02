export default function InsertionSort(arr: number[]) {
    let n = arr.length - 1;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j;
        for (j = i - 1; j >= 0; j--) {
            if (key < arr[j]) {
                arr[j + 1] = arr[j];
            }
        }
        arr[j + 1] = key;
    }
}
