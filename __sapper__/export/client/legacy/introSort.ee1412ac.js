import{heapSort as r}from"./heapSort.e7775404.js";import{insertionSort as t}from"./insertionSort.bab51556.js";import{partition as o}from"./quickSort.825a51eb.js";import"./swap.72496508.js";function e(e){var i=[];return e.length<=1?e:(function(e,i,n,s){var a;if(e.length>1){a=o(e,i,n,s);var l=e.slice(0,a),m=e.slice(a),p=0;i<a-1&&(l.length<=10?t(l,p,s):r(l,p,s)),a<n&&(m.length<=10?t(m,p+=a,s):r(m,p+=a,s))}}(e,0,e.length-1,i),i)}export{e as getIntroSortAnimations};
