// Sample videos and pictures for Adelaide
const videos = [
    './videos/Ad1.mp4',
    './videos/Ad2.mp4',
    './videos/Ad3.mp4'
];

const pictures = [
    './images/PXL_20231126_171450792.jpg',
    './images/PXL_20231126_174924478.jpg',
    './images/PXL_20231128_194713648.jpg',
    './images/PXL_20231207_052918746.TS_exported_0.jpg',
    './images/PXL_20231207_172824567.jpg'
];

// Function to create video elements
function createVideoElement(src) {
    const videoElement = document.createElement('iframe');
    videoElement.setAttribute('src', src);
    videoElement.setAttribute('width', '300');
    videoElement.setAttribute('height', '400');

    // add controls
    videoElement.setAttribute('controls', 'true');

    videoElement.setAttribute('frameborder', '0');
    videoElement.setAttribute('allowfullscreen', 'true');

    return videoElement;
}

// Function to create image elements
function createImageElement(src) {
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', src);
    imageElement.setAttribute('width', '300');
    imageElement.setAttribute('height', '400');
    imageElement.setAttribute('alt', 'Adelaide');
    return imageElement;
}

// Function to create video carousel items
function createVideoCarouselItem(src, isActive) {
    const item = document.createElement('div');
    item.classList.add('carousel-item');
    if (isActive) {
        item.classList.add('active');
    }

    const videoElement = createVideoElement(src);
    videoElement.classList.add('d-block');
    // , 'w-100'
    item.appendChild(videoElement);

    return item;
}

// Function to create picture carousel items
function createPictureCarouselItem(src, isActive) {
    const item = document.createElement('div');
    item.classList.add('carousel-item');
    if (isActive) {
        item.classList.add('active');
    }

    const imageElement = createImageElement(src);
    imageElement.classList.add('d-block');
    // , 'w-100'
    item.appendChild(imageElement);

    return item;
}

// Populate videos and pictures
const videoContainer = document.getElementById('video-container');
const pictureContainer = document.getElementById('picture-container');

// Populate video carousel
const videoCarousel = document.querySelector('#video-carousel .carousel-inner');
videos.forEach((videoSrc, index) => {
    const isActive = index === 0; // Set the first video as active
    const videoCarouselItem = createVideoCarouselItem(videoSrc, isActive);
    videoCarousel.appendChild(videoCarouselItem);
});

// Populate picture carousel
const pictureCarousel = document.querySelector('#picture-carousel .carousel-inner');
pictures.forEach((pictureSrc, index) => {
    const isActive = index === 0; // Set the first picture as active
    const pictureCarouselItem = createPictureCarouselItem(pictureSrc, isActive);
    pictureCarousel.appendChild(pictureCarouselItem);
});
