'use client';

import { useEffect, useState } from 'react';

export default function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Return a placeholder during SSR to avoid hydration mismatch
  if (year === null) {
    return <span>2024</span>;
  }

  return <span>{year}</span>;
}