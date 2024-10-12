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

# QUESTION: How do the target and module options in tsconfig.json differ, and why is it important to update the type field in package.json?

#ANSWER:

In the context of tsconfig.json in TypeScript, the target and module options control different aspects of how the TypeScript compiler outputs JavaScript.

1. `target in tsconfig.json:`

    The target option specifies which JavaScript version (ECMAScript version) the TypeScript code should be compiled to. For example, setting "target": "ES6" means TypeScript will generate JavaScript using ES6 syntax and features. This affects features like arrow functions, classes, and other ES6+ functionalities.

2. `module in tsconfig.json:`

    The module option defines how the TypeScript compiler should output the module system (i.e., how imports and exports are handled).Common values include "commonjs" (for Node.js environments) and "esnext" (for modern browsers using ES modules). This tells TypeScript how to handle import and export statements during compilation[4].

3. `type in package.json:`

    The "type": "module" setting in package.json defines the module system for JavaScript files in your project. By setting it to "module", Node.js will treat .js files as ES modules, allowing the use of import/export. Without this, Node.js defaults to CommonJS and throws errors when encountering ES module syntax[2].

# Java is known for its object-oriented programming features. How does TypeScript compare in terms of OOP support?

ANSWER:

    TypeScript is a multi-paradigm programming language, supporting both object-oriented and functional programming approaches. Like Java, TypeScript allows you to use classes, inheritance, and encapsulation to build object-oriented applications. TypeScript's class syntax is similar to Java, offering constructors, access modifiers (like public, private, and protected), and method overriding [1].

    However, unlike Java, TypeScript also supports functional programming features like first-class functions and higher-order functions, meaning you can write code in a functional style without needing classes.

    This flexibility makes TypeScript more versatile than Java, as it doesn't force developers to stick to object-oriented paradigms alone [5].