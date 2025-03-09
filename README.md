# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/a7e2adae-b179-4106-b6dd-35c4103a6d33

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/a7e2adae-b179-4106-b6dd-35c4103a6d33) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/a7e2adae-b179-4106-b6dd-35c4103a6d33) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

# Image Cleaner

A Node.js script that recursively scans directories for images with the format `<name>-<width>x<height>.<extension>`, groups them by name, and keeps only the largest version of each image while deleting the rest.

## Usage

```bash
# Make the script executable (Unix/Linux/macOS)
chmod +x image-cleaner.js

# Run the script on the current directory
./image-cleaner.js

# Or specify a directory
./image-cleaner.js /path/to/images

# Alternatively, run with node
node image-cleaner.js /path/to/images
```

## How it works

1. The script recursively scans all directories starting from the specified path
2. It identifies images with the format `<name>-<width>x<height>.<extension>`
3. Images are grouped by their base name (everything before the dimensions)
4. For each group, it keeps only the image with the largest dimensions (width × height)
5. All other images in the group are deleted
6. Images that don't match the pattern are left untouched

## Example

If you have the following files:
```
logo-100x50.png
logo-200x100.png
logo-50x25.png
icon.png
```

After running the script, you'll have:
```
logo-200x100.png  (kept because it has the largest dimensions)
icon.png          (kept because it doesn't match the pattern)
```

## Requirements

- Node.js (v10.0.0 or higher recommended)
