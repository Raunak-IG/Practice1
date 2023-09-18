function union(a, b) {
    let unionSet = new Set(a);
    for (let i of b) {
        unionSet.add(i);
    }
    return unionSet
}

function intersection(setA, setB) {
    let intersectionSet = new Set();

    for (let i of setB) {
        if (setA.has(i)) {
            intersectionSet.add(i);
        }
    }
    return intersectionSet;
}

function difference(setA, setB) {
    let differenceSet = new Set(setA)
    for (let i of setB) {
        differenceSet.delete(i)
    }
    return differenceSet
}

function subset(setA, setB) {
    for (let i of setB) {
        if (!setA.has(i)) {
            return false
        }
    }
    return true
}

const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);

const result1 = union(setA, setB);
console.log(result1);

const result2 = intersection(setA, setB);
console.log(result2);

const result3 = difference(setA, setB);
console.log(result3);

const result4 = subset(setA, setB);
console.log(result4);