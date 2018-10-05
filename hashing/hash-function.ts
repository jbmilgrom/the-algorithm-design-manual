
const ENGLISH_CHARACTERS = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const NUM_CHARACTERS_IN_ENGLISH_ALPHABET = ENGLISH_CHARACTERS.length;

/**
 * Turn a string into a _unique_ number
 * 
 * 1. Covert each character to a unique number based off the ENGLISH_CHARACTERS dictionary above
 * 2. Change basis of number given the number of enlish character
 *   
 * @param string s
 * @returns number
 */
const hash = (s: string): number => {
  const chars = s.split('');
  
  let hashed: number = 0;
  let orderOfMagnitude: number = 1;
  // right to left traversal
  for (let i = chars.length - 1; i >= 0; i--) {
    hashed += charToNumber(chars[i]) * orderOfMagnitude;
    orderOfMagnitude += orderOfMagnitude * NUM_CHARACTERS_IN_ENGLISH_ALPHABET;
  }

  return hashed;
};

const charToNumber = (char: string): number => ENGLISH_CHARACTERS.indexOf(char);