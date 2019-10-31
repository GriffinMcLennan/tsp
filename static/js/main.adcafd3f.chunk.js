(this.webpackJsonpcanvas=this.webpackJsonpcanvas||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(2),r=a.n(i),c=(a(13),a(3)),o=a(4),l=a(6),h=a(5),u=a(7),v=(a(14),function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(l.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(s)))).state={circles:[],bestPath:[],bestDistance:1e7,distance:null,drawing:!1},a}return Object(u.a)(e,t),Object(o.a)(e,[{key:"drawCircle",value:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=this.refs.canvas.getContext("2d");n.strokeStyle="black",n.beginPath(),n.arc(t,e,10,0,2*Math.PI),a&&this.state.circles.push([t,e]),n.fillStyle="red",n.fill(),n.stroke()}},{key:"drawTSP",value:function(){var t=this.refs.canvas,e=t.getContext("2d");e.clearRect(0,0,t.width,t.height);var a=this.state.circles;e.strokeStyle="black";for(var n=0;n<a.length;n++)this.drawCircle(a[n][0],a[n][1]);for(var s=0;s<a.length-1;s++)e.beginPath(),e.moveTo(a[s][0],a[s][1]),e.lineTo(a[s+1][0],a[s+1][1]),e.stroke()}},{key:"calcDistance",value:function(){for(var t=this.state.circles,e=0,a=1;a<t.length;a++)e+=Math.sqrt(Math.pow(t[a][0]-t[a-1][0],2)+Math.pow(t[a][1]-t[a-1][1],2));if(e=Math.round(e),this.setState({distance:e}),e<=this.state.bestDistance){this.setState({bestDistance:e});for(var n=[],s=0;s<t.length;s++)n[s]=t[s].slice();this.setState({bestPath:n})}}},{key:"animateBest",value:function(){var t=this.refs.canvas,e=t.getContext("2d");e.clearRect(0,0,t.width,t.height);for(var a=this.state.bestPath,n=0;n<a.length;n++)e.beginPath(),e.arc(a[n][0],a[n][1],10,0,2*Math.PI),e.fillStyle="red",e.fill(),e.stroke();e.strokeStyle="red";for(var s=function(t){setTimeout((function(){e.beginPath(),e.moveTo(a[t][0],a[t][1]),e.lineTo(a[t+1][0],a[t+1][1]),e.stroke()}),200*t)},i=0;i<a.length-1;i++)s(i)}},{key:"solve",value:function(){var t=this,e=this.state.circles;this.setState({drawing:!0});if(e.length<3)alert("Place more than 2 locations to initiate pathfinding");else for(var a=e.slice(),n=function(e){setTimeout((function(){if(t.state.drawing){for(var n=Math.floor(Math.random()*a.length),s=Math.floor(Math.random()*a.length);s===n;)s=Math.floor(Math.random()*a.length);var i=a[n][0],r=a[n][1];a[n][0]=a[s][0],a[n][1]=a[s][1],a[s][0]=i,a[s][1]=r,t.setState({circles:a}),t.drawTSP(),t.calcDistance(),a=t.state.circles.slice(),100===e&&t.animateBest()}}),30*e)},s=0;s<=100;s++)n(s)}},{key:"reset",value:function(){this.setState({drawing:!1});var t=this.refs.canvas;t.getContext("2d").clearRect(0,0,t.width,t.height),this.setState({circles:[]}),this.setState({bestDistance:1e7}),this.setState({distance:null}),this.setState({drawing:!1})}},{key:"render",value:function(){var t,e=this;return t=1e7===this.state.bestDistance?"":this.state.bestDistance,s.a.createElement("div",{className:"container"},s.a.createElement("div",null,s.a.createElement("canvas",{ref:"canvas",width:1e3,height:1e3,onClick:function(t){return e.drawCircle(t.clientX,t.clientY,!0)}})),s.a.createElement("p",{className:"scoreboard"},"Current Distance: ",this.state.distance),s.a.createElement("p",{className:"scoreboard"},"Best Distance: ",t),s.a.createElement("div",null,s.a.createElement("button",{className:"btn",onClick:function(){return e.solve()}},"Solve"),s.a.createElement("button",{className:"btn",onClick:function(){return e.reset()}},"Reset")))}}]),e}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},8:function(t,e,a){t.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.adcafd3f.chunk.js.map