/*
3) Задание состоит в том, чтобы рассчитать сдачу.
У вас есть цена какого-либо товара, продукта. Неважно. Вы по сути просто на ввод даете Цену, И на ввод у вас есть Купюра, которую вы получили за этот продукт.
В зависимости от имеющихся купюр Вам нужно рассчитать самую оптимальную сдачу, в которой будут собраны купюры для самой оптимальной сдачи.
Например, [1, 2, 5, 10, 20, 50, 100], статический.
У вас есть массив существующих купюр на кассе, где обязательно есть купюры номиналом 1, остальные опционально.
 */
const bills = [1, 2, 5, 10, 20, 50, 100];

function giveChange(price, amount) {
    const calcChange = amount - price;
    const cache = [];
    const availableBills = bills.reduceRight((acc, next) => (acc.push(next), acc), []);

    function makeChange(value) {
        if (!value) {
            return [];
        }
        if (cache[value]) {
            return cache[value];
        }

        let min = [];
        let newMin;
        let newAmount;

        for (let i = 0; i < availableBills.length; i++) {
            const bill = availableBills[i];
            newAmount = value - bill;

            if (newAmount >= 0) {
                newMin = makeChange(newAmount);
            }
            if (newAmount >= 0 && (newMin.length < newMin.length - 1 || !min.length) && (newMin.length || !newAmount)) {
                min = [bill].concat(newMin);
            }
        }
        return cache[value] = min;
    };
    return makeChange(calcChange);
}