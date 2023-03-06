function bs(arr: number[], needle: number, lo: number, hi: number): boolean {
    let mid = lo + (hi - lo) / 2;
    if (lo > hi) {
        return false;
    }
    if (arr[mid] === needle) {
        return true;
    }
    if (arr[mid] < needle) {
        bs(arr, needle, mid + 1, hi);
    } else {
        bs(arr, needle, lo, mid - 1);
    }
    return false;
}
export default function bs_list(haystack: number[], needle: number): boolean {
    return bs(haystack, needle, 0, haystack.length - 1);
}
