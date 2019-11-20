class Animal {
    constructor() {
        this.result = [];
        this.xArray = [];
        this.yArray = [];
    }

    updateXYArray() {
        this.xArray = this.result.map(item => item[0]);
        this.yArray = this.result.map(item => item[1]);
    }

    hasX(index) {
        return this.xArray.indexOf(index) !== -1;
    }

    hasY(index) {
        return this.yArray.indexOf(index) !== -1;
    }

    pushResult(item) {
        this.result.push(item);
        this.updateXYArray();
    }

    popResult() {
        this.result.pop();
        this.updateXYArray();
    }

    getResult() {
        return [...this.result];
    }
}

function averageArray(arr) {
    arr.sort();
    let leftArr = [];
    let rightArr = [];
    let result = [];
    const harfLength = arr.length / 2;

    arr.forEach((item, index) => index < harfLength ? leftArr.push(item) : rightArr.push(item));

    const leftSum = leftArr.reduce((pre, next) => pre + next);
    const rightSum = rightArr.reduce((pre, next) => pre + next);
    const diff = (rightSum - leftSum) / 2;
    let minDiff = diff;

    const twoWeiArray = rightArr.map(rightItem => leftArr.map(leftItem => rightItem - leftItem));

    findSwapArray(twoWeiArray, new Animal(), 0, 0);

    function findSwapArray(diffs, animal, level, upDiffValue) {
        const length = diffs.length;
        if (level === parseInt(length / 2)) {
            return;
        }

        for(let i = 0; i < length; i++) {
            if (animal.hasY(i)) continue;

            for(let j = 0; j < length; j++) {
                if (animal.hasX(j)) continue;

                animal.pushResult([j, i]);
                const diffValue = upDiffValue + diffs[i][j];

                if (Math.abs(diffValue - diff) < minDiff) {
                    minDiff = Math.abs(diffValue - diff);
                    result = animal.getResult();

                    if (minDiff === 0) {
                        return;
                    }
                }

                findSwapArray(diffs, animal, level + 1, diffValue);
                
                animal.popResult();
            }
        }
    }

    result.forEach(([left, right]) => {
        let tmp = leftArr[left];
        leftArr[left] = rightArr[right];
        rightArr[right] = tmp;
    });

    return [leftArr, rightArr]
}

console.log(averageArray([8, 7, 6, 5, 4, 3, 2, 1]))
