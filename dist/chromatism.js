!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):r.chromatism=e()}(this,function(){"use strict";function r(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;n=n.replace("#","").match(/.{2}/g);for(var a=0;a<n.length;a++)n[a]=parseInt(n[a],16);switch(e){case"rgb":return{r:n[0],g:n[1],b:n[2]};default:return o.convert({conversions:t,operations:o,helpers:s},e,{r:n[0],g:n[1],b:n[2]})}}function e(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"hex":return 1==(y=Math.round(n.r).toString(16)).length&&(y="0"+y),1==(m=Math.round(n.g).toString(16)).length&&(m="0"+m),1==(M=Math.round(n.b).toString(16)).length&&(M="0"+M),"#"+y+m+M;case"cssrgb":return"rgb("+Math.round(n.r)+","+Math.round(n.g)+","+Math.round(n.b)+")";case"hsl":var a=[y=n.r/255,m=n.g/255,M=n.b/255].sort(),c=(a[0]+a[2])/2*100;return a[0]==a[2]?(d=0,g=0):(d=c>=50?(a[2]-a[0])/(2-a[2]-a[0])*100:(a[2]-a[0])/(a[2]+a[0])*100,(g=a[2]==y?(m-M)/(a[2]-a[0])*60:a[2]==m?60*(2+(M-y)/(a[2]-a[0])):60*(4+(y-m)/(a[2]-a[0])))<0?g+=360:g>360&&(g%=360)),{h:g,s:d,l:c};case"csshsl":var i=o.convert({conversions:t,helpers:s},"hsl",n);return"hsl("+Math.round(i.h)+","+Math.round(i.s)+"%,"+Math.round(i.l)+"%)";case"cmyk":var u=n.r/255,l=n.g/255,h=n.b/255,v=1-Math.max(u,l,h);if(1!=v)var p=(1-u-v)/(1-v),f=(1-l-v)/(1-v),b=(1-h-v)/(1-v);else var p=0,f=0,b=0;return{c:p,m:f,y:b,k:v};case"hsv":var g,d,y=n.r/255,m=n.g/255,M=n.b/255,Y=Math.min(y,m,M),X=Math.max(y,m,M),w=X-Y,Z=X;if(0==w)g=0,d=0;else{d=w/X;var R=((X-y)/6+w/2)/w,S=((X-m)/6+w/2)/w,O=((X-M)/6+w/2)/w;y==X?g=O-S:m==X?g=1/3+R-O:M==X&&(g=2/3+S-R),g<0&&(g+=1),g>1&&(g-=1)}return{h:360*g,s:100*d,v:100*Z};case"yiq":var b=n.r/255*.299+n.g/255*.587+n.b/255*.114,A=n.r/255*.596+n.g/255*-.274+n.b/255*-.322,x=n.r/255*.211+n.g/255*-.523+n.b/255*.312;return A=s.bounded(A,[-.5957,.5957]),x=s.bounded(x,[-.5226,.5226]),{y:b,i:A,q:x};case"XYZ":var D=[n.r,n.g,n.b].map(function(r){return r/255}).map(function(r){return r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)}),j=s.getTransform("SRGB_XYZ").map(function(r){return D.reduce(function(e,n,t){return r[t]*n+e},0)}).map(function(r){return 100*r}),I=E(j,3);return{X:I[0],Y:I[1],Z:I[2]};case"lms":case"cielab":case"xyY":var L=o.convert({conversions:t,operations:o,helpers:s},"XYZ",n);return o.convert({conversions:t,operations:o,helpers:s},e,L)}}function n(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;n=n.replace(/((rgb\(|\))|[\s]*)/g,"").split(",");for(var a=0;a<n.length;a++)n[a]=parseInt(n[a]);switch(e){case"rgb":return{r:n[0],g:n[1],b:n[2]};default:return o.convert({conversions:t,operations:o,helpers:s},e,{r:n[0],g:n[1],b:n[2]})}}function t(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"rgb":if(0==n.s){var a=n.l/100*255;return{r:a,g:a,b:a}}var c,i,u;c=n.l>=50?n.l/100+n.s/100-n.l/100*(n.s/100):n.l/100*(1+n.s/100),i=n.l/100*2-c;var l,h,v,p=((u=n.h/360)+.333)%1,f=u,b=s.negMod(u-.333,1);return l=6*p<1?i+6*(c-i)*p:2*p<1?c:3*p<2?i+6*(.666-p)*(c-i):i,h=6*f<1?i+6*(c-i)*f:2*f<1?c:3*f<2?i+6*(.666-f)*(c-i):i,v=6*b<1?i+6*(c-i)*b:2*b<1?c:3*b<2?i+6*(.666-b)*(c-i):i,l<0&&(l=0),h<0&&(h=0),v<0&&(v=0),{r:255*l,g:255*h,b:255*v};case"csshsl":return"hsl("+Math.round(n.h)+","+Math.round(n.s)+"%,"+Math.round(n.l)+"%)";case"hsv":n.s=n.s/100,n.l=n.l/100;var g=n.s*(n.l<.5?n.l:1-n.l);return{h:n.h,s:100*(2*g/(n.l+g)),v:100*(n.l+g)};default:var d=o.convert({conversions:t,operations:o,helpers:s},"rgb",n);return o.convert({conversions:t,operations:o,helpers:s},e,d)}}function o(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;n=n.replace(/(hsl\(|\)|%|[\s]*)/g,"").split(",");for(var a=0;a<n.length;a++)n[a]=parseInt(n[a]);switch(e){case"hsl":return{h:n[0],s:n[1],l:n[2]};default:return o.convert({conversions:t,operations:o,helpers:s},e,{h:n[0],s:n[1],l:n[2]})}}function s(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"rgb":var a,c,i;n.h=n.h/360,n.s=n.s/100,n.v=n.v/100;var u=6*n.h;6==u&&(u=0);var l,h,v,p=Math.round(u),f=n.v*(1-n.s),b=n.v*(1-n.s*(u-p)),g=n.v*(1-n.s*(1-(u-p)));return 0==p?(l=n.v,h=g,v=f):1==p?(l=b,h=n.v,v=f):2==p?(l=f,h=n.v,v=g):3==p?(l=f,h=b,v=n.v):4==p?(l=g,h=f,v=n.v):(l=n.v,h=f,v=b),a=255*l,c=255*h,i=255*v,{r:a,g:c,b:i};case"hsl":n.h=n.h/360,n.s=n.s/100,n.v=n.v/100;return{h:360*n.h,s:100*((2-n.s)*n.v<1?n.s*n.v/((2-n.s)*n.v):n.s*n.v/(2-(2-n.s)*n.v)),l:100*((2-n.s)*n.v/2)};default:var d=o.convert({conversions:t,operations:o,helpers:s},"rgb",n);return o.convert({conversions:t,operations:o,helpers:s},e,d)}}function a(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"rgb":return{r:a=255*(1-n.c)*(1-n.k),g:c=255*(1-n.m)*(1-n.k),b:i=255*(1-n.y)*(1-n.k)};case"cssrgb":var a=255*(1-n.c)*(1-n.k),c=255*(1-n.m)*(1-n.k),i=255*(1-n.y)*(1-n.k);return"rgb("+Math.round(a)+","+Math.round(c)+","+Math.round(i)+")";default:var u=o.convert({conversions:t,operations:o,helpers:s},"rgb",n);return o.convert({conversions:t,operations:o,helpers:s},e,u)}}function c(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(n.i=s.bounded(n.i,[-.5957,.5957]),n.q=s.bounded(n.q,[-.5226,.5226]),e){case"rgb":var a=255*(n.y+.956*n.i+.621*n.q),c=255*(n.y+-.272*n.i+-.647*n.q),i=255*(n.y+-1.106*n.i+-1.703*n.q);return a=s.bounded(a,[0,255]),c=s.bounded(c,[0,255]),i=s.bounded(i,[0,255]),{r:a,g:c,b:i};default:var u=o.convert({conversions:t,operations:o,helpers:s},"rgb",n);return o.convert({conversions:t,operations:o,helpers:s},e,u)}}function i(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"rgb":var a=[n.X,n.Y,n.Z].map(function(r){return r/100}),c=s.getTransform("INVERSE_SRGB_XYZ").map(function(r){return a.reduce(function(e,n,t){return r[t]*n+e},0)}).map(function(r){return r<=.0031308?12.92*r:1.055*Math.pow(r,1/2.4)-.055}).map(function(r){return 255*r}),i=E(c,3),u=i[0],l=i[1],h=i[2];return s.boundedRgb({r:u,g:l,b:h});case"lms":var v=[n.X,n.Y,n.Z].map(function(r){return r/100}),p=s.getTransform("BRADFORD").map(function(r){return v.reduce(function(e,n,t){return r[t]*n+e},0)});return{rho:p[0],gamma:p[1],beta:p[2]};case"cielab":var f=s.getIlluminant("D65"),b=n.X/f.X,g=n.Y/f.Y,d=n.Z/f.Z,y=function(r){return r>.008856?s.cbrt(r):(903.3*r+16)/116},m=y(b),M=y(g);return{L:116*M-16,a:500*(m-M),b:200*(M-y(d))};case"xyY":return{x:n.X/(n.X+n.Y+n.Z),y:n.Y/(n.X+n.Y+n.Z),Y:n.Y};default:var Y=s.boundedRgb(o.convert({conversions:t,operations:o,helpers:s},"rgb",n));return o.convert({conversions:t,operations:o,helpers:s},e,Y)}}function u(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"XYZ":var a=n.Y/n.y*n.x,c=n.Y/n.y*(1-n.x-n.y);return{X:a,Y:n.Y,Z:c};default:var i=o.convert({conversions:t,operations:o,helpers:s},"XYZ",n);return o.convert({conversions:t,operations:o,helpers:s},e,i)}}function l(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"XYZ":var a=[n.rho,n.gamma,n.beta],c=s.getTransform("INVERSE_BRADFORD").map(function(r){return a.reduce(function(e,n,t){return r[t]*n+e},0)});return{X:100*c[0],Y:100*c[1],Z:100*c[2]};default:var i=o.convert({conversions:t,operations:o,helpers:s},"XYZ",n);return o.convert({conversions:t,operations:o,helpers:s},e,i)}}function h(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"XYZ":var a=s.getIlluminant("D65"),c=(n.L+16)/116,i=n.a/500+c,u=c-n.b/200,l=function(r){return Math.pow(r,3)>.008856?Math.pow(r,3):(116*r-16)/903.3},h=l(i),v=l(u),p=n.L>903.3*.008856?Math.pow(c,3):n.L/903.3;return{X:h*a.X,Y:p*a.Y,Z:v*a.Z};default:var f=o.convert({conversions:t,operations:o,helpers:s},"XYZ",n);return o.convert({conversions:t,operations:o,helpers:s},e,f)}}function v(r,e){return Object.keys(r).every(function(r){return-1!==e.indexOf(r)})}function p(r,e,n,t){var o=r.operations.convert(r,"XYZ",e),s=r.operations.convert(r,"lms",n);if(t)a=r.operations.convert(r,"lms",t);else var a=r.operations.convert(r,"lms",r.helpers.getIlluminant("D65"));var c=r.helpers.getTransform("BRADFORD"),i=r.helpers.getTransform("INVERSE_BRADFORD"),u=[[s.rho/a.rho,0,0],[0,s.gamma/a.gamma,0],[0,0,s.beta/a.beta]],l=r.helpers.matrixMultiply(i,u),h=r.helpers.matrixMultiply(l,c),v=[[o.X],[o.Y],[o.Z]],p=r.helpers.matrixMultiply(h,v),f={X:p[0][0],Y:p[1][0],Z:p[2][0]};return r.helpers.ready(r,f)}function f(r,e,n,t){for(var o=r.operations.convert(r,"hsl",t),s=[{h:o.h,s:o.s,l:o.l}],a=0;a<n-1;a++)o.h=r.helpers.negMod(o.h+e,360),s.push({h:o.h,s:o.s,l:o.l});return r.helpers.ready(r,s)}function b(r,e,n){var t=r.operations.convert(r,"hsl",n);return t.l+=e,t.l<0?t.l=0:t.l>100&&(t.l=100),r.helpers.ready(r,t)}function g(r,e){var n=r.operations.convert(r,"hsl",e);return n.h=(n.h+180)%360,r.helpers.ready(r,n)}function d(r,e,n){var t=r.operations.convert(r,"rgb",n);return t.r=255*((t.r/255-.5)*e+.5),t.r<0?t.r=0:t.r>255&&(t.r=255),t.g=255*((t.g/255-.5)*e+.5),t.g<0?t.g=0:t.g>255&&(t.g=255),t.b=255*((t.b/255-.5)*e+.5),t.b<0?t.b=0:t.b>255&&(t.b=255),r.helpers.ready(r,t)}function y(r,e){var n=r.operations.convert(r,"rgb",e);return n=(299*n.r+587*n.g+114*n.b)/1e3>=128?{r:0,g:0,b:0}:{r:255,g:255,b:255},r.helpers.ready(r,n)}function m(r,e,n){if(Object.keys(r.conversions).indexOf(e)>-1){n.colour?n=n.colour:n.colours&&(n=n.colours);var t=r.helpers.determineMode(n);return t!=e?r.conversions[t].convert(r,e,n):n}return r.helpers.ready(r,e)}function M(r,e,n,t,o){t=t||1,o=o||1;var s=r.operations.convert(r,"cielab",e),a=r.operations.convert(r,"cielab",n),c=Math.sqrt(Math.pow(s.a,2)+Math.pow(s.b,2)),i=c-Math.sqrt(Math.pow(a.a,2)+Math.pow(a.b,2)),u=s.L-a.L,l=s.a-a.a,h=s.b-a.b,v=Math.sqrt(Math.pow(l,2)+Math.pow(h,2)-Math.pow(i,2)),p=s.L<16?.511:.040975*s.L/(1.01765*s.L),f=.0638*c/(1.0131*c),b=Math.atan2(s.b,s.a),g=b>=0?b:b+360,d=164<=g&&g<=345?.56+Math.abs(.2*Math.cos(r.helpers.toRad(g+168))):.36+Math.abs(.4*Math.cos(r.helpers.toRad(g+35))),y=Math.pow(c,4)/(Math.pow(c,4)+1900),m=f*(y*d+1-y),M=Math.pow(u/(t*p),2);Math.pow(i/(o*f),2),Math.pow(v/m,2);return Math.sqrt(M+M+M)}function Y(r,e,n,t){var o=r.operations.convert(r,"rgb",n),s=r.operations.convert(r,"rgb",t),a=[o];e-=1;for(var c=(s.r-o.r)/e,i=(s.g-o.g)/e,u=(s.b-o.b)/e,l={r:o.r,g:o.g,b:o.b},h=0;h<e-1;h++)l.r=r.helpers.slopeMod(l.r+c,255),l.g=r.helpers.slopeMod(l.g+i,255),l.b=r.helpers.slopeMod(l.b+u,255),a.push({r:l.r,g:l.g,b:l.b});return a.push(s),r.helpers.ready(r,a)}function X(r,e){var n=r.operations.convert(r,"rgb",e),t=(n.r+n.g+n.b)/3;return n={r:t,g:t,b:t},r.helpers.ready(r,n)}function w(r,e,n){var t=r.operations.convert(r,"hsl",n);return t.h=r.helpers.negMod(t.h+e,360),r.helpers.ready(r,t)}function Z(r,e){var n=r.operations.convert(r,"rgb",e);return n.r=r.helpers.negMod(255-n.r,255),n.g=r.helpers.negMod(255-n.g,255),n.b=r.helpers.negMod(255-n.b,255),r.helpers.ready(r,n)}function R(r,e){var n=r.operations.convert(r,"hsl",e);return n.l=100-n.l,r.helpers.ready(r,n)}function S(r,e,n){var t=r.operations.convert(r,"hsl",e),o=r.operations.convert(r,"hsl",n),s={h:(t.h+o.h)/2,s:(t.s+o.s)/2,l:(t.l+o.l)/2};return r.helpers.ready(r,s)}function O(r,e,n){var t=r.operations.convert(r,"hsl",e),o=r.operations.convert(r,"hsl",n),s={h:t.h,s:t.s,l:t.l/100*(o.l/100)*100};return s.l=s.l>100?100:s.l,s.l=s.l<0?0:s.l,r.helpers.ready(r,s)}function A(r,e,n){var t=r.operations.convert(r,"hsl",n);return t.s+=e,t.s<0?t.s=0:t.s>100&&(t.s=100),r.helpers.ready(r,t)}function x(r,e){var n=r.operations.convert(r,"rgb",e),t={};return t.r=.393*n.r+.769*n.g+.189*n.b,t.g=.349*n.r+.686*n.g+.168*n.b,t.b=.272*n.r+.534*n.g+.131*n.b,r.helpers.ready(r,t)}function D(r,e,n){var t=r.operations.convert(r,"hsv",n);return t.v+=e,t.v<0?t.v=0:t.v>100&&(t.v=100),r.helpers.ready(r,t)}function j(r,e){var n=r.operations.convert(r,"xyY",e),t=(n.x-.332)/(n.y-.1858);return-449*Math.pow(t,3)+3525*Math.pow(t,2)-6823.3*t+5520.33}function I(r,e){for(var n=r.operations.convert(r,"hsl",e),t=[{h:n.h,s:n.s,l:n.l}],o=0;o<3;o++)n.h=(n.h+90)%360,t.push({h:n.h,s:n.s,l:n.l});return r.helpers.ready(r,t)}function L(r,e){for(var n=r.operations.convert(r,"hsl",e),t=[{h:n.h,s:n.s,l:n.l}],o=0;o<2;o++)n.h=(n.h+120)%360,t.push({h:n.h,s:n.s,l:n.l});return r.helpers.ready(r,t)}var k=r,q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},E=function(){function r(r,e){var n=[],t=!0,o=!1,s=void 0;try{for(var a,c=r[Symbol.iterator]();!(t=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);t=!0);}catch(r){o=!0,s=r}finally{try{!t&&c.return&&c.return()}finally{if(o)throw s}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return r(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),T=function(r){if(Array.isArray(r)){for(var e=0,n=Array(r.length);e<r.length;e++)n[e]=r[e];return n}return Array.from(r)},B={hex:{test:function(r){return"string"==typeof r&&"#"===r.slice(0,1)},convert:k},rgb:{test:function(r){return v(r,["r","g","b"])},convert:e},cssrgb:{test:function(r){return"string"==typeof r&&"rgb("===r.slice(0,4)},convert:n},hsl:{test:function(r){return v(r,["h","s","l"])},convert:t},csshsl:{test:function(r){return"string"==typeof r&&"hsl("===r.slice(0,4)},convert:o},hsv:{test:function(r){return v(r,["h","s","v"])},convert:s},cmyk:{test:function(r){return v(r,["c","m","y","k"])},convert:a},yiq:{test:function(r){return v(r,["y","i","q"])},convert:c},XYZ:{test:function(r){return v(r,["X","Y","Z"])},convert:i},xyY:{test:function(r){return v(r,["x","y","Y"])},convert:u},lms:{test:function(r){return v(r,["rho","gamma","beta"])},convert:l},cielab:{test:function(r){return v(r,["L","a","b"])},convert:h}},F={adapt:p,adjacent:f,brightness:b,complementary:g,contrast:d,contrastRatio:y,convert:m,difference:M,fade:Y,greyscale:X,hue:w,invert:Z,invertLightness:R,mid:S,multiply:O,saturation:A,sepia:x,shade:D,temperature:j,tetrad:I,triad:L},N={ILLUMINANTS:{A:{X:1.0985*100,Y:100,Z:35.585},B:{X:99.072,Y:100,Z:85.223},C:{X:98.074,Y:100,Z:118.232},D50:{X:96.422,Y:100,Z:82.521},D55:{X:95.682,Y:100,Z:92.149},D65:{X:95.047,Y:100,Z:108.883},D75:{X:94.972,Y:100,Z:122.638},E:{X:100,Y:100,Z:100},F2:{X:.99186*100,Y:100,Z:67.393},F7:{X:95.041,Y:100,Z:108.747},F11:{X:1.00962*100,Y:100,Z:64.35}},TRANSFORMS:{BRADFORD:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],INVERSE_BRADFORD:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]],SRGB_XYZ:[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],INVERSE_SRGB_XYZ:[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]]}},_=function(r,e,n){var t=Object.keys(r.operations).reduce(function(e,t){var o=r.operations[t];return e[t]=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];var a=t.slice(0).map(function(r){return"object"===(void 0===r?"undefined":q(r))?Object.assign({},r):r});if(n&&n.colours){return function e(n){var t=n.map(function(n){if(Array.isArray(n)){var t=e(n);return t.colours||t.colour}var s=o.apply(void 0,[r].concat(T(a),[n]));return"object"===(void 0===s?"undefined":q(s))?s.colours||s.colour:s});return"number"!=typeof t[0]?r.helpers.ready(r,t):t}(n.colours)}return o.apply(void 0,[r].concat(T(a),[n?n.colour:void 0]))},e},{});return n||(t=Object.assign(t,e)),t},P={getIlluminant:function(r){return N.ILLUMINANTS[r]},getTransform:function(r){return N.TRANSFORMS[r]},matrixMultiply:function(r,e){for(var n=[],t=0;t<r.length;t++){n[t]=[];for(var o=0;o<e[0].length;o++){for(var s=0,a=0;a<r[0].length;a++)s+=r[t][a]*e[a][o];n[t][o]=s}}return n},cbrt:function(r){if(Math.cbrt)return Math.cbrt(r);var e=Math.pow(Math.abs(r),1/3);return r<0?-e:e},toRad:function(r){return r*(Math.PI/180)},toDeg:function(r){return r*(180/Math.PI)},negMod:function(r,e){return(r%e+e)%e},slopeMod:function(r){function e(e,n){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r,e){return r>2*e?slopeMod(r-2*e,e):r>e?2*e-r:r<0?slopeMod(r+2*e,e):r}),bounded:function(r,e){return r<e[0]?r=e[0]:r>e[1]&&(r=e[1]),r},boundedRgb:function(r){var e=this,n=function(r){return e.bounded(r,[0,255])};return{r:n(r.r),g:n(r.g),b:n(r.b)}},determineMode:function(r){for(var e in B)if(B.hasOwnProperty(e)&&B[e].test(r))return e;return null},ready:function(r,e){var n=r.conversions,t=r.operations,o=r.helpers,s={};switch(Object.prototype.toString.call(e)){case"[object Object]":case"[object String]":s.colour=e;for(var a in n)n.hasOwnProperty(a)&&function(r){Object.defineProperty(s,r,{get:function(){o.determineMode(e);return t.convert({conversions:n,operations:t,helpers:o},r,e)},enumerable:!0})}(a);return s=Object.assign(s,_({conversions:n,operations:t,helpers:o},N,s));case"[object Array]":s.colours=e;for(var c in n)n.hasOwnProperty(c)&&function(r){Object.defineProperty(s,r,{get:function(){return function e(s){return s.map(function(s){return Array.isArray(s)?e(s):t.convert({conversions:n,operations:t,helpers:o},r,s)})}(e)},enumerable:!0})}(c);return s=Object.assign(s,_({conversions:n,operations:t,helpers:o},N,s));default:return null}}};return _({conversions:B,operations:F,helpers:P},N)});
