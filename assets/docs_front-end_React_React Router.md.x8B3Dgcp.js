import{_ as a,c as s,o as n,ak as p}from"./chunks/framework.L-RbBVAF.js";const t="/blog/assets/image-20240701134740636.BZ_gETcV.png",v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/front-end/React/React Router.md","filePath":"docs/front-end/React/React Router.md","lastUpdated":1719824883000}'),e={name:"docs/front-end/React/React Router.md"},l=p(`<h2 id="官网" tabindex="-1">官网 <a class="header-anchor" href="#官网" aria-label="Permalink to &quot;官网&quot;">​</a></h2><p>查看<a href="https://reactrouter.com/en/main/start/faq" target="_blank" rel="noreferrer">官方文档v6</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> react-router-dom</span></span></code></pre></div><p>浏览器专用库：<code>react-router-dom</code></p><p>移动端专用库：<code>react-router-native</code></p><h2 id="路由模式" tabindex="-1">路由模式 <a class="header-anchor" href="#路由模式" aria-label="Permalink to &quot;路由模式&quot;">​</a></h2><h3 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h3><p><code>index.js</code></p><div class="language-react vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>root.render(</span></span>
<span class="line"><span>  // 路由模式</span></span>
<span class="line"><span>  &lt;BrowserRouter&gt;</span></span>
<span class="line"><span>    &lt;Routes&gt;</span></span>
<span class="line"><span>      &lt;Route path=&quot;/a&quot; element={&lt;A /&gt;} /&gt;</span></span>
<span class="line"><span>      &lt;Route path=&quot;/b&quot; element={&lt;B /&gt;} /&gt;</span></span>
<span class="line"><span>    &lt;/Routes&gt;</span></span>
<span class="line"><span>  &lt;/BrowserRouter&gt;</span></span>
<span class="line"><span>);</span></span></code></pre></div><p>几种模式：</p><p>​ <code>BrowserRouter</code></p><p>​ <code>HashRouter</code></p><p>​ <code>MemoryRouter</code>适用于单元测试</p><p>​ <code>NativeRouter</code>适用于移动端环境</p><p>​ <code>StaticRouter</code></p><h2 id="outlet标签" tabindex="-1">Outlet标签 <a class="header-anchor" href="#outlet标签" aria-label="Permalink to &quot;Outlet标签&quot;">​</a></h2><p>相当于 <code>router-view</code></p><h3 id="使用方法-1" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法-1" aria-label="Permalink to &quot;使用方法&quot;">​</a></h3><p><code>layout/index.js</code></p><div class="language-react vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { Outlet } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Layout() {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;&gt;</span></span>
<span class="line"><span>      &lt;div&gt;标题&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        内容区域:&lt;Outlet&gt;&lt;/Outlet&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default Layout;</span></span></code></pre></div><p><code>views/a.js</code></p><div class="language-react vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function A() {</span></span>
<span class="line"><span>  return &lt;div&gt;A组件&lt;/div&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default A;</span></span></code></pre></div><p><code>index.js</code></p><div class="language-react vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import Layout from &quot;./layout&quot;;</span></span>
<span class="line"><span>import A from &quot;./views/a&quot;;</span></span>
<span class="line"><span>root.render(</span></span>
<span class="line"><span>  // 路由模式</span></span>
<span class="line"><span>  &lt;BrowserRouter&gt;</span></span>
<span class="line"><span>    &lt;Routes&gt;</span></span>
<span class="line"><span>      &lt;Route path=&quot;/&quot; element={&lt;Layout /&gt;}&gt;</span></span>
<span class="line"><span>        &lt;Route path=&quot;/a&quot; element={&lt;A /&gt;}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span>      &lt;/Route&gt;</span></span>
<span class="line"><span>    &lt;/Routes&gt;</span></span>
<span class="line"><span>  &lt;/BrowserRouter&gt;</span></span>
<span class="line"><span>);</span></span></code></pre></div><h2 id="hooks" tabindex="-1">hooks <a class="header-anchor" href="#hooks" aria-label="Permalink to &quot;hooks&quot;">​</a></h2><h3 id="usenavigate" tabindex="-1">useNavigate <a class="header-anchor" href="#usenavigate" aria-label="Permalink to &quot;useNavigate&quot;">​</a></h3><p>可传递状态参数：</p><p><code>layout/index.js</code></p><div class="language-react vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { Outlet, useNavigate } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Layout() {</span></span>
<span class="line"><span>  const navigate = useNavigate();</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;&gt;</span></span>
<span class="line"><span>      &lt;div&gt;顶部&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;button onClick={() =&gt; navigate(&quot;a&quot;, { state: { id: new Date().getTime() } })}&gt;</span></span>
<span class="line"><span>          跳转A</span></span>
<span class="line"><span>        &lt;/button&gt;</span></span>
<span class="line"><span>        &lt;button onClick={() =&gt; navigate(&quot;b&quot;)}&gt;跳转B&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        内容区域:</span></span>
<span class="line"><span>        &lt;Outlet&gt;&lt;/Outlet&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>index.js</code></p><div class="language-react vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import Layout from &quot;./layout&quot;;</span></span>
<span class="line"><span>import A from &quot;./views/a&quot;;</span></span>
<span class="line"><span>import B from &quot;./views/b&quot;;</span></span>
<span class="line"><span>root.render(</span></span>
<span class="line"><span>  // 路由模式</span></span>
<span class="line"><span>  &lt;BrowserRouter&gt;</span></span>
<span class="line"><span>    &lt;Routes&gt;</span></span>
<span class="line"><span>      &lt;Route path=&quot;/&quot; element={&lt;Layout /&gt;}&gt;</span></span>
<span class="line"><span>        &lt;Route path=&quot;/a&quot; element={&lt;A /&gt;}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span>        &lt;Route path=&quot;/b&quot; element={&lt;B /&gt;}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span>      &lt;/Route&gt;</span></span>
<span class="line"><span>    &lt;/Routes&gt;</span></span>
<span class="line"><span>  &lt;/BrowserRouter&gt;</span></span>
<span class="line"><span>);</span></span></code></pre></div><h3 id="uselocation" tabindex="-1">useLocation <a class="header-anchor" href="#uselocation" aria-label="Permalink to &quot;useLocation&quot;">​</a></h3><p>结合 <code>useNavigate</code> 获取路由传递的状态：</p><p><code>views/a.js</code></p><div class="language-react vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { useLocation } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function A() {</span></span>
<span class="line"><span>  const location = useLocation();</span></span>
<span class="line"><span>  return &lt;div&gt;A组件:{location.state.id}&lt;/div&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default A;</span></span></code></pre></div><h2 id="动态路由" tabindex="-1">动态路由 <a class="header-anchor" href="#动态路由" aria-label="Permalink to &quot;动态路由&quot;">​</a></h2><p><code>index.js</code></p><div class="language-react vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>root.render(</span></span>
<span class="line"><span>  &lt;BrowserRouter&gt;</span></span>
<span class="line"><span>    &lt;Routes&gt;</span></span>
<span class="line"><span>      &lt;Route path=&quot;/&quot; element={&lt;Layout /&gt;}&gt;</span></span>
<span class="line"><span>        {/* 访问时必须添加上参数 */}</span></span>
<span class="line"><span>        &lt;Route path=&quot;/user/:id&quot; element={&lt;User /&gt;}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span>      &lt;/Route&gt;</span></span>
<span class="line"><span>    &lt;/Routes&gt;</span></span>
<span class="line"><span>  &lt;/BrowserRouter&gt;</span></span>
<span class="line"><span>);</span></span></code></pre></div><h3 id="useparams" tabindex="-1">useParams <a class="header-anchor" href="#useparams" aria-label="Permalink to &quot;useParams&quot;">​</a></h3><p>可以拿取路由信息：</p><p><code>views/user.js</code></p><div class="language-react vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { useParams } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function User() {</span></span>
<span class="line"><span>  const params = useParams(); // params = {id: &#39;1719809506217&#39;}</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;&gt;</span></span>
<span class="line"><span>      &lt;div&gt;User:{params.id}&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>layout.js</code></p><div class="language-react vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { Outlet, useNavigate } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Layout() {</span></span>
<span class="line"><span>  const navigate = useNavigate();</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;&gt;</span></span>
<span class="line"><span>      &lt;div&gt;顶部&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;button onClick={() =&gt; navigate(&quot;user/&quot; + new Date().getTime())}&gt;</span></span>
<span class="line"><span>          跳转A</span></span>
<span class="line"><span>        &lt;/button&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        内容区域:</span></span>
<span class="line"><span>        &lt;Outlet&gt;&lt;/Outlet&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>但是形如 <code>http://localhost:3000/user/1719809558346?name=janly&amp;&amp;pwd=123</code></p><p>是获取不到的</p><p>需要使用 <code>useSearchParams</code> 获取</p><h3 id="usesearchparams" tabindex="-1">useSearchParams <a class="header-anchor" href="#usesearchparams" aria-label="Permalink to &quot;useSearchParams&quot;">​</a></h3><p>访问 <code>http://localhost:3000/user/1719809558346?name=janly&amp;&amp;pwd=123</code>，返回数组对象：</p><div class="language-react vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { useParams, useSearchParams } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span>export default function User() {</span></span>
<span class="line"><span>  const [searchParams, setParams] = useSearchParams();</span></span>
<span class="line"><span>  const params = useParams();</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;&gt;</span></span>
<span class="line"><span>      &lt;div&gt;User:{params.id}&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>通过 searchParams 原型上方法进行获取 ，例如：</p><div class="language-react vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>searchParams.get(&quot;name&quot;)</span></span></code></pre></div><p>searchParams 包括了增删改查功能函数，改变当前 url 中查询字符串</p><h2 id="跳转路由" tabindex="-1">跳转路由 <a class="header-anchor" href="#跳转路由" aria-label="Permalink to &quot;跳转路由&quot;">​</a></h2><p>① 通过 hook useNavigate</p><p>② 通过 Link 标签</p><div class="language-react vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;button onClick={() =&gt; navigate(&quot;user/1829454598&quot;)}&gt;跳转A&lt;/button&gt;{&quot; &quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;Link to=&quot;user/1829454598&quot;&gt;跳转A&lt;/Link&gt;</span></span></code></pre></div><h2 id="usematch" tabindex="-1">useMatch <a class="header-anchor" href="#usematch" aria-label="Permalink to &quot;useMatch&quot;">​</a></h2><div class="language-react vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { useMatch } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function User() {</span></span>
<span class="line"><span>  const match = useMatch(&quot;user&quot;);</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;&gt;</span></span>
<span class="line"><span>      &lt;div&gt;User&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>当前访问路径为 <code>/user</code> 时 <code>match</code> 才有值</p><h2 id="数据路由" tabindex="-1">数据路由 <a class="header-anchor" href="#数据路由" aria-label="Permalink to &quot;数据路由&quot;">​</a></h2><p><img src="`+t+`" alt="image-20240701134740636"></p><p>传统路由切换时需要拉取分包、拉数据，整个过程是一个串行的流程，导致常见的瀑布流问题</p><p>使用方法：</p><div class="language-react vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import {</span></span>
<span class="line"><span>  createBrowserRouter,</span></span>
<span class="line"><span>  RouterProvider,</span></span>
<span class="line"><span>  createRoutesFromElements,</span></span>
<span class="line"><span>  Route,</span></span>
<span class="line"><span>} from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = createBrowserRouter(</span></span>
<span class="line"><span>  createRoutesFromElements(</span></span>
<span class="line"><span>    &lt;Route path=&quot;/&quot; element={&lt;Layout&gt;&lt;/Layout&gt;}&gt;</span></span>
<span class="line"><span>      &lt;Route path=&quot;/user&quot; element={&lt;User /&gt;}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span>    &lt;/Route&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>root.render(&lt;RouterProvider router={router} /&gt;);</span></span></code></pre></div><p>开启分包：</p><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lazy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./views/user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><p>打包之后会单独生成一个JS文件</p>`,69),i=[l];function o(c,r,u,d,h,g){return n(),s("div",null,i)}const b=a(e,[["render",o]]);export{v as __pageData,b as default};
