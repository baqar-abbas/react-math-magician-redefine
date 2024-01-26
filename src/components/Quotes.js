import React, { useState, useEffect } from 'react';

export default function Quotes() {
  const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
  const token = 'b0LWKpfzu79q9vuMvH4/MQ==ksMPVNNNs74mXwBt';

  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(apiUrl, {
      method: 'GET',
      headers: { 'X-Api-Key': `${token}` },
      contentType: 'application/json',
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      return response.json();
    }).then((data) => {
      setQuote(data[0].quote);
      setIsLoading(false);
    }).catch((error) => {
      setError(error.message);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="quotes">
      <span>{isLoading ? 'Loading ...' : ''}</span>
      <span>{error || ''}</span>
      {quote}
    </div>
  );
}
