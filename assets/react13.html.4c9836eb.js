import{_ as n,o as s,c as a,d as t}from"./app.51922910.js";const p={},e=t(`<p>\u9519\u8BEF\u8FB9\u754C\u662F\u4E00\u79CD React \u7EC4\u4EF6\uFF0C\u8FD9\u79CD\u7EC4\u4EF6<strong>\u53EF\u4EE5\u6355\u83B7\u53D1\u751F\u5728\u5176\u5B50\u7EC4\u4EF6\u6811\u4EFB\u4F55\u4F4D\u7F6E\u7684 JavaScript \u9519\u8BEF\uFF0C\u5E76\u6253\u5370\u8FD9\u4E9B\u9519\u8BEF\uFF0C\u540C\u65F6\u5C55\u793A\u964D\u7EA7 UI</strong>\uFF0C\u800C\u5E76\u4E0D\u4F1A\u6E32\u67D3\u90A3\u4E9B\u53D1\u751F\u5D29\u6E83\u7684\u5B50\u7EC4\u4EF6\u6811\u3002</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">ErrorState</span> <span class="token punctuation">{</span>
  hasError<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ErrorBoundary</span> <span class="token keyword">extends</span> <span class="token class-name">React</span><span class="token punctuation">.</span>Component<span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> ErrorState<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> hasError<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">getDerivedStateFromError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u66F4\u65B0 state \u4F7F\u4E0B\u4E00\u6B21\u6E32\u67D3\u80FD\u591F\u663E\u793A\u964D\u7EA7\u540E\u7684 UI</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> hasError<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentDidCatch</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4F60\u540C\u6837\u53EF\u4EE5\u5C06\u9519\u8BEF\u65E5\u5FD7\u4E0A\u62A5\u7ED9\u670D\u52A1\u5668</span>
    <span class="token function">logErrorToMyService</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4F60\u53EF\u4EE5\u81EA\u5B9A\u4E49\u964D\u7EA7\u540E\u7684 UI \u5E76\u6E32\u67D3</span>
      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Something went wrong.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","react13.html.vue"]]);export{r as default};
