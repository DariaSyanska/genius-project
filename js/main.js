console.log('Main.js loaded!');
const updateCopyrightYear = () => {
  try {
    const yearSpan = document.querySelector('#copyright-year');
    if (yearSpan) {
      const currentYear = new Date().getFullYear();
      yearSpan.textContent = currentYear;
      console.log('Year updated to:', currentYear);
    } else {
      console.error('Element #copyright-year not found!');
    }
  } catch (err) {
    console.error('Error updating year:', err);
  }
};

document.addEventListener('DOMContentLoaded', updateCopyrightYear);
