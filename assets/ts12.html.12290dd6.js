import{_ as n,o as s,c as a,d as e}from"./app.51922910.js";const p={},t=e(`<h2 id="webpack-\u6253\u5305-ts" tabindex="-1"><a class="header-anchor" href="#webpack-\u6253\u5305-ts" aria-hidden="true">#</a> webpack \u6253\u5305 ts</h2><ul><li>\u521D\u59CB\u5316<code>package.json</code></li></ul><div class="language-s ext-s line-numbers-mode"><pre class="language-s"><code>npm init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5728\u9879\u76EE\u91CC\u5B89\u88C5<code>webpack</code>\u548C<code>ts</code></li></ul><div class="language-s ext-s line-numbers-mode"><pre class="language-s"><code>npm i -D webpack webpack-cli typescript ts-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA <code>webpack.config.js</code> \u6587\u4EF6,\u6307\u5B9A\u6253\u5305<code>ts</code>\u6587\u4EF6\u7684<code>loader</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165\u4E00\u4E2A path \u5305</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// webpack\u4E2D\u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u90FD\u5E94\u8BE5\u5199\u5728module\u4E2D</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5165\u53E3\u6587\u4EF6</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u51FA\u53E3</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;bundle.js&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6307\u5B9Awebpack \u6253\u5305\u8981\u4F7F\u7528\u7684\u6A21\u5757</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6307\u5B9A\u8981\u52A0\u8F7D\u7684\u89C4\u5219</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// test \u6307\u5B9A\u7684\u65F6\u89C4\u5219\u751F\u6548\u7684\u6587\u4EF6</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ts$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&quot;ts-loader&quot;</span><span class="token punctuation">,</span>
                <span class="token comment">// \u8981\u6392\u9664\u7684\u6587\u4EF6</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u914D\u7F6E<code>ts</code>\u7F16\u8BD1<code>js</code>\u7684\u914D\u7F6E\u6587\u4EF6<code>tsconfig.json</code>\uFF0C\u914D\u7F6E<code>ts</code>\u7F16\u8BD1\u89C4\u5219</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es2015&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es6&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>package.json</code>\u6DFB\u52A0\u811A\u672C<code>&quot;build&quot;:&quot;webpack&quot;</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span><span class="token string">&quot;webpack&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528 <code>html-webpack-plugin</code> \u81EA\u52A8\u521B\u5EFA<code>html</code>\u6587\u4EF6</li></ul><p>\u5B89\u88C5<code>html-webpack-plugin</code>\u5E76\u5728<code>webpack.config.js</code>\u6587\u4EF6\u914D\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    \xB7\xB7\xB7
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       \xB7\xB7\xB7
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u63D2\u4EF6</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u81EA\u5B9A\u4E49title&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528 <code>webpack-dev-server</code> \u542F\u52A8\u5E76\u5B9E\u65F6\u7F16\u8BD1\u9879\u76EE</li></ul><p>\u5B89\u88C5<code>webpack-dev-server</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm i <span class="token operator">-</span><span class="token constant">D</span> webpack<span class="token operator">-</span>dev<span class="token operator">-</span>server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FEE\u6539 <code>package.json</code> \u4E2D\u7684 <code>scripts</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;start&quot;</span><span class="token operator">:</span><span class="token string">&quot;webpack serve --open chrome.exe&quot;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>mac</code>\u4E2D\u662F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;start&quot;</span><span class="token operator">:</span><span class="token string">&quot;webpack serve --open &#39;google chrome&#39;&quot;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528 <code>babel</code></li></ul><p>\u4F7F\u7528<code>babel</code>\u5C06<code>js</code>\u4EE3\u7801\u9AD8\u7248\u672C\u8F6C\u4E3A\u4F4E\u7248\u672C\uFF0C\u6765\u9002\u7528\u4F4E\u7248\u672C\u6216\u4E0D\u517C\u5BB9\u7684\u6D4F\u89C8\u5668\u3002(\u4F8B\u5982\u517C\u5BB9ie11)</p><p>\u5B89\u88C5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm i <span class="token operator">-</span><span class="token constant">D</span> @babel<span class="token operator">/</span>core @babel<span class="token operator">/</span>preset<span class="token operator">-</span>env babel<span class="token operator">-</span>loader core<span class="token operator">-</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u914D\u7F6E<code>webpack.config.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165\u4E00\u4E2A path \u5305</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// webpack\u4E2D\u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u90FD\u5E94\u8BE5\u5199\u5728module\u4E2D</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5165\u53E3</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u51FA\u53E3</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6307\u5B9Awebpack \u6253\u5305\u8981\u4F7F\u7528\u7684\u6A21\u5757</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6307\u5B9A\u8981\u52A0\u8F7D\u7684\u89C4\u5219</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// test \u6307\u5B9A\u7684\u65F6\u89C4\u5219\u751F\u6548\u7684\u6587\u4EF6</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ts$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token comment">// \u6307\u5B9A\u52A0\u8F7D\u5668</span>
                        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
                        <span class="token comment">// \u8BBE\u7F6Ebabel</span>
                        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token comment">// \u8BBE\u7F6E\u9884\u5B9A\u4E49\u7684\u73AF\u5883</span>
                            <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                                <span class="token punctuation">[</span>
                                    <span class="token comment">//\u6307\u5B9A\u73AF\u5883\u7684\u63D2\u4EF6</span>
                                    <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
                                    <span class="token comment">// \u914D\u7F6E\u4FE1\u606F</span>
                                    <span class="token punctuation">{</span>
                                        <span class="token comment">// \u8981\u517C\u5BB9\u7684\u76EE\u6807\u6D4F\u89C8\u5668</span>
                                        <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                            <span class="token string-property property">&quot;chrome&quot;</span><span class="token operator">:</span> <span class="token string">&quot;88&quot;</span>
                                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                        <span class="token comment">//\u6307\u5B9Acorejs\u7684\u7248\u672C</span>
                                        <span class="token string-property property">&quot;corejs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
                                        <span class="token comment">//\u4F7F\u7528corejs\u7684\u65B9\u5F0F &quot;usage&quot; \u662F\u6309\u9700\u52A0\u8F7D\u3002</span>
                                        <span class="token string-property property">&quot;useBuiltIns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;usage&quot;</span>
                                    <span class="token punctuation">}</span>
                                <span class="token punctuation">]</span>
                            <span class="token punctuation">]</span>

                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token comment">// \u4ECE\u4E0B\u5F80\u4E0A\u6267\u884C\uFF0C\u5148\u5C06ts\u4EE3\u7801\u8F6C\u4E3Ajs</span>
                    <span class="token string">&quot;ts-loader&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token comment">// \u8981\u6392\u9664\u7684\u6587\u4EF6</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u63D2\u4EF6</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      \xB7\xB7\xB7
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//\u7528\u6765\u8BBE\u7F6E\u5F15\u7528\u6A21\u5757</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5230\u8FD9\u91CC<code>ie11</code>\u8FD8\u662F\u4E0D\u80FD\u517C\u5BB9\uFF0C\u56E0\u4E3A<code>ie11</code>\u4E0D\u652F\u6301\u7BAD\u5934\u51FD\u6570\uFF0C<code>webpack</code>\u9ED8\u8BA4\u4F1A\u6253\u5305\u6210\u7ACB\u5373\u6267\u884C\u7684\u7BAD\u5934\u51FD\u6570\u7684\u4EE3\u7801\uFF0C\u6240\u4EE5<code>webapck.config.js</code>\u8FD8\u7528\u6DFB\u52A0:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>   <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;bundle.js&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u544A\u8BC9webpack\u4E0D\u9002\u7528\u7BAD\u5934\u51FD\u6570</span>
        <span class="token literal-property property">environment</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">arrowFunction</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webpack-config-js-\u6587\u4EF6\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#webpack-config-js-\u6587\u4EF6\u6A21\u677F" aria-hidden="true">#</a> <code>webpack.config.js</code> \u6587\u4EF6\u6A21\u677F</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165\u4E00\u4E2A path \u5305</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// webpack\u4E2D\u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u90FD\u5E94\u8BE5\u5199\u5728module\u4E2D</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5165\u53E3\u6587\u4EF6</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u51FA\u53E3</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;bundle.js&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u544A\u8BC9webpack\u4E0D\u9002\u7528\u7BAD\u5934\u51FD\u6570</span>
        <span class="token literal-property property">environment</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">arrowFunction</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6307\u5B9Awebpack \u6253\u5305\u8981\u4F7F\u7528\u7684\u6A21\u5757</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6307\u5B9A\u8981\u52A0\u8F7D\u7684\u89C4\u5219</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// test \u6307\u5B9A\u7684\u65F6\u89C4\u5219\u751F\u6548\u7684\u6587\u4EF6</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ts$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token comment">// \u6307\u5B9A\u52A0\u8F7D\u5668</span>
                        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
                        <span class="token comment">// \u8BBE\u7F6Ebabel</span>
                        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token comment">// \u8BBE\u7F6E\u9884\u5B9A\u4E49\u7684\u73AF\u5883</span>
                            <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                                <span class="token punctuation">[</span>
                                    <span class="token comment">//\u6307\u5B9A\u73AF\u5883\u7684\u63D2\u4EF6</span>
                                    <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
                                    <span class="token comment">// \u914D\u7F6E\u4FE1\u606F</span>
                                    <span class="token punctuation">{</span>
                                        <span class="token comment">// \u8981\u517C\u5BB9\u7684\u76EE\u6807\u6D4F\u89C8\u5668</span>
                                        <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                            <span class="token string-property property">&quot;chrome&quot;</span><span class="token operator">:</span> <span class="token string">&quot;88&quot;</span><span class="token punctuation">,</span>
                                            <span class="token string-property property">&quot;ie&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11&quot;</span>
                                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                        <span class="token comment">//\u6307\u5B9Acorejs\u7684\u7248\u672C</span>
                                        <span class="token string-property property">&quot;corejs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
                                        <span class="token comment">//\u4F7F\u7528corejs\u7684\u65B9\u5F0F &quot;usage&quot; \u662F\u6309\u9700\u52A0\u8F7D\u3002</span>
                                        <span class="token string-property property">&quot;useBuiltIns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;usage&quot;</span>
                                    <span class="token punctuation">}</span>
                                <span class="token punctuation">]</span>
                            <span class="token punctuation">]</span>

                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token comment">// \u4ECE\u4E0B\u5F80\u4E0A\u6267\u884C\uFF0C\u5148\u5C06ts\u4EE3\u7801\u8F6C\u4E3Ajs</span>
                    <span class="token string">&quot;ts-loader&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token comment">// \u8981\u6392\u9664\u7684\u6587\u4EF6</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u63D2\u4EF6</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u81EA\u5B9A\u4E49title&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//\u7528\u6765\u8BBE\u7F6E\u5F15\u7528\u6A21\u5757</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.js&quot;</span><span class="token punctuation">]</span> <span class="token comment">// \u544A\u8BC9 webpack \u51E1\u662Fts\u3001js\u6587\u4EF6\u7ED3\u5C3E\u7684\u6587\u4EF6\u90FD\u53EF\u4EE5\u4F5C\u4E3A\u6A21\u5757\u4F7F\u7528</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),o=[t];function l(c,i){return s(),a("div",null,o)}var u=n(p,[["render",l],["__file","ts12.html.vue"]]);export{u as default};
