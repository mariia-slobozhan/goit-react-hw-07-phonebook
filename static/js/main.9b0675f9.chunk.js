(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"PhonebookForm_label__3U3R5",input:"PhonebookForm_input__2dnQi",button:"PhonebookForm_button__PgsGL"}},13:function(t,e,n){t.exports={item:"ContactItem_item__3cRiV",name:"ContactItem_name__11JdY",tel:"ContactItem_tel__20zKS",button:"ContactItem_button___CVa9"}},16:function(t,e,n){t.exports={label:"Filter_label__3Ytmd",input:"Filter_input__3Lzmv"}},30:function(t,e,n){},31:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var a,c=n(0),o=n.n(c),r=n(9),s=n.n(r),i=n(11),u=n(1),l=n(5),b=n(17),d=Object(b.a)({reducerPath:"contactsApi",baseQuery:Object(l.d)({baseUrl:"https://61981ad0164fa60017c22f69.mockapi.io/api/v1"}),tagTypes:["Contacts"],endpoints:function(t){return{getContacts:t.query({query:function(){return"/contacts"},providesTags:["Contacts"]}),addContact:t.mutation({query:function(t){return{url:"/contacts",method:"POST",body:t}},invalidatesTags:["Contacts"]}),deleteContact:t.mutation({query:function(t){return{url:"/contacts/".concat(t),method:"DELETE"}},invalidatesTags:["Contacts"]})}}}),j=d.useGetContactsQuery,h=d.useAddContactMutation,m=d.useDeleteContactMutation,O=n(6),p=Object(u.b)("contacts/changeFilter"),f=Object(u.d)("",Object(i.a)({},p,(function(t,e){return e.payload}))),x=Object(O.b)({filter:f}),_=Object(u.a)({reducer:(a={},Object(i.a)(a,d.reducerPath,d.reducer),Object(i.a)(a,"filterValue",x),a),middleware:function(t){return t().concat(d.middleware)}});Object(l.e)(_.dispatch);var C=_,v=n(4),g=(n(30),n(31),n(12)),y=(n(32),n(8)),k=n(10),N=n.n(k),w=n(2);function L(){var t=Object(c.useState)(""),e=Object(y.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(""),r=Object(y.a)(o,2),s=r[0],i=r[1],u=j().data,l=h(),b=Object(y.a)(l,2),d=b[0],m=b[1].isLoading,O=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"phone":i(c);break;default:return}},p=function(){a(""),i("")};return Object(w.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=n.toLowerCase();u.some((function(t){return t.name.toLowerCase()===e}))?g.b.error("".concat(n," is already in contact list")):(d({name:n,phone:s}),g.b.success("".concat(n," is added to the contact list!")),p())},children:[Object(w.jsxs)("label",{className:N.a.label,children:["Name",Object(w.jsx)("input",{className:N.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:O,value:n})]}),Object(w.jsxs)("label",{className:N.a.label,children:["Phone number",Object(w.jsx)("input",{className:N.a.input,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:O,value:s})]}),Object(w.jsx)("button",{disabled:m,className:N.a.button,type:"submit",children:"Add contact"})]})}var P=function(t){return t.filterValue.filter},A=n(13),F=n.n(A);function S(t){var e=t.contact,n=m(),a=Object(y.a)(n,2),c=a[0],o=a[1].isLoading;return Object(w.jsxs)("li",{className:F.a.item,id:e.id,children:[Object(w.jsx)("span",{className:F.a.name,children:e.name}),Object(w.jsx)("span",{className:F.a.tel,children:e.phone}),Object(w.jsx)("button",{className:F.a.button,onClick:function(){return c(e.id)},type:"button",children:o?"Deleting...":"Delete"})]})}function T(){var t=Object(c.useState)([]),e=Object(y.a)(t,2),n=e[0],a=e[1],o=j(),r=o.data,s=o.error,i=o.isLoading,u=Object(v.e)(P);return Object(c.useEffect)((function(){var t=u.toLowerCase();try{a(r.filter((function(e){return e.name.toLowerCase().includes(t)})))}catch(s){return s}}),[r,u]),Object(w.jsxs)("ul",{children:[n.map((function(t){return Object(w.jsx)(S,{contact:t},t.id)})),s&&Object(w.jsx)("h2",{children:"There are not any contacts in your Phonebook"}),i&&Object(w.jsx)("h2",{children:"Loading..."})]})}var q=n(16),z=n.n(q);function D(){var t=Object(v.e)(P),e=Object(v.d)();return Object(w.jsxs)("label",{className:z.a.label,children:["Find contacts by name",Object(w.jsx)("input",{className:z.a.input,type:"text",value:t,onChange:function(t){return e(p(t.target.value))}})]})}function E(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("h1",{children:"Phonebook"}),Object(w.jsx)(g.a,{}),Object(w.jsx)(L,{}),Object(w.jsx)("h2",{children:"Contacts"}),Object(w.jsx)(D,{}),Object(w.jsx)(T,{})]})}s.a.render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(v.a,{store:C,children:Object(w.jsx)(E,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.9b0675f9.chunk.js.map