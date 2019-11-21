class SwapItem {
    private result: Array<[number, number]>;
    private xArray: Array<number>;
    private yArray: Array<number>;

    constructor() {
        this.result = [];
        this.xArray = [];
        this.yArray = [];
    }

    updateXYArray(): void {
        this.xArray = this.result.map(item => item[0]);
        this.yArray = this.result.map(item => item[1]);
    }

    hasX(index: number): boolean {
        return this.xArray.indexOf(index) !== -1;
    }

    hasY(index: number): boolean {
        return this.yArray.indexOf(index) !== -1;
    }

    pushResult(item: [number, number]): void {
        this.result.push(item);
        this.updateXYArray();
    }

    popResult(): void {
        this.result.pop();
        this.updateXYArray();
    }

    getResult(): Array<[number, number]> {
        return [...this.result];
    }
}

function averageArray(arr: Array<number>): [Array<number>, Array<number>] {
    arr.sort();
    let leftArr: number[] = [];
    let rightArr: number[] = [];
    let result: Array<[number, number]> = [];
    const harfLength: number = arr.length / 2;

    arr.forEach((item, index) => index < harfLength ? leftArr.push(item) : rightArr.push(item));

    const leftSum: number = leftArr.reduce((pre, next) => pre + next);
    const rightSum: number = rightArr.reduce((pre, next) => pre + next);
    const diff: number = (rightSum - leftSum) / 2;
    let minDiff: number = diff;

    const twoWeiArray: Array<Array<number>> = rightArr.map(rightItem => leftArr.map(leftItem => rightItem - leftItem));

    findSwapArray(twoWeiArray, new SwapItem(), 0, 0);

    function findSwapArray(diffs: Array<Array<number>>, swapItem: SwapItem, level: number, upDiffValue: number) {
        const length: number = diffs.length;
        if (level === parseInt(length / 2 as any)) {
            return;
        }

        for(let i: number = 0; i < length; i++) {
            if (swapItem.hasY(i)) continue;

            for(let j: number = 0; j < length; j++) {
                if (swapItem.hasX(j)) continue;

                swapItem.pushResult([j, i]);
                const diffValue: number = upDiffValue + diffs[i][j];

                if (Math.abs(diffValue - diff) < minDiff) {
                    minDiff = Math.abs(diffValue - diff);
                    result = swapItem.getResult();

                    if (minDiff === 0) {
                        return;
                    }
                }

                findSwapArray(diffs, swapItem, level + 1, diffValue);
                
                swapItem.popResult();
            }
        }
    }

    result.forEach(([left, right]) => {
        let tmp: any = leftArr[left];
        leftArr[left] = rightArr[right];
        rightArr[right] = tmp;
    });

    return [leftArr, rightArr]
}

console.log(averageArray([8, 7, 6, 5, 4, 3, 2, 1]))
