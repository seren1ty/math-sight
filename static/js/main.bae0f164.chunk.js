(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[0],{74:function(n,e,t){},86:function(n,e,t){"use strict";t.r(e);var r,a=t(0),i=t.n(a),c=t(10),s=t.n(c),o=(t(74),t(27)),u=t(24),l=t(16),d=t(42);t(38),t(48);!function(n){n[n.ADD=0]="ADD",n[n.MINUS=1]="MINUS",n[n.MULTIPLY=2]="MULTIPLY",n[n.DIVIDE=3]="DIVIDE"}(r||(r={}));var b,p,h,x,f,j,g,O,m,w,S,v,I,D,y,k,C,M,R,N,A,T,z,E,U,J,L,q,H,P,V,Y=t(54),Q=t.n(Y),F=(t(55),function(n){localStorage.setItem("mathSight-accounts",JSON.stringify(n))}),W=function(){var n=localStorage.getItem("mathSight-accounts");return n?JSON.parse(n):(F([]),[])},B=function(){var n,e=localStorage.getItem("mathSight-accountId");if(!e){var t=Q()();return console.log("New account created: "+t),n=t,localStorage.setItem("mathSight-accountId",JSON.stringify(n)),F([].concat(Object(u.a)(W()),[{accountId:t,name:"Default",userIds:[]}])),t}return JSON.parse(e)},G=function(n,e){localStorage.setItem("mathSight-users-"+n,JSON.stringify(e))},X=function(n){localStorage.setItem("mathSight-userId",JSON.stringify(n))},K=function(n,e){localStorage.setItem("mathSight-operationType-"+n,JSON.stringify(e))},Z=function(n){var e=localStorage.getItem("mathSight-operationType-"+n);return e?JSON.parse(e):(n&&K(n,r.ADD),0)},$=function(n,e){localStorage.setItem("mathSight-highScore-"+n,JSON.stringify(e))},_=function(n){var e=localStorage.getItem("mathSight-highScore-"+n);return e?Number(JSON.parse(e)):(n&&$(n,0),0)},nn=function(n,e){localStorage.setItem("mathSight-currentScore-"+n,JSON.stringify(e))},en=function(n){var e=localStorage.getItem("mathSight-currentScore-"+n);return e?Number(JSON.parse(e)):(n&&nn(n,0),0)},tn=t(56),rn=function(){function n(e,t,a,i){Object(d.a)(this,n),this.id=void 0,this.numberOne=void 0,this.numberTwo=void 0,this.operation=void 0,this.id=e,this.numberOne=t,this.numberTwo=a,this.operation=i||r.ADD}return Object(tn.a)(n,[{key:"getResult",value:function(){var n=Number(this.numberOne),e=Number(this.numberTwo);switch(this.operation){case r.MINUS:return n-e;case r.MULTIPLY:return n*e;case r.DIVIDE:return n/e;default:return n+e}}}]),n}(),an=t(2),cn=i.a.createContext(null),sn=function(n){var e=n.children,t=n.initialQuestions,c=Object(a.useState)(W()),s=Object(l.a)(c,2),d=s[0],b=s[1],p=Object(a.useState)(B()),h=Object(l.a)(p,2),x=h[0],f=h[1],j=Object(a.useState)(function(n){var e=localStorage.getItem("mathSight-users-"+n);return e?JSON.parse(e):(G(n,[]),[])}(x)),g=Object(l.a)(j,2),O=g[0],m=g[1],w=Object(a.useState)(function(){var n=localStorage.getItem("mathSight-userId");return n?JSON.parse(n):(X(""),"")}()),S=Object(l.a)(w,2),v=S[0],I=S[1],D=i.a.useMemo((function(){return O.find((function(n){return n.userId===v}))}),[O,v]),y=i.a.useRef(0),k=i.a.useRef(0),C=i.a.useRef(0),M=i.a.useState(Z(v)),R=Object(l.a)(M,2),N=R[0],A=R[1],T=Object(a.useState)(t||[]),z=Object(l.a)(T,2),E=z[0],U=z[1],J=Object(a.useState)([]),L=Object(l.a)(J,2),q=L[0],H=L[1],P=Object(a.useState)(!1),V=Object(l.a)(P,2),Y=V[0],Q=V[1],F=Object(a.useState)(_(v)),tn=Object(l.a)(F,2),sn=tn[0],on=tn[1],un=Object(a.useState)(en(v)),ln=Object(l.a)(un,2),dn=ln[0],bn=ln[1],pn=i.a.useCallback((function(){U([]),H([]),Q(!1),A(Z(v)),on(_(v)),bn(en(v))}),[v,U,H,A,Q,on,bn]),hn=i.a.useCallback((function(n){for(var e=2,t=Math.sqrt(n);e<=t;e++)if(n%e===0)return!1;return n>1}),[]),xn=i.a.useCallback((function(){pn();var n,e=[];n=N===r.ADD||N===r.MINUS?y.current:N===r.MULTIPLY?k.current:C.current;for(var t=0,a=1e6,i=function(i){t++;var s=Math.floor(Math.random()*n),o=Math.floor(Math.random()*n);if(t>=a)return c=i,"break";if((N===r.MULTIPLY||N===r.DIVIDE)&&(s<=1||o<=1))return c=i-=1,"continue";if((N===r.MINUS||N===r.DIVIDE)&&s<o)return c=i-=1,"continue";if(N===r.DIVIDE){if(hn(s))return c=i-=1,"continue";for(;(s===o||s%o!==0||1===o)&&(t++,o=Math.floor(Math.random()*n),!(t>=a)););}if(e.some((function(n){return n.numberOne===s&&n.numberTwo===o})))i-=1;else{var u=new rn(i,s,o,N);e.push(u)}c=i},c=0;c<10;c++){var s=i(c);if("break"===s)break}U(e)}),[y,k,C,N,pn,hn]),fn=i.a.useCallback((function(n){return Number(q[n.id])===Number(n.getResult())}),[q]),jn=i.a.useCallback((function(n){var e=O.filter((function(e){return e.userId!=n.userId}));m([].concat(Object(u.a)(e),[n]))}),[O]);return Object(a.useEffect)((function(){v&&(X(v),y.current=(null===D||void 0===D?void 0:D.numberRangeAS)||10,k.current=(null===D||void 0===D?void 0:D.numberRangeM)||10,C.current=(null===D||void 0===D?void 0:D.numberRangeD)||10,A((null===D||void 0===D?void 0:D.operationType)||r.ADD),xn())}),[v]),Object(a.useEffect)((function(){v&&(D&&jn(Object(o.a)(Object(o.a)({},D),{},{highScore:sn})),$(v,sn))}),[sn]),Object(a.useEffect)((function(){v&&(D&&jn(Object(o.a)(Object(o.a)({},D),{},{currentScore:dn})),nn(v,dn))}),[dn]),Object(a.useEffect)((function(){x&&G(x,O)}),[O]),Object(a.useEffect)((function(){v&&(D&&jn(Object(o.a)(Object(o.a)({},D),{},{operationType:N})),K(v,N),xn())}),[N]),Object(an.jsx)(cn.Provider,{value:{accounts:d,accountId:x,users:O,userId:v,operationType:N,questions:E,answers:q,showResults:Y,highScore:sn,currentScore:dn,setAccounts:b,setAccountId:f,setUsers:m,setUserId:I,setOperationType:A,setQuestions:U,setAnswers:H,setShowResults:Q,setHighScore:on,setCurrentScore:bn,resetFields:pn,generateQuestions:xn,checkAnswer:fn},children:e})},on=t(114),un=t(6),ln=t(7),dn=function(){var n=i.a.useContext(cn),e=i.a.useCallback((function(e,t){if(n){var r=Object(u.a)(n.answers);r.length<=e?r.push(t):r[e]=t,n.setAnswers(r)}}),[n]),t=i.a.useCallback((function(n){switch(n){case r.MINUS:return"-";case r.MULTIPLY:return"x";case r.DIVIDE:return"/";default:return"+"}}),[]),a=i.a.useCallback((function(e){return!!n&&(0===e||e<(null===n||void 0===n?void 0:n.answers.length)+1)}),[n]),c=i.a.useCallback((function(e){return(null===n||void 0===n?void 0:n.answers[e])||""}),[n]);return n?Object(an.jsx)(on.a,{marginX:5,children:Object(an.jsx)(on.a,{flexDirection:"column",children:n.questions.map((function(r){return Object(an.jsxs)(on.a,{display:"flex",m:1.5,fontSize:26,fontWeight:700,children:[Object(an.jsxs)(bn,{children:[Object(an.jsx)(on.a,{pr:1,width:"80px",children:r.numberOne}),Object(an.jsx)(on.a,{pr:1,flexGrow:1,children:t(r.operation)}),Object(an.jsx)(on.a,{width:"80px",children:r.numberTwo})]}),Object(an.jsx)(pn,{"data-testid":"AnswerInput-".concat(r.id),type:"number",value:c(r.id),onChange:function(n){return e(r.id,n.target.value)},disabled:!a(r.id)}),Object(an.jsxs)(hn,{width:"100px",pl:3,lineHeight:"30px",correct:n.showResults&&n.checkAnswer(r),children:[!n.showResults&&a(r.id)&&Object(an.jsx)(xn,{children:"?"}),n.showResults&&Object(an.jsx)(fn,{children:r.getResult()})]})]},r.id)}))})}):null},bn=Object(ln.a)(on.a)(b||(b=Object(un.a)(["\n  display: flex;\n  flex-grow: 1;\n  justify-content: center;\n  text-align: center;\n  margin-right: 28px;\n  background: #d1dcf9;\n  border-radius: 10px;\n  font-size: 20px;\n  line-height: 40px;\n"]))),pn=ln.a.input(p||(p=Object(un.a)(["\n  width: 105px;\n  font-size: 20px;\n  border: 2px solid black;\n  border-radius: 10px;\n  outline: none;\n  padding: 6px;\n\n  &:disabled {\n    border: 2px solid #cacaca;\n    background: #e0e0e0;\n  }\n"]))),hn=Object(ln.a)(on.a)(h||(h=Object(un.a)(["\n  color: ",";\n  line-height: 38px;\n"])),(function(n){return n.correct?"#48dda7":"red"})),xn=Object(ln.a)(on.a)(x||(x=Object(un.a)(["\n  width: 100px;\n  height: 40px;\n  background: #e0e0e030;\n  border-radius: 10px;\n  margin-top: 0px;\n  margin-left: 0px;\n  color: #80808020;\n  font-weight: 600;\n  text-align: center;\n  line-height: 40px;\n\n  @media (max-width: 920px) {\n    width: 45px;\n  }\n"]))),fn=Object(ln.a)(on.a)(f||(f=Object(un.a)(["\n  width: 90px;\n  text-align: center;\n  font-size: 24px;\n\n  @media (max-width: 920px) {\n    width: 45px;\n  }\n"]))),jn=t(115),gn=t(112),On=Object(ln.a)(gn.a)(j||(j=Object(un.a)(["\n  width: 385px;\n  background: #d1dcf9;\n  outline: none;\n  border-radius: 10px;\n  font-size: 20px;\n  padding: 10px;\n\n  &::before {\n    border: 0px;\n  }\n\n  &::after {\n    border: 0px;\n  }\n\n  &.MuiInput-underline:before {\n    border-bottom: 0px;\n  }\n\n  &.MuiInput-underline:hover:not(.Mui-disabled):before {\n    border-bottom: 0px;\n  }\n\n  &.MuiInput-underline:after {\n    border-bottom: 0px;\n  }\n\n  .MuiSelect-root {\n    padding-left: 10px;\n    line-height: 24px;\n  }\n\n  .MuiSelect-select:focus {\n    border-radius: 10px;\n    background: #d1dcf9;\n  }\n"]))),mn=function(){var n=i.a.useContext(cn),e=i.a.useCallback((function(e){null===n||void 0===n||n.setOperationType(e.target.value)}),[n]);return n?Object(an.jsx)(on.a,{marginTop:"25px",children:Object(an.jsxs)(On,{value:n.operationType,onChange:e,children:[Object(an.jsx)(jn.a,{value:r.ADD,children:"Add"}),Object(an.jsx)(jn.a,{value:r.MINUS,children:"Subtract"}),Object(an.jsx)(jn.a,{value:r.MULTIPLY,children:"Multiply"}),Object(an.jsx)(jn.a,{value:r.DIVIDE,children:"Divide"})]})}):null},wn=t(12),Sn=function(){var n=Object(wn.f)(),e=i.a.useCallback((function(){return n.push("/")}),[n]);return Object(an.jsxs)(on.a,{children:[Object(an.jsxs)(on.a,{display:"flex",alignItems:"center",children:[Object(an.jsx)(vn,{onClick:function(){return e()},children:"Mathsight"}),Object(an.jsx)(In,{children:Object(an.jsx)(mn,{})})]}),Object(an.jsx)(dn,{})]})},vn=ln.a.h1(g||(g=Object(un.a)(["\n  margin: 20px 0;\n  padding: 0 0 10px 115px;\n  font-size: 40px;\n  font-family: 'Righteous', cursive;\n  cursor: pointer;\n\n  @media (max-width: 920px) {\n    margin: 20px 0 0 70px;\n    padding: 0 0 10px 0px;\n    font-size: 28px;\n  }\n"]))),In=Object(ln.a)(on.a)(O||(O=Object(un.a)(["\n  .MuiInput-root {\n    max-width: 175px;\n    margin-left: 52px;\n    margin-bottom: 15px;\n  }\n\n  @media (min-width: 920px) {\n    display: none;\n  }\n"]))),Dn=function(){var n=i.a.useContext(cn),e=i.a.useCallback((function(e){if(n){var t=n.currentScore+e;n.setCurrentScore(t)}}),[n]),t=i.a.useCallback((function(e){if(n){var t=n.currentScore+e;t<=n.highScore||n.setHighScore(t)}}),[n]),r=i.a.useCallback((function(){return n?n.questions.filter((function(e){return n.checkAnswer(e)})).length:0}),[n]),a=i.a.useCallback((function(){if(n){var a=r();a===n.questions.length?(t(n.questions.length),e(n.questions.length)):(t(a),n.setCurrentScore(0)),n.setShowResults(!0)}}),[n,r,t,e]);return n?Object(an.jsxs)(yn,{showresults:n.showResults,children:[Object(an.jsxs)(kn,{children:[Object(an.jsx)(Cn,{onClick:function(){return a()},isDisabled:n.showResults||n.answers.length<n.questions.length,children:"Check Answers"}),Object(an.jsx)(Mn,{onClick:function(){return n.generateQuestions()},isDisabled:!n.showResults,children:"New Questions"})]}),Object(an.jsx)(Rn,{children:"Results"}),Object(an.jsxs)(on.a,{position:"relative",children:[Object(an.jsx)(Nn,{showresults:n.showResults,children:r()}),Object(an.jsx)(An,{showresults:n.showResults,children:"out of 10"})]}),Object(an.jsxs)(Tn,{children:["Current total: ",n.currentScore]}),Object(an.jsxs)(zn,{children:["High score: ",n.highScore]})]}):null},yn=Object(ln.a)(on.a)(m||(m=Object(un.a)(["\n  display: flex;\n  flex-direction: column;\n  background: #eeeff2;\n  padding: 20px;\n  border-radius: 10px;\n  transition: height 1s, margin-top 1s;\n  height: ",";\n  margin-top: ",";\n"])),(function(n){return n.showresults?"505px":"292px"}),(function(n){return n.showresults?"0px":"13px"})),kn=Object(ln.a)(on.a)(w||(w=Object(un.a)(["\n  display: flex;\n"]))),Cn=Object(ln.a)(on.a)(S||(S=Object(un.a)(["\n  width: 162px;\n  height: 58px;\n  padding: 15px 25px;\n  line-height: 28px;\n  font-size: 16px;\n  font-family: 'Red Hat Display';\n  font-weight: 400;\n  margin-right: 21px;\n  border-radius: 10px;\n  text-transform: none;\n  background: ",";\n  color: ",";\n  cursor: pointer;\n  transition: background 0.5s ease;\n\n  ","\n\n  ","\n"])),(function(n){return n.isDisabled?"#0000001f":"#4c78e2"}),(function(n){return n.isDisabled?"#00000042":"#ffffff"}),(function(n){return!n.isDisabled&&"\n    box-shadow: 0 1px 3px 0 #888888;\n\n    &:hover {\n      background: #303f9f;\n    }\n  "}),(function(n){return n.isDisabled&&"\n    pointer-events: none;\n  "})),Mn=Object(ln.a)(on.a)(v||(v=Object(un.a)(["\n  width: 162px;\n  height: 58px;\n  padding: 15px 25px;\n  line-height: 28px;\n  font-size: 16px;\n  font-family: 'Red Hat Display';\n  font-weight: 400;\n  border-radius: 10px;\n  text-transform: none;\n  background: ",";\n  color: ",";\n  cursor: pointer;\n  transition: background 0.5s ease;\n\n  ","\n\n  ","\n"])),(function(n){return n.isDisabled?"#0000001f":"#4c78e2"}),(function(n){return n.isDisabled?"#00000042":"#ffffff"}),(function(n){return!n.isDisabled&&"\n    box-shadow: 0 1px 3px 0 #888888;\n\n    &:hover {\n      background: #303f9f;\n    }\n  "}),(function(n){return n.isDisabled&&"\n    pointer-events: none;\n  "})),Rn=ln.a.h1(I||(I=Object(un.a)(["\n  margin: 25px 0 10px;\n  text-align: center;\n  font-family: 'Righteous', cursive;\n"]))),Nn=Object(ln.a)(on.a)(D||(D=Object(un.a)(["\n  margin-top: 3px;\n  font-family: 'Questrial', sans-serif;\n  text-align: center;\n  color: #48dda7;\n  transition: height 1s, font-size 1s, opacity 1s;\n  font-size: ",";\n  height: ",";\n  opacity: ",";\n"])),(function(n){return n.showresults?"190px":"0px"}),(function(n){return n.showresults?"213px":"0px"}),(function(n){return n.showresults?"100":"0"})),An=Object(ln.a)(on.a)(y||(y=Object(un.a)(["\n  position: absolute;\n  right: 8px;\n  bottom: 50px;\n  font-size: 20px;\n  opacity: ",";\n"])),(function(n){return n.showresults?"100":"0"})),Tn=Object(ln.a)(on.a)(k||(k=Object(un.a)(["\n  margin-top: 5px;\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n"]))),zn=Object(ln.a)(on.a)(C||(C=Object(un.a)(["\n  background: #d1dcf9;\n  border-radius: 10px;\n  margin-top: 20px;\n  padding: 10px 0 15px 0;\n  font-size: 26px;\n  font-weight: 600;\n  text-align: center;\n"]))),En=function(){var n=i.a.useContext(cn),e=i.a.useState(""),t=Object(l.a)(e,2),r=t[0],a=t[1];return i.a.useEffect((function(){a("")}),[null===n||void 0===n?void 0:n.showResults]),n?Object(an.jsxs)(Un,{children:[Object(an.jsx)(Jn,{children:Object(an.jsx)(mn,{})}),Object(an.jsx)(Ln,{showresults:n.showResults,placeholder:"Working area ...",value:r,onChange:function(n){return a(n.target.value)}}),Object(an.jsx)(Dn,{})]}):null},Un=Object(ln.a)(on.a)(M||(M=Object(un.a)(["\n  margin-top: 10px;\n\n  @media (max-width: 920px) {\n    margin-top: 0;\n    margin-left: 50px;\n  }\n"]))),Jn=Object(ln.a)(on.a)(R||(R=Object(un.a)(["\n  @media (max-width: 920px) {\n    display: none;\n  }\n"]))),Ln=ln.a.textarea(N||(N=Object(un.a)(["\n  resize: none;\n  width: 385px;\n  border-radius: 10px;\n  font-size: 18px;\n  margin-bottom: 0px;\n  outline: none;\n  transition: all 1s;\n  height: ",";\n  opacity: ",";\n  border: ",";\n  margin-top: ",";\n  padding: ",";\n"])),(function(n){return n.showresults?"0px":"200px"}),(function(n){return n.showresults?"0":"100"}),(function(n){return n.showresults?"0":"3px solid #d1dcf9"}),(function(n){return n.showresults?"0px":"16px"}),(function(n){return n.showresults?"0 15px":"15px 15px"})),qn=function(){return Object(an.jsxs)(on.a,{display:"flex",flexWrap:"wrap",children:[Object(an.jsx)(Sn,{}),Object(an.jsx)(En,{})]})},Hn=[{userId:"s",name:"Simple",numberRangeAS:20,numberRangeM:7,numberRangeD:16,highScore:0,currentScore:0,operationType:r.ADD},{userId:"a",name:"Advanced",numberRangeAS:300,numberRangeM:12,numberRangeD:100,highScore:0,currentScore:0,operationType:r.ADD}],Pn=Object(ln.a)(on.a)(A||(A=Object(un.a)(["\n  width: 810px;\n  margin: 0 50px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n"]))),Vn=Object(ln.a)(on.a)(T||(T=Object(un.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]))),Yn=ln.a.h1(z||(z=Object(un.a)(["\n  margin-top: 20px;\n  margin-left: 65px;\n  font-family: 'Righteous', cursive;\n  font-size: 40px;\n"]))),Qn=ln.a.span(E||(E=Object(un.a)(["\n  margin: 10px 0 30px;\n  font-family: 'Red Hat Display', sans-serif;\n  font-size: 24px;\n"]))),Fn=Object(ln.a)(on.a)(U||(U=Object(un.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 50px;\n"]))),Wn=Object(ln.a)(on.a)(J||(J=Object(un.a)(["\n  width: 380px;\n  height: 125px;\n  padding: 5px 10px 5px 15px;\n  background: #EEEFF2;\n  border-radius: 10px;\n  border: 3px solid #D1DCF9;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  &:hover {\n    background: #e6e8f5;\n    border: 3px solid #7D9DED;\n  }\n"]))),Bn=Object(ln.a)(on.a)(L||(L=Object(un.a)(["\n  margin: 0px 1px;\n  text-align: left;\n  font-size: 30px;\n  font-weight: 600;\n  color: #7D9DED;\n"]))),Gn=Object(ln.a)(on.a)(q||(q=Object(un.a)(["\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n"]))),Xn=Object(ln.a)(on.a)(H||(H=Object(un.a)(["\n  text-align: right;\n  font-size: 18px;\n"]))),Kn=Object(ln.a)(on.a)(P||(P=Object(un.a)(["\n  text-align: right;\n  font-size: 22px;\n  font-weight: 700;\n  color: #48DDA7;\n"]))),Zn=ln.a.span(V||(V=Object(un.a)(["\n  display: inline-block;\n  width: 45px;\n  text-align: center;\n"]))),$n=function(){var n=Object(wn.f)(),e=i.a.useContext(cn),t=i.a.useMemo((function(){if(!(null===e||void 0===e?void 0:e.users))return[];var n=Object(u.a)(null===e||void 0===e?void 0:e.users);return n.sort((function(n,e){return e.userId.localeCompare(n.userId)})),n}),[null===e||void 0===e?void 0:e.users]),r=i.a.useCallback((function(t){null===e||void 0===e||e.setUserId(t.userId),n.push("/"+t.userId)}),[]);return i.a.useEffect((function(){0===(null===e||void 0===e?void 0:e.users.length)&&(null===e||void 0===e||e.setUsers(Hn))}),[]),e?Object(an.jsxs)(Pn,{display:"flex",flexDirection:"column",flexWrap:"wrap",children:[Object(an.jsx)(Vn,{children:Object(an.jsx)(Yn,{children:"Mathsight"})}),Object(an.jsx)(Qn,{children:"Difficulty"}),Object(an.jsx)(Fn,{children:t.map((function(n){return Object(an.jsxs)(Wn,{onClick:function(){return r(n)},children:[Object(an.jsx)(Bn,{children:n.name}),Object(an.jsxs)(Gn,{children:[Object(an.jsxs)(Xn,{children:["Current score: ",Object(an.jsx)(Zn,{children:n.currentScore})]}),Object(an.jsxs)(Kn,{children:["High score: ",Object(an.jsx)(Zn,{children:n.highScore})]})]})]},n.userId)}))})]}):null},_n=t(40);var ne=function(){return Object(an.jsx)(_n.a,{children:Object(an.jsx)(sn,{children:Object(an.jsx)("div",{className:"App",children:Object(an.jsxs)(wn.c,{children:[Object(an.jsx)(wn.a,{path:"/",exact:!0,component:$n}),Object(an.jsx)(wn.a,{path:"/a",exact:!0,component:qn}),Object(an.jsx)(wn.a,{path:"/s",exact:!0,component:qn})]})})})})};s.a.render(Object(an.jsx)(i.a.StrictMode,{children:Object(an.jsx)(ne,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.bae0f164.chunk.js.map