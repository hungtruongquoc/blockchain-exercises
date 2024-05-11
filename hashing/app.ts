// Importing the Block class using ES Module syntax
import { Block } from './block';

/**
 * Creating a block object with specified data.
 */
const block = new Block("Test Block");

/**
 * Generating the block hash, then logging the hash and the block itself.
 */
block.generateHash().then((result: any) => {
    console.log(`Block Hash: ${result.hash}`);
    console.log(`Block: ${JSON.stringify(result)}`);
}).catch((error) => {
    console.log(error);
});

/**
 * Step 3: Run the application in Node.js
 *
 * Instructions to run:
 * - Change directory to the project folder in the terminal.
 * - Run the command `npx ts-node app.ts` to execute the TypeScript file directly.
 * - Alternatively, compile the TypeScript to JavaScript using `tsc app.ts` and then run `node app.js`.
 */
