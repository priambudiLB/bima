function u(u){var p=[];return u.length<=1?u:(h(u,0,p),p)}function h(u,h,p){for(var r=1;r<u.length;r++){var s=u[r],n=r-1;for(p.push([r+h,n+h,!0]),p.push([r+h,n+h,!0]);n>=0&&u[n]>s;)p.push([n+1+h,n+1+h,!0]),p.push([n+1+h,u[n],!1]),p.push([n+1+h,n+1+h,!0]),u[n+1]=u[n],n--;p.push([n+1+h,n+1+h,!0]),p.push([n+1+h,s,!1]),p.push([n+1+h,n+1+h,!0]),u[n+1]=s}}export{u as getInsertionSortAnimations,h as insertionSort};
