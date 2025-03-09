#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const unlink = promisify(fs.unlink);

// Regular expression to match the pattern <name>-<w>x<h>.<ext>
const IMAGE_PATTERN = /^(.+)-(\d+)x(\d+)\.([a-zA-Z0-9]+)$/;

// Function to recursively scan directories
async function scanDirectory(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  
  // Process files in current directory
  const files = entries.filter(entry => entry.isFile());
  await processFiles(directory, files);
  
  // Recursively process subdirectories
  const subdirs = entries.filter(entry => entry.isDirectory());
  for (const subdir of subdirs) {
    await scanDirectory(path.join(directory, subdir.name));
  }
}

// Function to process files in a directory
async function processFiles(directory, files) {
  // Group files by base name
  const fileGroups = {};
  
  for (const file of files) {
    const match = file.name.match(IMAGE_PATTERN);
    
    if (match) {
      const [, baseName, width, height, ext] = match;
      const key = `${baseName}.${ext}`;
      
      if (!fileGroups[key]) {
        fileGroups[key] = [];
      }
      
      fileGroups[key].push({
        filename: file.name,
        width: parseInt(width, 10),
        height: parseInt(height, 10),
        area: parseInt(width, 10) * parseInt(height, 10)
      });
    }
  }
  
  // For each group, keep the largest image and delete the rest
  for (const [key, images] of Object.entries(fileGroups)) {
    if (images.length <= 1) continue;
    
    // Sort images by area (largest first)
    images.sort((a, b) => b.area - a.area);
    
    console.log(`Group: ${key}`);
    console.log(`  Keeping: ${images[0].filename} (${images[0].width}x${images[0].height})`);
    
    // Delete all but the largest image
    for (let i = 1; i < images.length; i++) {
      const filePath = path.join(directory, images[i].filename);
      console.log(`  Deleting: ${images[i].filename} (${images[i].width}x${images[i].height})`);
      
      try {
        await unlink(filePath);
      } catch (err) {
        console.error(`  Error deleting ${filePath}: ${err.message}`);
      }
    }
  }
}

// Main function
async function main() {
  const startDir = process.argv[2] || '.';
  
  if (!startDir) {
    console.error('Please provide a directory path');
    process.exit(1);
  }
  
  try {
    const dirStat = await stat(startDir);
    if (!dirStat.isDirectory()) {
      console.error(`${startDir} is not a directory`);
      process.exit(1);
    }
    
    console.log(`Starting to scan directory: ${startDir}`);
    await scanDirectory(startDir);
    console.log('Done!');
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

main().catch(err => {
  console.error(`Unhandled error: ${err.message}`);
  process.exit(1);
}); 