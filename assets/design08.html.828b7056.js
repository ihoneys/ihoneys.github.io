import{_ as n,o as s,c as a,d as t}from"./app.51922910.js";var p="/img/design/command_1.png";const c={},o=t(`<h3 id="\u7EC4\u5408\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u6A21\u5F0F" aria-hidden="true">#</a> \u7EC4\u5408\u6A21\u5F0F</h3><ul><li>\u7EC4\u5408\u6A21\u5F0F\u5728\u5BF9\u8C61\u95F4\u5F62\u6210\u6811\u5F62\u7ED3\u6784</li><li>\u7EC4\u5408\u6A21\u5F0F\u4E2D\u57FA\u672C\u5BF9\u8C61\u548C\u7EC4\u5408\u5BF9\u4E00\u81F4\u5BF9\u5F85</li><li>\u65E0\u987B\u5173\u5FC3\u5BF9\u8C61\u6709\u591A\u5C11\u5C42\uFF0C\u8C03\u7528\u65F6\u53EA\u9700\u5728\u6839\u90E8\u8FDB\u884C\u8C03\u7528</li></ul><p>\u4E3E\u4E2A\u{1F330}\u60F3\u8C61\u56DE\u5230\u5BB6\u4E2D\uFF0C\u624B\u91CC\u6709\u4E2A\u5168\u81EA\u52A8\u7684\u9065\u63A7\u5668\uFF0C\u6309\u4E00\u4E0B\u5F00\u5173\uFF0C\u4F1A\u6709\u4E0B\u9762\u7684\u4E8B\u60C5\u6267\u884C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1.</span>\u716E\u5496\u5561
<span class="token number">2.</span>\u6253\u5F00\u7535\u89C6\u3001\u6253\u5F00\u97F3\u54CD
<span class="token number">3.</span>\u6253\u5F00\u63A7\u4EF6\u3001\u6253\u5F00\u7535\u8111
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u628A\u4EFB\u52A1\u5206\u6210\u4E09\u7C7B\uFF1A</p><p><img src="`+p+`" alt="image-20210409144642036"></p><p>\u770B\u770B\u7F16\u5199\u7684\u4EE3\u7801\u6BB5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">MacroCommand</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lists</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">as</span> any<span class="token punctuation">,</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">task</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>lists<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">excute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>lists<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        fn<span class="token punctuation">.</span><span class="token function">excute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">const</span> command1 <span class="token operator">=</span> <span class="token function">MacroCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

command1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">excute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u716E\u5496\u5561\u4E86~&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> command2 <span class="token operator">=</span> <span class="token function">MacroCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

command2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">excute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6253\u5F00\u7535\u89C6~&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
command2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">excute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6253\u5F00\u97F3\u54CD~&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">const</span> command3 <span class="token operator">=</span> <span class="token function">MacroCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

command3<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">excute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6253\u5F00\u7535\u8111~&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

command3<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">excute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6253\u5F00\u7A7A\u8C03~&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">const</span> macroCommand <span class="token operator">=</span> <span class="token function">MacroCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
macroCommand<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>command1<span class="token punctuation">)</span>
macroCommand<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>command2<span class="token punctuation">)</span>
macroCommand<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>command3<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>macroCommand<span class="token punctuation">,</span><span class="token string">&#39;macroCommand&#39;</span><span class="token punctuation">)</span>

macroCommand<span class="token punctuation">.</span><span class="token function">excute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// output</span>
\u716E\u5496\u5561\u4E86<span class="token operator">~</span>
\u6253\u5F00\u7535\u89C6<span class="token operator">~</span>
\u6253\u5F00\u97F3\u54CD<span class="token operator">~</span>
\u6253\u5F00\u7535\u8111<span class="token operator">~</span>
\u6253\u5F00\u7A7A\u8C03<span class="token operator">~</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),e=[o];function i(l,u){return s(),a("div",null,e)}var k=n(c,[["render",i],["__file","design08.html.vue"]]);export{k as default};
