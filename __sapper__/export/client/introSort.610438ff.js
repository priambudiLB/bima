import{heapSort as t}from"./heapSort.831e56cb.js";import{insertionSort as o}from"./insertionSort.0c1b1218.js";import{partition as r}from"./quickSort.446f8d33.js";import"./swap.8dc9cfcc.js";function e(e){const n=[];return e.length<=1?e:(function(e,n,c,i){var s;if(e.length>1){s=r(e,n,c,i);let f=e.slice(0,s),l=e.slice(s),m=0;n<s-1&&(f.length<=10?o(f,m,i):t(f,m,i)),s<c&&(l.length<=10?o(l,m+=s,i):t(l,m+=s,i))}}(e,0,e.length-1,n),n)}export{e as getIntroSortAnimations};
