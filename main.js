const tooltip = document.getElementById('tooltip');

    function showTooltip(event, text) {
      tooltip.style.left = `${event.offsetX}px`;
      tooltip.style.top = `${event.offsetY}px`;
      tooltip.textContent = text;
    }

    function hideTooltip() {
      tooltip.textContent = "";
    }