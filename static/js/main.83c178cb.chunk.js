(this.webpackJsonpqziland=this.webpackJsonpqziland||[]).push([[0],{29:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(23),r=a.n(i),c=(a(29),a(2)),l=a(5),o=a(3),d=a(4),u=a(0),j=function(e){var t="secondary"===e.style?"px-6 py-3 border border-primary text-primary-darker rounded shadow-lg hover:shadow-none font-medium transition-shadow duration-300 focus:outline-none":"px-6 py-3 bg-primary text-white rounded shadow-lg hover:shadow-none font-medium transition-shadow duration-300 focus:outline-none";return Object(u.jsx)("button",{onClick:e.onClick,className:t,children:e.value})},b=function(){return Object(u.jsxs)("div",{className:"w-full px-8 py-5 flex flex-col h-96  justify-center items-center",children:[Object(u.jsx)("div",{className:"text-2xl sm:text-3xl mb-2",children:"Take a quiz for no reason"}),Object(u.jsx)("div",{className:"text-md mb-8 text-gray-600",children:"Sign in to begin.."}),Object(u.jsx)(o.b,{to:"/signin",children:Object(u.jsx)(j,{value:"Sign in"})})]})},m=a(11),x=a(7),h=function(e){return Object(u.jsxs)("label",{htmlFor:e.id,className:"flex flex-col py-3 w-full font-semibold text-gray-800",children:[e.label,Object(u.jsx)("input",{onChange:e.onChange,onBlur:e.onBlur,id:e.id,name:e.name,type:"type"in e?e.type:"text",value:e.value,className:"shadow rounded border-0 p-3 mt-2",placeholder:e.placeholder})]})},O=Object(s.createContext)(null),p=[{id:1,email:"admin@qmail.com",password:"somethingstrong"},{id:2,email:"user@qmail.com",password:"somethingstrong"},{id:3,email:"user2@qmail.com",password:"somethingstrong2"}],f=[{userId:1,role:"admin"},{userId:2,role:"user"},{userId:3,role:"user"}],v=[{id:"4db1f8b-b3-7365-aba-668641630fd5",title:"What animal has a distinctive scent mark that smells like popcorn?",options:[{id:1,value:"Otter"},{id:2,value:"Binturong"},{id:3,value:"Badger"},{id:4,value:"Ring Tailed Lemur"}],correctOption:"2",isArchived:!1,isModified:!1},{id:"8ac44e5-3e0-2a11-767-0b84fc031b7",title:"How many types of flamingo are there?",options:[{id:1,value:"3"},{id:2,value:"4"},{id:3,value:"5"},{id:4,value:"6"}],correctOption:"4",isArchived:!1,isModified:!1},{id:"40f7b2f-ec-12c4-4814-f1a0c584776",title:"Which big cat can run the fastest?",options:[{id:1,value:"Tiger"},{id:2,value:"Leopard"},{id:3,value:"Lion"},{id:4,value:"Cheetah"}],correctOption:"4",isArchived:!1,isModified:!1},{id:"8d4ccf0-fa32-e77e-d361-a7bf255f0db",title:"What is a baby dolphin called?",options:[{id:1,value:"Calf"},{id:2,value:"Pup"},{id:3,value:"Kitten"},{id:4,value:"Foal"}],correctOption:"1",isArchived:!1,isModified:!1},{id:"157b112-544b-04de-8113-7465f046ae88",title:"What is a group of rats called?",options:[{id:1,value:"A pack"},{id:2,value:"A chaos"},{id:3,value:"A mischief"},{id:4,value:"A destruction"}],correctOption:"3",isArchived:!1,isModified:!1},{id:"54bef78-8866-eec7-7ed4-88cacdb1a57",title:"How many Sri Lankan Leopards are there left in the wild?",options:[{id:1,value:"1000"},{id:2,value:"5000"},{id:3,value:"10000"},{id:4,value:"20000"}],correctOption:"1",isArchived:!1,isModified:!1},{id:"408c6-4b0-758-12a7-c62062b73b3",title:"Which animal can live to 70 years old?",options:[{id:1,value:"Orangutan"},{id:2,value:"Gorilla"},{id:3,value:"Rhino"},{id:4,value:"African Elephant"}],correctOption:"4",isArchived:!1,isModified:!1},{id:"af647b-cce8-5a0-4cb0-edc417346f2",title:"How many breeds of Gecko are there?",options:[{id:1,value:"200"},{id:2,value:"500"},{id:3,value:"1500"},{id:4,value:"2000"}],correctOption:"3",isArchived:!1,isModified:!1},{id:"c82d3e-4fb6-e88f-c67e-0efa04af80b1",title:"Who was the first actor to play James Bond?",options:[{id:1,value:"George Lazenby"},{id:2,value:"Sean Connery"},{id:3,value:"Roger Moore"},{id:4,value:"Timothy Dalton"}],correctOption:"2",isArchived:!1,isModified:!1},{id:"1426ef1-433-c10c-02c7-32b6067ad73a",title:"Who voices Elsa in Frozen?",options:[{id:1,value:"Kristen Bell"},{id:2,value:"Auli\u02bbi Cravalho"},{id:3,value:"Mandy Moore"},{id:4,value:"Idina Menzel"}],correctOption:"4",isArchived:!1,isModified:!1}],g=function(e){var t=Object(s.useContext)(O),a=(t.user,t.setUser),n=Object(s.useState)({email:"",password:""}),i=Object(l.a)(n,2),r=i[0],o=i[1];function d(e){var t=e.target.value;o(Object(c.a)(Object(c.a)({},r),{},Object(m.a)({},e.target.name,t)))}function b(t){if(t.preventDefault(),r.email&&r.password){var s=p.find((function(e){return e.email===r.email}));if(s){var n=f.find((function(e){return e.userId===s.id})).role;s.password==r.password&&"user"==n?function(t){localStorage.setItem("userId",t.id),a({id:t.id}),e.history.push("/user")}(s):x.b.error("Invalid email or password")}else x.b.error("Invalid email or password")}else x.b.error("Email or password cannot be empty")}return Object(u.jsxs)("div",{className:"container px-8 py-10 mx-auto flex flex-col justify-center items-center",children:[Object(u.jsx)(x.a,{}),Object(u.jsx)("h2",{className:"text-2xl mb-8",children:"Sign in to your account"}),Object(u.jsxs)("form",{className:"w-full max-w-sm rounded-md shadow-xl px-6 py-8",onSubmit:function(e){return b(e)},children:[Object(u.jsx)(h,{label:"Email",placeholder:"johndoe@exampl.com",value:r.email,onChange:d,name:"email"}),Object(u.jsx)(h,{label:"Password",placeholder:"Password",type:"password",value:r.password,onChange:d,name:"password"}),Object(u.jsxs)("div",{className:"mt-4\r ",children:[Object(u.jsx)(j,{value:"Sign In"}),Object(u.jsx)("span",{onClick:function(e){e.preventDefault(),alert("\ud83d\udce7: user@qmail.com\n\ud83d\udd11: somethingstrong")},className:"ml-3 cursor-pointer hover:text-primary transition-colors duration-300",children:"Forgot Password"})]})]})]})},w=function(){var e=Object(s.useContext)(O).user,t=(localStorage.getItem("results")?JSON.parse(localStorage.getItem("results")):[]).map((function(t){if(e&&t.userId==e.id){return Object(u.jsx)("div",{className:"w-full md:w-1/3 p-2 text-sm",children:Object(u.jsxs)("div",{className:"p-4 shadow-lg rounded-lg",children:[Object(u.jsxs)("div",{className:"p-3",children:[Object(u.jsx)("span",{className:"font-semibold text-gray-600",children:"Date: "}),t.timestamp]}),Object(u.jsxs)("div",{className:"p-3 bg-gray-100 rounded-md border my-2",children:[Object(u.jsx)("span",{className:"font-semibold",children:"Questions: "}),t.answers.length]}),Object(u.jsxs)("div",{className:"p-3 bg-gray-100 rounded-md border my-2",children:[Object(u.jsx)("span",{className:"font-semibold",children:"Correct: "}),t.score]}),Object(u.jsxs)("div",{className:"p-3 rounded-md border my-2 "+(t.score/t.answers.length<.33?"bg-red-100":t.score/t.answers.length<.8?"bg-yellow-100":"bg-green-100"),children:[Object(u.jsx)("span",{className:"font-semibold",children:"Accuracy: "}),t.score/t.answers.length*100,"%"]}),Object(u.jsx)("div",{className:"mb-2 mt-6 flex justify-end",children:Object(u.jsxs)(o.b,{to:{pathname:"/user/result/".concat(t.id),param:{answers:t.answers}},children:[" ",Object(u.jsx)(j,{style:"secondary",value:"View Answers"})]})})]})},t.id)}}));return Object(u.jsxs)("div",{className:"container mx-auto px-8 py-8",children:[Object(u.jsx)("div",{className:"border-primary border rounded-lg px-4 py-5 mb-8",children:localStorage.getItem("userAnswers")?Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"text-2xl",children:" Your quiz is underway!"}),Object(u.jsx)("p",{className:"text-sm pt-2",children:"Please resume to complete."}),Object(u.jsx)("div",{className:"flex mt-2 justify-end\r ",children:Object(u.jsx)(o.b,{to:"/quiz",children:Object(u.jsx)(j,{value:"Resume"})})})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"text-2xl",children:"Take the quiz now!"}),Object(u.jsx)("p",{className:"text-sm pt-2",children:"There will be few multiple choice quiestions like who wants to be a millioniare or KBC. You have to finish answering them all within unlimited amount of time."}),Object(u.jsx)("div",{className:"flex mt-4 justify-end\r ",children:Object(u.jsx)(o.b,{to:"/quiz",children:Object(u.jsx)(j,{value:"Take Quiz"})})})]})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"mb-4 text-lg font-semibold",children:"Previous Quizes"}),Object(u.jsx)("div",{className:"flex flex-wrap",children:t})]})]})},N=a(17),y=a(16),S=a.n(y),I=function(e){var t=localStorage.getItem("questions")?JSON.parse(localStorage.getItem("questions")).filter((function(e){return!e.isArchived})):[],a=Object(s.useContext)(O).user,n=t.length-1,i=Object(s.useState)(0),r=Object(l.a)(i,2),o=r[0],d=r[1],b=Object(s.useState)(t[o]),m=Object(l.a)(b,2),x=m[0],h=m[1],p=Object(s.useState)(t.map((function(e){return{id:e.id,response:""}}))),f=Object(l.a)(p,2),v=f[0],g=f[1];function w(){var s=v.reduce((function(e,a){return e+(t.find((function(e){return e.id==a.id})).correctOption==a.response?1:0)}),0),n=new Date,i=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear();!function(e){var t=localStorage.getItem("results")?JSON.parse(localStorage.getItem("results")):[];localStorage.setItem("results",JSON.stringify([].concat(Object(N.a)(t),[e])))}({id:S()(),userId:a.id,answers:v,score:s,timestamp:i}),localStorage.removeItem("userAnswers"),e.history.push("/user")}Object(s.useEffect)((function(){localStorage.getItem("userAnswers")&&g(JSON.parse(localStorage.getItem("userAnswers")))}),[]),Object(s.useEffect)((function(){localStorage.setItem("userAnswers",JSON.stringify(v))}),[v]);var y=x.options.map((function(e){var t=v.find((function(e){return e.id==x.id})).response===e.id?"bg-primary max-w-2xl w-full text-lg text-white py-4 px-3 my-6 cursor-pointer border border-gray-100 shadow-none transition-all duration-300 rounded-md":"max-w-2xl w-full text-lg py-4 px-3 my-6 shadow-md cursor-pointer border border-gray-100 hover:shadow-none hover:border-primary rounded hover:text-primary-darker transition-all duration-300";return Object(u.jsx)("div",{onClick:function(){return function(e){var t={id:x.id,response:e};g(v.map((function(e){return e.id==x.id?Object(c.a)({},t):e})))}(e.id)},className:t,children:e.value},e.id)}));return Object(u.jsxs)("div",{className:"container mx-auto px-8 py-8",children:[Object(u.jsxs)("div",{className:"w-full text-xl py-6 font-semibold",children:[Object(u.jsxs)("span",{className:" text-gray-500",children:["Question ",o+1,":"]})," ",x.title]}),Object(u.jsx)("div",{className:"w-full text-xl py-6",children:y}),Object(u.jsxs)("div",{className:"w-full flex justify-end py-4",children:[Object(u.jsx)("span",{className:"mr-2",children:Object(u.jsx)(j,{style:"secondary",onClick:function(){o>0&&(h(t[o-1]),d(o-1))},value:"Previous"})}),o===n?Object(u.jsx)(j,{onClick:function(){w()},value:"Finish"}):Object(u.jsx)(j,{onClick:function(e){o<n&&(h(t[o+1]),d(o+1))},value:"Next"})]})]})},C=function(e){var t=localStorage.getItem("questions")?JSON.parse(localStorage.getItem("questions")):[],a=Object(d.g)().id,s=(e.location.param?e.location.param.answers:JSON.parse(localStorage.getItem("results")).find((function(e){return e.id==a})).answers).map((function(e){var a=t.find((function(t){return t.id==e.id})),s=a.options.find((function(t){return t.id==e.response})).value,n=a.options.find((function(e){return e.id==a.correctOption})).value;return Object(u.jsxs)("div",{className:"mb-8 shadow-md rounded-md",children:[Object(u.jsxs)("h2",{className:"font-medium p-4 bg-gray-50 border-b rounded-t-md",children:[a.isModified&&Object(u.jsx)("span",{className:"text-white bg-yellow-400 rounded p-1 mr-2 font-bold",children:"Modified"}),Object(u.jsx)("span",{className:"text-gray-600 font-bold",children:"Question:"})," ",a.title]}),Object(u.jsxs)("div",{className:"py-3 px-1",children:[Object(u.jsxs)("div",{className:"py-1 px-3",children:[Object(u.jsx)("span",{className:"text-gray-600 font-medium",children:"Your Answer: "})," ",s]}),Object(u.jsxs)("div",{className:"py-1 px-3",children:[Object(u.jsx)("span",{className:"text-primary font-medium",children:"Correct: "})," ",n]})]})]},e.id)}));return Object(u.jsx)("div",{className:"container mx-auto px-8 mt-8",children:s})},A=function(e){var t=Object(s.useContext)(O),a=t.user,n=t.setUser;return Object(u.jsxs)("div",{className:"w-full",children:[Object(u.jsxs)("div",{className:"container px-8 py-5 mx-auto flex justify-between",children:[Object(u.jsx)("div",{className:"w-1/2 flex justify-start text-3xl",children:Object(u.jsxs)(o.b,{to:"/",children:[Object(u.jsx)("span",{className:"text-primary font-medium",children:"Q"}),"ziland"]})}),Object(u.jsx)("div",{className:"w-1/2 flex justify-end text-xl",children:a&&Object(u.jsx)(o.b,{to:"#",className:"hover:text-primary transition-colors duration-300",onClick:function(t){return function(t){t.preventDefault(),n(null),localStorage.removeItem("userId"),localStorage.removeItem("userAnswers"),e.history.push("/")}(t)},children:"Sign out"})})]}),Object(u.jsx)("div",{children:e.children})]})},q=function(e){var t=Object(s.useContext)(O),a=t.user,n=t.setUser;return Object(u.jsxs)("div",{className:"w-full",children:[Object(u.jsxs)("div",{className:"container px-8 py-5 mx-auto flex justify-between",children:[Object(u.jsx)("div",{className:"w-1/2 flex justify-start text-3xl",children:Object(u.jsxs)(o.b,{to:"/admin",children:[Object(u.jsx)("span",{className:"text-admin font-medium",children:"Q"}),"ziland"]})}),Object(u.jsx)("div",{className:"w-1/2 flex justify-end text-xl",children:a&&e.isAdmin&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o.b,{to:"/admin/results",className:"hover:text-admin transition-colors duration-300 mr-4",children:"Results"}),Object(u.jsx)(o.b,{to:"#",className:"hover:text-admin transition-colors duration-300",onClick:function(t){return function(t){t.preventDefault(),n(null),localStorage.removeItem("userId"),localStorage.removeItem("userAnswers"),e.setIsAdmin(null),e.history.push("/admin")}(t)},children:"Sign out"})]})})]}),Object(u.jsx)("div",{children:e.children})]})},k=function(e){var t="secondary"===e.style?"px-6 py-3 border border-admin text-admin-darker rounded shadow-lg hover:shadow-none font-medium transition-shadow duration-300 focus:outline-none":"px-6 py-3 bg-admin text-white rounded shadow-lg hover:shadow-none font-medium transition-shadow duration-300 focus:outline-none";return Object(u.jsx)("button",{onClick:e.onClick,className:t,children:e.value})},M=function(e){Object(s.useContext)(O).user;var t=Object(s.useState)(0),a=Object(l.a)(t,2),n=(a[0],a[1]);var i=(localStorage.getItem("questions")?JSON.parse(localStorage.getItem("questions")):[]).map((function(e){var t=e.options.map((function(t){return Object(u.jsx)("div",{className:e.correctOption==t.id?"px-4 py-3 border-b bg-green-50":"px-4 py-3 border-b",children:t.value},t.id)}));function a(e,t){t?Object(x.b)("Question has been archived",{icon:"\ud83d\udcda"}):Object(x.b)("Question restored",{icon:"\u267b"});var a=JSON.parse(localStorage.getItem("questions"));a.find((function(t){return t.id==e})).isArchived=t,localStorage.setItem("questions",JSON.stringify(a))}var s=e.isArchived?"shadow-md rounded my-6 w-full text-gray-400 italic":"shadow-md rounded my-6 w-full";return Object(u.jsxs)("div",{className:s,children:[Object(u.jsxs)("div",{className:"bg-gray-100  rounded-t px-2 py-4 font-medium justify-between flex border-b-2 border-gray-200",children:[Object(u.jsxs)("div",{className:"flex justify-center items-center",children:[e.isArchived&&Object(u.jsx)("span",{className:"text-white bg-purple-400 rounded p-1 mr-2 font-medium not-italic",children:"Archived"}),e.isModified&&Object(u.jsx)("span",{className:"text-white bg-yellow-400 rounded p-1 mr-2 font-medium not-italic",children:"Modified"}),e.title]}),e.isArchived?Object(u.jsx)("div",{className:"flex justify-center items-start",children:Object(u.jsx)(o.b,{to:"#",onClick:function(){return a(e.id,!1)},className:"p-1 rounded bg-white hover:shadow-lg border transition-shadow duration-300 not-italic",children:"\u267b"})}):Object(u.jsxs)("div",{className:"flex justify-center items-start",children:[Object(u.jsx)(o.b,{to:{pathname:"/admin/edit/".concat(e.id),param:{question:e}},className:"p-1 mr-1 rounded bg-white hover:shadow-lg border transition-shadow duration-300",children:"\ud83d\udcdd"}),Object(u.jsx)(o.b,{to:"#",onClick:function(){return a(e.id,!0)},className:"p-1 rounded bg-white hover:shadow-lg border transition-shadow duration-300",children:"\u274c"})]})]}),Object(u.jsx)("div",{children:t})]},e.id)}));return Object(u.jsxs)("div",{className:"container px-8 py-8 mx-auto",children:[Object(u.jsx)(x.a,{}),Object(u.jsx)("div",{className:"border-admin-darker border rounded-lg px-4 py-5 mb-8",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"text-2xl",children:" Add New Qustion"}),Object(u.jsx)("p",{className:"text-sm pt-2",children:"Click to add new questions to the questioniare"}),Object(u.jsx)("div",{className:"flex mt-2 justify-end\r ",children:Object(u.jsx)(o.b,{to:"/admin/add",children:Object(u.jsx)(k,{value:"Add New"})})})]})}),Object(u.jsx)("div",{className:"flex flex-col",children:i}),!localStorage.getItem("questions")&&Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{}),Object(u.jsx)(k,{onClick:function(e){return localStorage.setItem("questions",JSON.stringify(v)),void n((function(e){return e+1}))},value:"Seed",style:"secondary"}),Object(u.jsx)("span",{className:"ml-2",children:"10 questions from mock data"})]})]})},J=function(e){return Object(u.jsxs)("label",{htmlFor:e.id,className:"flex flex-col py-3 w-full font-semibold text-gray-800",children:[e.label,Object(u.jsx)("input",{onChange:e.onChange,onBlur:e.onBlur,id:e.id,name:e.name,type:"type"in e?e.type:"text",value:e.value,className:"shadow rounded border-0 p-3 mt-2",placeholder:e.placeholder})]})},W=function(e){var t=Object(s.useContext)(O).setUser,a=Object(s.useState)({email:"",password:""}),n=Object(l.a)(a,2),i=n[0],r=n[1];function o(e){var t=e.target.value;r(Object(c.a)(Object(c.a)({},i),{},Object(m.a)({},e.target.name,t)))}function d(a){if(a.preventDefault(),i.email&&i.password){var s=p.find((function(e){return e.email===i.email}));if(s){var n=f.find((function(e){return e.userId===s.id})).role;s.password==i.password&&"admin"==n?function(a){localStorage.setItem("userId",a.id),t({id:a.id}),e.history.push("/admin/dashboard")}(s):x.b.error("Invalid email or password")}else x.b.error("Invalid email or password")}else x.b.error("Email or password cannot be empty")}return Object(u.jsxs)("div",{className:"container px-8 py-10 mx-auto flex flex-col justify-center items-center",children:[Object(u.jsx)(x.a,{}),Object(u.jsx)("h2",{className:"text-2xl mb-8",children:"Sign in to admin dashboard"}),Object(u.jsxs)("form",{className:"w-full max-w-sm rounded-md shadow-xl px-6 py-8",onSubmit:function(e){return d(e)},children:[Object(u.jsx)(J,{label:"Email",placeholder:"johndoe@exampl.com",value:i.email,onChange:o,name:"email"}),Object(u.jsx)(J,{label:"Password",placeholder:"Password",type:"password",value:i.password,onChange:o,name:"password"}),Object(u.jsxs)("div",{className:"mt-4\r ",children:[Object(u.jsx)(k,{value:"Sign In"}),Object(u.jsx)("span",{onClick:function(e){e.preventDefault(),alert("\ud83d\udce7: admin@qmail.com\n\ud83d\udd11: somethingstrong")},className:"ml-3 cursor-pointer hover:text-primary transition-colors duration-300",children:"Forgot Password"})]})]})]})},Q=function(e){var t=Object(s.useState)(""),a=Object(l.a)(t,2),n=a[0],i=a[1],r=Object(s.useState)(""),c=Object(l.a)(r,2),o=c[0],d=c[1],j=[{id:1,value:""},{id:2,value:""},{id:3,value:""},{id:4,value:""}],b=Object(s.useState)(j),m=Object(l.a)(b,2),x=m[0],h=m[1];function O(e){var t={id:parseInt(e.target.name),value:e.target.value},a=x.map((function(a){return a.id==e.target.name?t:a}));h(a)}function p(t){t.preventDefault(),function(e){var t=localStorage.getItem("questions")?JSON.parse(localStorage.getItem("questions")):[];localStorage.setItem("questions",JSON.stringify([].concat(Object(N.a)(t),[e])))}({id:S()(),title:n,options:x,correctOption:o,isArchived:!1,isModified:!1}),i(""),d(""),h(j),e.history.push("/admin/dashboard")}return Object(u.jsxs)("div",{className:"container mx-auto px-8 py-8",children:[Object(u.jsx)("h2",{className:"mb-8 text-xl font-medium",children:"Add New Question:"}),Object(u.jsxs)("form",{className:"w-full max-w-5xl",onSubmit:function(e){return p(e)},children:[Object(u.jsx)(J,{label:"Question Title:",placeholder:"What is an infinity loop?",value:n,onChange:function(e){return i(e.target.value)},name:"title"}),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"flex flex-wrap",children:[Object(u.jsx)("div",{className:"w-1/2 p-2",children:Object(u.jsx)(J,{label:"Option 1",placeholder:"Whatever is in option 3",value:x[0].value,onChange:O,name:"1"})}),Object(u.jsx)("div",{className:"w-1/2 p-2",children:Object(u.jsx)(J,{label:"Option 2",placeholder:"Whatever is in option 4",value:x[1].value,onChange:O,name:"2"})}),Object(u.jsx)("div",{className:"w-1/2 p-2",children:Object(u.jsx)(J,{label:"Option 3",placeholder:"Whatever is in option 2",value:x[2].value,onChange:O,name:"3"})}),Object(u.jsx)("div",{className:"w-1/2 p-2",children:Object(u.jsx)(J,{label:"Option 4",placeholder:"Whatever is in option 1",value:x[3].value,onChange:O,name:"4"})}),Object(u.jsxs)("label",{htmlFor:"correctOption",className:"flex flex-col w-full p-2 font-semibold text-gray-600",children:["Correct Option",Object(u.jsxs)("select",{id:"correctOption",name:"correctOption",className:"shadow rounded border-0 mt-1 p-3 w-1/2",onChange:function(e){return d(e.target.value)},value:o,children:[Object(u.jsx)("option",{value:"",defaultValue:!0,children:"Select"}),Object(u.jsx)("option",{value:"1",children:"1"}),Object(u.jsx)("option",{value:"2",defaultValue:!0,children:"2"}),Object(u.jsx)("option",{value:"3",defaultValue:!0,children:"3"}),Object(u.jsx)("option",{value:"4",defaultValue:!0,children:"4"})]})]})]})}),Object(u.jsx)("div",{className:"mt-4 px-2",children:Object(u.jsx)(k,{value:"Submit"})})]})]})},z=function(){var e=Object(s.useContext)(O).user,t=(localStorage.getItem("results")?JSON.parse(localStorage.getItem("results")):[]).map((function(t){if(e){var a=p.find((function(e){return e.id==t.userId})).email;return Object(u.jsx)("div",{className:"w-full md:w-1/3 p-2 text-sm",children:Object(u.jsxs)("div",{className:"p-4 shadow-lg rounded-lg",children:[Object(u.jsxs)("div",{className:"flex flex-wrap justify-between",children:[Object(u.jsx)("div",{className:"p-3 text-admin-darker font-semibold",children:a}),Object(u.jsxs)("div",{className:"p-3",children:[Object(u.jsx)("span",{className:"font-semibold text-gray-600",children:"Date: "}),t.timestamp]})]}),Object(u.jsxs)("div",{className:"p-3 bg-gray-100 rounded-md border my-2",children:[Object(u.jsx)("span",{className:"font-semibold",children:"Questions: "}),t.answers.length]}),Object(u.jsxs)("div",{className:"p-3 bg-gray-100 rounded-md border my-2",children:[Object(u.jsx)("span",{className:"font-semibold",children:"Correct: "}),t.score]}),Object(u.jsxs)("div",{className:"p-3 rounded-md border my-2 "+(t.score/t.answers.length<.33?"bg-red-100":t.score/t.answers.length<.8?"bg-yellow-100":"bg-green-100"),children:[Object(u.jsx)("span",{className:"font-semibold",children:"Accuracy: "}),t.score/t.answers.length*100,"%"]}),Object(u.jsx)("div",{className:"mb-2 mt-6 flex justify-end",children:Object(u.jsxs)(o.b,{to:{pathname:"/admin/result/".concat(t.id),param:{answers:t.answers}},children:[" ",Object(u.jsx)(k,{style:"secondary",value:"View Answers"})]})})]})},t.id)}}));return Object(u.jsx)("div",{className:"container px-8 pt-8 mx-auto",children:Object(u.jsx)("div",{className:"flex flex-wrap",children:t})})},D=function(e){var t=localStorage.getItem("questions")?JSON.parse(localStorage.getItem("questions")):[],a=Object(d.g)().id,s=(e.location.param?e.location.param.answers:JSON.parse(localStorage.getItem("results")).find((function(e){return e.id==a})).answers).map((function(e){var a=t.find((function(t){return t.id==e.id})),s=a.options.find((function(t){return t.id==e.response})).value,n=a.options.find((function(e){return e.id==a.correctOption})).value;return Object(u.jsxs)("div",{className:"mb-8 shadow-md rounded-md",children:[Object(u.jsxs)("h2",{className:"font-medium p-4 bg-gray-50 border-b rounded-t-md",children:[a.isModified&&Object(u.jsx)("span",{className:"text-white bg-yellow-400 rounded p-1 mr-2 font-bold",children:"Modified"}),Object(u.jsx)("span",{className:"text-gray-600 font-bold",children:"Question:"})," ",a.title]}),Object(u.jsxs)("div",{className:"py-3 px-1",children:[Object(u.jsxs)("div",{className:"py-1 px-3",children:[Object(u.jsx)("span",{className:"text-gray-600 font-medium",children:"Your Answer: "})," ",s]}),Object(u.jsxs)("div",{className:"py-1 px-3",children:[Object(u.jsx)("span",{className:"text-primary font-medium",children:"Correct: "})," ",n]})]})]},e.id)}));return Object(u.jsx)("div",{className:"container mx-auto px-8 mt-8",children:s})},P=function(e){var t=Object(d.g)().id,a=localStorage.getItem("questions")?JSON.parse(localStorage.getItem("questions")):[],n=e.location.param?e.location.param.question:JSON.parse(localStorage.getItem("questions")).find((function(e){return e.id==t})),i=Object(s.useState)(n.title),r=Object(l.a)(i,2),c=r[0],o=r[1],j=Object(s.useState)(n.correctOption),b=Object(l.a)(j,2),m=b[0],x=b[1],h=Object(s.useState)(n.options),O=Object(l.a)(h,2),p=O[0],f=O[1];function v(e){var t={id:parseInt(e.target.name),value:e.target.value},a=p.map((function(a){return a.id==e.target.name?t:a}));f(a)}return Object(u.jsxs)("div",{className:"container mx-auto px-8",children:[Object(u.jsx)("h2",{className:"my-8 text-xl font-medium",children:"Add New Question:"}),Object(u.jsxs)("form",{className:"w-full max-w-5xl",onSubmit:function(t){return function(t,s){t.preventDefault(),s.title=c,s.options=p,s.correctOption=m,s.isModified=!0;var n=a.map((function(e){return e.id===s.id?s:e}));localStorage.setItem("questions",JSON.stringify(n)),e.history.push("/admin/dashboard")}(t,n)},children:[Object(u.jsx)(J,{label:"Question Title:",placeholder:"What is an infinity loop?",value:c,onChange:function(e){return o(e.target.value)},name:"title"}),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"flex flex-wrap",children:[Object(u.jsx)("div",{className:"w-1/2 p-2",children:Object(u.jsx)(J,{label:"Option 1",placeholder:"Whatever is in option 3",value:p[0].value,onChange:v,name:"1"})}),Object(u.jsx)("div",{className:"w-1/2 p-2",children:Object(u.jsx)(J,{label:"Option 2",placeholder:"Whatever is in option 4",value:p[1].value,onChange:v,name:"2"})}),Object(u.jsx)("div",{className:"w-1/2 p-2",children:Object(u.jsx)(J,{label:"Option 3",placeholder:"Whatever is in option 2",value:p[2].value,onChange:v,name:"3"})}),Object(u.jsx)("div",{className:"w-1/2 p-2",children:Object(u.jsx)(J,{label:"Option 4",placeholder:"Whatever is in option 1",value:p[3].value,onChange:v,name:"4"})}),Object(u.jsxs)("label",{htmlFor:"correctOption",className:"flex flex-col w-full p-2 font-semibold text-gray-600",children:["Correct Option",Object(u.jsxs)("select",{id:"correctOption",name:"correctOption",className:"shadow rounded border-0 mt-1 p-3 w-1/2",onChange:function(e){return x(e.target.value)},value:m,children:[Object(u.jsx)("option",{value:"",children:"Select"}),Object(u.jsx)("option",{value:"1",children:"1"}),Object(u.jsx)("option",{value:"2",children:"2"}),Object(u.jsx)("option",{value:"3",children:"3"}),Object(u.jsx)("option",{value:"4",children:"4"})]})]})]})}),Object(u.jsx)("div",{className:"mt-4 px-2",children:Object(u.jsx)(k,{value:"Submit"})})]})]})},E=function(){return Object(u.jsxs)("div",{className:"px-8 container mx-auto pt-32 text-center",children:[Object(u.jsx)("h2",{className:"text-4xl text-gray mb-5",children:"The questionnaire is empty!"}),Object(u.jsx)("div",{className:"text-gray-600",children:"Please add questions from admin or seed pre-configured question to local storage"})]})};var F=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(!1),r=Object(l.a)(i,2),j=r[0],m=r[1];Object(s.useEffect)((function(){!a&&localStorage.getItem("userId")&&n({id:localStorage.getItem("userId")})}),[]),Object(s.useEffect)((function(){if(a){var e=f.find((function(e){return e.userId==a.id})).role;m("admin"==e)}}),[a]);var x=function(e){return Object(u.jsx)(q,Object(c.a)(Object(c.a)({},e),{},{isAdmin:j,setIsAdmin:m,children:e.children}))};return Object(u.jsx)("div",{className:"min-h-screen",children:Object(u.jsx)(o.a,{children:Object(u.jsx)(O.Provider,{value:{user:a,setUser:n},children:Object(u.jsxs)(d.d,{children:[Object(u.jsx)(d.b,{path:"/",exact:!0,render:function(e){return a?Object(u.jsx)(d.a,{to:"/user"}):Object(u.jsx)(A,Object(c.a)(Object(c.a)({},e),{},{children:Object(u.jsx)(b,{})}))}}),Object(u.jsx)(d.b,{path:"/signin",exact:!0,render:function(e){return a?Object(u.jsx)(d.a,{to:"/user"}):Object(u.jsx)(A,Object(c.a)(Object(c.a)({},e),{},{children:Object(u.jsx)(g,Object(c.a)({},e))}))}}),Object(u.jsx)(d.b,{path:"/user",exact:!0,render:function(e){return a?Object(u.jsx)(A,Object(c.a)(Object(c.a)({},e),{},{children:Object(u.jsx)(w,{})})):Object(u.jsx)(d.a,{to:"/"})}}),Object(u.jsx)(d.b,{path:"/user/result/:id",exact:!0,render:function(e){return a?Object(u.jsx)(A,Object(c.a)(Object(c.a)({},e),{},{children:Object(u.jsx)(C,Object(c.a)({},e))})):Object(u.jsx)(d.a,{to:"/"})}}),Object(u.jsx)(d.b,{path:"/quiz",exact:!0,render:function(e){return a?localStorage.getItem("questions")?Object(u.jsx)(A,Object(c.a)(Object(c.a)({},e),{},{children:Object(u.jsx)(I,Object(c.a)({},e))})):Object(u.jsx)(A,Object(c.a)(Object(c.a)({},e),{},{children:Object(u.jsx)(E,{})})):Object(u.jsx)(d.a,{to:"/"})}}),Object(u.jsx)(d.b,{path:"/admin",exact:!0,render:function(e){return a&&j?Object(u.jsx)(d.a,{to:"/admin/dashboard"}):Object(u.jsx)(x,Object(c.a)(Object(c.a)({},e),{},{children:Object(u.jsx)(W,Object(c.a)({},e))}))}}),Object(u.jsx)(d.b,{path:"/admin/dashboard",exact:!0,render:function(e){return a&&j?Object(u.jsx)(x,Object(c.a)(Object(c.a)({},e),{},{children:Object(u.jsx)(M,Object(c.a)({},e))})):Object(u.jsx)(d.a,{to:"/admin"})}}),Object(u.jsx)(d.b,{path:"/admin/results",exact:!0,render:function(e){return a&&j?Object(u.jsx)(x,Object(c.a)(Object(c.a)({},e),{},{children:Object(u.jsx)(z,{})})):Object(u.jsx)(d.a,{to:"/admin"})}}),Object(u.jsx)(d.b,{path:"/admin/add",exact:!0,render:function(e){return a&&j?Object(u.jsx)(x,Object(c.a)(Object(c.a)({},e),{},{children:Object(u.jsx)(Q,Object(c.a)({},e))})):Object(u.jsx)(d.a,{to:"/admin"})}}),Object(u.jsx)(d.b,{path:"/admin/edit/:id",exact:!0,render:function(e){return a&&j?Object(u.jsx)(q,Object(c.a)(Object(c.a)({},e),{},{children:Object(u.jsx)(P,Object(c.a)({},e))})):Object(u.jsx)(d.a,{to:"/admin"})}}),Object(u.jsx)(d.b,{path:"/admin/result/:id",exact:!0,render:function(e){return a&&j?Object(u.jsx)(x,Object(c.a)(Object(c.a)({},e),{},{children:Object(u.jsx)(D,Object(c.a)({},e))})):Object(u.jsx)(d.a,{to:"/admin"})}})]})})})})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.83c178cb.chunk.js.map