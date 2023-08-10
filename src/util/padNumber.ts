const padNumber = (num: number) => {
    const paddedNumber = num.toString().padStart(2, "0");

    // const numAsString =  num.toString();
    // const paddedString = numAsString.padStart(2, '0')
    // const paddedNumber = parseInt(paddedString)
    return paddedNumber;
};

export default padNumber;
