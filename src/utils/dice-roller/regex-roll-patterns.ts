export const regexRollPatterns = {
  dN: /^d\d+$/,
  NdN: /^\d+d\d+$/,
  dNplusN: /^d\d+\+\d+$/,
  dNminusN: /^d\d+\-\d+$/,
  NdNplusN: /^\d+d\d+\+\d+$/,
  NdNminusN: /^\d+d\d+\-\d+$/,

  // startsWithNx: /^\d+x/, not supported yet
  endsWithAdv: / adv$/,
  endsWithDis: / dis$/,
}