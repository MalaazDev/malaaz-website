import React from 'react';

const WellKnownRedirect = () => {
  React.useEffect(() => {
    window.location.href = '/apple-app-site-association';
  }, []);

  return (
    <div>Redirecting...</div>
  );
};

export default WellKnownRedirect;
