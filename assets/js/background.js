const images = [
    'images/bg/ev_bg1.jpg', // Replace with your image paths
    'images/bg/ev_bg2.jpg',
    'images/bg/ev_bg3.jpg',
    'images/bg/ev_bg4.jpg',
    'images/bg/ev_bg5.jpg'
  ];

  let currentIndex = 0; // Tracks the current image index
  let visibleImage = 0; // Tracks which div is currently visible (0 or 1)
  
  // Get the two background divs
  const backgrounds = [
    document.getElementById('image1'),
    document.getElementById('image2')
  ];
  
  // Initialize the first background image
  backgrounds[0].style.backgroundImage = `url(${images[currentIndex]})`;
  backgrounds[0].classList.add('visible'); // Show the first image
  backgrounds[0].style.opacity = 7; // Show the first image
  
  // Function to change background
  function changeBackground() {
    const nextIndex = (currentIndex + 1) % images.length; // Next image index
    const nextVisible = (visibleImage + 1) % 2; // Toggle between 0 and 1
  
    // Set the next image on the hidden div
    backgrounds[nextVisible].style.backgroundImage = `url(${images[nextIndex]})`;
  
    // Fade out the current image
    backgrounds[visibleImage].classList.remove('visible');
  
    // Fade in the new image
    backgrounds[nextVisible].classList.add('visible');
  
    // Update indices
    currentIndex = nextIndex;
    visibleImage = nextVisible;
  }
  
  // Change background every 23 seconds
  setInterval(changeBackground, 5000); // 20s display + 3s transition