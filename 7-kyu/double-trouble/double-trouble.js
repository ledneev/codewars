function trouble(x, t){
  return x.reduce((acc, curr) => {
    if(acc.length && acc[acc.length - 1] + curr === t) {
      return acc;
    }
    return [...acc, curr];
  }, []);
}