async function getState(promise) {
  const pendingMarker = Symbol('pending');
  
  const result = await Promise.race([
    promise
      .then(() => 'fulfilled')
      .catch(() => 'rejected'),
    new Promise(resolve => setTimeout(() => resolve(pendingMarker), 0))
  ]);
​
  return result === pendingMarker ? 'pending' : result;
}