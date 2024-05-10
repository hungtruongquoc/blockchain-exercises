# blockchain-exercises

# Run TypeScript with Node.js

To run a TypeScript file using the Node.js runtime, you need to first compile your TypeScript (`.ts`) files into JavaScript (`.js`), because Node.js does not understand TypeScript natively. Here’s how to do it:

1. **Install TypeScript and Node.js**: If you haven't installed Node.js and TypeScript yet, you can download and install Node.js from [nodejs.org](https://nodejs.org/), and you can install TypeScript globally using npm (Node package manager) with the following command:
   ```bash
   npm install -g typescript
   ```

2. **Create a TypeScript file**: Write your TypeScript code in a file with a `.ts` extension, for example, `app.ts`.

3. **Compile TypeScript to JavaScript**:
    - You can manually compile the TypeScript file to JavaScript using the TypeScript compiler (`tsc`). Navigate to the directory containing your `.ts` file and run:
      ```bash
      tsc app.ts
      ```
    - This command will generate a JavaScript file (`app.js`) in the same directory.

4. **Run the JavaScript file with Node.js**:
    - After compiling your TypeScript file to JavaScript, you can run the resulting JavaScript file with Node.js:
      ```bash
      node app.js
      ```

5. **Automate the process** (Optional):
    - To make this process easier, you can set up a `tsconfig.json` file in your project directory that specifies the root files and the compiler options. Run:
      ```bash
      tsc --init
      ```
    - Modify the `tsconfig.json` as needed (for example, setting `"outDir": "./dist"` to specify the output directory).
    - You can then compile your TypeScript files by simply running `tsc` without any arguments, or automate the compilation on file changes using:
      ```bash
      tsc -w
      ```
    - To run your TypeScript files directly without manually compiling every time, consider using a tool like `ts-node`. You can install it via npm:
      ```bash
      npm install -g ts-node
      ```
    - Then, you can directly execute your TypeScript file:
      ```bash
      ts-node app.ts
      ```

Using `ts-node` is particularly useful during development as it simplifies the process by not requiring you to manually compile the TypeScript to JavaScript each time you make changes.

# References
- [crypto-js](https://www.npmjs.com/package/crypto-js#usage)
