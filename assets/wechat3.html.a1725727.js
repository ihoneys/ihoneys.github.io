import{_ as n,o as s,c as a,d as t}from"./app.51922910.js";const e={},o=t(`<h2 id="app-\u751F\u547D\u5468\u671F-3\u4E2A" tabindex="-1"><a class="header-anchor" href="#app-\u751F\u547D\u5468\u671F-3\u4E2A" aria-hidden="true">#</a> App \u751F\u547D\u5468\u671F(3\u4E2A)</h2><table><thead><tr><th style="text-align:left;">\u6267\u884C\u987A\u5E8F</th><th style="text-align:left;">\u547D\u4EE4</th><th style="text-align:left;">\u4F5C\u7528</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:left;"><code>onLaunch</code></td><td style="text-align:left;">\u5C0F\u7A0B\u5E8F\u521D\u59CB\u5316</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;"><code>onShow</code></td><td style="text-align:left;">\u5C0F\u7A0B\u5E8F\u663E\u793A--\u5207\u6362\\\u91CD\u65B0\u663E\u793A</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;"><code>onHide</code></td><td style="text-align:left;">\u5C0F\u7A0B\u5E8F\u9690\u85CF</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u5168\u5C40\u6570\u636E</span>
  <span class="token literal-property property">globalData</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * \u5F53\u5C0F\u7A0B\u5E8F\u521D\u59CB\u5316\u5B8C\u6210\u65F6\uFF0C\u4F1A\u89E6\u53D1 onLaunch\uFF08\u5168\u5C40\u53EA\u89E6\u53D1\u4E00\u6B21\uFF09
   */</span>
  <span class="token function-variable function">onLaunch</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F\u7A0B\u5E8F\u542F\u52A8&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * \u5F53\u5C0F\u7A0B\u5E8F\u542F\u52A8\uFF0C\u6216\u4ECE\u540E\u53F0\u8FDB\u5165\u524D\u53F0\u663E\u793A\uFF0C\u4F1A\u89E6\u53D1 onShow
   */</span>
  <span class="token function-variable function">onShow</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u7A0B\u5E8F\u663E\u793A&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * \u5F53\u5C0F\u7A0B\u5E8F\u4ECE\u524D\u53F0\u8FDB\u5165\u540E\u53F0\uFF0C\u4F1A\u89E6\u53D1 onHide
   */</span>
  <span class="token function-variable function">onHide</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u7A0B\u5E8F\u9690\u85CF&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * \u5F53\u5C0F\u7A0B\u5E8F\u53D1\u751F\u811A\u672C\u9519\u8BEF\uFF0C\u6216\u8005 api \u8C03\u7528\u5931\u8D25\u65F6\uFF0C\u4F1A\u89E6\u53D1 onError \u5E76\u5E26\u4E0A\u9519\u8BEF\u4FE1\u606F
   */</span>
  <span class="token function-variable function">onError</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u7A0B\u5E8F\u9519\u8BEF&#39;</span><span class="token punctuation">,</span>msg<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="page-\u751F\u547D\u5468\u671F-5\u4E2A" tabindex="-1"><a class="header-anchor" href="#page-\u751F\u547D\u5468\u671F-5\u4E2A" aria-hidden="true">#</a> Page \u751F\u547D\u5468\u671F(5\u4E2A)</h2><table><thead><tr><th style="text-align:left;">\u6267\u884C\u987A\u5E8F</th><th style="text-align:left;">\u547D\u4EE4</th><th style="text-align:left;">\u4F5C\u7528</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:left;"><code>onLoad</code></td><td style="text-align:left;">\u9875\u9762\u52A0\u8F7D \u5728\u8FD9\u91CC\u53D1\u8D77\u81EA\u52A8\u8BF7\u6C42\uFF0C\u8DEF\u7531\u4F20\u9012\u7684\u53C2\u6570\u4E5F\u5728\u8BE5\u51FD\u6570\u91CC\u83B7\u53D6 \u6267\u884C\u4E00\u6B21</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;"><code>onShow</code></td><td style="text-align:left;">\u9875\u9762\u663E\u793A \u6267\u884C\u591A\u6B21(\u91CD\u65B0\u52A0\u8F7D\u67D0\u9875\u9762\u65F6\u7528\u7684\u65B9\u6CD5\u5199\u5728\u8FD9\u91CC)</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;"><code>onReady</code></td><td style="text-align:left;">\u9875\u9762\u521D\u6B21\u6E32\u67D3\u5B8C\u6210 \u53EA\u4F1A\u6267\u884C\u4E00\u6B21</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:left;"><code>onHide</code></td><td style="text-align:left;">\u9875\u9762\u9690\u85CF \u6267\u884C\u591A\u6B21</td></tr><tr><td style="text-align:left;">5</td><td style="text-align:left;"><code>onUnload</code></td><td style="text-align:left;">\u9875\u9762\u5378\u8F7D\uFF08\u9500\u6BC1\uFF09 \u9875\u9762\u88AB\u5173\u95ED\u4E86 ,\u5728\u8FD9\u91CC\u6E05\u9664\u5B9A\u65F6\u5668\u3001\u5168\u5C40\u53D8\u91CF\u3001\u8F6E\u8BE2\u63A5\u53E3</td></tr></tbody></table><h3 id="page\u91CC\u7684\u4E09\u4E2A\u5E38\u7528\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#page\u91CC\u7684\u4E09\u4E2A\u5E38\u7528\u51FD\u6570" aria-hidden="true">#</a> Page\u91CC\u7684\u4E09\u4E2A\u5E38\u7528\u51FD\u6570</h3><ul><li><code>onPullDownRefresh</code> \u76D1\u542C\u7528\u6237\u4E0B\u62C9\u52A8\u4F5C</li></ul><p>\u4E0B\u62C9\u8BF7\u6C42\u6570\u636E\uFF08\u5237\u65B0\uFF09</p><ul><li><code>onReachBottom</code> \u9875\u9762\u4E0A\u62C9\u89E6\u5E95\u4E8B\u4EF6\u7684\u5904\u7406\u51FD\u6570</li></ul><p>\u7528\u6237\u5411\u4E0A\u62C9\uFF08\u5411\u4E0A\u6EDA\u52A8\uFF09\u5230\u5E95\u7684\u65F6\u5019\uFF0C\u52A0\u8F7D\u6570\u636E\u7B49</p><ul><li><code>onShareAppMessage</code>(\u5206\u4EAB)</li></ul><p>\u7528\u6237\u70B9\u51FB\u53F3\u4E0A\u89D2\u5206\u4EAB</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u9875\u9762\u7684\u521D\u59CB\u6570\u636E
     */</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token number">123</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * \u751F\u547D\u5468\u671F\u51FD\u6570--\u76D1\u542C\u9875\u9762\u52A0\u8F7D
     */</span>
    <span class="token function-variable function">onLoad</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1. \u9875\u9762\u52A0\u8F7D&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * \u751F\u547D\u5468\u671F\u51FD\u6570--\u76D1\u542C\u9875\u9762\u521D\u6B21\u6E32\u67D3\u5B8C\u6210
     */</span>
    <span class="token function-variable function">onReady</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;3. onReady&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * \u751F\u547D\u5468\u671F\u51FD\u6570--\u76D1\u542C\u9875\u9762\u663E\u793A
     */</span>
    <span class="token function-variable function">onShow</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;2. onShow,\u91CD\u65B0\u663E\u793A&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * \u751F\u547D\u5468\u671F\u51FD\u6570--\u76D1\u542C\u9875\u9762\u9690\u85CF
     */</span>
    <span class="token function-variable function">onHide</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;4. onHide&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * \u751F\u547D\u5468\u671F\u51FD\u6570--\u76D1\u542C\u9875\u9762\u5378\u8F7D
     */</span>
    <span class="token function-variable function">onUnload</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;5. unUnload&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * \u9875\u9762\u76F8\u5173\u4E8B\u4EF6\u5904\u7406\u51FD\u6570--\u76D1\u542C\u7528\u6237\u4E0B\u62C9\u52A8\u4F5C
     */</span>
    <span class="token function-variable function">onPullDownRefresh</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;onPullDownRefresh&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * \u9875\u9762\u4E0A\u62C9\u89E6\u5E95\u4E8B\u4EF6\u7684\u5904\u7406\u51FD\u6570
     */</span>
    <span class="token function-variable function">onReachBottom</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;onReachBottom&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * \u7528\u6237\u70B9\u51FB\u53F3\u4E0A\u89D2\u5206\u4EAB
     */</span>
    <span class="token function-variable function">onShareAppMessage</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;onShareAppMessage&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="component-\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#component-\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> component \u751F\u547D\u5468\u671F</h2><ul><li><code>created</code></li></ul><p>\u5728\u7EC4\u4EF6\u5B9E\u4F8B\u521A\u521A\u88AB\u521B\u5EFA\u65F6\u6267\u884C\uFF0C\u6CE8\u610F\u6B64\u65F6\u4E0D\u80FD\u8C03\u7528 <code>this.setData</code></p><ul><li><code>ready</code></li></ul><p>\u5728\u7EC4\u4EF6\u5E03\u5C40\u5B8C\u6210\u540E\u6267\u884C</p><ul><li><code>detached</code></li></ul><p>\u5728\u7EC4\u4EF6\u5B9E\u4F8B\u88AB\u4ECE\u9875\u9762\u8282\u70B9\u6811\u79FB\u9664\u65F6\u6267\u884C\uFF08\u7B49\u4EF7\u4E8E\u9500\u6BC1\uFF09</p>`,20),l=[o];function c(p,i){return s(),a("div",null,l)}var d=n(e,[["render",c],["__file","wechat3.html.vue"]]);export{d as default};
