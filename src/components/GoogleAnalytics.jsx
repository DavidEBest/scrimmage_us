import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const location = useLocation();
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

  useEffect(() => {
    // Only load GA in production and if measurement ID is provided
    if (!GA_MEASUREMENT_ID || import.meta.env.DEV) {
      return;
    }

    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [GA_MEASUREMENT_ID]);

  // Track page views when location changes
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || import.meta.env.DEV || !window.gtag) {
      return;
    }

    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [location, GA_MEASUREMENT_ID]);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;