function naiveStringMatching(text, pattern) {
  const result = [];
  const n = text.length;
  const m = pattern.length;
  if (m === 0) {
    for (let i = 0; i <= n; i++) result.push(i);
    return result;
  }

  for (let i = 0; i <= n - m; i++) {
    let j;
    for (j = 0; j < m; j++) {
      if (text[i + j] !== pattern[j]) break;
    }
    if (j === m) result.push(i);
  }

  return result;
}

function rabinKarp(text, pattern, prime = 101) {
  const result = [];
  const n = text.length;
  const m = pattern.length;
   if (m === 0) {
     for (let i = 0; i <= n; i++) result.push(i);
     return result;
   }
  if (m > n) return result;

  const base = 256;
  let patternHash = 0;
  let textHash = 0;
  let h = 1;

  for (let i = 0; i < m - 1; i++) {
    h = (h * base) % prime;
  }

  for (let i = 0; i < m; i++) {
    patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
    textHash = (base * textHash + text.charCodeAt(i)) % prime;
  }

  for (let i = 0; i <= n - m; i++) {
    if (patternHash === textHash) {
      let match = true;
      for (let j = 0; j < m; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }
      if (match) result.push(i);
    }

    if (i < n - m) {
      textHash =
        (base * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) %
        prime;
      if (textHash < 0) textHash += prime;
    }
  }

  return result;
}

function knuthMorrisPratt(text, pattern) {
  const result = [];
 
  const n=text.length;
  const m = pattern.length;
  if (m === 0) {
    for (let i = 0; i <= n; i++) result.push(i);
    return result;
  }

  const lps = Array(m).fill(0);
  let j = 0;

  computeLPS(pattern, lps);

  let i = 0;
  while (i < n) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === m) {
      result.push(i - j);
      j = lps[j - 1];
    } else if (i < n && pattern[j] !== text[i]) {
      if (j !== 0) j = lps[j - 1];
      else i++;
    }
  }

  return result;
}

function computeLPS(pattern, lps) {
  let length = 0;
  let i = 1;
  lps[0] = 0;

  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) length = lps[length - 1];
      else {
        lps[i] = 0;
        i++;
      }
    }
  }
}

function boyerMoore(text, pattern) {
  const result = [];
  const n = text.length;
  const m = pattern.length;
  if (m === 0) {
    for (let i = 0; i <= n; i++) result.push(i);
    return result;
  }

  const badChar = preprocessBadChar(pattern);

  let shift = 0;
  while (shift <= n - m) {
    let j = m - 1;
    while (j >= 0 && pattern[j] === text[shift + j]) j--;

    if (j < 0) {
      result.push(shift);
      shift += shift + m < n ? m - badChar[text.charCodeAt(shift + m)] : 1;
    } else {
      shift += Math.max(1, j - badChar[text.charCodeAt(shift + j)]);
    }
  }

  return result;
}

function preprocessBadChar(pattern) {
  const badChar = Array(256).fill(-1);
  for (let i = 0; i < pattern.length; i++) {
    badChar[pattern.charCodeAt(i)] = i;
  }
  return badChar;
}

module.exports = {
  naiveStringMatching,
  rabinKarp,
  knuthMorrisPratt,
  boyerMoore,
};
