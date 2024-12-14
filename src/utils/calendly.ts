export const openCalendlyPopup = () => {
  // Add Calendly script if it doesn't exist
  if (!document.getElementById('calendly-script')) {
    const script = document.createElement('script');
    script.id = 'calendly-script';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }

  // Open Calendly in popup mode
  // @ts-ignore
  if (window.Calendly) {
    // @ts-ignore
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/ju-jomena/30min'
    });
  }
};
