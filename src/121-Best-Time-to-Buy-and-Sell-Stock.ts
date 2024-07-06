function maxProfit(prices: number[]): number {
    let profit: number = 0
    let i: number = 1;
    let low = prices[0];

    while (i < prices.length) {
        const change = prices[i] - low
        if (change > profit) {
            profit = change;
        }

        if (prices[i] < low) {
            low = prices[i];
        }

        i++;
    }

    return profit;
};