(this.webpackJsonppractice=this.webpackJsonppractice||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),l=n(4),r=n.n(l);n(14),n(15);var i=function(t){return o.a.createElement("div",{style:{backgroundColor:"#F00"}},o.a.createElement("img",{src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",alt:"Boom!!",style:{height:100,width:100,padding:20}}),o.a.createElement("p",{style:{fontSize:50,marginLeft:350,display:"inline",marginTop:10,color:"#ff0",position:"absolute",fontFamily:"cursive"}},"Meme Generator"))},c=n(1),s=n(2),m=n(5),p=n(6),u=n(8),h=n(7),g=(n(16),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(m.a)(this,n),(a=e.call(this,t)).handleChange=function(t){var e=t.target,n=e.name,o=e.value;a.setState(Object(s.a)({},n,o))},a.handleClick=function(){var t=Math.floor(Math.random()*a.state.allMemeImgs.length),e=a.state.allMemeImgs[t].url;a.setState({randomImg:e})},a.handleColor=function(){!0===a.state.ok?a.setState({ok:!1}):a.setState({ok:!0})},a.state={topText:"",bottomText:"",randomImg:"https://static01.nyt.com/images/2020/01/28/multimedia/28xp-memekid3/28cp-memekid3-articleLarge.jpg",allMemeImgs:[],ok:!0},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://api.imgflip.com/get_memes").then((function(t){return t.json()})).then((function(e){var n=e.data.memes;t.setState({allMemeImgs:n})}))}},{key:"render",value:function(){var t=this,e={position:"absolute",textAlign:"center",left:0,right:0,fontSize:42,fontFamily:"impact",textTransform:"uppercase",letterSpacing:1,color:"#fff",textShadow:"2px 2px #000"},n={position:"absolute",textAlign:"center",left:0,right:0,fontSize:42,fontFamily:"impact",textTransform:"uppercase",letterSpacing:1},a=function(){return t.state.ok?n:e};return o.a.createElement("div",null,o.a.createElement("div",{class:"input-group",style:{padding:30}},o.a.createElement("div",{class:"input-group-prepend"},o.a.createElement("span",{class:"input-group-text",id:""},"Enter Top and Bottom Text")),o.a.createElement("input",{type:"text",class:"form-control",value:this.state.topText,name:"topText",placeholder:"Top Text",onChange:this.handleChange}),o.a.createElement("input",{type:"text",class:"form-control",value:this.state.bottomText,name:"bottomText",placeholder:"Bottom Text",onChange:this.handleChange}),o.a.createElement("button",{type:"button",class:"btn btn-secondary",onClick:this.handleColor},"Change Colour"),o.a.createElement("button",{type:"button",class:"btn btn-info",style:{width:150},onClick:this.handleClick},"GO")),o.a.createElement("div",{style:{marginTop:50,marginBottom:150,textAlign:"center"}},o.a.createElement("h6",{style:Object(c.a)(Object(c.a)({},a()),{},{marginTop:8})},this.state.topText),o.a.createElement("h6",{style:Object(c.a)(Object(c.a)({},a()),{},{marginTop:430})},this.state.bottomText),o.a.createElement("img",{src:this.state.randomImg,alt:"meme",style:{width:600,height:500}})))}}]),n}(a.Component));var d=function(){return o.a.createElement("div",null,o.a.createElement(i,null),o.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,n){t.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.45001d9b.chunk.js.map