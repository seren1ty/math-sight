(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[0],{69:function(n,e,t){},81:function(n,e,t){"use strict";t.r(e);var r,a=t(0),i=t.n(a),c=t(10),s=t.n(c),o=(t(69),t(27)),u=t(24),l=t(16);!function(n){n[n.ADD=0]="ADD",n[n.MINUS=1]="MINUS",n[n.MULTIPLY=2]="MULTIPLY",n[n.DIVIDE=3]="DIVIDE"}(r||(r={}));var d,x,p,h,b,f,j,g,O,m,w,S,A,v,I,D,y,C,k,M,E,R,N,U,B,T,z,J,Q,L,P,V,H,q,K,Y=t(49),F=t.n(Y),X=function(n){localStorage.setItem("mathSight-accounts",JSON.stringify(n))},G=function(){var n=localStorage.getItem("mathSight-accounts");return n?JSON.parse(n):(X([]),[])},W=function(){var n,e=localStorage.getItem("mathSight-accountId");if(!e){var t=F()();return console.log("New account created: "+t),n=t,localStorage.setItem("mathSight-accountId",JSON.stringify(n)),X([].concat(Object(u.a)(G()),[{accountId:t,name:"Default",userIds:[]}])),t}return JSON.parse(e)},Z=function(n,e){localStorage.setItem("mathSight-users-"+n,JSON.stringify(e))},$=function(n){localStorage.setItem("mathSight-userId",JSON.stringify(n))},_=function(n,e){localStorage.setItem("mathSight-operationType-"+n,JSON.stringify(e))},nn=function(n){var e=localStorage.getItem("mathSight-operationType-"+n);return e?JSON.parse(e):(n&&_(n,r.ADD),0)},en=function(n,e){localStorage.setItem("mathSight-highScore-"+n,JSON.stringify(e))},tn=function(n){var e=localStorage.getItem("mathSight-highScore-"+n);return e?Number(JSON.parse(e)):(n&&en(n,0),0)},rn=function(n,e){localStorage.setItem("mathSight-currentScore-"+n,JSON.stringify(e))},an=function(n){var e=localStorage.getItem("mathSight-currentScore-"+n);return e?Number(JSON.parse(e)):(n&&rn(n,0),0)},cn=t(50),sn=t(51),on=function(){function n(e,t,a,i){Object(cn.a)(this,n),this.id=void 0,this.numberOne=void 0,this.numberTwo=void 0,this.operation=void 0,this.id=e,this.numberOne=t,this.numberTwo=a,this.operation=i||r.ADD}return Object(sn.a)(n,[{key:"getResult",value:function(){var n=Number(this.numberOne),e=Number(this.numberTwo);switch(this.operation){case r.MINUS:return n-e;case r.MULTIPLY:return n*e;case r.DIVIDE:return n/e;default:return n+e}}}]),n}(),un=t(2),ln=i.a.createContext(null),dn=function(n){var e=n.children,t=n.initialQuestions,c=Object(a.useState)(G()),s=Object(l.a)(c,2),d=s[0],x=s[1],p=Object(a.useState)(W()),h=Object(l.a)(p,2),b=h[0],f=h[1],j=Object(a.useState)(function(n){var e=localStorage.getItem("mathSight-users-"+n);return e?JSON.parse(e):(Z(n,[]),[])}(b)),g=Object(l.a)(j,2),O=g[0],m=g[1],w=Object(a.useState)(function(){var n=localStorage.getItem("mathSight-userId");return n?JSON.parse(n):($(""),"")}()),S=Object(l.a)(w,2),A=S[0],v=S[1],I=i.a.useMemo((function(){return O.find((function(n){return n.userId===A}))}),[O,A]),D=i.a.useRef(0),y=i.a.useRef(0),C=i.a.useRef(0),k=i.a.useState(nn(A)),M=Object(l.a)(k,2),E=M[0],R=M[1],N=Object(a.useState)(t||[]),U=Object(l.a)(N,2),B=U[0],T=U[1],z=Object(a.useState)([]),J=Object(l.a)(z,2),Q=J[0],L=J[1],P=Object(a.useState)(!1),V=Object(l.a)(P,2),H=V[0],q=V[1],K=Object(a.useState)(tn(A)),Y=Object(l.a)(K,2),F=Y[0],X=Y[1],cn=Object(a.useState)(an(A)),sn=Object(l.a)(cn,2),dn=sn[0],xn=sn[1],pn=i.a.useCallback((function(){T([]),L([]),q(!1),R(nn(A)),X(tn(A)),xn(an(A))}),[A,T,L,R,q,X,xn]),hn=i.a.useCallback((function(n){for(var e=2,t=Math.sqrt(n);e<=t;e++)if(n%e===0)return!1;return n>1}),[]),bn=i.a.useCallback((function(){pn();var n,e=[];n=E===r.ADD||E===r.MINUS?D.current:E===r.MULTIPLY?y.current:C.current;for(var t=0,a=1e6,i=function(i){t++;var s=Math.floor(Math.random()*n),o=Math.floor(Math.random()*n);if(t>=a)return c=i,"break";if((E===r.MULTIPLY||E===r.DIVIDE)&&(s<=1||o<=1))return c=i-=1,"continue";if((E===r.MINUS||E===r.DIVIDE)&&s<o)return c=i-=1,"continue";if(E===r.DIVIDE){if(hn(s))return c=i-=1,"continue";for(;(s===o||s%o!==0||1===o)&&(t++,o=Math.floor(Math.random()*n),!(t>=a)););}if(e.some((function(n){return n.numberOne===s&&n.numberTwo===o})))i-=1;else{var u=new on(i,s,o,E);e.push(u)}c=i},c=0;c<10;c++){var s=i(c);if("break"===s)break}T(e)}),[D,y,C,E,pn,hn]),fn=i.a.useCallback((function(n){return Number(Q[n.id])===Number(n.getResult())}),[Q]),jn=i.a.useCallback((function(n){var e=O.filter((function(e){return e.userId!=n.userId}));m([].concat(Object(u.a)(e),[n]))}),[O]);return Object(a.useEffect)((function(){A&&($(A),D.current=(null===I||void 0===I?void 0:I.numberRangeAS)||10,y.current=(null===I||void 0===I?void 0:I.numberRangeM)||10,C.current=(null===I||void 0===I?void 0:I.numberRangeD)||10,R((null===I||void 0===I?void 0:I.operationType)||r.ADD),bn())}),[A]),Object(a.useEffect)((function(){A&&(I&&jn(Object(o.a)(Object(o.a)({},I),{},{highScore:F})),en(A,F))}),[F]),Object(a.useEffect)((function(){A&&(I&&jn(Object(o.a)(Object(o.a)({},I),{},{currentScore:dn})),rn(A,dn))}),[dn]),Object(a.useEffect)((function(){b&&Z(b,O)}),[O]),Object(a.useEffect)((function(){A&&(I&&jn(Object(o.a)(Object(o.a)({},I),{},{operationType:E})),_(A,E),bn())}),[E]),Object(un.jsx)(ln.Provider,{value:{accounts:d,accountId:b,users:O,userId:A,operationType:E,questions:B,answers:Q,showResults:H,highScore:F,currentScore:dn,setAccounts:x,setAccountId:f,setUsers:m,setUserId:v,setOperationType:R,setQuestions:T,setAnswers:L,setShowResults:q,setHighScore:X,setCurrentScore:xn,resetFields:pn,generateQuestions:bn,checkAnswer:fn},children:e})},xn=t(5),pn=t(109),hn=t(6),bn=function(){var n=i.a.useContext(ln),e=i.a.useCallback((function(e,t){if(n){var r=Object(u.a)(n.answers);r.length<=e?r.push(t):r[e]=t,n.setAnswers(r)}}),[n]),t=i.a.useCallback((function(n){switch(n){case r.MINUS:return"-";case r.MULTIPLY:return"x";case r.DIVIDE:return"/";default:return"+"}}),[]),a=i.a.useCallback((function(e){return!!n&&(0===e||e<(null===n||void 0===n?void 0:n.answers.length)+1)}),[n]),c=i.a.useCallback((function(e){return(null===n||void 0===n?void 0:n.answers[e])||""}),[n]);return n?Object(un.jsx)(fn,{children:Object(un.jsx)(pn.a,{flexDirection:"column",children:n.questions.map((function(r){return Object(un.jsxs)(pn.a,{display:"flex",m:1.5,fontSize:26,fontWeight:700,children:[Object(un.jsxs)(jn,{children:[Object(un.jsx)(pn.a,{pr:1,width:"80px",children:r.numberOne}),Object(un.jsx)(pn.a,{pr:1,flexGrow:1,children:t(r.operation)}),Object(un.jsx)(pn.a,{width:"80px",children:r.numberTwo})]}),Object(un.jsx)(gn,{"data-testid":"AnswerInput-".concat(r.id),type:"number",value:c(r.id),onChange:function(n){return e(r.id,n.target.value)},disabled:!a(r.id)}),Object(un.jsxs)(On,{correct:n.showResults&&n.checkAnswer(r),children:[!n.showResults&&a(r.id)&&Object(un.jsx)(mn,{children:"?"}),n.showResults&&Object(un.jsx)(wn,{children:r.getResult()})]})]},r.id)}))})}):null},fn=Object(hn.a)(pn.a)(d||(d=Object(xn.a)(["\n  margin: 0 40px;\n\n  @media (max-width: 920px) {\n    margin: 0 10px;\n  }\n"]))),jn=Object(hn.a)(pn.a)(x||(x=Object(xn.a)(["\n  display: flex;\n  flex-grow: 1;\n  justify-content: center;\n  text-align: center;\n  margin-right: 28px;\n  background: #d1dcf9;\n  border-radius: 10px;\n  font-size: 20px;\n  line-height: 40px;\n\n  @media (max-width: 920px) {\n    margin-right: 20px;\n  }\n"]))),gn=hn.a.input(p||(p=Object(xn.a)(["\n  width: 105px;\n  font-size: 20px;\n  border: 2px solid black;\n  border-radius: 10px;\n  outline: none;\n  padding: 6px;\n\n  &:disabled {\n    border: 2px solid #cacaca;\n    background: #e0e0e0;\n  }\n"]))),On=Object(hn.a)(pn.a)(h||(h=Object(xn.a)(["\n  width: 100px;\n  line-height: 30px;\n  margin-left: 24px;\n  color: ",";\n  line-height: 38px;\n\n  @media (max-width: 920px) {\n    width: 45px;\n    margin-left: 20px;\n  }\n"])),(function(n){return n.correct?"#48dda7":"red"})),mn=Object(hn.a)(pn.a)(b||(b=Object(xn.a)(["\n  width: 100px;\n  height: 40px;\n  background: #e0e0e030;\n  border-radius: 10px;\n  margin: 0px;\n  color: #80808020;\n  font-weight: 600;\n  text-align: center;\n  line-height: 40px;\n\n  @media (max-width: 920px) {\n    width: 45px;\n  }\n"]))),wn=Object(hn.a)(pn.a)(f||(f=Object(xn.a)(["\n  width: 90px;\n  text-align: center;\n  font-size: 24px;\n\n  @media (max-width: 920px) {\n    width: 45px;\n  }\n"]))),Sn=t(110),An=t(107),vn=Object(hn.a)(An.a)(j||(j=Object(xn.a)(["\n  width: 385px;\n  background: #d1dcf9;\n  outline: none;\n  border-radius: 10px;\n  padding: 7px;\n\n  &::before {\n    border: 0px;\n  }\n\n  &::after {\n    border: 0px;\n  }\n\n  &.MuiInput-underline:before {\n    border-bottom: 0px;\n  }\n\n  &.MuiInput-underline:hover:not(.Mui-disabled):before {\n    border-bottom: 0px;\n  }\n\n  &.MuiInput-underline:after {\n    border-bottom: 0px;\n  }\n\n  .MuiSelect-root {\n    padding-left: 10px;\n    line-height: 28px;\n    font-size: 24px;\n  }\n\n  .MuiSelect-select:focus {\n    border-radius: 10px;\n    background: #d1dcf9;\n  }\n\n  @media (max-width: 920px) {\n    padding: 10px;\n\n    .MuiSelect-root {\n      line-height: 24px;\n      font-size: 20px;\n    }\n  }\n"]))),In=function(){var n=i.a.useContext(ln),e=i.a.useCallback((function(e){null===n||void 0===n||n.setOperationType(e.target.value)}),[n]);return n?Object(un.jsx)(pn.a,{marginTop:"25px",children:Object(un.jsxs)(vn,{value:n.operationType,onChange:e,children:[Object(un.jsx)(Sn.a,{value:r.ADD,children:"Add"}),Object(un.jsx)(Sn.a,{value:r.MINUS,children:"Subtract"}),Object(un.jsx)(Sn.a,{value:r.MULTIPLY,children:"Multiply"}),Object(un.jsx)(Sn.a,{value:r.DIVIDE,children:"Divide"})]})}):null},Dn=t(12),yn=function(){var n=Object(Dn.f)(),e=i.a.useCallback((function(){return n.push("/")}),[n]);return Object(un.jsxs)(Cn,{children:[Object(un.jsxs)(pn.a,{display:"flex",alignItems:"center",children:[Object(un.jsxs)(kn,{onClick:function(){return e()},children:[Object(un.jsx)(Mn,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB/wAAAf8BOjAhmQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAI1SURBVHic1Zs9bhRBEEZfIwerTTkAiWURcwQSJAtjjkDABbgBiQ/gSxAjNjJ/EhGhE1tIOECynJKunX0E68BeDbvt/quqCnek6nlP1TXdPbNJEpEipTQD3gFvgV/AkaSfxfkiCbiF/wi8uPPzb+CpCkEetbixEfEfeIA9YLc0bwgBG+ABziRdlOZ2L2AL/A2rflAcrgVkwL+W9LVmDLcCMuFPasdxKWAUPDgUMBIeYKdVohaRAX8o6XPLMd1UgAU8OBFgBQ8OBFjCg7EAa3gwbIIZ8K8kfel9HyYV4AUeDAR4gofBArbAXzMYHgb2gEz4qo1NSQypAK/wMECAZ3joLMA7PHQUEAEeOjXBDPgDSd96jP3QaF4BkeChsYBo8NBQQER4aCQgKjw0aIIZ8C8lfa8dp1dUVUB0eKifAsdMwy8JAA8Vb4dTSo+BK2C2dmnJas67hwcHZ4LWUSxA0l/gw8SlObBIKT0vvquBUfWBREppDiyAKdgQU6FqCkhaAgfAFGSISqjuAdElNGmCkSU0ewpEldD0MRhRQvN1QDQJXRZCkSR0WwlGkdB1KRxBQve9gHcJQzZDniUM2w16lTB0O+xRwvDzAG8STA5EPEkwOxHyIsH0SMyDBPMzQWsJ5gLAVoILAWAnwY0AsJHgSgCMl+BOAIyV4FIAjJPg/p+jGS9f9iX9KM7vXQBslXAq6Vlx7ggCYKuEJ5IuS/K67QHrsaEnnJfCQyABcE/Ce+AP8Al4U5PzH7EGiK/gt7PzAAAAAElFTkSuQmCC"}),Object(un.jsx)(En,{children:"Mathsight"})]}),Object(un.jsx)(Rn,{children:Object(un.jsx)(In,{})})]}),Object(un.jsx)(bn,{})]})},Cn=Object(hn.a)(pn.a)(g||(g=Object(xn.a)(["\n  @media (max-width: 920px) {\n    width: 410px\n  }\n"]))),kn=hn.a.h1(O||(O=Object(xn.a)(["\n  height: 40px;\n  margin-top: 24px;\n  padding-left: 50px;\n  display: flex;\n  align-items: center;\n  gap: 37px;\n  cursor: pointer;\n\n  @media (max-width: 920px) {\n    margin: 20px 0 0 25px;\n    gap: 10px;\n    padding-left: 0;\n  }\n"]))),Mn=hn.a.img(m||(m=Object(xn.a)(["\n  height: 28px;\n  margin-top: 3px;\n\n  @media (max-width: 920px) {\n    height: 24px;\n    margin-top: 0px;\n    margin-bottom: 8px;\n  }\n"]))),En=hn.a.h1(w||(w=Object(xn.a)(["\n  font-size: 40px;\n  font-family: 'Righteous', cursive;\n\n  @media (max-width: 920px) {\n    padding-bottom: 10px;\n    font-size: 28px;\n  }\n"]))),Rn=Object(hn.a)(pn.a)(S||(S=Object(xn.a)(["\n  .MuiInput-root {\n    max-width: 175px;\n    margin-left: 52px;\n    margin-bottom: 15px;\n\n    @media (max-width: 920px) {\n      max-width: 170px;\n      margin-left: 27px;\n    }\n  }\n\n  @media (min-width: 921px) {\n    display: none;\n  }\n"]))),Nn=function(){var n=i.a.useContext(ln),e=i.a.useCallback((function(e){if(n){var t=n.currentScore+e;n.setCurrentScore(t)}}),[n]),t=i.a.useCallback((function(e){if(n){var t=n.currentScore+e;t<=n.highScore||n.setHighScore(t)}}),[n]),r=i.a.useCallback((function(){return n?n.questions.filter((function(e){return n.checkAnswer(e)})).length:0}),[n]),a=i.a.useCallback((function(){if(n){var a=r();a===n.questions.length?(t(n.questions.length),e(n.questions.length)):(t(a),n.setCurrentScore(0)),n.setShowResults(!0)}}),[n,r,t,e]);return n?Object(un.jsxs)(Un,{showresults:n.showResults,children:[Object(un.jsxs)(Bn,{children:[Object(un.jsx)(Tn,{onClick:function(){return a()},isDisabled:n.showResults||n.answers.length<n.questions.length,children:"Check Answers"}),Object(un.jsx)(Tn,{onClick:function(){return n.generateQuestions()},isDisabled:!n.showResults,children:"New Questions"})]}),Object(un.jsx)(zn,{children:"Results"}),Object(un.jsxs)(pn.a,{position:"relative",children:[Object(un.jsx)(Jn,{showresults:n.showResults,children:r()}),Object(un.jsx)(Qn,{showresults:n.showResults,children:"out of 10"})]}),Object(un.jsxs)(Ln,{children:["Current total: ",n.currentScore]}),Object(un.jsxs)(Pn,{children:["High score: ",n.highScore]})]}):null},Un=Object(hn.a)(pn.a)(A||(A=Object(xn.a)(["\n  display: flex;\n  flex-direction: column;\n  background: #eeeff2;\n  padding: 20px;\n  border-radius: 10px;\n  transition: height 1s, margin-top 1s;\n  height: ",";\n  margin-top: ",";\n\n  @media (max-width: 920px) {\n    margin-left: 10px;\n    width: 375px;\n  }\n"])),(function(n){return n.showresults?"505px":"292px"}),(function(n){return n.showresults?"0px":"13px"})),Bn=Object(hn.a)(pn.a)(v||(v=Object(xn.a)(["\n  display: flex;\n  gap: 21px;\n"]))),Tn=Object(hn.a)(pn.a)(I||(I=Object(xn.a)(["\n  width: 162px;\n  height: 58px;\n  padding: 15px 25px;\n  line-height: 28px;\n  font-size: 16px;\n  font-family: 'Red Hat Display';\n  font-weight: 400;\n  border-radius: 10px;\n  text-transform: none;\n  background: ",";\n  color: ",";\n  cursor: pointer;\n  transition: background 0.5s ease;\n\n  ","\n\n  ","\n\n  @media (max-width: 920px) {\n    padding: 15px 22px;\n  }\n"])),(function(n){return n.isDisabled?"#0000001f":"#4c78e2"}),(function(n){return n.isDisabled?"#00000042":"#ffffff"}),(function(n){return!n.isDisabled&&"\n    box-shadow: 0 1px 3px 0 #888888;\n\n    &:hover {\n      background: #303f9f;\n    }\n  "}),(function(n){return n.isDisabled&&"\n    pointer-events: none;\n  "})),zn=hn.a.h1(D||(D=Object(xn.a)(["\n  margin: 25px 0 10px;\n  text-align: center;\n  font-family: 'Righteous', cursive;\n"]))),Jn=Object(hn.a)(pn.a)(y||(y=Object(xn.a)(["\n  margin-top: 3px;\n  font-family: 'Questrial', sans-serif;\n  text-align: center;\n  color: #48dda7;\n  transition: height 1s, font-size 1s, opacity 1s;\n  font-size: ",";\n  height: ",";\n  opacity: ",";\n"])),(function(n){return n.showresults?"190px":"0px"}),(function(n){return n.showresults?"213px":"0px"}),(function(n){return n.showresults?"100":"0"})),Qn=Object(hn.a)(pn.a)(C||(C=Object(xn.a)(["\n  position: absolute;\n  right: 8px;\n  bottom: 50px;\n  font-size: 20px;\n  opacity: ",";\n"])),(function(n){return n.showresults?"100":"0"})),Ln=Object(hn.a)(pn.a)(k||(k=Object(xn.a)(["\n  margin-top: 5px;\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n"]))),Pn=Object(hn.a)(pn.a)(M||(M=Object(xn.a)(["\n  background: #d1dcf9;\n  border-radius: 10px;\n  margin-top: 20px;\n  padding: 10px 0 15px 0;\n  font-size: 26px;\n  font-weight: 600;\n  text-align: center;\n"]))),Vn=function(){var n=i.a.useContext(ln),e=i.a.useState(""),t=Object(l.a)(e,2),r=t[0],a=t[1];return i.a.useEffect((function(){a("")}),[null===n||void 0===n?void 0:n.showResults]),n?Object(un.jsxs)(Hn,{children:[Object(un.jsx)(qn,{children:Object(un.jsx)(In,{})}),Object(un.jsx)(Kn,{showresults:n.showResults,placeholder:"Working area ...",value:r,onChange:function(n){return a(n.target.value)}}),Object(un.jsx)(Nn,{})]}):null},Hn=Object(hn.a)(pn.a)(E||(E=Object(xn.a)(["\n  @media (max-width: 920px) {\n    margin-top: 0;\n    margin-left: 10px;\n  }\n"]))),qn=Object(hn.a)(pn.a)(R||(R=Object(xn.a)(["\n  @media (max-width: 920px) {\n    display: none;\n  }\n"]))),Kn=hn.a.textarea(N||(N=Object(xn.a)(["\n  resize: none;\n  width: 385px;\n  border-radius: 10px;\n  font-size: 18px;\n  margin-bottom: 0px;\n  outline: none;\n  transition: height 1s, opacity 1s, border 1s, margin-top 1s, padding 1s;\n  height: ",";\n  opacity: ",";\n  border: ",";\n  margin-top: ",";\n  padding: ",";\n\n  @media (max-width: 920px) {\n    margin-left: 10px;\n    width: 375px;\n  }\n"])),(function(n){return n.showresults?"0px":"200px"}),(function(n){return n.showresults?"0":"100"}),(function(n){return n.showresults?"0":"3px solid #d1dcf9"}),(function(n){return n.showresults?"0px":"16px"}),(function(n){return n.showresults?"0 15px":"15px 15px"})),Yn=function(){return Object(un.jsxs)(Fn,{children:[Object(un.jsx)(yn,{}),Object(un.jsx)(Vn,{})]})},Fn=Object(hn.a)(pn.a)(U||(U=Object(xn.a)(["\n  display: flex;\n\n  @media (max-width: 920px) {\n    flex-direction: column;\n  }\n"]))),Xn=[{userId:"s",name:"Simple",numberRangeAS:20,numberRangeM:7,numberRangeD:16,highScore:0,currentScore:0,operationType:r.ADD},{userId:"a",name:"Advanced",numberRangeAS:300,numberRangeM:12,numberRangeD:100,highScore:0,currentScore:0,operationType:r.ADD}],Gn=Object(hn.a)(pn.a)(B||(B=Object(xn.a)(["\n  margin-left: 50px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n\n  @media(max-width: 921px) {\n    min-width: 410px;\n    width: 100%;\n    margin-left: 0;\n    padding: 0 50px;\n  }\n"]))),Wn=Object(hn.a)(pn.a)(T||(T=Object(xn.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]))),Zn=hn.a.h1(z||(z=Object(xn.a)(["\n  margin-top: 20px;\n  margin-left: 65px;\n  font-family: 'Righteous', cursive;\n  font-size: 40px;\n  transition: margin-left 1s ease;\n\n  @media(max-width: 920px) {\n    margin: 20px auto;\n  }\n"]))),$n=hn.a.span(J||(J=Object(xn.a)(["\n  margin: 10px 0 30px;\n  font-family: 'Red Hat Display', sans-serif;\n  font-size: 24px;\n"]))),_n=Object(hn.a)(pn.a)(Q||(Q=Object(xn.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 50px;\n"]))),ne=Object(hn.a)(pn.a)(L||(L=Object(xn.a)(["\n  max-width: 380px;\n  flex-grow: 1;\n  height: 125px;\n  padding: 5px 10px 5px 15px;\n  background: #EEEFF2;\n  border-radius: 10px;\n  border: 3px solid #D1DCF9;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  &:hover {\n    background: #e6e8f5;\n    border: 3px solid #7D9DED;\n  }\n"]))),ee=Object(hn.a)(pn.a)(P||(P=Object(xn.a)(["\n  margin: 0px 1px;\n  text-align: left;\n  font-size: 30px;\n  font-weight: 600;\n  color: #7D9DED;\n"]))),te=Object(hn.a)(pn.a)(V||(V=Object(xn.a)(["\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n"]))),re=Object(hn.a)(pn.a)(H||(H=Object(xn.a)(["\n  text-align: right;\n  font-size: 18px;\n"]))),ae=Object(hn.a)(pn.a)(q||(q=Object(xn.a)(["\n  text-align: right;\n  font-size: 22px;\n  font-weight: 700;\n  color: #48DDA7;\n"]))),ie=hn.a.span(K||(K=Object(xn.a)(["\n  display: inline-block;\n  width: 45px;\n  text-align: center;\n"]))),ce=function(){var n=Object(Dn.f)(),e=i.a.useContext(ln),t=i.a.useMemo((function(){if(!(null===e||void 0===e?void 0:e.users))return[];var n=Object(u.a)(null===e||void 0===e?void 0:e.users);return n.sort((function(n,e){return e.userId.localeCompare(n.userId)})),n}),[null===e||void 0===e?void 0:e.users]),r=i.a.useCallback((function(t){null===e||void 0===e||e.setUserId(t.userId),n.push("/"+t.userId)}),[]);return i.a.useEffect((function(){0===(null===e||void 0===e?void 0:e.users.length)&&(null===e||void 0===e||e.setUsers(Xn))}),[]),e?Object(un.jsxs)(Gn,{children:[Object(un.jsx)(Wn,{children:Object(un.jsx)(Zn,{children:"Mathsight"})}),Object(un.jsx)($n,{children:"Difficulty"}),Object(un.jsx)(_n,{children:t.map((function(n){return Object(un.jsxs)(ne,{onClick:function(){return r(n)},children:[Object(un.jsx)(ee,{children:n.name}),Object(un.jsxs)(te,{children:[Object(un.jsxs)(re,{children:["Current score: ",Object(un.jsx)(ie,{children:n.currentScore})]}),Object(un.jsxs)(ae,{children:["High score: ",Object(un.jsx)(ie,{children:n.highScore})]})]})]},n.userId)}))})]}):null},se=t(39);var oe=function(){return Object(un.jsx)(se.a,{children:Object(un.jsx)(dn,{children:Object(un.jsx)("div",{className:"App",children:Object(un.jsxs)(Dn.c,{children:[Object(un.jsx)(Dn.a,{path:"/",exact:!0,component:ce}),Object(un.jsx)(Dn.a,{path:"/a",exact:!0,component:Yn}),Object(un.jsx)(Dn.a,{path:"/s",exact:!0,component:Yn})]})})})})};s.a.render(Object(un.jsx)(i.a.StrictMode,{children:Object(un.jsx)(oe,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.ab2e62ee.chunk.js.map