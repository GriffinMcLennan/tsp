(this.webpackJsonpcanvas=this.webpackJsonpcanvas||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),i=n(5),r=n.n(i),o=(n(14),n(3)),h=n(1),l=n(2),c=n(7),u=n(6),f=n(8),p=(n(15),function(t,e,n){var a=t.getContext("2d");a.strokeStyle="black",a.beginPath(),a.arc(e,n,10,0,2*Math.PI),a.fillStyle="red",a.fill(),a.stroke()}),v=function(t){var e=t;e.getContext("2d").clearRect(0,0,e.width,e.height)},g=function(t,e){var n=t,a=n.getContext("2d"),s=e;v(n),a.strokeStyle="black";for(var i=0;i<s.length;i++)p(n,s[i][0],s[i][1]);for(var r=0;r<s.length-1;r++)a.beginPath(),a.moveTo(s[r][0],s[r][1]),a.lineTo(s[r+1][0],s[r+1][1]),a.stroke()},d=function(t,e,n){var a=t,s=a.getContext("2d"),i=e;v(a);for(var r=2e3/i.length,o=0;o<i.length;o++)p(a,i[o][0],i[o][1]);s.strokeStyle="red";for(var h=function(t){setTimeout((function(){s.beginPath(),s.moveTo(i[t][0],i[t][1]),s.lineTo(i[t+1][0],i[t+1][1]),s.stroke(),t===i.length-2&&n()}),r*t)},l=0;l<i.length-1;l++)h(l)},m=function(t){for(var e=t[0],n=t[0],a=1;a<t.length;a++)t[a]>n&&(n=t[a]),t[a]<e&&(e=t[a]);return[e,n]},b=function(t,e,n,a){var s=a/(n-e);console.log(s);for(var i=[],r=0;r<t.length;r++)i.push((t[r]-e)*s),i[r]=a-i[r];return i},k=function(t,e,n,a,s,i){var r,h=t,l=n,c=-1,u=e.getContext("2d"),f=m(a),p=Object(o.a)(f,2),v=p[0],k=p[1],M=b(a,v,k,500);console.log(a),console.log(M);for(var w=500/(M.length-1),y=0,O=3e3/l.length,S=function(t){setTimeout((function(){r=a[t],t!==l.length-1?(g(h,l[t]),(c<0||c>a[t])&&(c=a[t])):d(h,l[t],i),0===t?(u.beginPath(),u.moveTo(y,M[0])):(u.lineTo(y,M[t]),u.stroke()),y+=w,s(r,c)}),t*O)},j=0;j<l.length;j++)S(j)};var M=function(t){for(var e=[],n=0;n<t.length;n++){for(var a=[],s=0;s<t[n].length;s++)a.push(t[n][s]);e.push(a)}return e},w=function(t){for(var e=0,n=t,a=1;a<t.length;a++)e+=Math.sqrt(Math.pow(n[a][0]-n[a-1][0],2)+Math.pow(n[a][1]-n[a-1][1],2));return e=Math.round(e)},y=function(t){if(!(t.length<2)){for(var e=Math.floor(Math.random()*t.length),n=Math.floor(Math.random()*t.length);n===e;)n=Math.floor(Math.random()*t.length);var a=t[e][0],s=t[e][1];t[e][0]=t[n][0],t[e][1]=t[n][1],t[n][0]=a,t[n][1]=s}},O=function(t,e){for(var n=e,a=[],s=[],i=[],r=-1,o=M(t),h=0;h<n;h++)y(o),a.push(o),i.push(w(o)),(i[h]<r||-1===r)&&(r=i[h],s=o),o=M(t);return a.push(s),i.push(r),[a,i]},S=function(t,e,n){return e<t?1:Math.exp((t-e)/n)},j=function(t){var e=1e5,n=[],a=[],s=w(t),i=M(t);n.push(t),a.push(s);for(var r=s,o=t;e>.01;){var h=M(i);y(h);var l=w(h);S(s,l,e)>Math.random()&&(i=M(h),n.push(i),a.push(l),(s=l)<r&&(r=s,o=i)),e*=.95}return n.push(o),a.push(r),[n,a]},C=function(t){for(var e=0;e<t.length;e++){for(var n=Math.floor(Math.random()*t.length);n===e;)n=Math.floor(Math.random()*t.length);var a=t[e];t[e]=t[n],t[n]=a}},E=function(){function t(e){Object(h.a)(this,t);var n=M(e);C(n),this.path=n,this.calcFitness()}return Object(l.a)(t,[{key:"calcFitness",value:function(){this.fitness=1/(1+w(this.path))}}]),t}(),D=function(){function t(e){Object(h.a)(this,t);for(var n=[],a=0;a<100;a++)n.push(new E(e));this.paths=n}return Object(l.a)(t,[{key:"getFittest",value:function(){for(var t=this.paths[0],e=t.fitness,n=1;n<this.paths.length;n++)this.paths[n].fitness>e&&(e=this.paths[n].fitness,t=this.paths[n]);return t}},{key:"normalizeFitness",value:function(){for(var t=0,e=0;e<this.paths.length;e++)t+=this.paths[e].fitness;for(var n=0;n<this.paths.length;n++)this.paths[n].fitness=this.paths[n].fitness/t}}]),t}(),A=function(t){for(var e=0,n=Math.random();n>0;)n-=t[e].fitness,e++;return M(t[--e].path)},F=function(){function t(e){Object(h.a)(this,t),this.eliteOffset=5,this.population=new D(e),this.population.normalizeFitness(),this.sortByFitness()}return Object(l.a)(t,[{key:"evole",value:function(t){for(var e=[],n=[],a=1e10,s=[],i=0;i<t;i++){for(var r=1e11,o=[],h=0;h<this.population.paths.length;h++){var l=w(this.population.paths[h].path);l<r&&(r=l,o=this.population.paths[h].path),l<a&&(a=l,s=this.population.paths[h].path)}e.push(o),n.push(r),this.nextGeneration()}return e.push(s),n.push(a),[e,n]}},{key:"nextGeneration",value:function(){for(var t=[],e=0;e<this.eliteOffset;e++)t.push(M(this.population.paths[e].path));for(var n=0;n<this.population.paths.length-this.eliteOffset;n++){var a=A(this.population.paths);if(Math.random()>.8){var s=A(this.population.paths);a=this.crossOver(a,s)}else y(a);t.push(a)}for(var i=0;i<this.population.paths.length;i++)this.population.paths[i].path=t[i],this.population.paths[i].calcFitness();this.population.normalizeFitness(),this.sortByFitness()}},{key:"crossOver",value:function(t,e){for(var n=Math.floor(Math.random()*t.length),a=Math.floor(Math.random()*t.length),s=[];a===n;)a=Math.floor(Math.random()*t.length);if(n>a){var i=a;a=n,n=i}for(var r=n;r<a;r++)s.push(t[r]);for(var o=0;o<e.length;o++)this.contains(s,e[o])||s.push(e[o]);for(var h=0;h<t.length;h++)this.contains(s,t[h])||s.push(t[h]);return s}},{key:"contains",value:function(t,e){for(var n=0;n<t.length;n++)if(t[n][0]===e[0]&&t[n][1]===e[1])return!0;return!1}},{key:"sortByFitness",value:function(){for(var t=this.population,e=0;e<t.paths.length-1;e++)for(var n=e+1;n<t.paths.length;n++)if(t.paths[n].fitness>t.paths[e].fitness){var a=t.paths[e].path,s=t.paths[e].fitness;t.paths[e].path=t.paths[n].path,t.paths[e].fitness=t.paths[n].fitness,t.paths[n].path=a,t.paths[n].fitness=s}}}]),t}(),x=function(t){function e(){var t,n;Object(h.a)(this,e);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(c.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(s)))).state={circles:[],bestPath:[],bestDistance:-1,distance:null,drawing:!1},n.setDistances=function(t,e){n.setState({distance:t,bestDistance:e})},n.doneDrawing=function(){n.setState({drawing:!1})},n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"addCircle",value:function(t,e){var n=this.state.circles.slice();n.push([t,e]),y(n),this.setState({circles:n}),p(this.refs.canvas,t,e)}},{key:"resetState",value:function(){!0!==this.state.drawing?(v(this.refs.canvas),v(this.refs.canvas2),this.setState({circles:[],bestDistance:-1,distance:null,drawing:!1})):alert("Wait for animation to finish before resetting!")}},{key:"selectAlgorithm",value:function(t){if(this.state.circles.length<2)alert("Must contain at least 2 or more circles to find paths");else if(!0!==this.state.drawing){var e,n;if(v(this.refs.canvas2),this.setState({drawing:!0}),this.setDistances(null,-1),"SA"===t){var a=j(this.state.circles),s=Object(o.a)(a,2);e=s[0],n=s[1]}else if("randomSwap"===t){var i=O(this.state.circles,50),r=Object(o.a)(i,2);e=r[0],n=r[1]}else if("GA"===t){var h=new F(this.state.circles).evole(1e3),l=Object(o.a)(h,2);e=l[0],n=l[1]}k(this.refs.canvas,this.refs.canvas2,e,n,this.setDistances,this.doneDrawing)}else alert("Wait for animation to finish before selecting another algorithm!")}},{key:"render",value:function(){var t,e=this;return t=-1===this.state.bestDistance?"":this.state.bestDistance,s.a.createElement("div",{className:"container"},s.a.createElement("div",null,s.a.createElement("canvas",{ref:"canvas",width:1e3,height:980,onClick:function(t){return e.addCircle(t.clientX,t.clientY)}}),s.a.createElement("div",{id:"div2"},s.a.createElement("p",null,"Current Solution Distance"),s.a.createElement("canvas",{ref:"canvas2",id:"distancegraph",width:500,height:500}))),s.a.createElement("p",{className:"scoreboard"},"Current Distance: ",this.state.distance),s.a.createElement("p",{className:"scoreboard"},"Best Distance: ",t),s.a.createElement("div",null,s.a.createElement("button",{className:"btn",onClick:function(){return e.selectAlgorithm("randomSwap")}},"Random Swap"),s.a.createElement("button",{className:"btn",onClick:function(){return e.selectAlgorithm("SA")}},"Simulated Anealing"),s.a.createElement("button",{className:"btn",onClick:function(){return e.selectAlgorithm("GA")}},"Genetic Algorithm"),s.a.createElement("button",{className:"btn",onClick:function(){return e.resetState()}},"Reset")))}}]),e}(s.a.Component);r.a.render(s.a.createElement(x,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.3a9aa466.chunk.js.map