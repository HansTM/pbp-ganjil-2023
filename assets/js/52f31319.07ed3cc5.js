"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[244],{5162:(e,a,n)=>{n.d(a,{Z:()=>o});var t=n(7294),l=n(6010);const i="tabItem_Ymn6";function o(e){let{children:a,hidden:n,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,o),hidden:n},a)}},5488:(e,a,n)=>{n.d(a,{Z:()=>h});var t=n(7462),l=n(7294),i=n(6010),o=n(2389),r=n(7392),s=n(7094),u=n(2466);const m="tabList__CuJ",d="tabItem_LNqP";function p(e){var a,n;const{lazy:o,block:p,defaultValue:h,values:c,groupId:k,className:g}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=c?c:b.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),y=(0,r.l)(v,((e,a)=>e.value===a.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===h?h:null!=(a=null!=h?h:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?a:b[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:A}=(0,s.U)(),[N,U]=(0,l.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=k){const e=T[k];null!=e&&e!==N&&v.some((a=>a.value===e))&&U(e)}const I=e=>{const a=e.currentTarget,n=E.indexOf(a),t=v[n].value;t!==N&&(x(a),U(t),null!=k&&A(k,String(t)))},C=e=>{var a;let n=null;switch(e.key){case"ArrowRight":{var t;const a=E.indexOf(e.currentTarget)+1;n=null!=(t=E[a])?t:E[0];break}case"ArrowLeft":{var l;const a=E.indexOf(e.currentTarget)-1;n=null!=(l=E[a])?l:E[E.length-1];break}}null==(a=n)||a.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},g)},v.map((e=>{let{value:a,label:n,attributes:o}=e;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:e=>E.push(e),onKeyDown:C,onFocus:I,onClick:I},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":N===a})}),null!=n?n:a)}))),o?(0,l.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function h(e){const a=(0,o.Z)();return l.createElement(p,(0,t.Z)({key:String(a)},e))}},8346:(e,a,n)=>{n.d(a,{MX:()=>u,N1:()=>t,Qq:()=>i,SA:()=>m,YO:()=>s,Z1:()=>o,gU:()=>r,wP:()=>d,yq:()=>l});const t="\x3c!-- Anda bisa menggunakan ini sebagai dasar untuk bereksperimen/tugas --\x3e\n<!DOCTYPE html>\n<html>\n    <head>\n        <title>Document</title>\n    </head>\n    <body>\n        <p>Hello, World!</p>\n    </body>\n</html>",l="\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h2>Berikut ini adalah contoh paragraf</h2>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra finibus porta. Fusce imperdiet\n            turpis felis, ut elementum felis lobortis auctor. Curabitur finibus, nunc sed sagittis placerat, lacus\n            massa venenatis lorem, malesuada rutrum ligula justo id lacus.\n        </p>\n        <p>\n            Donec posuere ipsum faucibus lectus lacinia, vitae efficitur dolor vestibulum. Nulla fringilla gravida mollis.\n            Aenean vel libero eleifend, luctus lacus ut, cursus mauris.\n        </p>\n    </body>\n</html>\n",i="\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h1>Saya adalah h1</h1>\n        <h2>Saya adalah h2</h2>\n        <h3>Saya adalah h3</h3>\n        <h4>Saya adalah h4</h4>\n        <h5>Saya adalah h5</h5>\n        <h6>Saya adalah h6</h6>\n    </body>\n</html>\n",o='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <p>\n            <a href="#">Halo, saya adalah link</a>\n        </p>\n        <p>\n            \x3c!-- Target _parent digunakan karena kode output di render dalam sebuah iframe --\x3e\n            <a href="https://google.com/" target="_parent">Link ini akan membuka Google di page yang sama</a>\n        </p>\n        <p>\n            \x3c!-- Target _blank akan membuka link pada page baru --\x3e\n            <a href="https://scele.cs.ui.ac.id/" target="_blank">Link ini akan membuka SCELE di tab baru</a>\n        </p>\n        <p>\n            Link dapat juga diselipkan diantara teks <a href="#">seperti ini</a>\n        </p>\n    </body>\n</html>\n',r='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <p>Clickable Button</p>\n        <a href="https://google.com" target="_blank">\n            <button>Button juga dapat diubah menjadi link</button>\n        </a>\n        <p>Clickable Image</p>\n        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">\n            <img src="https://cs.ui.ac.id/wp-content/uploads/2021/06/logo-fasilkom-white-2.png" />\n        </a>\n    </body>\n</html>\n',s='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h4>Ini adalah gambar</h4>\n        <img src="https://via.placeholder.com/300x150" />\n\n        <h4>Gambar ini tidak bisa di load</h4>\n        <img src="lasflkasjf" alt="Unloadable Image" />\n\n        <h4>Gambar ini memiliki custom width 250px (Original Size: 300x150)</h4>\n        <img src="https://via.placeholder.com/300x150" width="250px" />\n    </body>\n</html>\n',u='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h4>Button dengan sendirinya tidak melakukan apapun</h4>\n        <button>Does Nothing</button>\n\n        <h4>Button ini adalah link</h4>\n        <a href="https://google.com/" target="_blank">\n            <button>Open Google</button>\n        </a>\n\n        <h4>Button ini akan menampilkan sebuah popup menggunakan JavaScript</h4>\n        <button id="click-me">Click Me</button>\n        <script>\n            // Line ini akan assign sebuah arrow function ke event onclick pada button.\n            // () => alert("Clicked!") memiliki arti "buatlah fungsi\n            // tak bernama yang membuat popup dengan tulisan \'Clicked!\'\n            document.getElementById("click-me").onclick = () => alert("Clicked!")\n        <\/script>\n    </body>\n</html>\n',m='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <body>\n        \x3c!-- Dengan div kita dapat mengaplikasikan sebuah CSS style ke sekelompok elemen --\x3e\n        <div style="background-color: lightgrey;">\n            <h3>Artikel 1</h3>\n            <p>Lorem ipsum yadda yadda this is the first article</p>\n        </div>\n        \x3c!-- Kita juga dapat mengaplikasikan style positioning ke kelompok elemen ini untuk memisahkannya dari container sebelumnya --\x3e\n        <div style="background-color: grey; margin-top: 2rem">\n            <h3>Artikel 2</h3>\n            <p>Lorem ipsum yadda yadda this is the second article</p>\n        </div>\n    </body>\n</html>\n',d='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <body>\n        <h4>Kelompok ini akan tersusun secara vertikal</h4>\n        <div>\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-top: 2rem">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n\n        \x3c!-- Berbagai macam recipe untuk layouting page akan dibahas di bagian Common Recipes --\x3e\n        <h4>Kelompok ini akan tersusun secara horizontal</h4>\n        <div style="display: flex; align-items: center;">\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-left: 1rem;">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n    </body>\n</html>\n'},5568:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>m,default:()=>k,frontMatter:()=>u,metadata:()=>d,toc:()=>h});var t=n(7462),l=(n(7294),n(3905)),i=n(5488),o=n(5162),r=n(333),s=n(8346);const u={sidebar_position:6,sidebar_label:"<div> Container",title:"<div> Container"},m="&lt;div&gt; - Container",d={unversionedId:"html/html-elements/html-div-element",id:"html/html-elements/html-div-element",title:"<div> Container",description:"Elemen div atau container yang dapat digunakan untuk menggabungkan beberapa elemen kedalam satu elemen gabungan.",source:"@site/docs/html/html-elements/html-div-element.mdx",sourceDirName:"html/html-elements",slug:"/html/html-elements/html-div-element",permalink:"/ganjil-2023/docs/html/html-elements/html-div-element",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"<div> Container",title:"<div> Container"},sidebar:"defaultSidebar",previous:{title:"<button> Button",permalink:"/ganjil-2023/docs/html/html-elements/html-button-element"},next:{title:"More Elements",permalink:"/ganjil-2023/docs/html/more-elements"}},p={},h=[{value:"Beberapa Fungsi Container",id:"beberapa-fungsi-container",level:3},{value:"Contoh Penggunaan",id:"contoh-penggunaan",level:3}],c={toc:h};function k(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"div---container"},"<","div",">"," - Container"),(0,l.kt)("p",null,"Elemen div atau container yang dapat digunakan untuk menggabungkan beberapa elemen kedalam satu elemen gabungan."),(0,l.kt)("p",null,"Elemen ini ",(0,l.kt)("strong",{parentName:"p"},"sangat berguna")," dalam mengimplementasikan layout yang lebih kompleks karena memungkinkan kita mengaplikasikan CSS style untuk positioning dan penampilan ke masing-masing kelompok komponen."),(0,l.kt)("p",null,"Tanpa menggunakan container, akan ",(0,l.kt)("strong",{parentName:"p"},"sangat sulit")," atau bahkan ",(0,l.kt)("strong",{parentName:"p"},"tidak mungkin")," untuk mengatur posisi sekelompok elemen pada halaman dengan rapih, sehingga elemen ini adalah elemen yang fundamental. "),(0,l.kt)("h3",{id:"beberapa-fungsi-container"},"Beberapa Fungsi Container"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Mempermudah manajemen elemen pada sebuah page yang kompleks."),(0,l.kt)("li",{parentName:"ul"},"Memungkinkan kita membagi sebuah halaman menjadi beberapa bagian terpisah."),(0,l.kt)("li",{parentName:"ul"},"Bersama dengan CSS dapat digunakan untuk memposisikan sekelompok elemen relatif terhadap halaman (misal ke bagian tengah halaman).")),(0,l.kt)("h3",{id:"contoh-penggunaan"},"Contoh Penggunaan"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"example1",label:"Mengelompokkan Elemen",default:!0,mdxType:"TabItem"},(0,l.kt)(r.Z,{defaultValue:s.SA,mdxType:"CodeEditor"})),(0,l.kt)(o.Z,{value:"example2",label:"Memposisikan Sekelompok Elemen",mdxType:"TabItem"},(0,l.kt)(r.Z,{defaultValue:s.wP,mdxType:"CodeEditor"}))))}k.isMDXComponent=!0}}]);