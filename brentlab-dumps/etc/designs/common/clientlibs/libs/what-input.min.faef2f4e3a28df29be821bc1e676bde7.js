window.whatInput=function(){function T(){J(),Q(event),B=!0,j=window.setTimeout(function(){B=!1
},650)
}function F(a){B||Q(a)
}function K(a){J(),Q(a)
}function J(){window.clearTimeout(j)
}function Q(d){var b=C(d),k=W[d.type];
if("pointer"===k&&(k=X(d)),q!==k){var f=U(d),a=f.nodeName.toLowerCase(),h="input"===a?f.getAttribute("type"):null;
!S.hasAttribute("data-whatinput-formtyping")&&q&&"keyboard"===k&&"tab"!==g[b]&&("textarea"===a||"select"===a||"input"===a&&R.indexOf(h)<0)||D.indexOf(b)>-1||H(k)
}"keyboard"===k&&G(b)
}function H(a){q=a,S.setAttribute("data-whatinput",q),-1===P.indexOf(q)&&P.push(q)
}function C(a){return a.keyCode?a.keyCode:a.which
}function U(a){return a.target||a.srcElement
}function X(a){return"number"==typeof a.pointerType?z[a.pointerType]:"pen"===a.pointerType?"touch":a.pointerType
}function G(a){-1===N.indexOf(g[a])&&g[a]&&N.push(g[a])
}function V(b){var a=C(b),c=N.indexOf(g[a]);
-1!==c&&N.splice(c,1)
}function I(){S=document.body,window.PointerEvent?(S.addEventListener("pointerdown",F),S.addEventListener("pointermove",F)):window.MSPointerEvent?(S.addEventListener("MSPointerDown",F),S.addEventListener("MSPointerMove",F)):(S.addEventListener("mousedown",F),S.addEventListener("mousemove",F),"ontouchstart" in window&&S.addEventListener("touchstart",T)),S.addEventListener(O,F),S.addEventListener("keydown",K),S.addEventListener("keyup",K),document.addEventListener("keyup",V)
}function A(){return O="onwheel" in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"
}var S,N=[],B=!1,q=null,R=["button","checkbox","file","image","radio","reset","submit"],O=A(),D=[16,17,18,91,93],W={keydown:"keyboard",keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch"};
W[A()]="mouse";
var j,P=[],g={9:"tab",13:"enter",16:"shift",27:"esc",32:"space",37:"left",38:"up",39:"right",40:"down"},z={2:"touch",3:"touch",4:"mouse"};
return"addEventListener" in window&&Array.prototype.indexOf&&(document.body?I():document.addEventListener("DOMContentLoaded",I)),{ask:function(){return q
},keys:function(){return N
},types:function(){return P
},set:H}
}();