const getGCD = (value1, value2) => (value2 > 0 ? getGCD(value2, value1 % value2) : value1);
const getLCM = (value1, value2, GCD) => (value1 * value2) / GCD;