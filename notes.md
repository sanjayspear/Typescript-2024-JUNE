# QUESTION:- How does running the tsc command generate the corresponding JavaScript file from a TypeScript file?

# ANSWER:-

By executing the command tsc, the TypeScript compiler (tsc) compiles .ts files into corresponding JavaScript (.js) files. Here's how it works:

1. TypeScript Compiler (tsc): When you run tsc, it processes your .ts files, applying any specified configuration (e.g., via tsconfig.json), and converts them into standard JavaScript files.

2. Transpilation Process: TypeScript is a superset of JavaScript, so during the transpilation process, it strips TypeScript-specific features (e.g., types, interfaces) and outputs valid JavaScript code.

3. Output File: By default, the compiled .js file is created in the same directory as the .ts file, or as configured in tsconfig.json.

    - Example:

        # Command: 
             tsc hello.ts
        # Output: 
              hello.js is generated with equivalent JavaScript code.

# QUESTION: How should I configure tsconfig.json to enable automatic TypeScript transpilation into JavaScript?

# ANSWER:-

To enable `auto-transpilation` in `tsconfig.json` for TypeScript, you can configure the file to automatically watch and compile .ts files whenever they change. Here are the key settings:

# Enable Compilation Options:
    1. "outDir": Specify the output directory for compiled JavaScript files.
    2. "rootDir": Specify the root directory of the TypeScript files.
    3. "watch": true: This option makes the TypeScript compiler continuously watch for changes in .ts files.

# Example tsconfig.json:

{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "target": "ES6",
    "module": "commonjs"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"],
  "watch": true
}

# Start Watching: Once configured, run the following command:

   tsc --watch

# NOTE:

    - To exit from TypeScript's "watch mode" (tsc --watch), Use Ctrl + C: This keyboard shortcut sends an interrupt signal to the process and stops it