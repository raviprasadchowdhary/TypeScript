# TypeScript Development Environment Setup Guide

## Prerequisites

### 1. Install Node.js
Node.js is required as TypeScript runs on the Node.js runtime.

**Download:** https://nodejs.org/
- Recommended: LTS (Long Term Support) version
- This installation includes NPM (Node Package Manager)

**Verify Installation:**
```bash
node -v
```
Expected output: v18.x.x or higher

### 2. Verify NPM Installation
NPM is automatically installed with Node.js.

**Check NPM Version:**
```bash
npm --version
```
Expected output: 9.x.x or higher

---

## TypeScript Installation

### 3. Install TypeScript Globally
Install TypeScript compiler globally to use it from any directory.

**Command:**
```bash
npm install -g typescript
```

**Verify Installation:**
```bash
tsc -v
```
Expected output: Version 5.x.x or higher

---

## Project Setup (Optional)

### 4. Initialize a New TypeScript Project
Create a new project directory and initialize it.

**Commands:**
```bash
mkdir my-typescript-project
cd my-typescript-project
npm init -y
npm install --save-dev typescript
```

### 5. Create TypeScript Configuration File
Generate a `tsconfig.json` file for compiler options.

**Command:**
```bash
tsc --init
```

This creates a `tsconfig.json` with default settings. Common configurations:
- `target`: ES version to compile to (e.g., "ES2020", "ESNext")
- `module`: Module system (e.g., "commonjs", "esnext")
- `outDir`: Output directory for compiled JavaScript
- `rootDir`: Root directory of TypeScript files
- `strict`: Enable strict type checking

### 6. Create Your First TypeScript File
Create a file named `index.ts`:

```typescript
// index.ts
function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("World"));
```

### 7. Compile TypeScript to JavaScript
**Command:**
```bash
tsc index.ts
```
This creates `index.js` in the same directory.

**Or compile all files in project:**
```bash
tsc
```

### 8. Run the Compiled JavaScript
**Command:**
```bash
node index.js
```

---

## Additional Tools (Recommended)

### 9. Install ts-node (Run TypeScript directly)
Allows running TypeScript files without manual compilation.

**Command:**
```bash
npm install -g ts-node
```

**Usage:**
```bash
ts-node index.ts
```

### 10. Install Type Definitions
For popular libraries, install type definitions to get IntelliSense and type checking.

**Example:**
```bash
npm install --save-dev @types/node
npm install --save-dev @types/express
```

### 11. Setup Linting (ESLint)
Install ESLint with TypeScript support for code quality.

**Commands:**
```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### 12. Setup Formatting (Prettier)
Install Prettier for consistent code formatting.

**Command:**
```bash
npm install --save-dev prettier
```

---

## Development Workflow

### Watch Mode
Automatically recompile on file changes:
```bash
tsc --watch
```

### Common NPM Scripts
Add to `package.json`:
```json
"scripts": {
    "build": "tsc",
    "watch": "tsc --watch",
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts"
}
```

---

## Troubleshooting

**Issue:** "tsc is not recognized as an internal or external command"
- Solution: Restart terminal or add npm global path to system PATH

**Issue:** Module not found errors
- Solution: Run `npm install` to install dependencies

**Issue:** Type errors in code
- Solution: Check `tsconfig.json` settings, especially `strict` mode options

---

## Useful Resources

- TypeScript Documentation: https://www.typescriptlang.org/docs/
- TypeScript Playground: https://www.typescriptlang.org/play
- TypeScript GitHub: https://github.com/microsoft/TypeScript
- Definitely Typed (Type Definitions): https://github.com/DefinitelyTyped/DefinitelyTyped

---

**Last Updated:** December 2025


