import{_ as n,o as s,c as a,d as e}from"./app.51922910.js";const t={},p=e(`<h2 id="\u517C\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u517C\u5BB9" aria-hidden="true">#</a> \u517C\u5BB9</h2><h3 id="img-\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#img-\u6807\u7B7E" aria-hidden="true">#</a> img \u6807\u7B7E</h3><p>\u517C\u5BB9ie8</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>    <span class="token selector">img</span><span class="token punctuation">{</span>
        <span class="token property">_border</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E8B\u4EF6\u517C\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u517C\u5BB9" aria-hidden="true">#</a> \u4E8B\u4EF6\u517C\u5BB9</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> eventTool <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// target: window.event.target || window.event.srcElements,</span>
    <span class="token comment">// \u517C\u5BB9\u963B\u6B62\u5192\u6CE1</span>
    <span class="token function-variable function">STOPPG</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> event <span class="token operator">=</span> window<span class="token punctuation">.</span>event
        <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>stopPropagation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            event<span class="token punctuation">.</span>cancelBubble <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u517C\u5BB9\u963B\u6B62\u9ED8\u8BA4\u4E8B\u4EF6</span>
    <span class="token function-variable function">PREVENT</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> event <span class="token operator">=</span> window<span class="token punctuation">.</span>event
        <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>preventDefault<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            event<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// eventTool.STOPPG() \u963B\u6B62\u5192\u6CE1</span>
<span class="token comment">// eventTool.PREVENT() \u963B\u6B62\u9ED8\u8BA4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(i,l){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","compatibility.html.vue"]]);export{r as default};
