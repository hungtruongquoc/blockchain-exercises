// Import the file system module with TypeScript type support
import * as fs from 'fs';

// Read file buffer
const imgReadBuffer: Buffer = fs.readFileSync('test-pattern.jpg');

// Encode image buffer to hex
// Note: new Buffer() is deprecated and should be replaced with Buffer.from() for better safety and performance.
const imgHexEncode: string = Buffer.from(imgReadBuffer).toString('hex');

// Output encoded data to console
console.log(imgHexEncode);
