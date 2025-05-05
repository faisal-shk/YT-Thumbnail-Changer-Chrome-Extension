let thumbImages = [
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675805015392-28fd80c551ec?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1475776408506-9a5371e7a068?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1539634262233-7c0b48ab9503?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1675368244123-082a84cf3072?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D"
];

// Function to replace thumbnails
function replaceThumbnails() {
    // More comprehensive selectors for YouTube thumbnails
    const thumbnails = document.querySelectorAll([
        'img.yt-img-shadow',
        'img#img',
        'img.yt-core-image',
        'ytd-thumbnail img',
        'ytd-video-preview img',
        'ytd-rich-item-renderer img',
        'ytd-compact-video-renderer img',
        'ytd-grid-video-renderer img'
    ].join(','));

    thumbnails.forEach((thumbnail, index) => {
        const newImage = thumbImages[index % thumbImages.length];
        if (thumbnail.src !== newImage) {
            thumbnail.src = newImage;
            if (thumbnail.srcset) thumbnail.srcset = '';
            thumbnail.removeAttribute('srcset');
            thumbnail.style.objectFit = 'cover';
        }
    });
}

// Run the replacement when the page is fully loaded
window.addEventListener('load', replaceThumbnails);

// Handle YouTube's navigation events
document.addEventListener('yt-navigate-finish', replaceThumbnails);

// Initial load
document.addEventListener('DOMContentLoaded', replaceThumbnails);

// Add a small delay to ensure thumbnails are loaded
setTimeout(replaceThumbnails, 3000);

// Add an interval to catch any dynamically loaded thumbnails
setInterval(replaceThumbnails, 5000);


