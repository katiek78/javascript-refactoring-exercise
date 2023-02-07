export function processTransactions(transactions) {

    if (!transactions) throw new Error("Undefined collection of transactions");
    
    let transactionCount = {};

    for (const transaction of transactions) {
        transactionCount[transaction] ? transactionCount[transaction] += 1 : transactionCount[transaction] = 1;
    }
    
    const transactionKeys = sortByAmountThenName(transactionCount);
 
    return transactionKeys.map(key => `${key} ${transactionCount[key]}`)
}

function sortByAmountThenName(transactionCount) {
    return Object.keys(transactionCount).sort((itemOne, itemTwo) => transactionCount[itemTwo] - transactionCount[itemOne] || (itemOne > itemTwo ? 1 : -1));
}