export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    // stuctural check
    if (a === null && b === null) {
        return true;
    }
    // structural check
    if (a === null || b === null) {
        return false;
    }
    if (a?.value !== b?.value) {
        return false;
    }
    return compare(a?.left, b?.left) && compare(a?.right, b?.right);
}
