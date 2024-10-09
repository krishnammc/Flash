

export const getAuthTokenFromSession = () => {
    const authToken = sessionStorage.getItem('auth_token');
    return authToken ?? "";
}


const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) != null;
};

export const CheckConfirmPassword = (password: string, confirmPassword: string) => {
  if (password === confirmPassword) {
      return true;
  }
  return false;
};

export const getNumberFromString = (text: string, isInt: boolean = false) => {
    var regex = /[+-]?\d+(\.\d+)?/g;
    let value: RegExpMatchArray | null | number = text.match(regex);
    if(value && value.length > 0) { 
        let temp = '';
        value.forEach(e => temp += e);
        if(isInt) return parseInt(temp);
        return parseFloat(temp);
    } else {
        return null;
    }
}

export const getNumberStringFromString = (text: string) => {
    var regex = /[+-]?\d+(\.\d+)?/g;
    let value: RegExpMatchArray | null | string = text.match(regex);
    if(value && value.length > 0) { 
        let temp = '';
        value.forEach(e => temp += e);
        return temp;
    } else {
        return '';
    }
}

export const removeTrailingZeros = (number: number | string) =>  {
    return number.toString().replace(/\.00$/,'');;
}

// checks if the string contians special characters other than space, & and ,(comma)
const isContainsSpecialCharactersUsingASCIIValue = (value: string) => {
    const charCodeForAtSymbol = '@'.charCodeAt(0);
    const charCodeForAndSymbol = '&'.charCodeAt(0);
    const charCodeForComma = ','.charCodeAt(0);
    const charCodeForSpace = ' '.charCodeAt(0);
    const charCodeForSlash = '/'.charCodeAt(0);
    const charCodeForDot = '.'.charCodeAt(0);
    const charCodeForaToz = [65, 90];
    const charCodeForAToZ = [97, 122];
    const charCodeFor0To9 = [48, 57];
    const result = { isContain: false, modified: value }
    let newModified = result.modified;
    const tobeRepalcedText = 'TO_BE_REMOVED';
    for(let i = 0; i < result.modified.length; i++) { 
        const char = result.modified[i];
        const charCode = char.charCodeAt(0);
        const isAlphabet = (charCode >= charCodeForaToz[0] && charCode <= charCodeForaToz[1]) || (charCode >= charCodeForAToZ[0] && charCode <= charCodeForAToZ[1])
        const isNumber = (charCode >= charCodeFor0To9[0] && charCode <= charCodeFor0To9[1])
        const isExcludedSpecialCharacters = [charCodeForAtSymbol, charCodeForAndSymbol,charCodeForDot, charCodeForComma, charCodeForSpace, charCodeForSlash].includes(charCode)
        if(isAlphabet == false && isNumber == false && isExcludedSpecialCharacters == false) {
            result.isContain = true;
            const countOccurrences = (inputString: string, targetWord: string) => (inputString.match(new RegExp(targetWord, 'gi')) || []).length;
            const occuranceCount = countOccurrences(newModified, tobeRepalcedText);
            newModified = newModified.includes(tobeRepalcedText) ? 
                newModified.substring(0, i + (occuranceCount * tobeRepalcedText.length) - occuranceCount) + tobeRepalcedText + newModified.substring(i + (occuranceCount * tobeRepalcedText.length) - occuranceCount + 1 ) : 
                newModified.substring(0, i) + tobeRepalcedText + newModified.substring(i + 1);
        }
    }
    result.modified =  newModified.replaceAll(tobeRepalcedText, '');
    return result;
}

// checks if the string contians special characters other than space, & and ,(comma)

export const isContainsSpecialCharacters = (value: string) => {
    const regEx = /[`!#$%^*()_+\-=\[\]{};':"“”\\|<>?~]|[\u20AC\u20A6\u20B9\u20A8\$\£\¥\₹]/;
    const result = { isContain: regEx.test(value), modified: value.replaceAll(new RegExp(regEx, 'g'), '') };
    const resultUsingASCII = isContainsSpecialCharactersUsingASCIIValue(result.modified);
    result.modified = resultUsingASCII.modified;
    result.isContain = result.isContain || resultUsingASCII.isContain;
    return result;
}

export const isContainsSpecialCharactersIncludingAtAndAmpersand = (value: string) => {
    const regEx = /[`!#$%^&*()_+\-=\[\]{};':"“”\\|.<>?~@]|[\u20AC\u20A6\u20B9\u20A8\$\£\¥\₹]/;
    const result = { isContain: regEx.test(value), modified: value.replaceAll(new RegExp(regEx, 'g'), '') };
    const resultUsingASCII = isContainsSpecialCharactersUsingASCIIValue(result.modified);
    result.modified = resultUsingASCII.modified;
    result.isContain = result.isContain || resultUsingASCII.isContain;
    return result;
}


export const isContainsSpecialOrNumber = (value: string) => {
    const charCodeForaToz = [65, 90];
    const charCodeForAToZ = [97, 122];
    const result = { isContain: false, modified: value }
    let newModified = result.modified;
    const tobeRepalcedText = 'TO_BE_REMOVED';
    for(let i = 0; i < result.modified.length; i++) { 
        const char = result.modified[i];
        const charCode = char.charCodeAt(0);
        const isAlphabet = (charCode >= charCodeForaToz[0] && charCode <= charCodeForaToz[1]) || (charCode >= charCodeForAToZ[0] && charCode <= charCodeForAToZ[1])
        if(isAlphabet == false) {
            result.isContain = true;
            const countOccurrences = (inputString: string, targetWord: string) => (inputString.match(new RegExp(targetWord, 'gi')) || []).length;
            const occuranceCount = countOccurrences(newModified, tobeRepalcedText);
            newModified = newModified.includes(tobeRepalcedText) ? 
                newModified.substring(0, i + (occuranceCount * tobeRepalcedText.length) - occuranceCount) + tobeRepalcedText + newModified.substring(i + (occuranceCount * tobeRepalcedText.length) - occuranceCount + 1 ) : 
                newModified.substring(0, i) + tobeRepalcedText + newModified.substring(i + 1);
        }
    }
    result.modified =  newModified.replaceAll(tobeRepalcedText, '');
    return result;
}
  
export const isContainsAlphabets = (value: string) => {
    const regEx = /[a-zA-Z]/;
    return { isContain: regEx.test(value), modified: value.replaceAll(new RegExp(regEx, 'g'), '') }
}

export const isContainsNumericCharacters = (value: string) => {
    const regEx = /[`0-9]/;
    return{ isContain: regEx.test(value), modified: value.replaceAll(new RegExp(regEx, 'g'), '') };
}

export const convertToPriceFormat = (value: number | string | null | undefined, acceptZero: boolean = false, removeTrailingZero: boolean = false) => {
    const numberValue = Number(value);
    const regex = /\d(?=(\d{3})+\.)/g;
    if(acceptZero && (numberValue == 0 || value == undefined)) return removeTrailingZero ? '0' : '0.00';
    return numberValue == 0 || value == undefined ? '' : removeTrailingZero ? numberValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : numberValue.toFixed(2).replace(regex, '$&,');
}

// export const getRecentYears = (count: number = 3, ignoreCurrentYear: boolean = false) => {
//     const currentYear = new Date().getFullYear();
//     const recentYears = [...Array(count).keys()].reverse().map(e => ignoreCurrentYear ? currentYear - e - 1 : currentYear - e).map(String);
//     return recentYears;
// }

export const convertDateToString = (date: Date) => {
    return formatDateToYyyyMmDd(date);
}

export const convertStringToDate = (dateString: string) => {
    if(dateString == null || dateString == '') return ;
    // Parse the input date string into a Date object
    const parts = dateString.split("-");
    const day = parseInt(parts[2], 10);
    const month = parseInt(parts[1], 10) - 1; // Month is zero-based
    const year = parseInt(parts[0], 10);
  
    const givenDate = new Date(year, month, day);
    return givenDate;
}

export const formatDateToYyyyMmDd = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
}

export const getDateAfter365Days = (fromDate: string) => {
    if(fromDate == null || fromDate == '') return '';
    // Parse the input date string into a Date object
    const parts = fromDate.split("-");
    const day = parseInt(parts[2], 10);
    const month = parseInt(parts[1], 10) - 1; // Month is zero-based
    const year = parseInt(parts[0], 10);
  
    const givenDate = new Date(year, month, day);
  
    // Add 365 days to the given date
    givenDate.setDate(givenDate.getDate() + 365);
  
    // Return the date after 365 days
    return formatDateToYyyyMmDd(givenDate);
}


export type FieldValidationType = 'TEXT_ONLY'|'TEXT_WITH_BUTTON' | 'TEXT_WITH_ALLOWED_SPECIAL' | 'EMAIL' | 'NUMBER' | 'NUMBER_WITH_LIMIT' | 'PRICE' | 'PRICE_WITH_LIMIT' | 'NONE' | 'PASSWORD' | 'CONFIRM_PASSWORD' | null

export const formatValidate = (input: any): FieldValidationType => {
    const validation = ['TEXT_ONLY' , 'TEXT_WITH_ALLOWED_SPECIAL','TEXT_WITH_BUTTON' , 'EMAIL' , 'NUMBER' , 'NUMBER_WITH_LIMIT' , 'PRICE' , 'PRICE_WITH_LIMIT', 'CONFIRM_PASSWORD' , 'NONE' , null]

    if (validation.includes(input)) return input

    return 'NONE';
}

export const validateField = (value: string, field: FieldValidationType, second_value: string = '', limit: string = '0') => {
    const minMax = limit.split('-');
    const isMinMax = minMax.length > 1;
    const min = isMinMax? Number(minMax[0]) : 0;
    const max = isMinMax? Number(minMax[1]) : Number(minMax[0]);
    switch (field) {
        case 'TEXT_ONLY': {
            return {
                isEmpty: value == '',
                isContainsFormatError: value.length > 200 || isContainsSpecialOrNumber(value.replaceAll(" ","")).isContain || isContainsNumericCharacters(value).isContain
            }
        }
        case 'TEXT_WITH_BUTTON': {
          return {
              isEmpty: value == '',
              isContainsFormatError: value.length > 200 || isContainsSpecialOrNumber(value.replaceAll(" ","")).isContain || isContainsNumericCharacters(value).isContain
          }
        }
        case 'TEXT_WITH_ALLOWED_SPECIAL': {
            return {
                isEmpty: value == '',
                isContainsFormatError: value.length > 200 || isContainsSpecialCharacters(value).isContain || isContainsNumericCharacters(value).isContain
            }
        }
        case 'EMAIL': {
            return {
                isEmpty: value == '',
                isContainsFormatError: value.length > 200 || validateEmail(value) == false
            }
        }
        case 'PRICE':
        case 'NUMBER': {
            return {
                isEmpty: Number(value) < 1,
                isContainsFormatError: isContainsSpecialCharacters(value).isContain || isContainsAlphabets(value).isContain
            }
        }
            
        case 'NUMBER_WITH_LIMIT': {
           
            if (isMinMax) {
                console.log(max,min,isMinMax ,"minmax")
                return {
                    isEmpty: Number(value) < 1,
                    isContainsFormatError: Number(value) < min || Number(value) > max || isContainsSpecialCharacters(value).isContain || isContainsAlphabets(value).isContain
                }
            }
            return {
                isEmpty: Number(value) < 1,
                isContainsFormatError: value.length > max || isContainsSpecialCharacters(value).isContain || isContainsAlphabets(value).isContain
            }
        }
            
            
        case 'PRICE_WITH_LIMIT': {
          
            if (isMinMax) {
                
                return {
                    isEmpty: Number(value) < 1,
                    isContainsFormatError: Number(value) < min || Number(value) > max || isContainsSpecialCharacters(value).isContain || isContainsAlphabets(value).isContain
                }
            }
            return {
                isEmpty: Number(value) < 1,
                isContainsFormatError: Number(value) > max || isContainsSpecialCharacters(value).isContain || isContainsAlphabets(value).isContain
            }
        }
            
        case 'PASSWORD': {
            return {
                isEmpty: value == '',
                isContainsFormatError: value.length < 8 || value.length > 20 || !isContainsAlphabets(value).isContain || !isContainsNumericCharacters(value).isContain || !isContainsSpecialCharactersIncludingAtAndAmpersand(value).isContain
            }
        }
        case 'CONFIRM_PASSWORD': {
          return {
              isEmpty: value == '',
              isContainsFormatError: value !== second_value,
          }
      }

            
        case 'NONE': { 
            return {
                isEmpty: value == '',
                isContainsFormatError: value.length > 200
            }
        }
            
        case null : {
            return {
                isEmpty: value == '',
                isContainsFormatError: value.length > 200
            }
        }
    }
}

