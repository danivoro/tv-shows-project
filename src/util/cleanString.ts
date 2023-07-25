const cleanString = (inputStr: string, stringToDelete: string): string => {
    return inputStr.replaceAll(stringToDelete, '');
};

export default cleanString;
