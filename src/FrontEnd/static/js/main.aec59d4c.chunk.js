(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,a,t){"use strict";(function(e){var n=t(1),r=t.n(n),c=t(83),o=t(167);t(364),t(367),t(369);a.a=Object(c.hot)(e)(function(){return r.a.createElement(o.a,null)})}).call(this,t(182)(e))},167:function(e,a,t){"use strict";var n=t(1),r=t.n(n),c=t(382),o=t(377),i=t(18),s=t.n(i),l=t(33),d=t(39),m=t(40),u=t(114),h=t(84),p=t(115),f=t(376),g=t(381),v=Object(g.a)(function(e){var a=e.to,t=e.children,n=e.icon,c=e.location.pathname.startsWith(a);return r.a.createElement("li",{className:c?"nav-item active":"nav-item"},r.a.createElement(f.a,{className:"nav-link",to:a},r.a.createElement("i",{className:"fa fa-"+n}),r.a.createElement("p",null,t)))}),E=function(e){var a=e.menu;e.title;return r.a.createElement("div",{className:"sidebar","data-color":"black","data-background-color":"black"},r.a.createElement("div",{className:"logo"},r.a.createElement("span",{className:"simple-text logo-normal"},"Painel Anatel")),r.a.createElement("div",{className:"sidebar-wrapper"},a.map(function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement("ul",{className:"nav",key:e.id},e.menu.map(function(e){return r.a.createElement(v,{key:e.text,to:e.href,icon:e.icon},e.text)})))})))},b=t(379),y=t(378),w=function(){return r.a.createElement(b.a,{active:!0,inverted:!0,style:{backgroundColor:"#eee",height:"100vh",display:"flex",alignItems:"center"}},r.a.createElement(y.a,{src:"/img/loading_gif.gif",style:{width:"50%"}}))},N=[{id:0,menu:[{text:"Sem internet",href:"/",icon:"map-marker-alt"},{text:"Baixa velocidade",href:"/acesso",icon:"map-marked-alt"}]}],x=function(e){var a=e.children,t=(e.title,e.loading);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(E,{menu:N,title:"Sidebar"}),r.a.createElement("div",{className:"main-panel"},t&&r.a.createElement(w,null),!t&&a)))},k=t(168),C=t(163),j=t.n(C),R=new(function(){function e(){Object(d.a)(this,e),this.api_url="http://18.224.38.239:8000/api/"}return Object(m.a)(e,[{key:"request",value:function(e,a){var t=a&&a.headers?a.headers:{};return j()(Object(k.a)({},a,{url:this.api_url+e,headers:t}))}}]),e}()),L=t(27),O=t(164),_=function(e){var a=e.data,t=e.isLow;return r.a.createElement(O.a,{height:120,options:{scales:{xAxes:[{stacked:!0,ticks:{beginAtZero:!0}}],yAxes:[{stacked:!0,ticks:{beginAtZero:!0}}]}},data:{labels:a.map(function(e){return e.label}),datasets:[{label:t?"Quantidade de Pontos de Internet Reduzida":"Quantidade de Pontos com Conex\xe3o",fill:!1,lineTension:.1,backgroundColor:"#2b3787",borderColor:"#2b3787",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#2b3787",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#2b3787",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:a.map(function(e){return e.quantity})}]}})},A=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={chartData:{},regions:[],states:[],loading:!0,minorLoading:!0},t.changeRegion=function(){var e=Object(l.a)(s.a.mark(function e(a){var n,r,c,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.target.value,r=[{UF:"Todos os Estados",Cod_Estado:0}],e.next=4,R.request("low_connection/region/"+n);case 4:return c=e.sent.data,e.next=7,R.request("states/"+n);case 7:o=e.sent.data,t.setState({chartData:c,states:r.concat(o)});case 9:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),t.changeState=function(){var e=Object(l.a)(s.a.mark(function e(a){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({minorLoading:!0}),n=a.target.value,e.next=4,R.request("low_connection/state/"+n);case 4:r=e.sent.data,t.setState({chartData:r,minorLoading:!1});case 6:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark(function e(){var a,t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return document.title="Painel da Anatel",a=[{Regiao:"Todas Regi\xf5es",Cod_Regiao:0}],e.next=4,R.request("low_connection/");case 4:return t=e.sent.data,e.next=7,R.request("regions/");case 7:n=e.sent.data,this.setState({chartData:t,regions:a.concat(n),loading:!1,minorLoading:!1});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(x,{title:"Painel da Anatel",loading:this.state.loading},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h3",null,"Regi\xf5es sem conex\xe3o de Internet - Caso de uso 02"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header card-header-icon card-header-primary"},r.a.createElement("div",{className:"card-icon"},r.a.createElement("i",{className:"material-icons"},"settings")),r.a.createElement("h4",{className:"card-title"},"ANATEL - Filtros de Busca")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row",style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},r.a.createElement(L.b,{style:{marginLeft:"20px"}},"Escolha uma Regi\xe3o"),r.a.createElement(L.b,{className:"col-md-3",style:{paddingLeft:0}},"Escolha um Estado")),r.a.createElement("div",{className:"row",style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},r.a.createElement(L.a,{type:"select",name:"refuse",id:"motivo",className:"col-md-3",onChange:this.changeRegion,style:{marginLeft:"20px"}},this.state.regions.map(function(e){return r.a.createElement("option",{key:e.Cod_Regiao,value:e.Cod_Regiao},e.Regiao)})),r.a.createElement(L.a,{type:"select",name:"refuse",id:"motivo",onChange:this.changeState,className:"col-md-3"},this.state.states.map(function(e){return r.a.createElement("option",{key:e.Cod_Estado,value:e.Cod_Estado},e.UF)}))))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header card-header-icon card-header-primary"},r.a.createElement("div",{className:"card-icon"},r.a.createElement("i",{className:"material-icons"},"bar_chart")),r.a.createElement("h4",{className:"card-title"},"Gr\xe1fico de quantidades de munic\xedpios sem acesso a internet")),r.a.createElement("div",{className:"card-body"},this.state.minorLoading?r.a.createElement("h2",{style:{marginTop:"30px",textAlign:"center"}},"Carregando novas informa\xe7\xf5es, por favor aguarde...."):r.a.createElement(_,{data:this.state.chartData,isLow:!0}),r.a.createElement("br",null))))))))}}]),a}(r.a.Component),S=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={chartData:{},regions:[],states:[],loading:!0,minorLoading:!0},t.changeRegion=function(){var e=Object(l.a)(s.a.mark(function e(a){var n,r,c,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.target.value,r=[{UF:"Todos os Estados",Cod_Estado:0}],e.next=4,R.request("has_connection/region/"+n);case 4:return c=e.sent.data,e.next=7,R.request("states/"+n);case 7:o=e.sent.data,t.setState({chartData:c,states:r.concat(o)});case 9:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),t.changeState=function(){var e=Object(l.a)(s.a.mark(function e(a){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({minorLoading:!0}),n=a.target.value,e.next=4,R.request("has_connection/state/"+n);case 4:r=e.sent.data,t.setState({chartData:r,minorLoading:!1});case 6:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark(function e(){var a,t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return document.title="Painel da Anatel",a=[{Regiao:"Todas Regi\xf5es",Cod_Regiao:0}],e.next=4,R.request("has_connection/");case 4:return t=e.sent.data,e.next=7,R.request("regions/");case 7:n=e.sent.data,this.setState({chartData:t,regions:a.concat(n),loading:!1,minorLoading:!1});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(x,{title:"Painel da Anatel",loading:this.state.loading},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h3",null,"Regi\xf5es com internet com baixa velocidade - Caso de Uso 01"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header card-header-icon card-header-primary"},r.a.createElement("div",{className:"card-icon"},r.a.createElement("i",{className:"material-icons"},"settings")),r.a.createElement("h4",{className:"card-title"},"ANATEL - Filtros de Busca")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row",style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},r.a.createElement(L.b,{style:{marginLeft:"20px"}},"Escolha uma Regi\xe3o"),r.a.createElement(L.b,{className:"col-md-3",style:{paddingLeft:0}},"Escolha um Estado")),r.a.createElement("div",{className:"row",style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},r.a.createElement(L.a,{type:"select",name:"refuse",id:"motivo",className:"col-md-3",onChange:this.changeRegion,style:{marginLeft:"20px"}},this.state.regions.map(function(e){return r.a.createElement("option",{key:e.Cod_Regiao,value:e.Cod_Regiao},e.Regiao)})),r.a.createElement(L.a,{type:"select",name:"refuse",id:"motivo",onChange:this.changeState,className:"col-md-3"},this.state.states.map(function(e){return r.a.createElement("option",{key:e.Cod_Estado,value:e.Cod_Estado},e.UF)}))))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header card-header-icon card-header-primary"},r.a.createElement("div",{className:"card-icon"},r.a.createElement("i",{className:"material-icons"},"bar_chart")),r.a.createElement("h4",{className:"card-title"},"Gr\xe1fico de acessos que possuem internet com velocidade baixa")),r.a.createElement("div",{className:"card-body"},this.state.minorLoading?r.a.createElement("h2",{style:{marginTop:"30px",textAlign:"center"}},"Carregando novas informa\xe7\xf5es, por favor aguarde...."):r.a.createElement(_,{data:this.state.chartData,isLow:!1}),r.a.createElement("br",null),r.a.createElement("div",{style:{textAlign:"center"}},"Quantidade Total de Acessos que possuem internet com baixa velocidade, ou seja, entre as faixas de 0 a 512kbps e 512kbps a 2mbps."))))))))}}]),a}(r.a.Component),q=function(){return r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Erro 404"),r.a.createElement("h3",null,"P\xe1gina n\xe3o encontrada"),r.a.createElement("span",null,r.a.createElement(f.a,{to:"/"},"Voltar ao in\xedcio"))))};a.a=function(){return r.a.createElement(c.a,null,r.a.createElement(o.a,{exact:!0,path:"/",component:A}),r.a.createElement(o.a,{exact:!0,path:"/acesso",component:S}),r.a.createElement(o.a,{component:q}))}},176:function(e,a,t){e.exports=t(371)},367:function(e,a,t){},369:function(e,a,t){},371:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(20),o=t.n(c),i=t(380),s=t(83),l=t(151),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(s.AppContainer,null,r.a.createElement(i.a,null,r.a.createElement(l.a,null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");d?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):m(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):m(e)})}}()}},[[176,2,1]]]);
//# sourceMappingURL=main.aec59d4c.chunk.js.map