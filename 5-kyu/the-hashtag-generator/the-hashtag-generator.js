function generateHashtag(str) {
    const trimmed = str.trim();
    if (!trimmed) return false;
​
    const hashtag = "#" + trimmed
        .split(/\s+/)
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join('');
​
    return hashtag.length <= 140 ? hashtag : false;
}