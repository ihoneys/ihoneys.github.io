import{_ as n,o as s,c as a,d as e}from"./app.51922910.js";const p={},t=e(`<h2 id="less-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#less-\u4ECB\u7ECD" aria-hidden="true">#</a> less \u4ECB\u7ECD</h2><p>less\u662F\u4E00\u79CD\u52A8\u6001\u6837\u5F0F\u8BED\u8A00,\u5C5E\u4E8Ecss\u9884\u5904\u7406\u5668\u7684\u8303\u7574\uFF0C\u5B83\u6269\u5C55\u4E86CSS\u8BED\u8A00\uFF0C\u589E\u52A0\u4E86\u53D8\u91CF\u3001Mixin\u3001\u51FD\u6570\u7B49\u7279\u6027,\u4F7FCSS\u66F4\u6613\u7EF4\u62A4\u548C\u6269\u5C55</p><p>less\u65E2\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u4E0A\u8FD0\u884C,\u4E5F\u53EF\u4EE5\u501F\u52A9Node.js\u5728\u670D\u52A1\u7AEF\u8FD0\u884C\u3002</p><h2 id="less-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#less-\u4F7F\u7528" aria-hidden="true">#</a> less \u4F7F\u7528</h2><ul><li>\u7F51\u7AD9 <a href="http://lesscss.cn/" target="_blank" rel="noopener noreferrer">less\u7684\u4E2D\u6587\u5B98\u7F51</a></li></ul><p><a href="http://www.bootcss.com/p/lesscss/" target="_blank" rel="noopener noreferrer">bootstrap\u4E2Dless\u6559\u7A0B</a></p><ul><li>Less\u7F16\u8BD1\u5DE5\u5177</li></ul><p><a href="http://www.koala-app.com" target="_blank" rel="noopener noreferrer">koala \u5B98\u7F51</a></p><ul><li>\u5F15\u5165</li></ul><p>\u5168\u5C40\u5B89\u88C5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install less <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9488\u5BF9 Node Development \u914D\u7F6E\u6BB5\u5B89\u88C5 Less</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm i less <span class="token operator">--</span>save<span class="token operator">-</span>dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="less-\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#less-\u6CE8\u91CA" aria-hidden="true">#</a> less \u6CE8\u91CA</h3><ul><li>\u4EE5<code>//</code>\u5F00\u5934\u7684\u6CE8\u91CA,\u4E0D\u4F1A\u88AB\u7F16\u8BD1\u5230css\u6587\u4EF6\u4E2D</li><li>\u4EE5<code>/**/</code>\u5305\u60E0\u7684\u6CE8\u91CA\u4F1A\u88AB\u7F16\u8BD1\u5230css\u6587\u4EF6\u4E2D</li></ul><h3 id="\u53D8\u91CF-variables" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF-variables" aria-hidden="true">#</a> \u53D8\u91CF\uFF08Variables\uFF09</h3><ul><li>\u4F7F\u7528<code>@</code>\u6765\u7533\u660E\u4E00\u4E2A\u53D8\u91CF:<code>@pink: pink;</code><ol><li>\u4F5C\u4E3A\u666E\u901A\u5C5E\u6027\u503C\u53EA\u6765\u4F7F\u7528:\u76F4\u63A5\u4F7F\u7528<code>@pink</code></li><li>\u4F5C\u4E3A\u9009\u62E9\u5668\u548C\u5C5E\u6027\u540D:<code>#@{\u503C}</code>\u7684\u5F62\u5F0F</li><li>\u4F5C\u4E3A<code>URL :@{url}</code></li><li>\u53D8\u91CF\u7684\u5EF6\u8FDF\u52A0\u8F7D</li></ol></li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token variable">@coloe<span class="token punctuation">:</span></span> red<span class="token punctuation">;</span>
<span class="token variable">@fs<span class="token punctuation">:</span></span> 14px<span class="token punctuation">;</span> <span class="token comment">//\u4E0D\u5E38\u7528</span>
<span class="token variable">@className<span class="token punctuation">:</span></span> .box<span class="token punctuation">;</span> <span class="token comment">//\u4E0D\u5E38\u7528</span>

<span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">@coloe</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">@{className}</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">@fs</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F5C\u7528\u57DF-scope" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF-scope" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\uFF08Scope\uFF09</h2><p>Less \u4E2D\u7684\u4F5C\u7528\u57DF\u4E0E CSS \u4E2D\u7684\u4F5C\u7528\u57DF\u975E\u5E38\u7C7B\u4F3C\u3002\u9996\u5148\u5728\u672C\u5730\u67E5\u627E\u53D8\u91CF\u548C\u6DF7\u5408\uFF08mixins\uFF09\uFF0C\u5982\u679C\u627E\u4E0D\u5230\uFF0C\u5219\u4ECE\u201C\u7236\u201D\u7EA7\u4F5C\u7528\u57DF\u7EE7\u627F\u3002\u4F46\u662F\u6709\u4E2A\u4E0D\u540C\u7684\u662F\u5EF6\u8FDF\u52A0\u8F7D\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>  <span class="token comment">// less \u7684\u5EF6\u8FDF\u52A0\u8F7D,\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u6709\u6548\uFF0C\u4F46\u662F\uFF0C\u53D8\u91CF\u4F1A\u5728\u90FD\u89E3\u6790\u5B8C\u540E\uFF0C\u518D\u8D4B\u503C</span>
<span class="token variable">@var<span class="token punctuation">:</span></span> 10px<span class="token punctuation">;</span>
<span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token variable">@var<span class="token punctuation">:</span></span> 15px<span class="token punctuation">;</span>
    <span class="token selector">.box</span> <span class="token punctuation">{</span>
        <span class="token variable">@var</span> 10px
        <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span> <span class="token comment">//20px</span>
        <span class="token variable">@var<span class="token punctuation">:</span></span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span> <span class="token comment">//15px</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5D4C\u5957-nesting" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957-nesting" aria-hidden="true">#</a> \u5D4C\u5957\uFF08Nesting\uFF09</h3><ol><li>\u57FA\u672C\u5D4C\u5957\u89C4\u5219</li><li><code>&amp;</code>\u7684\u4F7F\u7528</li></ol><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.centent</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token comment">//\u52A0 &amp; \u8868\u793A\u540C\u7EA7\uFF0C\u8868\u793A\u5B50\u7EA7\uFF0C\u4E0D\u52A0 &amp; \u4F1A\u6709\u7A7A\u683C</span>
        <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>@</code>\u89C4\u5219\u5D4C\u5957\u548C\u5192\u6CE1</li></ul><p><code>@</code> \u89C4\u5219\uFF08\u4F8B\u5982 <code>@media</code> \u6216 <code>@supports</code>\uFF09\u53EF\u4EE5\u4E0E\u9009\u62E9\u5668\u4EE5\u76F8\u540C\u7684\u65B9\u5F0F\u8FDB\u884C\u5D4C\u5957\u3002<code>@</code> \u89C4\u5219\u4F1A\u88AB\u653E\u5728\u524D\u9762\uFF0C\u540C\u4E00\u89C4\u5219\u96C6\u4E2D\u7684\u5176\u5B83\u5143\u7D20\u7684\u76F8\u5BF9\u987A\u5E8F\u4FDD\u6301\u4E0D\u53D8\u3002\u8FD9\u53EB\u505A\u5192\u6CE1\uFF08<code>bubbling</code>\uFF09\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.component</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token atrule">@media <span class="token punctuation">(</span>min-width<span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
    <span class="token atrule">@media  <span class="token punctuation">(</span>min-resolution<span class="token punctuation">:</span> 192dpi<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
      <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/img/retina2x.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule">@media <span class="token punctuation">(</span>min-width<span class="token punctuation">:</span> 1280px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u8BD1\u4E3A\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.component</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.component</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-resolution</span><span class="token punctuation">:</span> 192dpi<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.component</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/img/retina2x.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1280px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.component</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6DF7\u5408-mixins" tabindex="-1"><a class="header-anchor" href="#\u6DF7\u5408-mixins" aria-hidden="true">#</a> \u6DF7\u5408\uFF08Mixins\uFF09</h3><p>\u6DF7\u5408\u5C31\u662F\u5C06\u4E00\u7CFB\u5217\u5C5E\u6027\u4ECE\u4E00\u4E2A\u89C4\u5219\u96C6\u5F15\u5165\u5230\u53E6\u4E00\u4E2A\u89C4\u5219\u96C6\u7684\u65B9\u5F0F</p><ol><li>\u666E\u901A\u6DF7\u5408</li><li>\u4E0D\u5E26\u8F93\u51FA\u7684\u6DF7\u5408</li><li>\u5E26\u53C2\u6570\u7684\u6DF7\u5408</li><li>\u5E26\u53C2\u6570\u5E76\u4E14\u6709\u9ED8\u8BA4\u503C\u7684\u6DF7\u5408</li><li>\u5E26\u591A\u4E2A\u53C2\u6570\u7684\u6DF7\u5408</li><li>\u547D\u540D\u53C2\u6570</li><li>\u5339\u914D\u6A21\u5F0F</li><li><code>arguments</code> \u53D8\u91CF</li></ol><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// 1. \u666E\u901A\u6DF7\u5408</span>
<span class="token selector">.centent</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token mixin-usage function">.centent</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// 2. \u4E0D\u5E26\u8F93\u51FA\u7684\u6DF7\u5408</span>
<span class="token selector">.centent()</span> <span class="token punctuation">{</span> <span class="token comment">//\u76F8\u5F53\u4E8E\u5B9A\u4E49\u6210\u53D8\u91CF\uFF0C\u6700\u7EC8\u4E0D\u4F1A\u88AB\u7F16\u8BD1\u51FA\u6765\uFF0C\u53EA\u6709 div</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token mixin-usage function">.centent</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// 3.\u5E26\u53C2\u7684\u6DF7\u5408</span>
<span class="token selector">.centent(<span class="token variable">@w</span>,<span class="token variable">@h</span>)</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@w</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@h</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token mixin-usage function">.centent</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// or</span>
<span class="token selector">.centent(<span class="token variable">@w</span>:50px,<span class="token variable">@h</span>)</span> <span class="token punctuation">{</span> <span class="token comment">//\u9ED8\u8BA4\u503C\uFF0C\u4E0D\u4F20\u53C2\u65F6\u6709\u6548</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@w</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@h</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token mixin-usage function">.centent</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// \u547D\u540D\u53C2\u6570</span>
<span class="token selector">.centent(<span class="token variable">@w</span>:50px,<span class="token variable">@h</span>)</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@w</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@h</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token mixin-usage function">.centent</span><span class="token punctuation">(</span><span class="token variable">@h<span class="token punctuation">:</span></span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u53EA\u4F20\u4E00\u4E2A\u53C2\u6570\u65F6\uFF0C\u53EF\u4EE5\u6307\u5B9A\u53C2\u6570\uFF0C\u53C2\u6570\u503C</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// arguments</span>
<span class="token selector">.centent(<span class="token variable">@a</span>,<span class="token variable">@b</span>,<span class="token variable">@c</span>)</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@arguments</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token mixin-usage function">.centent</span><span class="token punctuation">(</span>1px<span class="token punctuation">,</span> solid<span class="token punctuation">,</span> black<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FD0\u7B97-operations" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97-operations" aria-hidden="true">#</a> \u8FD0\u7B97\uFF08Operations\uFF09</h2><h2 id="\u6620\u5C04-maps" tabindex="-1"><a class="header-anchor" href="#\u6620\u5C04-maps" aria-hidden="true">#</a> \u6620\u5C04\uFF08Maps\uFF09</h2><p>\u4ECE Less 3.5 \u7248\u672C\u5F00\u59CB\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u5C06\u6DF7\u5408\uFF08mixins\uFF09\u548C\u89C4\u5219\u96C6\uFF08rulesets\uFF09\u4F5C\u4E3A\u4E00\u7EC4\u503C\u7684\u6620\u5C04\uFF08map\uFF09\u4F7F\u7528\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">#colors()</span> <span class="token punctuation">{</span>
  <span class="token property">primary</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">secondary</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #colors[primary]<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #colors[secondary]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8F6C\u4E49-escaping" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u4E49-escaping" aria-hidden="true">#</a> \u8F6C\u4E49\uFF08Escaping\uFF09</h2><p>\u8F6C\u4E49\uFF08<code>Escaping</code>\uFF09\u5141\u8BB8\u4F60\u4F7F\u7528\u4EFB\u610F\u5B57\u7B26\u4E32\u4F5C\u4E3A\u5C5E\u6027\u6216\u53D8\u91CF\u503C\u3002\u4EFB\u4F55 <code>~&quot;anything&quot;</code> \u6216 <code>~&#39;anything&#39;</code> \u5F62\u5F0F\u7684\u5185\u5BB9\u90FD\u5C06\u6309\u539F\u6837\u8F93\u51FA\uFF0C\u9664\u975E <code>interpolation</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>@min768<span class="token operator">:</span> <span class="token operator">~</span><span class="token string">&quot;(min-width: 768px)&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span>element <span class="token punctuation">{</span>
  @media @min768 <span class="token punctuation">{</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>2rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6CE8\u610F\uFF0C\u4ECE Less 3.5 \u5F00\u59CB\uFF0C\u53EF\u4EE5\u7B80\u5199\u4E3A\uFF1A</span>
@min768<span class="token operator">:</span> <span class="token punctuation">(</span>min<span class="token operator">-</span>width<span class="token operator">:</span> 768px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span>element <span class="token punctuation">{</span>
  @media @min768 <span class="token punctuation">{</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>2rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u4EE5\u4E0A \u7F16\u8BD1\u4E3A\uFF1A</span>

@<span class="token function">media</span> <span class="token punctuation">(</span><span class="token parameter">min<span class="token operator">-</span>width<span class="token operator">:</span> 768px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span>element <span class="token punctuation">{</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>2rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44),i=[t];function c(l,o){return s(),a("div",null,i)}var d=n(p,[["render",c],["__file","less.html.vue"]]);export{d as default};
