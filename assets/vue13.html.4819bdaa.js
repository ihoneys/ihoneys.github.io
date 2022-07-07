import{_ as s,o as n,c as a,d as e}from"./app.51922910.js";const t={},p=e(`<h2 id="\u5728vue\u4E2D\u4F7F\u7528echarts\u7684\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u5728vue\u4E2D\u4F7F\u7528echarts\u7684\u6B65\u9AA4" aria-hidden="true">#</a> \u5728vue\u4E2D\u4F7F\u7528Echarts\u7684\u6B65\u9AA4</h2><ol><li>\u5B89\u88C5<code>echarts</code></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm i  <span class="token operator">-</span><span class="token constant">S</span> echarts vue<span class="token operator">-</span>echarts
<span class="token comment">// or</span>
yarn add echarts vue<span class="token operator">-</span>echarts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5F15\u5165\u9879\u76EE\u4E2D</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
<span class="token comment">// \u5F15\u5165echarts</span>
<span class="token keyword">import</span> <span class="token string">&quot;echarts/index.js&quot;</span>
<span class="token comment">// \u5F15\u5165vue-echarts  VEcharts\u662F\u81EA\u5B9A\u4E49\u7684</span>
<span class="token keyword">import</span> VEcharts <span class="token keyword">from</span> <span class="token string">&#39;vue-echarts&#39;</span>

<span class="token comment">// \u6CE8\u518C\u7EC4\u4EF6 zgj-charts\u76F8\u5F53\u4E8E\u662F\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;zgj-charts&quot;</span><span class="token punctuation">,</span> VEcharts<span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    router<span class="token punctuation">,</span>
    store<span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u5728\u60F3\u4F7F\u7528<code>echarts</code>\u7684\u9875\u9762\u4F7F\u7528</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;echarts&quot;</span><span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>\u5F15\u5165\u7EC4\u4EF6\u5E76\u7528 v<span class="token operator">-</span>bind \u7ED1\u5B9A options <span class="token operator">--</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>zgj<span class="token operator">-</span>charts <span class="token operator">:</span>options<span class="token operator">=</span><span class="token string">&quot;option&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>zgj<span class="token operator">-</span>charts<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">option</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token comment">//\u5728echarts\u5B98\u7F51\u5F15\u5165\u60F3\u4F7F\u7528\u7684\u56FE\u8868\u914D\u7F6E\xB7\xB7\xB7</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>style <span class="token operator">&gt;</span>
<span class="token punctuation">.</span>echarts <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function c(l,r){return n(),a("div",null,o)}var u=s(t,[["render",c],["__file","vue13.html.vue"]]);export{u as default};
