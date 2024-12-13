const tooltip = document.getElementById('tooltip');

    function showTooltip(event, text) {
      tooltip.style.left = `${event.offsetX}px`;
      tooltip.style.top = `${event.offsetY}px`;
      tooltip.textContent = text;
    }

    function hideTooltip() {
      tooltip.textContent = "";
    }

// Event listeneer for dount charts scroll //
const chartsDiv = document.querySelector('.charts-div');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

const scrollAmount = 300;

// Scroll to the right
nextButton.addEventListener('click', () => {
  chartsDiv.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// Scroll to the left
prevButton.addEventListener('click', () => {
  chartsDiv.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});
