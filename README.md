# YouTube Thumbnail Changer

A Chrome extension that replaces YouTube video thumbnails with beautiful nature images from Unsplash.

## Features

- Automatically replaces YouTube video thumbnails with high-quality nature images
- Works on all YouTube pages (home, search results, video pages, etc.)
- Smooth thumbnail replacement that doesn't affect page performance
- Beautiful collection of nature-themed thumbnails

## Installation

1. Download or clone this repository to your local machine
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the folder containing the extension files
5. The extension will be installed and ready to use

## Usage

1. Once installed, simply visit YouTube (https://www.youtube.com)
2. The extension will automatically replace all video thumbnails with nature images
3. Thumbnails will update when:
   - The page is first loaded
   - The page is refreshed
   - New content is loaded while scrolling

## Files

- `manifest.json` - Extension configuration file
- `Content.js` - Main script that handles thumbnail replacement
- `icon.png` - Extension icon

## How It Works

The extension uses a collection of high-quality nature images from Unsplash to replace YouTube thumbnails. It works by:

1. Detecting YouTube thumbnail elements on the page
2. Replacing their source images with nature images from the collection
3. Maintaining the original thumbnail dimensions and styling
4. Updating thumbnails as new content is loaded

## Notes

- The extension only works on YouTube.com
- Thumbnails are replaced with a rotating set of nature images
- Original video content and functionality remains unchanged
- The extension requires no user configuration

## License

This project is open source and available under the MIT License.

## Credits

- Thumbnail images provided by [Unsplash](https://unsplash.com)
- Developed as a Chrome extension for educational purposes by Faisal Shaikh