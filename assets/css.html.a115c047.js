import{_ as n,o as s,c as a,d as p}from"./app.51922910.js";const t={},e=p(`<h2 id="\u8BBE\u7F6E\u5168\u5C40\u901A\u7528\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u5168\u5C40\u901A\u7528\u6837\u5F0F" aria-hidden="true">#</a> \u8BBE\u7F6E\u5168\u5C40\u901A\u7528\u6837\u5F0F</h2><ul><li>\u5168\u5C40\u6837\u5F0F\u6BD4\u5176\u4ED6\u81EA\u5B9A\u4E49\u6837\u5F0F\u6743\u91CD\u4F4E\uFF0C\u6240\u4EE5\u8981\u5148\u5F15\u5165\u5168\u5C40\u901A\u7528\u6837\u5F0F\uFF0C\u518D\u5F15\u5165\u5176\u4ED6\u6837\u5F0F\uFF1A</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* reset.css */</span>
    <span class="token selector">html,
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    div,
    dl,
    dt,
    dd,
    ul,
    ol,
    li,
    p,
    blockquote,
    pre,
    hr,
    figure,
    table,
    caption,
    th,
    td,
    img,
    form,
    fieldset,
    legend,
    input,
    button,
    textarea,
    menu</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
        <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5B8B\u4F53&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">/* font-size:12px; */</span>
    <span class="token punctuation">}</span>
    <span class="token selector">ul,ol,li</span> <span class="token punctuation">{</span>
        <span class="token property">list-style</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">a</span> <span class="token punctuation">{</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">input,button,img</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
        <span class="token property">vertical-align</span><span class="token punctuation">:</span>middle<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* \u6E05\u9664\u6D6E\u52A8 */</span>
    <span class="token selector">.clear</span><span class="token punctuation">{</span>
        <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="codewhy-\u7684-base-css" tabindex="-1"><a class="header-anchor" href="#codewhy-\u7684-base-css" aria-hidden="true">#</a> <code>codewhy</code> \u7684 <code>base.css</code></h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;./normalize.css&quot;</span><span class="token punctuation">;</span></span>
<span class="token comment">/* :root \u83B7\u53D6\u7684\u6839 \u5C31\u662F html

\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u5176\u4ED6\u5730\u65B9\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u53D8\u91CF

\u5982

\u5B9A\u4E49
:root {
  --large-size:50px;
}

\u4F7F\u7528
div{
  font-size: var(--large-size);
}

*/</span><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--color-text</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
  <span class="token property">--color-high-text</span><span class="token punctuation">:</span> #ff5777<span class="token punctuation">;</span>
  <span class="token property">--color-tint</span><span class="token punctuation">:</span> #ff8198<span class="token punctuation">;</span>
  <span class="token property">--color-background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">--line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">*,
*::before,
*::after</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Helvetica Neue&quot;</span><span class="token punctuation">,</span>Helvetica<span class="token punctuation">,</span><span class="token string">&quot;PingFang SC&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Hiragino Sans GB&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Microsoft YaHei&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u5FAE\u8F6F\u96C5\u9ED1&quot;</span><span class="token punctuation">,</span>Arial<span class="token punctuation">,</span>sans-serif<span class="token punctuation">;</span>
  <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token comment">/* \u7981\u6B62\u7528\u6237\u9F20\u6807\u5728\u9875\u9762\u4E0A\u9009\u4E2D\u6587\u5B57/\u56FE\u7247\u7B49 */</span>
  <span class="token property">-webkit-tap-highlight-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span> <span class="token comment">/* webkit\u662F\u82F9\u679C\u6D4F\u89C8\u5668\u5F15\u64CE\uFF0Ctap\u70B9\u51FB\uFF0Chighlight\u80CC\u666F\u9AD8\u4EAE\uFF0Ccolor\u989C\u8272\uFF0C\u989C\u8272\u7528\u6570\u503C\u8C03\u8282 */</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--color-background<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--color-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--color-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token selector">.clear-fix::after</span> <span class="token punctuation">{</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.clear-fix</span> <span class="token punctuation">{</span>
  <span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.arrow-right</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid #999<span class="token punctuation">;</span>
  <span class="token property">border-left</span><span class="token punctuation">:</span> 1px solid #999<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 9px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 9px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>135deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> .1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5E38\u75281 base.css\uFF0C\u4F5C\u7528\u662F\u91CD\u8BBE\u6D4F\u89C8\u5668\u9ED8\u8BA4\u6837\u5F0F\u548C\u63D0\u4F9B\u901A\u7528\u539F\u5B50\u7C7B</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@charset</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">;</span></span>
<span class="token comment">/* CSS Document */</span>
<span class="token atrule"><span class="token rule">@charset</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">;</span></span>
<span class="token comment">/*!
 * @\u540D\u79F0\uFF1Abase.css
 * @\u529F\u80FD\uFF1A1\u3001\u91CD\u8BBE\u6D4F\u89C8\u5668\u9ED8\u8BA4\u6837\u5F0F
 *       2\u3001\u8BBE\u7F6E\u901A\u7528\u539F\u5B50\u7C7B
 */</span>
<span class="token comment">/* \u9632\u6B62\u7528\u6237\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272\u5BF9\u7F51\u9875\u7684\u5F71\u54CD\uFF0C\u6DFB\u52A0\u8BA9\u7528\u6237\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5B57\u4F53 */</span>
<span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span>white<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span>black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u5185\u5916\u8FB9\u8DDD\u901A\u5E38\u8BA9\u5404\u4E2A\u6D4F\u89C8\u5668\u6837\u5F0F\u7684\u8868\u73B0\u4F4D\u7F6E\u4E0D\u540C */</span>
<span class="token selector">body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u8981\u6CE8\u610F\u8868\u5355\u5143\u7D20\u5E76\u4E0D\u7EE7\u627F\u7236\u7EA7 font \u7684\u95EE\u9898 */</span>
<span class="token selector">body,button,input,select,textarea</span> <span class="token punctuation">{</span>
    <span class="token property">font</span><span class="token punctuation">:</span>12px \\5b8b\\4f53<span class="token punctuation">,</span>arial<span class="token punctuation">,</span>sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input,select,textarea</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u53BB\u6389 table cell \u7684\u8FB9\u8DDD\u5E76\u8BA9\u5176\u8FB9\u91CD\u5408 */</span>
<span class="token selector">table</span> <span class="token punctuation">{</span>
    <span class="token property">border-collapse</span><span class="token punctuation">:</span>collapse<span class="token punctuation">;</span>
    <span class="token property">border-spacing</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* ie bug\uFF1Ath \u4E0D\u7EE7\u627F text-align */</span>
<span class="token selector">th</span> <span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span>inherit<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u53BB\u9664\u9ED8\u8BA4\u8FB9\u6846 */</span>
<span class="token selector">fieldset,img</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* ie6 7 8(q) bug \u663E\u793A\u4E3A\u884C\u5185\u8868\u73B0 */</span>
<span class="token selector">iframe</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u53BB\u6389 firefox \u4E0B\u6B64\u5143\u7D20\u7684\u8FB9\u6846 */</span>
<span class="token selector">abbr,acronym</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
    <span class="token property">font-variant</span><span class="token punctuation">:</span>normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u4E00\u81F4\u7684 del \u6837\u5F0F */</span>
<span class="token selector">del</span> <span class="token punctuation">{</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span>line-through<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">address,caption,cite,code,dfn,em,th,var</span> <span class="token punctuation">{</span>
    <span class="token property">font-style</span><span class="token punctuation">:</span>normal<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span>500<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u53BB\u6389\u5217\u8868\u524D\u7684\u6807\u8BC6\uFF0Cli \u4F1A\u7EE7\u627F */</span>
<span class="token selector">ol,ul</span> <span class="token punctuation">{</span>
    <span class="token property">list-style</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u5BF9\u9F50\u662F\u6392\u7248\u6700\u91CD\u8981\u7684\u56E0\u7D20\uFF0C\u522B\u8BA9\u4EC0\u4E48\u90FD\u5C45\u4E2D */</span>
<span class="token selector">caption,th</span> <span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u6765\u81EAyahoo\uFF0C\u8BA9\u6807\u9898\u90FD\u81EA\u5B9A\u4E49\uFF0C\u9002\u5E94\u591A\u4E2A\u7CFB\u7EDF\u5E94\u7528 */</span>
<span class="token selector">h1,h2,h3,h4,h5,h6</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span>500<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">q:before,q:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u7EDF\u4E00\u4E0A\u6807\u548C\u4E0B\u6807 */</span>
<span class="token selector">sub,sup</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span>75%<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span>baseline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">sup</span> <span class="token punctuation">{</span>
    <span class="token property">top</span><span class="token punctuation">:</span>-0.5em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">sub</span> <span class="token punctuation">{</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span>-0.25em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u8BA9\u94FE\u63A5\u5728 hover \u72B6\u6001\u4E0B\u663E\u793A\u4E0B\u5212\u7EBF */</span>
<span class="token selector">a:hover</span> <span class="token punctuation">{</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span>underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u9ED8\u8BA4\u4E0D\u663E\u793A\u4E0B\u5212\u7EBF\uFF0C\u4FDD\u6301\u9875\u9762\u7B80\u6D01 */</span>
<span class="token selector">ins,a</span> <span class="token punctuation">{</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u53BB\u9664 ie6 &amp; ie7 \u7126\u70B9\u70B9\u72B6\u7EBF */</span>
<span class="token selector">a:focus,*:focus</span> <span class="token punctuation">{</span>
    <span class="token property">outline</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u6E05\u9664\u6D6E\u52A8 */</span>
<span class="token selector">.clearfix:before,.clearfix:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span>table<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfix:after</span> <span class="token punctuation">{</span>
    <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
    <span class="token property">zoom</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span> <span class="token comment">/* for ie6 &amp; ie7 */</span>
<span class="token punctuation">}</span>
<span class="token selector">.clear</span> <span class="token punctuation">{</span>
    <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u8BBE\u7F6E\u663E\u793A\u548C\u9690\u85CF\uFF0C\u901A\u5E38\u7528\u6765\u4E0E js \u914D\u5408 */</span>
<span class="token selector">.hide</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.block</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u8BBE\u7F6E\u6D6E\u52A8\uFF0C\u51CF\u5C11\u6D6E\u52A8\u5E26\u6765\u7684 bug */</span>
<span class="token selector">.fl,.fr</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>inline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.fl</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.fr</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span>right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5E38\u75282</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@charset</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">;</span></span>
<span class="token comment">/* CSS Document */</span>
<span class="token selector">body, ul, ol, dl, li, dd, h1, h2, h3, h4, h5, h6, p, input</span> <span class="token punctuation">{</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0 <span class="token punctuation">}</span>
<span class="token selector">h1, h2, h3, h4, h5, h6</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span> <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Microsoft YaHei&quot;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">img</span> <span class="token punctuation">{</span> <span class="token property">border</span><span class="token punctuation">:</span> none <span class="token punctuation">}</span>
<span class="token selector">input, button, textarea, select</span> <span class="token punctuation">{</span>
*<span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span> <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span> <span class="token property">color</span><span class="token punctuation">:</span> #5e5e5e<span class="token punctuation">;</span> <span class="token property">font</span><span class="token punctuation">:</span> 14px/24px Microsoft YaHei<span class="token punctuation">,</span> SimSun<span class="token punctuation">,</span> Arial<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">ul, ol</span> <span class="token punctuation">{</span> <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span> 0 <span class="token punctuation">}</span>
<span class="token selector">table</span> <span class="token punctuation">{</span> <span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span> <span class="token property">border-spacing</span><span class="token punctuation">:</span> 0 <span class="token punctuation">}</span><span class="token comment">/*\u9ED8\u8BA4a\u6807\u7B7E\u6837\u5F0F*/</span>
<span class="token selector">a:link, a:visited</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> #5e5e5e<span class="token punctuation">;</span> <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">a:hover</span> <span class="token punctuation">{</span> <span class="token comment">/*color:#999;*/</span> <span class="token punctuation">}</span>
<span class="token selector">a:hover</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> #c9394a<span class="token punctuation">;</span> <span class="token comment">/*text-decoration: underline;*/</span> <span class="token punctuation">}</span>
<span class="token selector">a:active</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token comment">/*\u6D6E\u52A8\u548C\u6E05\u9664\u6D6E\u52A8*/</span>
<span class="token selector">.fl</span> <span class="token punctuation">{</span> <span class="token property">float</span><span class="token punctuation">:</span> left <span class="token punctuation">}</span>
<span class="token selector">.fr</span> <span class="token punctuation">{</span> <span class="token property">float</span><span class="token punctuation">:</span> right <span class="token punctuation">}</span>
<span class="token selector">.clear</span> <span class="token punctuation">{</span> <span class="token property">zoom</span><span class="token punctuation">:</span> 1 <span class="token punctuation">}</span>
<span class="token selector">.clear:after</span> <span class="token punctuation">{</span> <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">visibility</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span> <span class="token property">clear</span><span class="token punctuation">:</span> both <span class="token punctuation">}</span> <span class="token comment">/*\u663E\u793A\u9690\u85CF*/</span>
<span class="token selector">.hide</span> <span class="token punctuation">{</span> <span class="token property">display</span><span class="token punctuation">:</span> none <span class="token punctuation">}</span>
<span class="token selector">.show</span> <span class="token punctuation">{</span> <span class="token property">display</span><span class="token punctuation">:</span> block <span class="token punctuation">}</span><span class="token comment">/*\u8868\u683Ctable\u548Ctd\u6709\u8FB9\u6846*/</span>
<span class="token selector">.boder_tl</span> <span class="token punctuation">{</span> <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token property">border-left</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.boder_tl td</span> <span class="token punctuation">{</span> <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token property">border-right</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.boder_bl</span> <span class="token punctuation">{</span> <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token property">border-left</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.boder_bl td</span> <span class="token punctuation">{</span> <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token property">border-right</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.boder_tr</span> <span class="token punctuation">{</span> <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token property">border-right</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.boder_tr td</span> <span class="token punctuation">{</span> <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token property">border-left</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.boder_br</span> <span class="token punctuation">{</span> <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token property">border-right</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.boder_br td</span> <span class="token punctuation">{</span> <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token property">border-left</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.txt_center</span> <span class="token punctuation">{</span> <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token comment">/*\u8868\u683Ctable\u548Ctr\u6709\u8FB9\u6846*/</span>
<span class="token selector">.boder_ltr_trborder</span> <span class="token punctuation">{</span> <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token property">border-bottom</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.boder_ltr_trborder tr</span> <span class="token punctuation">{</span> <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5E38\u75283</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u5E38\u7528base.css */</span>
\u590D\u5236\u4EE3\u7801
<span class="token atrule"><span class="token rule">@charset</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">;</span></span>
<span class="token comment">/*!
 * @\u540D\u79F0\uFF1Abase.css
 * @\u529F\u80FD\uFF1A1\u3001\u91CD\u8BBE\u6D4F\u89C8\u5668\u9ED8\u8BA4\u6837\u5F0F
 *       2\u3001\u8BBE\u7F6E\u901A\u7528\u539F\u5B50\u7C7B
 */</span>
<span class="token comment">/* \u9632\u6B62\u7528\u6237\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272\u5BF9\u7F51\u9875\u7684\u5F71\u54CD\uFF0C\u6DFB\u52A0\u8BA9\u7528\u6237\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5B57\u4F53 */</span>
<span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span>white<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span>black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u5185\u5916\u8FB9\u8DDD\u901A\u5E38\u8BA9\u5404\u4E2A\u6D4F\u89C8\u5668\u6837\u5F0F\u7684\u8868\u73B0\u4F4D\u7F6E\u4E0D\u540C */</span>
<span class="token selector">body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u8981\u6CE8\u610F\u8868\u5355\u5143\u7D20\u5E76\u4E0D\u7EE7\u627F\u7236\u7EA7 font \u7684\u95EE\u9898 */</span>
<span class="token selector">body,button,input,select,textarea</span> <span class="token punctuation">{</span>
    <span class="token property">font</span><span class="token punctuation">:</span>12px \\5b8b\\4f53<span class="token punctuation">,</span>arial<span class="token punctuation">,</span>sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input,select,textarea</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u53BB\u6389 table cell \u7684\u8FB9\u8DDD\u5E76\u8BA9\u5176\u8FB9\u91CD\u5408 */</span>
<span class="token selector">table</span> <span class="token punctuation">{</span>
    <span class="token property">border-collapse</span><span class="token punctuation">:</span>collapse<span class="token punctuation">;</span>
    <span class="token property">border-spacing</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* ie bug\uFF1Ath \u4E0D\u7EE7\u627F text-align */</span>
<span class="token selector">th</span> <span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span>inherit<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u53BB\u9664\u9ED8\u8BA4\u8FB9\u6846 */</span>
<span class="token selector">fieldset,img</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* ie6 7 8(q) bug \u663E\u793A\u4E3A\u884C\u5185\u8868\u73B0 */</span>
<span class="token selector">iframe</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u53BB\u6389 firefox \u4E0B\u6B64\u5143\u7D20\u7684\u8FB9\u6846 */</span>
<span class="token selector">abbr,acronym</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
    <span class="token property">font-variant</span><span class="token punctuation">:</span>normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u4E00\u81F4\u7684 del \u6837\u5F0F */</span>
<span class="token selector">del</span> <span class="token punctuation">{</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span>line-through<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">address,caption,cite,code,dfn,em,th,var</span> <span class="token punctuation">{</span>
    <span class="token property">font-style</span><span class="token punctuation">:</span>normal<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span>500<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u53BB\u6389\u5217\u8868\u524D\u7684\u6807\u8BC6\uFF0Cli \u4F1A\u7EE7\u627F */</span>
<span class="token selector">ol,ul</span> <span class="token punctuation">{</span>
    <span class="token property">list-style</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u5BF9\u9F50\u662F\u6392\u7248\u6700\u91CD\u8981\u7684\u56E0\u7D20\uFF0C\u522B\u8BA9\u4EC0\u4E48\u90FD\u5C45\u4E2D */</span>
<span class="token selector">caption,th</span> <span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u6765\u81EAyahoo\uFF0C\u8BA9\u6807\u9898\u90FD\u81EA\u5B9A\u4E49\uFF0C\u9002\u5E94\u591A\u4E2A\u7CFB\u7EDF\u5E94\u7528 */</span>
<span class="token selector">h1,h2,h3,h4,h5,h6</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span>500<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">q:before,q:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u7EDF\u4E00\u4E0A\u6807\u548C\u4E0B\u6807 */</span>
<span class="token selector">sub,sup</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span>75%<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span>baseline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">sup</span> <span class="token punctuation">{</span>
    <span class="token property">top</span><span class="token punctuation">:</span>-0.5em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">sub</span> <span class="token punctuation">{</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span>-0.25em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u8BA9\u94FE\u63A5\u5728 hover \u72B6\u6001\u4E0B\u663E\u793A\u4E0B\u5212\u7EBF */</span>
<span class="token selector">a:hover</span> <span class="token punctuation">{</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span>underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u9ED8\u8BA4\u4E0D\u663E\u793A\u4E0B\u5212\u7EBF\uFF0C\u4FDD\u6301\u9875\u9762\u7B80\u6D01 */</span>
<span class="token selector">ins,a</span> <span class="token punctuation">{</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u53BB\u9664 ie6 &amp; ie7 \u7126\u70B9\u70B9\u72B6\u7EBF */</span>
<span class="token selector">a:focus,*:focus</span> <span class="token punctuation">{</span>
    <span class="token property">outline</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u6E05\u9664\u6D6E\u52A8 */</span>
<span class="token selector">.clearfix:before,.clearfix:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span>table<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfix:after</span> <span class="token punctuation">{</span>
    <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
    <span class="token property">zoom</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span> <span class="token comment">/* for ie6 &amp; ie7 */</span>
<span class="token punctuation">}</span>
<span class="token selector">.clear</span> <span class="token punctuation">{</span>
    <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u8BBE\u7F6E\u663E\u793A\u548C\u9690\u85CF\uFF0C\u901A\u5E38\u7528\u6765\u4E0E js \u914D\u5408 */</span>
<span class="token selector">.hide</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.block</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u8BBE\u7F6E\u6D6E\u52A8\uFF0C\u51CF\u5C11\u6D6E\u52A8\u5E26\u6765\u7684 bug */</span>
<span class="token selector">.fl,.fr</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>inline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.fl</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.fr</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span>right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u901A\u7528\u5B57\u4F53\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u5B57\u4F53\u8BBE\u7F6E" aria-hidden="true">#</a> \u901A\u7528\u5B57\u4F53\u8BBE\u7F6E</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>    <span class="token selector">body,
    textarea,
    input,
    button,
    select,
    keygen,
    legend</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">font</span><span class="token punctuation">:</span> 12px / 1.14 \u9ED1\u4F53<span class="token punctuation">;</span>
        <span class="token property">outline</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5168\u7AD9\u7070\u5EA6-\u9ED1\u767D" tabindex="-1"><a class="header-anchor" href="#\u5168\u7AD9\u7070\u5EA6-\u9ED1\u767D" aria-hidden="true">#</a> \u5168\u7AD9\u7070\u5EA6(\u9ED1\u767D)</h2><p>\u5C06\u7F51\u7AD9\u6574\u4F53\u7684\u8272\u8C03\u6362\u6210\u7070\u8272\u3001\u9ED1\u8272\u8272\u8C03\uFF0C\u5728\u7EAA\u5FF5\u4E00\u4E9B\u65E5\u5B50\u7684\u65F6\u5019\u4F1A\u6709\u7528\u5230\uFF0C</p><p>\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u7684\u9700\u8981\u9009\u62E9\u5408\u9002\u7684CSS\u4EE3\u7801\u6837\u5F0F\u6DFB\u52A0\u5230\u81EA\u5DF1\u7684\u7F51\u9875\u6A21\u677F\u7684\u4EE3\u7801\u4E2D\u5B9E\u73B0\u7F51\u9875\u7070\u8272\u3001\u9ED1\u767D\u6837\u5F0F\u3002</p><ul><li>\u6837\u5F0F\u4E00</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;style type=&quot;text/css&quot;&gt;
html</span> <span class="token punctuation">{</span>
\u3000\u3000filter<span class="token punctuation">:</span><span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>//\u7ED9\u7F51\u7AD9\u52A0\u7070\u5EA6\u7684\u6EE4\u955C
\u3000\u3000-webkit-filter<span class="token punctuation">:</span><span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>//\u5C5E\u4E8E\u4F7F\u7528webkit\u5185\u6838\u7684\u6D4F\u89C8\u5668\uFF0C\u517C\u5BB9chrome\u548Csafari\u6D4F\u89C8\u5668
\u3000\u3000-moz-filter<span class="token punctuation">:</span><span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
\u3000\u3000-ms-filter<span class="token punctuation">:</span><span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
\u3000\u3000-o-filter<span class="token punctuation">:</span><span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
\u3000\u3000filter<span class="token punctuation">:</span><span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.<span class="token function">BasicImage</span><span class="token punctuation">(</span>grayscale=1<span class="token punctuation">)</span><span class="token punctuation">;</span>
\u3000\u3000-webkit-filter<span class="token punctuation">:</span><span class="token function">grayscale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6837\u5F0F\u4E8C</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">//\u548C\u7B2C\u4E00\u79CD\u7C7B\u4F3C\uFF0C\u5B9E\u73B0\u5168\u7AD9\u6548\u679C\uFF0C\u53EF\u4EE5\u5C06\u4EE3\u7801\u6DFB\u52A0\u5230head\u4E2D
&lt;style&gt;
body, html</span> <span class="token punctuation">{</span>
<span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">-moz-filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">-ms-filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">-o-filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">filter</span><span class="token punctuation">:</span><span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.<span class="token function">BasicImage</span><span class="token punctuation">(</span>grayscale=1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">_filter</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6837\u5F0F\u4E09</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">//\u540C\u6837\u7684\u53EF\u4EE5\u6DFB\u52A0\u5230\u6837\u5F0Fstyle\u4E2D
html</span> <span class="token punctuation">{</span>
    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.<span class="token function">BasicImage</span><span class="token punctuation">(</span>grayscale=1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6837\u5F0F\u56DB</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>//\u8FD9\u662F\u76F4\u63A5\u6DFB\u52A0\u5230\u884C\u5185\u6837\u5F0F\u4E2D
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">filter</span><span class="token punctuation">:</span> <span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.<span class="token function">BasicImage</span><span class="token punctuation">(</span>grayscale=1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),c=[e];function o(l,i){return s(),a("div",null,c)}var r=n(t,[["render",o],["__file","css.html.vue"]]);export{r as default};
