export function processTransactions(transActions) {

    if (!transActions) {
        throw new Error("Undefined collection of transactions")
    }

    let txCount = {}

    for (const transaction of transActions) {
        txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1;
    }

    txCount = sortByAmountThenName(txCount);

    // Place them back in array for returning    
    return Object.keys(txCount).map(key => `${key} ${txCount[key]}`)
}

function sortByAmountThenName(txCount) {
    const sortedKeys = Object.keys(txCount).sort((itemOne, itemTwo) => txCount[itemTwo] - txCount[itemOne] || (itemOne > itemTwo ? 1 : -1));
    const sortedResults = {};
    for (const objectKey of sortedKeys) {
        sortedResults[objectKey] = txCount[objectKey];
    }
    return sortedResults;
}