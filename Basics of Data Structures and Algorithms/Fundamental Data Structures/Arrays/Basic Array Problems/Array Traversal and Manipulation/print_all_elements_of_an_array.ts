function main(array: number[], length: number): void {
    for (let i = 0; i < length; i++) {
        console.log(array[i]);
    }
}

const array: number[] = [1, 2, 3, 4, 5];
main(array, array.length);