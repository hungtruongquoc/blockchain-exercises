/**
 * Import crypto-js/SHA256 library
 */
import {SHA256} from 'crypto-js';


/**
 * Class with a constructor for block
 */
class Block {

    id: number;
    nonce: number;
    body: any;
    hash: string;

    constructor(data: string) {
        this.id = 0;
        this.nonce = 144444;
        this.body = data;
        this.hash = "";
    }

    /**
     * Step 1. Implement `generateHash()`
     * method that return the `self` block with the hash.
     *
     * Create a Promise that resolve with `self` after you create
     * the hash of the object and assigned to the hash property `self.hash = ...`
     */
    //
    generateHash() {
        // Use this to create a temporary reference of the class object
        let self = this;
        //Implement your code here
        return new Promise((resolve, reject) => {
            try {
                // Creating a hash of the block's data.
                const hashValue = SHA256(JSON.stringify(self.body)).toString();
                self.hash = hashValue;
                resolve(self);
            } catch (error) {
                reject(error);
            }
        });

    }
}

// Exporting the class Block to be reuse in other files
export { Block };
