function solution(input, markers) {
  return input.split('\n')
              .map(line => markers.reduce((acc, marker) => acc.split(marker)[0], line).trimEnd())
              .join('\n')
};