const sumNested = arr => 
  arr.reduce((sum, item) => 
    sum + (Array.isArray(item) ? sumNested(item) : typeof item === 'number' ? item : 0), 0);