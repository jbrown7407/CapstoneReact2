(this.webpackJsonpdinnder=this.webpackJsonpdinnder||[]).push([[0],{36:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),i=a.n(s),l=a(27),c=a.n(l),r=(a(36),a(23)),h=a(19),o=a(5),j=a(6),d=a(10),b=a(8),u=a(7),O=a(14),p=a(4),m=a(17),x=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={id:"",meal:"",restlink:"",pic:""},n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n.handleChange=n.handleChange.bind(Object(d.a)(n)),n}return Object(j.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(m.a)({},e.target.id,e.target.value))}},{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8000/api/v1/meals/"+this.props.match.params.id).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({id:t.data._id,meal:t.data.meal,restlink:t.data.restlink,pic:t.data.pic})}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log(this.props.match.params.id),fetch("http://localhost:8000/api/v1/meals/"+this.props.match.params.id,{method:"PUT",body:JSON.stringify({id:this.state._id,meal:this.state.meal,restlink:this.state.restlink,pic:this.state.pic}),headers:{"Content-Type":"application/json"}}).then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e),t.setState({redirect:!0}),t.props.getMeals()}))}},{key:"deleteMeal",value:function(e){var t=parseInt(e.data),a=this.state.meals.findIndex((function(e){return e.id===t}));console.log(a);var n=Object(h.a)(this.state.meals);n.splice(a,1),console.log(n),this.setState({meals:n})}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:["Edit",Object(n.jsx)("h2",{children:this.state._id&&this.state.meal}),Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsxs)("label",{htmlFor:"meal",children:["meal:",Object(n.jsx)("input",{type:"text",name:"meal",id:"meal",onChange:this.handleChange,value:this.state.meal})]}),Object(n.jsxs)("label",{htmlFor:"restlink",children:["Price:",Object(n.jsx)("input",{type:"text",name:"restlink",id:"restlink",onChange:this.handleChange,value:this.state.restlink})]}),Object(n.jsxs)("label",{htmlFor:"pic",children:["Image:",Object(n.jsx)("input",{type:"text",name:"pic",id:"pic",onChange:this.handleChange,value:this.state.pic})]}),"DELETE: ",Object(n.jsx)("button",{onClick:this.handleClick,children:"X"}),Object(n.jsx)("input",{type:"submit",value:"Save changes"})]}),this.state.redirect&&Object(n.jsx)(p.a,{to:"/"})]})}}]),a}(s.Component),f=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={id:"",meal:"",restlink:"",pic:""},n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n.handleChange=n.handleChange.bind(Object(d.a)(n)),n}return Object(j.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(m.a)({},e.target.id,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("http://localhost:8000/api/v1/meals/",{method:"POST",body:JSON.stringify({id:this.state.id,meal:this.state.meal,restlink:this.state.restlink,pic:this.state.pic}),headers:{"Content-Type":"application/json"}}).then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e),t.props.addMeal(e)})),this.setState({id:"",meal:"",restlink:"",pic:""})}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h2",{children:this.state.id}),Object(n.jsx)("h2",{children:this.state.meal}),Object(n.jsx)("h2",{children:this.state.restlink}),Object(n.jsx)("h2",{children:this.state.pic}),Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsxs)("label",{htmlFor:"id",children:["ID:",Object(n.jsx)("input",{type:"number",name:"id",id:"id",onChange:this.handleChange,value:this.state.id})]}),Object(n.jsxs)("label",{htmlFor:"meal",children:["Meal:",Object(n.jsx)("input",{type:"text",name:"meal",id:"meal",onChange:this.handleChange,value:this.state.meal})]}),Object(n.jsxs)("label",{htmlFor:"restlink",children:["Restaurant:",Object(n.jsx)("input",{type:"text",name:"restlink",id:"restlink",onChange:this.handleChange,value:this.state.restlink})]}),Object(n.jsxs)("label",{htmlFor:"pic",children:["Pic:",Object(n.jsx)("input",{type:"text",name:"pic",id:"pic",onChange:this.handleChange,value:this.state.pic})]}),Object(n.jsx)("input",{type:"submit",value:"New Meal"})]}),this.state.redirect&&Object(n.jsx)(p.a,{to:"/"})]})}}]),a}(s.Component),v=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(j.a)(a,[{key:"handleClick",value:function(){var e=this;fetch("http://localhost:8000/api/v1/meals/"+this.props.meal.id,{method:"DELETE"}).then((function(e){return console.log(e),e.json()})).then((function(t){console.log(t),e.props.deleteMeal(t)}))}},{key:"leftClick",value:function(){console.log("left click. add to dislike array for user")}},{key:"rightClick",value:function(){console.log("right click. add to favs array. option to link to restaurant")}},{key:"render",value:function(){return Object(n.jsxs)("article",{className:"bubble",children:[" ",Object(n.jsx)("img",{src:this.props.meal.pic,alt:"nope"})," ",Object(n.jsx)("br",{}),"  ",Object(n.jsx)("br",{}),"ID: ",this.props.meal.id," ",Object(n.jsx)("br",{}),"Meal: ",this.props.meal.meal," ",Object(n.jsx)("br",{}),"Restlink: ",Object(n.jsx)("a",{href:this.props.meal.restlink,target:"_blank",rel:"noreferrer",children:"Link to Restaurant"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{className:"left",children:"Left"}),Object(n.jsx)("button",{className:"right",children:"Right"}),"     ",Object(n.jsx)("br",{}),"   ",Object(n.jsx)("br",{}),Object(n.jsx)("button",{onClick:this.handleClick,children:"DELETE"})]})}}]),a}(s.Component),g=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[this.props.meals.map((function(t){return Object(n.jsx)(v,{meal:t,deleteMeal:e.props.deleteMeal})}))," "," "]})}}]),a}(s.Component),k=a(16),y=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"NavTop",children:[Object(n.jsxs)("div",{className:"banner",children:[Object(n.jsx)("div",{id:"navbar",children:Object(n.jsxs)(k.a,{horizontal:!0,className:"list",children:[Object(n.jsx)(O.b,{to:"/",children:Object(n.jsx)(k.a.Item,{children:"Home"})}),Object(n.jsx)(O.b,{to:"/swipe",children:Object(n.jsx)(k.a.Item,{children:"Swipe"})}),Object(n.jsx)(O.b,{to:"/new",children:Object(n.jsx)(k.a.Item,{children:"New"})}),Object(n.jsx)(O.b,{to:"/fulllist",children:Object(n.jsx)(k.a.Item,{children:"Full List"})}),Object(n.jsx)(O.b,{to:"/login",children:Object(n.jsx)(k.a.Item,{children:"Login"})})]})}),"  ",Object(n.jsx)("h1",{className:"logo2",children:" Dinnder "})]})," "]})}}]),a}(s.Component),C=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)("h1",{children:["User=","Jeff"]})})},M=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={meals:n.props.meals},n}return Object(j.a)(a,[{key:"render",value:function(){console.log(this.state.meals),console.log(typeof this.state.meals.data[1]);var e=[];return e.push(Object.values(this.state.meals)),console.log(typeof e),Object(n.jsx)("div",{})}}]),a}(s.Component),S=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:" Display one above here"})})}}]),a}(s.Component),I=a(29),N=a(30);function w(){return Object(n.jsx)("div",{children:Object(n.jsxs)(I.a,{children:[Object(n.jsx)("h1",{children:"Hello, User!"}),Object(n.jsx)("p",{children:"This is a simple food Tinder App. Swipe Right on food to find restaurants near you!"}),Object(n.jsx)("p",{children:Object(n.jsx)(N.a,{onClick:function(){console.log("button was clicked")},variant:"primary",children:"Learn more"})})]})})}var E=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={meals:[]},n.getMeals=n.getMeals.bind(Object(d.a)(n)),n.addMeal=n.addMeal.bind(Object(d.a)(n)),n.deleteMeal=n.deleteMeal.bind(Object(d.a)(n)),n}return Object(j.a)(a,[{key:"addMeal",value:function(e){this.setState({meals:[].concat(Object(h.a)(this.state.meals),[e.data])})}},{key:"deleteMeal",value:function(e){var t=parseInt(e.data),a=this.state.meals.findIndex((function(e){return e.id===t}));console.log(a);var n=Object(h.a)(this.state.meals);n.splice(a,1),console.log(n),this.setState({meals:n})}},{key:"getMeals",value:function(){var e=this;fetch("http://localhost:8000/api/v1/meals/").then((function(e){return console.log(e),e.json()})).then((function(t){console.log(t),e.setState({meals:t.data})}))}},{key:"componentDidMount",value:function(){this.getMeals()}},{key:"render",value:function(){var e=this;return Object(n.jsx)(O.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(y,{}),Object(n.jsxs)(p.d,{children:[Object(n.jsxs)(p.b,{exact:!0,path:"/new",children:["Create New Meal",Object(n.jsx)(f,{addMeal:this.addMeal})," "]}),Object(n.jsx)(p.b,{path:"/e/:id",render:function(t){return Object(n.jsx)(x,Object(r.a)(Object(r.a)({},t),{},{getMeals:e.getMeals}))}}),Object(n.jsxs)(p.b,{path:"/login",children:["Login",Object(n.jsx)(C,{})]}),Object(n.jsxs)(p.b,{path:"/swipe",children:[Object(n.jsx)(S,{}),Object(n.jsx)(M,{meals:this.state.meals})]}),Object(n.jsxs)(p.b,{path:"/fulllist",children:["FULL LIST ",Object(n.jsx)(g,{meals:this.state.meals,deleteMeal:this.deleteMeal})]}),Object(n.jsxs)(p.b,{path:"/",children:["HOME",Object(n.jsx)(w,{}),Object(n.jsx)(g,{meals:this.state.meals,deleteMeal:this.deleteMeal})]})]})]})})}}]),a}(s.Component);c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.1eec9b5a.chunk.js.map