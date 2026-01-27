const scramble = (str, indices) => 
    indices.reduce((acc, pos, i) => (acc[pos] = str[i], acc), [])
           .join('');