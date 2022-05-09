function getMiddle(s)
{
  let halfPoint = Math.ceil(s.length / 2) - 1;
  return halfPoint ? s.slice(halfPoint, -halfPoint) : s.slice(0);
}