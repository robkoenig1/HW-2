/**
 * Complete the following problems using loops and arrays.
 */

/**
 * Given an array of numbers, return their sum. If the array is empty, return 0.
 * @param nums An array of numbers
 * @returns The sum of all numbers in the array
 */
export function summate(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    let sum: number = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return sum;
}

/**
 * Given an array of numbers, return their average. If the array is empty, return 0.
 * @param nums An array of numbers
 * @returns The average of all numbers in the array
 */
export function average(nums: number[]): number {
    let denominator: number = nums.length;
    let numerator: number = summate(nums);
    if (numerator === 0 || denominator === 0) {
        return 0;
    }
    return numerator / denominator;
}

/**
 * Given an array of numbers, divide each number by 2.
 * @param nums An array of numbers
 * @returns The array of numbers divided by 2
 */
export function halve(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] / 2;
    }
    return nums;
}

/**
 * Given an array of numbers, return only the positive numbers.
 * @param nums An array of numbers
 * @returns An array of only positive numbers
 */
export function onlyPositives(nums: number[]): number[] {
    let pos: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            pos.push(nums[i]);
        }
    }
    return pos;
}

/**
 * Given an array of numbers, return the average of only the positive numbers.
 * @param nums An array of numbers
 * @returns The average of only the positive numbers
 */
export function averagePositives(nums: number[]): number {
    let pos: number[] = onlyPositives(nums);
    return average(pos);
}

/**
 * Given an array of strings, return only the strings that end with 's'.
 * @param words An array of strings
 * @returns An array of only strings that end with 's'
 */
export function getPlurals(words: string[]): string[] {
    let plurals: string[] = [];
    for (let i = 0; i < words.length; i++) {
        let word: string = words[i];
        if (word[word.length - 1] === "s") {
            plurals.push(words[i]);
        }
    }
    return plurals;
}

/**
 * Given an array of strings, return the first string that ends with 's'.
 * If no string ends with 's', return an empty string.
 * @param words An array of strings
 * @returns The first string that ends with 's'
 */
export function firstPlural(words: string[]): string {
    let plurals: string[] = getPlurals(words);
    if (plurals.length > 0) {
        return plurals[0];
    } else {
        return "";
    }
}

/**
 * Given an array of numbers and a threshold number, increase all values in the array by 1 if they are less than the threshold.
 * @param nums An array of numbers
 * @param threshold A threshold number
 * @returns The array of numbers with values less than the threshold increased by 1
 */
export function growIfSmall(nums: number[], threshold: number): number[] {
    let result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        let temp1: number = nums[i];
        if (temp1 < threshold) {
            result.push(temp1 + 1);
        } else {
            result.push(temp1);
        }
    }
    return result;
}

/**
 * Given an array of strings, return the longest string.
 * If the array is empty, return an empty string.
 * If there is a tie, return the first longest string.
 * @param words An array of strings
 * @returns The longest string
 */
export function longestString(words: string[]): string {
    if (words.length === 0) {
        return "";
    }
    let longest: string = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

/**
 * Given an array of strings, return the longest string that ends with 's'.
 * If no string ends with 's', return an empty string.
 * If there is a tie, return the first longest plural string.
 * @param words An array of strings
 * @returns The longest string that ends with 's'
 */
export function longestPlural(words: string[]): string {
    let plurals: string[] = getPlurals(words);
    return longestString(plurals);
}

/**
 * Given two arrays of numbers, add the numbers at each index together and return a new array of the sums.
 * If the arrays are different lengths, use the longer array's length and use zero for the missing values
 * in the smaller array.
 * @param nums1 An array of numbers
 * @param nums2 An array of numbers
 * @returns An array of the sums of the numbers at each index
 */
export function addPairs(nums1: number[], nums2: number[]): number[] {
    let sums: number[] = [];
    if (nums1.length === nums2.length) {
        for (let i = 0; i < nums1.length; i++) {
            let sum: number = nums1[i] + nums2[i];
            sums.push(sum);
        }
    } else {
        if (nums1.length > nums2.length) {
            for (let i = 0; i < nums1.length; i++) {
                if (!nums2[i]) {
                    let sum: number = nums1[i];
                    sums.push(sum);
                } else {
                    let sum: number = nums1[i] + nums2[i];
                    sums.push(sum);
                }
            }
        } else {
            for (let i = 0; i < nums2.length; i++) {
                if (!nums1[i]) {
                    let sum: number = nums2[i];
                    sums.push(sum);
                } else {
                    let sum: number = nums1[i] + nums2[i];
                    sums.push(sum);
                }
            }
        }
    }
    return sums;
}
