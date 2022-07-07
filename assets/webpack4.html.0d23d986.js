import{_ as n,o as s,c as a,d as e}from"./app.51922910.js";const p={},l=e(`<h2 id="webpack-\u5E38\u7528\u7684-plugins" tabindex="-1"><a class="header-anchor" href="#webpack-\u5E38\u7528\u7684-plugins" aria-hidden="true">#</a> webpack \u5E38\u7528\u7684 plugins</h2><h3 id="\u7F16\u8BD1html\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1html\u6A21\u677F" aria-hidden="true">#</a> \u7F16\u8BD1<code>html</code>\u6A21\u677F</h3><p><code>html-webpack-plugin</code></p><p>\u662F\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u5199\u5728<code>webpack</code>\u914D\u7F6E\u4E2D\u7684<code>plugins</code>\u6570\u7EC4\u4E2D \u5B83\u662F\u5C06<code>html</code>\u6A21\u677F\u8FDB\u884C\u7F16\u8BD1\uFF0C\u5E76\u628A<code>webpack</code>\u7F16\u8BD1\u597D\u7684\u811A\u672C\u6CE8\u5165\u5230 <code>html</code> \u9875\u9762\u91CC</p><ul><li>\u5B89\u88C5</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev html<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u914D\u7F6E\u4F7F\u7528</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    \xB7\xB7\xB7
    <span class="token comment">// \u6CE8\u610F publicPath:&#39;dist/&#39; \u67E5\u770Bdist html\u4E2D\u7684scritp \u6807\u7B7E\u7684\u5F15\u5165\u8DEF\u5F84</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       \xB7\xB7\xB7
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u63D2\u4EF6</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span>
            <span class="token punctuation">{</span>
              <span class="token comment">// \u8981\u6839\u636E \u54EA\u4E2A \u6A21\u677F\u6587\u4EF6\u751F\u6210\u6253\u5305\u540E\u7684 html \u6587\u4EF6</span>
              <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span>
              <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u81EA\u5B9A\u4E49title&quot;</span><span class="token punctuation">,</span>
                \xB7\xB7\xB7
            <span class="token punctuation">}</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7248\u6743\u58F0\u660E-bannerplugin" tabindex="-1"><a class="header-anchor" href="#\u7248\u6743\u58F0\u660E-bannerplugin" aria-hidden="true">#</a> \u7248\u6743\u58F0\u660E <code>BannerPlugin</code></h3><p>\u5728<code>webpack</code>\u4E2D\u96C6\u6210\uFF0C\u6240\u4EE5\u4E0D\u7528\u5355\u72EC\u5B89\u88C5\u3002</p><ul><li>\u914D\u7F6E</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    \xB7\xB7\xB7
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       \xB7\xB7\xB7
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u63D2\u4EF6</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>BannerPlugin</span><span class="token punctuation">(</span>&#39;\u6700\u7EC8\u7248\u6743\u5F52zgaungju\u6240\u6709 <span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u538B\u7F29-js" tabindex="-1"><a class="header-anchor" href="#\u538B\u7F29-js" aria-hidden="true">#</a> \u538B\u7F29 <code>js</code></h3><ul><li>\u5B89\u88C5</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm i <span class="token operator">-</span><span class="token constant">D</span> uglifyjs<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u914D\u7F6E</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165</span>
<span class="token keyword">const</span> UglifyJsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;uglifyjs-webpack-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">UglifyJsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js($|\\?)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
      <span class="token comment">// include: /\\/includes/, // \u5305\u542B</span>
      <span class="token comment">// exclude: /\\/excludes/, // \u4E0D\u597D\u542B</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),t=[l];function i(c,o){return s(),a("div",null,t)}var u=n(p,[["render",i],["__file","webpack4.html.vue"]]);export{u as default};
