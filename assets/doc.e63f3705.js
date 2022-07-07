import{_ as t,o as a,c as e,s as n}from"./index.b70bc0cb.js";const p={class:"markdown-body"},s=n(`<h1>\u5B89\u88C5\u4F7F\u7528</h1><h2>\u5B89\u88C5</h2><h4>\u63A8\u8350\u4F7F\u7528 <em>npm</em> \u7684\u65B9\u5F0F\u5B89\u88C5,\u4E5F\u53EF\u9009\u7528 <em>cnpm</em> \u6216 <em>yarn</em> \u8FDB\u884C\u5B89\u88C5\u3002</h4><pre><code>npm install yangqiao-ui
cnpm install yangqiao-ui
yarn add yangqiao-ui
</code></pre><br><h2>\u4F7F\u7528 yangqiao-ui</h2><h4>\u9700\u8981\u6CE8\u610F\u7684\u662F css \u6837\u5F0F\u6587\u4EF6\u9700\u8981\u60A8\u5355\u72EC\u5F15\u5165\u3002</h4><pre><code class="language-javascript">/*js*/
import { createApp } from &quot;vue&quot;;
import App from &quot;@/App.vue&quot;;
import yangqiaoUi from &quot;yangqiao-ui&quot;;
import &quot;../node_modules/yangqiao-ui/dist/style.css&quot;;

const app = createApp(App);
app.use(yangqiaoUi);
app.mount(&quot;#app&quot;);
</code></pre><br><h2>\u6309\u9700\u5F15\u7528</h2><h4>\u60A8\u53EF\u4EE5\u6839\u636E\u4E2A\u4EBA\u9700\u8981\u6309\u9700\u5F15\u7528\u7EC4\u4EF6\u6765\u4F7F\u7528\uFF0C\u6309\u9700\u5F15\u7528\u65F6\u4E0D\u9700\u8981\u4F7F\u7528 <em>app.use()</em> \u65B9\u6CD5\u6CE8\u518C\u3002</h4><pre><code class="language-javascript">/*js*/
import { yqButton } from &quot;yangqiao-ui&quot;;

&lt;yq-button&gt;\u70B9\u51FB&lt;/yq-button&gt;
</code></pre>`,12),i=[s],r={__name:"doc",setup(c,{expose:o}){return o({frontmatter:{}}),(m,q)=>(a(),e("div",p,i))}};var l=t(r,[["__file","E:/vue3template/vueui/yangqiao-ui/packages/install/doc/doc.md"]]);export{l as default};
