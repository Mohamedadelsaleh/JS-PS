function findNeedle(haystack) {
  let position = 0;
  haystack.map((el, idx) => el === "needle" ? position = idx + 1 : 0 )
  return position > 0 ? `found the needle at position ${position}` : "No needle found";
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));