import React, { useState } from 'react';

function ScrollDownButton() {
  const [showButton, setShowButton] = useState(true);

  // Function to handle the button click and scroll to the next section
  const handleClick = () => {
    const nextSection = document.getElementById('next-section');
    nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to show/hide the button based on the user's scroll position
  const handleScroll = () => {
    if (window.pageYOffset > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Add an event listener to update the button visibility on scroll
  window.addEventListener('scroll', handleScroll);

  return (
    <div className="scroll-down-button">
      {showButton && (
        <button onClick={handleClick}>
          Scroll Down
        </button>
      )}
    </div>
  );
}

export default ScrollDownButton;