const donutCharts = document.querySelectorAll('.donut-chart');
const globalTooltip = document.getElementById('tooltip');
const piChartSection = document.querySelector('.pichart-section');
const navButtons = document.querySelectorAll('.nav-buttons');

// Segment data
const segmentsData = [
  { start: 0, end: 10, label: "Green (10%)" },
  { start: 11, end: 25, label: "Orange (14%)" },
  { start: 26, end: 70, label: "Yellow (44%)" },
  { start: 71, end: 95, label: "Blue (24%)" },
  { start: 96, end: 100, label: "Green (4%)" }
];

donutCharts.forEach((chart) => {
  chart.addEventListener('mousemove', (event) => {
    const rect = chart.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate the angle
    const x = event.clientX - centerX;
    const y = event.clientY - centerY;
    let angle = Math.atan2(y, x) * (180 / Math.PI); // Convert radians to degrees
    angle = (angle + 360 + 90) % 360; // Normalize angle and offset for rotation

    // Find the segment
    const percentage = (angle / 360) * 100;
    const segment = segmentsData.find(seg => percentage >= seg.start && percentage <= seg.end);

    if (segment) {
      // Show the tooltip
      globalTooltip.style.display = 'block';
      globalTooltip.textContent = segment.label;

      // Position tooltip near mouse
      globalTooltip.style.left = `${event.pageX + 10}px`;
      globalTooltip.style.top = `${event.pageY + 10}px`;

      // Remove position: relative from piChartSection on hover
      piChartSection.style.position = 'static'; // Removes relative positioning

      // Hide navigation buttons by looping through them
      navButtons.forEach(button => {
        button.style.display = 'none';
      });
    }
  });

  chart.addEventListener('mouseleave', () => {
    // Hide tooltip when leaving the chart
    globalTooltip.style.display = 'none';

    // Restore position: relative on piChartSection when mouse leaves
    piChartSection.style.position = 'relative'; // Restore relative positioning

    // Show navigation buttons again by looping through them
    navButtons.forEach(button => {
      button.style.display = 'flex'; // Or use 'inline-block', depending on your layout
    });
  });
});






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

const dateInput = document.getElementById('date-picker');

    dateInput.addEventListener('focus', () => {
        // Change input type to date on focus
        dateInput.type = 'date';
    });

    dateInput.addEventListener('blur', () => {
        // Reset type back to text if the value is empty
        if (!dateInput.value) {
            dateInput.type = 'text';
        }
    });