import{_ as n,o as s,c as a,d as e}from"./app.51922910.js";const p={},t=e(`<h3 id="interface-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#interface-\u63A5\u53E3" aria-hidden="true">#</a> interface \u63A5\u53E3</h3><p><code>interface</code>\u53EF\u4EE5\u5E2E\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2A <code>Object</code>\u7684\u7C7B\u578B\uFF0C\u5B83\u53EF\u4EE5\u7075\u6D3B\u7684\u63CF\u8FF0\u5BF9\u8C61\u6BCF\u4E00\u4E2A\u5C5E\u6027\u7684\u7C7B\u578B\u3002</p><p>\u770B\u770B\u5982\u4F55\u4F7F\u7528\u5B83\uFF0C\u6BD4\u5982\u4E0B\u9762\u7684 userInfo \u5BF9\u8C61\uFF0C\u5305\u542B name\u3001userId \u5C5E\u6027\uFF0C\u8FD9\u65F6\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>interface</code> \u53BB\u62BD\u8C61\u6307\u5B9A\u5B83\u91CC\u9762\u5305\u542B\u7684\u5C5E\u6027\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u4E00\u822C\u63A5\u53E3\u9996\u5B57\u6BCD\u5927\u5199</span>
<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    userId<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5B9A\u4E49 userInfo \u5BF9\u8C61\u4E3A User \u7C7B\u578B\u7684\u65F6\u5019</span>
<span class="token comment">// \u5C31\u7EA6\u675F\u4E86 userInfo \u7684\u5F62\u72B6\u5FC5\u987B\u548C\u63A5\u53E3 User \u4E00\u81F4</span>
<span class="token comment">// \u5982\u679C\u5B9A\u4E49\u7684\u53D8\u91CF\u6BD4\u63A5\u53E3\u5C11\u6216\u8005\u591A\u662F\u4E0D\u5141\u8BB8\u7684\u3002</span>
<span class="token keyword">const</span> userInfo<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>  
    name<span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Error: userInfo \u4E2D\u7F3A\u5C11\u5C5E\u6027 &quot;userId&quot;\uFF0C\u4F46\u7C7B\u578B &quot;User&quot; \u4E2D\u9700\u8981\u8BE5\u5C5E\u6027\u3002</span>

<span class="token comment">// OK</span>
<span class="token keyword">const</span> userInfo<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span>
    userId<span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E5F\u53EF\u4EE5\uFF1A</span>
<span class="token keyword">const</span> userInfo<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    userId<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span>
    userId<span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u63A5\u53E3\u5177\u6709\u7684\u7279\u6027\uFF1A</strong></p><h4 id="\u5B9A\u4E49\u53EF\u9009" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u53EF\u9009" aria-hidden="true">#</a> <strong>\u5B9A\u4E49\u53EF\u9009</strong></h4><p>\u5728 <code>interface</code>\u5C5E\u6027\u4E2D\u6DFB\u52A0 <code>?</code>\u53EF\u4EE5\u7701\u7565</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token comment">// userId \u540E\u6DFB\u52A0 ?</span>
    userId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// OK</span>
<span class="token keyword">const</span> userInfo<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u53EA\u8BFB\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u53EA\u8BFB\u5C5E\u6027" aria-hidden="true">#</a> <strong>\u53EA\u8BFB\u5C5E\u6027</strong></h4><p>\u5728 <code>interface</code>\u5C5E\u6027\u4E2D\u6DFB\u52A0 <code>readonly</code>\u5173\u952E\u5B57\uFF0C\u4E00\u65E6\u5B9A\u4E49\u5C5E\u6027\u53D8\u4E3A\u53EA\u8BFB\uFF0C\u4E0D\u80FD\u88AB\u4FEE\u6539\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    userId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> userInfo<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

userInfo<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;def&#39;</span> <span class="token comment">// Error\uFF1A \u65E0\u6CD5\u5206\u914D\u5230 &quot;name&quot; \uFF0C\u56E0\u4E3A\u5B83\u662F\u53EA\u8BFB\u5C5E\u6027\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u5916 TypeScript \u8FD8\u63D0\u4F9B\u4E86 <code>ReadonlyArray&lt;T&gt;</code>\uFF0C\u8868\u793A\u8BE5\u6570\u7EC4\u4E3A\u53EA\u8BFB\u4E0D\u80FD\u88AB\u64CD\u4F5C\u3002</p><p><strong>\u6CE8\u610F\uFF1A</strong></p><blockquote><p>\u5982\u679C\u4F7F\u7528 <code>delete</code> \u64CD\u4F5C\u7B26\u5220\u9664\u67D0\u4E00\u4E2A\u5BF9\u8C61\u5C5E\u6027\uFF0C\u90A3\u4E48\u5B83\u5B9A\u4E49\u7684\u7C7B\u578B\u5C5E\u6027\u5FC5\u987B\u662F\u53EF\u9009\u7684\u4EE5\u53CA\u5B9A\u4E49\u4E3A <code>readonly</code>\uFF0C\u5426\u5219\u4F1A\u62A5\u9519</p></blockquote><h4 id="\u4EFB\u610F\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u610F\u5C5E\u6027" aria-hidden="true">#</a> \u4EFB\u610F\u5C5E\u6027</h4><p>\u6709\u65F6\u5019\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B\uFF0C\u4F46\u662F\u8FD8\u60F3\u6DFB\u52A0\u989D\u5916\u7684\u5C5E\u6027\uFF0C\u53C8\u4E0D\u60F3\u5B9A\u4E49\u4E3A <code>any</code>\uFF0C<strong>\u7D22\u5F15\u7B7E\u540D</strong>\u5C31\u53EF\u4EE5\u6EE1\u8DB3\u6211\u4EEC\u7684\u8981\u6C42</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    userId<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5C5E\u6027\u503C\u7684\u7C7B\u578B\u4E3A any \uFF0C\u53EF\u4EE5\u4E3A\u4EFB\u4F55\u7C7B\u578B\uFF0C\u5982\u679C string \u6240\u6709\u989D\u5916\u7684\u5C5E\u6027\u90FD\u5FC5\u987B\u4E3A string</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u53EF\u4EE5\u968F\u610F\u6DFB\u52A0</span>
<span class="token keyword">const</span> userInfo<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span>
    userId<span class="token operator">:</span> <span class="token number">999</span><span class="token punctuation">,</span>
    avatarUrl<span class="token operator">:</span> <span class="token string">&#39;url&#39;</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="type-\u7C7B\u578B\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#type-\u7C7B\u578B\u522B\u540D" aria-hidden="true">#</a> type \u7C7B\u578B\u522B\u540D</h3><p>type \u4F1A\u7ED9\u7C7B\u578B\u8D77\u4E00\u4E2A\u65B0\u540D\u5B57\uFF0Ctype \u548C interface \u5F88\u50CF\uFF0Ctype \u6BD4 interface \u66F4\u52A0\u7075\u6D3B\uFF0C\u4E0D\u4F46\u53EF\u4EE5\u4F5C\u7528\u4E8E\u539F\u59CB\u503C\uFF08\u57FA\u672C\u7C7B\u578B\uFF09\uFF0C\u8054\u5408\u7C7B\u578B\uFF0C\u4EE5\u53CA\u4EFB\u4F55\u7C7B\u578B\u3002</p><p>\u4F8B\u5982\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Gender</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// \u5C3D\u7BA1 type \u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u57FA\u672C\u7C7B\u578B\uFF0C\u4F46\u901A\u5E38\u6CA1\u4EC0\u4E48\u5FC5\u8981\u3002</span>
<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> userId<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">GetUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">UserAndGetUser</span> <span class="token operator">=</span> User <span class="token operator">|</span> GetUser <span class="token comment">// \u8054\u5408\u7C7B\u578B</span>
<span class="token keyword">type</span> <span class="token class-name">UserAndGetUser</span> <span class="token operator">=</span> User <span class="token operator">&amp;</span> GetUser <span class="token comment">// \u4EA4\u53C9\u7C7B\u578B</span>
<span class="token keyword">type</span> <span class="token class-name">User<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> userId<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// \u6CDB\u578B\u4F20\u5165</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="interface-\u4E0E-type-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#interface-\u4E0E-type-\u7684\u533A\u522B" aria-hidden="true">#</a> interface \u4E0E type \u7684\u533A\u522B</h3><ul><li><strong>\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\u7C7B\u578B\u7684\u5F62\u72B6\u4E0D\u4E00\u6837</strong></li></ul><p><strong>\u63A5\u53E3</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">GetUser</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> getUser<span class="token operator">:</span> <span class="token function-variable function">GetUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7C7B\u578B\u522B\u540D</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">GetUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> getUser<span class="token operator">:</span> <span class="token function-variable function">GetUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>type \u53EF\u4EE5\u5B9A\u4E49\u8054\u5408\u7C7B\u578B\u3001\u4EA4\u53C9\u7C7B\u578B\u3001\u539F\u59CB\u7C7B\u578B\u548C\u5143\u7EC4</strong></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    userId<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Other</span> <span class="token operator">=</span> <span class="token punctuation">{</span> city<span class="token operator">:</span> <span class="token string">&#39;shenzhen&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u4EA4\u53C9\u7C7B\u578B</span>
<span class="token keyword">type</span> <span class="token class-name">UserInfo</span> <span class="token operator">=</span> User <span class="token operator">&amp;</span> Other<span class="token punctuation">;</span>

<span class="token comment">// \u8054\u5408\u7C7B\u578B</span>
<span class="token keyword">type</span> <span class="token class-name">UserInfo</span> <span class="token operator">=</span> User <span class="token operator">|</span> Other<span class="token punctuation">;</span>

<span class="token comment">// \u5143\u7EC4</span>
<span class="token keyword">type</span> <span class="token class-name">Tuple</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span><span class="token builtin">string</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u63A5\u53E3\u548C\u7C7B\u578B\u522B\u540D\u7684\u6269\u5C55</strong></li></ul><p>\u4E24\u8005\u90FD\u53EF\u4EE5\u6269\u5C55\uFF0C\u4F46\u662F\u8BED\u6CD5\u4E0D\u540C\u3002</p><p><strong>\u63A5\u53E3\u4F7F\u7528 extends \u6269\u5C55\uFF1A</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    userId<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">UserInfo</span> <span class="token keyword">extends</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    city<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7B49\u540C\u4E8E\uFF1A</span>
<span class="token keyword">interface</span> <span class="token class-name">UserInfo</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    userId<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    city<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**\u7C7B\u578B\u522B\u540D\u4F7F\u7528 **<code>**&amp;**</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    userId<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Other</span> <span class="token operator">=</span> <span class="token punctuation">{</span> city<span class="token operator">:</span> <span class="token string">&#39;shenzhen&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">UserInfo</span> <span class="token operator">=</span> User <span class="token operator">&amp;</span> Other

<span class="token comment">// \u7B49\u540C\u4E8E\uFF1A</span>
<span class="token keyword">type</span> <span class="token class-name">UserInfo</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    userId<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    city<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u63A5\u53E3\u53EF\u4EE5\u540D\u79F0\u4E0D\u4F1A\u51B2\u7A81\uFF0C\u91CD\u590D\u5B9A\u4E49\u4F1A\u53E0\u52A0</strong></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    userId<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    gender<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6B64\u65F6 User \u7684\u7C7B\u578B\u4E3A\uFF1A</span>
<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    userId<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    gender<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> userInfo<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span>
    userId<span class="token operator">:</span> <span class="token number">999</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>type \u53EF\u4EE5\u4F7F\u7528 in \u5173\u952E\u5B57\u904D\u5386\u751F\u6210\u5C5E\u6027\uFF0Cinterface \u4E0D\u884C\u3002</strong></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">keys</span> <span class="token operator">=</span> <span class="token string">&#39;name&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;city&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>key <span class="token keyword">in</span> keys<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u7B49\u540C\u4E8E\uFF1A</span>
<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    city<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> userInfo<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span>
    city<span class="token operator">:</span> <span class="token string">&#39;shenz&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7D22\u5F15\u7B7E\u540D\u4F7F\u7528 in \u5173\u952E\u5B57\u5C31\u50CF for .. in \u4E00\u6837\u4F9D\u6B21\u904D\u5386 <code>Keys</code>\uFF0C\u5E76\u751F\u6210 <strong>\u952E</strong> \u5728 User \u7C7B\u578B\u4E2D</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">keys</span> <span class="token operator">=</span> <span class="token string">&#39;name&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;city&#39;</span><span class="token punctuation">;</span>


<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>key <span class="token keyword">in</span> keys<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// Error \xD7</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),o=[t];function c(i,l){return s(),a("div",null,o)}var u=n(p,[["render",c],["__file","ts3.html.vue"]]);export{u as default};
