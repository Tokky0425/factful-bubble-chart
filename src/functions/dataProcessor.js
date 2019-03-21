export const normalize = (rawData, normalizeType) => {
  let minSize = null;
  let maxSize = null;
  rawData.forEach(data => {
    Object.keys(data.content).forEach(key => {
      const size = getRadius(data.content[key].size);
      if (!minSize || size < minSize) { minSize = size; }
      if (!maxSize || maxSize < size) { maxSize = size; }
    });
  });

  // normalization option
  // default: relativeNormalize
  // 'min-max': minMaxNormalize
  let func = relativeNormalize;
  if (normalizeType === 'min-max') {
    func = minMaxNormalize;
  }

  rawData.forEach(data => {
    Object.keys(data.content).forEach(key => {
      const size = getRadius(data.content[key].size);
      data.content[key].normalizedSize = func(size, minSize, maxSize)
    });
  });

  return rawData;
};

const getRadius = area => {
  return Math.sqrt(area / Math.PI);
};

const relativeNormalize = (val, minSize, maxSize) => {
  return (val / maxSize).toFixed(5); // Relative normalization function
};

const minMaxNormalize = (val, minSize, maxSize) => {
  return ((val - minSize) / (maxSize - minSize)).toFixed(5); // Min-Max normalization function
};
