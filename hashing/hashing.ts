/**
 * Step 1: Verify 'crypto-js' module is installed for your project.
 * After verifying it is installed, move on to Step 2. No code needs to be written here.
 */

/**
 * Step 2: Import from crypto-js module the SHA256 library.
 */
import {SHA256} from 'crypto-js';

/**
 * Variables: Do not change variable values.
 */
const data1 = "Blockchain Rock!";
const dataObject = {
    id: 1,
    body: "With Object Works too",
    time: new Date().getTime().toString().slice(0,-3)
};

/**
 * Step 3: Add code to the `generateHash` function.
 * Function that generates the SHA256 Hash
 * @param obj A string or object to be hashed
 * @returns The hash as a string
 */
function generateHash(obj: string | Record<string, unknown>): string {
    const stringifiedObj = typeof obj === 'string' ? obj : JSON.stringify(obj);
    return SHA256(stringifiedObj).toString();
}

console.log(`SHA256 Hash: ${generateHash(data1)}`);
console.log("************************************");
console.log(`SHA256 Hash: ${generateHash(dataObject)}`);

/**
 * Run your application using `ts-node` or by compiling it to JavaScript and then using `node`.
 */
