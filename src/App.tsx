/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SalesPage } from './components/SalesPage.tsx';
import { ThankYouPage } from './components/ThankYouPage.tsx';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('thank-you') || window.location.search.includes('thank-you')) {
        return '/thank-you';
      }
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('thank-you') || window.location.search.includes('thank-you')) {
        setCurrentRoute('/thank-you');
      } else {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToThankYou = () => {
    try {
      window.history.pushState({}, '', '/thank-you');
    } catch {
      // Fallback if pushState is restricted
    }
    setCurrentRoute('/thank-you');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    try {
      window.history.pushState({}, '', '/');
    } catch {
      // Fallback if pushState is restricted
    }
    setCurrentRoute('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentRoute === '/thank-you') {
    return <ThankYouPage onReturnToHome={navigateToHome} />;
  }

  return <SalesPage onNavigateToThankYou={navigateToThankYou} />;
}
