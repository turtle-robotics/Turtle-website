# Quick Setup Guide

If you're getting a "can't locate file" error when running `npm run dev`, follow these steps:

## Step 1: Make sure you have Node.js installed
- Download and install Node.js from [nodejs.org](https://nodejs.org/)
- Version 16 or higher is required

## Step 2: Install dependencies
Before running the dev server, you MUST install dependencies first:

```bash
npm install
```

This will download all the required packages from the `package.json` file.

## Step 3: Run the development server
After dependencies are installed, you can start the dev server:

```bash
npm run dev
```

## Step 4: Open the website
The server will start and show you the URL (usually `http://localhost:5173/` or similar). The browser should open automatically.

## Common Issues

### "npm run dev" can't locate file
- **Solution**: Run `npm install` first

### Port already in use
- **Solution**: The server will automatically use a different port (like 5174, 5175, etc.)

### Tailwind CSS errors
- **Solution**: Make sure you ran `npm install` to get the `@tailwindcss/postcss` package

### Still having issues?
1. Delete the `node_modules` folder
2. Delete `package-lock.json` (if it exists)
3. Run `npm install` again
4. Run `npm run dev`

## File Structure
Make sure these files exist in your project root:
- `package.json` ✓ 
- `index.html` ✓
- `vite.config.js` ✓
- `tailwind.config.js` ✓
- `postcss.config.js` ✓
- `src/main.js` ✓

## Need Help?
If you're still having issues, check that:
1. You're in the correct directory (where `package.json` is located)
2. You have internet connection (for downloading dependencies)
3. You have the latest version of Node.js
