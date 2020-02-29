module.exports = function reverse(n) {

    if (n > 0) {

        let x = n % 100;
        let hundred = (n - x) / 100;
        let one = x % 10;
        let ten = (x - one) / 10;
        let rezult = one * 100 + ten * 10 + hundred;
        return rezult;


    } else if (n < 0) {

        let x = Math.abs(n) % 100;
        let hundred = (Math.abs(n) - x) / 100;
        let one = x % 10;
        let ten = (x - one) / 10;
        let rezult = one * 100 + ten * 10 + hundred;
        return rezult;
    }
}
