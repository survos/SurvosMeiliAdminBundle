import{g as w}from"./@babel-4gviZBr6.js";var y=4,_=.001,d=1e-7,F=10,l=11,S=1/(l-1),h=typeof Float32Array=="function";function E(e,r){return 1-3*r+3*e}function N(e,r){return 3*r-6*e}function b(e){return 3*e}function c(e,r,n){return((E(r,n)*e+N(r,n))*e+b(r))*e}function g(e,r,n){return 3*E(r,n)*e*e+2*N(r,n)*e+b(r)}function B(e,r,n,t,a){var i,o,p=0;do o=r+(n-r)/2,i=c(o,t,a)-e,i>0?n=o:r=o;while(Math.abs(i)>d&&++p<F);return o}function R(e,r,n,t){for(var a=0;a<y;++a){var i=g(r,n,t);if(i===0)return r;var o=c(r,n,t)-e;r-=o/i}return r}function C(e){return e}var D=function(r,n,t,a){if(!(0<=r&&r<=1&&0<=t&&t<=1))throw new Error("bezier x values must be in [0, 1] range");if(r===n&&t===a)return C;for(var i=h?new Float32Array(l):new Array(l),o=0;o<l;++o)i[o]=c(o*S,r,t);function p(v){for(var u=0,f=1,O=l-1;f!==O&&i[f]<=v;++f)u+=S;--f;var z=(v-i[f])/(i[f+1]-i[f]),I=u+z*S,s=g(I,r,t);return s>=_?R(v,I,r,t):s===0?I:B(v,u,u+S,r,t)}return function(u){return u===0?0:u===1?1:c(p(u),n,a)}};const V=w(D);export{V as b};