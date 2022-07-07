import{_ as n,o as s,c as a,d as t}from"./app.51922910.js";const o={},e=t(`<h2 id="\u8BBE\u7F6E\u5B57\u4F53" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u5B57\u4F53" aria-hidden="true">#</a> \u8BBE\u7F6E\u5B57\u4F53</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Consolas<span class="token punctuation">,</span><span class="token string">&#39;Source Code Pro&#39;</span><span class="token punctuation">,</span> monospace<span class="token punctuation">,</span><span class="token string">&#39;Sarasa Term SC&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u81EA\u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5</h2><h3 id="\u8BED\u6CD5\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5\u7B80\u4ECB" aria-hidden="true">#</a> \u8BED\u6CD5\u7B80\u4ECB</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;Print to \u4EE3\u7801\u5757\u540D\u79F0&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5BF9\u5E94\u89E6\u53D1\u4EE3\u7801\u7247\u6BB5\u7684\u5B57\u7B26&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;\u4EE3\u7801\u5757\u5185\u5BB9\uFF0C\u5FC5\u987B\u4F7F\u7528\u53CC\u5F15\u53F7\u5F15\u8D77\u6765&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\u6B64\u5904\u4E3A\u5149\u6807\u9996\u6B21\u6240\u5728: $1&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\u6B64\u5904\u4E3A\u5149\u6807\u4E8C\u6B21\u6240\u5728: $2&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\u6B64\u5904\u4E3A\u5F53\u524D\u65F6\u95F4: \${CURRENT_YEAR}-\${CURRENT_MONTH}-\${CURRENT_DATE} \${CURRENT_HOUR}:\${CURRENT_MINUTE}:\${CURRENT_SECOND}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4EE3\u7801\u5757\u63CF\u8FF0\uFF0C\u4F1A\u5728\u5FEB\u6377\u952E\u53F3\u4FA7\u6CE8\u91CA\u5904\u5C55\u793A&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4ED6\u8BED\u6CD5\uFF1A</p><ol><li>\u5360\u4F4D\u7B26\u4E4B\u5149\u6807 <code>$number</code></li></ol><p><code>$</code>\u540E\u9762\u7D27\u8DDF\u6570\u5B57\u53EF\u6307\u5B9A\u4EE3\u4E70\u7247\u6BB5\u89E6\u53D1\u5E76\u843D\u5165\u7F16\u8F91\u5668\u4E4B\u540E\u7684\u5149\u6807\u4F4D\u7F6E\uFF0C\u5149\u6807\u4F4D\u7F6E\u6309\u7167\u4ECE\u5C0F\u5230\u5927\u6392\u5E8F,\u53EF\u4EE5\u4F7F\u7528 <code>tab</code> \u952E\u5207\u6362\u5230\u4E0B\u4E00\u4E2A\u3002</p><p>\u5982\u4E0A\uFF0C\u4EE3\u7801\u7247\u6BB5\u6DFB\u52A0\u5230\u6587\u4EF6\u4E2D\u540E\uFF0C\u5149\u6807\u9996<code>1</code>\u5148\u843D\u5728<code>$1</code>\u5904\uFF0C\u6309<code>Tab</code>\u952E\uFF0C\u5149\u6807\u843D\u5728<code>$2</code>\u4F4D\u7F6E</p><ol start="2"><li>\u5360\u4F4D\u7B26\u4E4B\u53EF\u9009\u503C <code>\${ number | a }</code></li></ol><p>\u62EC\u53F7\u4E2D\u7684 <code>number</code> \u5BF9\u5E94\u7684\u662F\u6309 <code>tab</code> \u4E4B\u540E\u7684\u5149\u6807\u843D\u70B9\u987A\u5E8F\uFF0C <code>abc</code> \u4E3A\u53EF\u9009\u7684\u9879\uFF0C</p><p>\u5982\u679C\u53EA\u6709\u4E00\u4E2A\u9ED8\u8BA4\u503C\uFF0C\u53EF\u4EE5\u5199\u6210\uFF1A<code>\${ 1: default }</code></p><p>\u652F\u6301\u5D4C\u5957\u6A21\u5F0F\uFF0C\u4F8B\u5982\uFF1A<code>\${ 1: another \${ 2: company } }</code></p><ol start="3"><li>\u5360\u4F4D\u7B26\u4E4B\u53D8\u91CF <code>$variable</code> , <code>\${ variable : default }</code></li></ol><p>\u4F7F\u7528<code>$variable</code>\uFF0C\u53EF\u4EE5\u63D2\u5165\u53D8\u91CF\u7684\u503C\uFF0C<code>\${ variable : default }</code>\u53EF\u4EE5\u5728\u672A\u8D4B\u503C\u7684\u60C5\u51B5\u4E0B\u63D0\u4F9B\u9ED8\u8BA4\u503C</p><p>\u53EF\u4F7F\u7528\u53D8\u91CF\u5982\u4E0B\uFF1A</p><p>a. \u6587\u672C\u6216\u6587\u4EF6\u76F8\u5173\u7C7B:</p><table><thead><tr><th style="text-align:left;">\u53D8\u91CF\u540D</th><th style="text-align:left;">\u542B\u4E49</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TM_SELECTED_TEXT</code></td><td style="text-align:left;">\u5F53\u524D\u9009\u5B9A\u7684\u6587\u672C\u6216\u7A7A\u5B57\u7B26\u4E32</td></tr><tr><td style="text-align:left;"><code>TM_CURRENT_LINE</code></td><td style="text-align:left;">\u5F53\u524D\u884C\u7684\u5185\u5BB9</td></tr><tr><td style="text-align:left;"><code>TM_CURRENT_WORD</code></td><td style="text-align:left;">\u5149\u6807\u6240\u5904\u5355\u8BCD\u6216\u7A7A\u5B57\u7B26\u4E32</td></tr><tr><td style="text-align:left;"><code>TM_LINE_INDEX</code></td><td style="text-align:left;">\u884C\u53F7\uFF08\u4ECE\u96F6\u5F00\u59CB\uFF09</td></tr><tr><td style="text-align:left;"><code>TM_LINE_NUMBER</code></td><td style="text-align:left;">\u884C\u53F7\uFF08\u4ECE\u4E00\u5F00\u59CB\uFF09</td></tr><tr><td style="text-align:left;"><code>TM_FILENAME</code></td><td style="text-align:left;">\u5F53\u524D\u6587\u6863\u7684\u6587\u4EF6\u540D\uFF08\u542B\u540E\u7F00\u540D\uFF09</td></tr><tr><td style="text-align:left;"><code>TM_FILENAME_BASE</code></td><td style="text-align:left;">\u5F53\u524D\u6587\u6863\u7684\u6587\u4EF6\u540D\uFF08\u4E0D\u542B\u540E\u7F00\u540D\uFF09</td></tr><tr><td style="text-align:left;"><code>TM_DIRECTORY</code></td><td style="text-align:left;">\u5F53\u524D\u6587\u6863\u6240\u5728\u76EE\u5F55</td></tr><tr><td style="text-align:left;"><code>TM_FILEPATH</code></td><td style="text-align:left;">\u5F53\u524D\u6587\u6863\u7684\u5B8C\u6574\u6587\u4EF6\u8DEF\u5F84</td></tr><tr><td style="text-align:left;"><code>CLIPBOARD</code></td><td style="text-align:left;">\u5F53\u524D\u526A\u8D34\u677F\u4E2D\u5185\u5BB9</td></tr><tr><td style="text-align:left;"><code>WORKSPACE_NAME</code></td><td style="text-align:left;">\u6253\u5F00\u7684\u5DE5\u4F5C\u533A\u6216\u6587\u4EF6\u5939\u7684\u540D\u79F0</td></tr><tr><td style="text-align:left;"><code>WORKSPACE_FOLDER</code></td><td style="text-align:left;">\u6253\u5F00\u7684\u5DE5\u4F5C\u533A\u6216\u6587\u4EF6\u5939\u7684\u8DEF\u5F84</td></tr></tbody></table><p>b. \u65E5\u671F\u548C\u65F6\u95F4\u7C7B</p><table><thead><tr><th style="text-align:left;">\u53D8\u91CF\u540D</th><th style="text-align:left;">\u542B\u4E49</th></tr></thead><tbody><tr><td style="text-align:left;"><code>CURRENT_YEAR</code></td><td style="text-align:left;">\u5F53\u524D\u5E74\u4EFD</td></tr><tr><td style="text-align:left;"><code>CURRENT_YEAR_SHORT</code></td><td style="text-align:left;">\u5F53\u524D\u5E74\u4EFD\u7684\u540E\u4E24\u4F4D</td></tr><tr><td style="text-align:left;"><code>CURRENT_MONTH</code></td><td style="text-align:left;">\u683C\u5F0F\u5316\u4E3A\u4E24\u4F4D\u6570\u5B57\u7684\u5F53\u524D\u6708\u4EFD\uFF0C\u5982 <code>02</code></td></tr><tr><td style="text-align:left;"><code>CURRENT_MONTH_NAME</code></td><td style="text-align:left;">\u5F53\u524D\u6708\u4EFD\u7684\u5168\u79F0\uFF0C\u5982 <code>July</code></td></tr><tr><td style="text-align:left;"><code>CURRENT_MONTH_NAME_SHORT</code></td><td style="text-align:left;">\u5F53\u524D\u6708\u4EFD\u7684\u7B80\u79F0\uFF0C\u5982 <code>Jul</code></td></tr><tr><td style="text-align:left;"><code>CURRENT_DATE</code></td><td style="text-align:left;">\u5F53\u5929\u6708\u4EFD\u7B2C\u51E0\u5929</td></tr><tr><td style="text-align:left;"><code>CURRENT_DAY_NAME</code></td><td style="text-align:left;">\u5F53\u5929\u5468\u51E0\uFF0C\u5982 <code>Monday</code></td></tr><tr><td style="text-align:left;"><code>CURRENT_DAY_NAME_SHORT</code></td><td style="text-align:left;">\u5F53\u5929\u5468\u51E0\u7684\u7B80\u79F0\uFF0C\u5982 <code>Mon</code></td></tr><tr><td style="text-align:left;"><code>CURRENT_HOUR</code></td><td style="text-align:left;">\u5F53\u524D\u5C0F\u65F6\uFF08<code>24</code> \u5C0F\u65F6\u5236\uFF09</td></tr><tr><td style="text-align:left;"><code>CURRENT_MINUTE</code></td><td style="text-align:left;">\u5F53\u524D\u5206\u949F</td></tr><tr><td style="text-align:left;"><code>CURRENT_SECOND</code></td><td style="text-align:left;">\u5F53\u524D\u79D2\u6570</td></tr></tbody></table><ol start="4"><li>\u8F6C\u4E49\u5B57\u7B26\uFF0C\u4F5C\u666E\u901A\u5B57\u7B26\u4F7F\u7528\u65F6\uFF0C<code>$</code> , <code>}</code> , <code>&quot;</code> ,<code>\\</code> \u7B49 \u53EF\u4F7F\u7528 <code>\\</code>\uFF08\u53CD\u659C\u6760\uFF09\u8F6C\u4E49\u3002</li></ol><details class="custom-container details"><ul><li>\u6211\u7684\u81EA\u5B9A\u4E49\u4EE3\u7801\u5757</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token comment">// Place your \u5168\u5C40 snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and</span>
    <span class="token comment">// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope</span>
    <span class="token comment">// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is</span>
    <span class="token comment">// used to trigger the snippet and the body will be expanded and inserted. Possible variables are:</span>
    <span class="token comment">// $1, $2 for tab stops, $0 for the final cursor position, and \${1:label}, \${2:another} for placeholders.</span>
    <span class="token comment">// Placeholders with the same ids are connected.</span>
    <span class="token comment">// Example(\u4F8B\u5B50):</span>
    <span class="token comment">//  \u6A21\u677F\u540D\u79F0</span>
    <span class="token comment">// &quot;Print to console&quot;: {</span>
    <span class="token comment">//  \u9700\u751F\u6548\u6587\u4EF6</span>
    <span class="token comment">//  &quot;scope&quot;: &quot;javascript,typescript&quot;,</span>
    <span class="token comment">//  \u89E6\u53D1\u5B57\u7B26</span>
    <span class="token comment">//  &quot;prefix&quot;: &quot;log&quot;,</span>
    <span class="token comment">//  \u4E3B\u4F53\u5185\u5BB9</span>
    <span class="token comment">//  &quot;body&quot;: [</span>
    <span class="token comment">//   &quot;console.log(&#39;$1&#39;);&quot;,</span>
    <span class="token comment">//   &quot;$2&quot;</span>
    <span class="token comment">//  ],</span>
    <span class="token comment">//  \u63CF\u8FF0</span>
    <span class="token comment">//  &quot;description&quot;: &quot;Log output to console&quot;</span>
    <span class="token comment">// }</span>

    <span class="token comment">// \u5168\u5C40\u7528</span>
    <span class="token string-property property">&quot;DOCTYPE&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HTML\u5E38\u7528\u6807\u7B7E\u6A21\u677F&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;!DOCTYPE html&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;html lang=\\&quot;en\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;head&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;meta charset=\\&quot;UTF-8\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;meta name=\\&quot;viewport\\&quot; content=\\&quot;width=device-width, initial-scale=1.0\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;meta http-equiv=\\&quot;X-UA-Compatible\\&quot; content=\\&quot;ie=edge\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;!-- &lt;meta http-equiv=\\&quot;refresh\\&quot; content=\\&quot;5\\&quot;&gt; --&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;title&gt;$1Document&lt;/title&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t&lt;script src=\\&quot;$2../vue.js\\&quot;&gt;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/head&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;body&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;div id=\\&quot;app\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;$3&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;script&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;$4&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/body&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/html&gt;$5&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;console.log \u9009\u4E2D\u9879&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cl&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;console.log\u8F93\u51FA\u63A7\u5236\u53F0&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;console.log($TM_SELECTED_TEXT,\\&quot;$TM_LINE_NUMBER\u884C\\&quot;)&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;console.log \u9009\u4E2D\u9879+\u65F6\u95F4&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cl&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;console.log\u8F93\u51FA\u63A7\u5236\u53F0&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;console.log($TM_SELECTED_TEXT,\\&quot;$TM_LINE_NUMBER\u884C,$CURRENT_HOUR\u70B9$CURRENT_MINUTE:$CURRENT_SECOND\\&quot;)&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;console.log \u526A\u8D34\u677F&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;clc&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;console.log\u8F93\u51FA\u63A7\u5236\u53F0&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;console.log($CLIPBOARD,\\&quot;$TM_LINE_NUMBER\u884C\\&quot;)&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;console.log \u526A\u8D34\u677F+\u65F6\u95F4&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;clc&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;console.log\u8F93\u51FA\u63A7\u5236\u53F0&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;console.log($CLIPBOARD,\\&quot;$TM_LINE_NUMBER\u884C,$CURRENT_HOUR\u70B9$CURRENT_MINUTE:$CURRENT_SECOND\\&quot;)&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;function&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fun&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;function\u6A21\u677F01&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;function \${1:Dosome}() {&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\${2:console.log()}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;\u7BAD\u5934\u51FD\u6570&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;=&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7BAD\u5934\u51FD\u65701&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;($1)=&gt;{&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;$2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;\u7BAD\u5934\u51FD\u65702&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;req=&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7BAD\u5934\u51FD\u65702&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;(req,res $1)=&gt;{&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;$2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;for\u5FAA\u73AF&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;for&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;for\u5FAA\u73AF&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;for (let i = 0; i &lt; \${1:array}.length; i++) {&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;$2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;forin\u5FAA\u73AF&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;forin&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;forin\u5FAA\u73AF&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;for (let key in \${1:obj}) {&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;$2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;forof\u5FAA\u73AF&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;forof&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;forof\u5FAA\u73AF&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;for (let iterator of \${1:arr}) {&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;$2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// vue \u7528</span>
    <span class="token string-property property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;components&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue\u521B\u5EFA\u5B50\u7EC4\u4EF6&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;components: {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\&quot;\${1|parent-component,child-component|}\\&quot;: {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;template: \`&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;div&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;div&gt;&lt;/div&gt;$2&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/div&gt;\`,&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;props: {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\&quot;$4msg\\&quot;: {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;type: \${5|Number,String,[Number String]|}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;}&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;component\u5168\u5C40&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Vcomponent&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue\u521B\u5EFA\u5B50\u7EC4\u4EF6&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;Vue.component(\\&quot;$1component-name\\&quot;, {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;template: \`&lt;div&gt;$2&lt;/div&gt;\`,&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;data() {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;return {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;$3&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;},&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot; methods: {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;$4&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;},&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;props: {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;$5&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;},&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;components: {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\&quot;$6component-name-two\\&quot;: {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;template: \`&lt;div&gt;$7&lt;/div&gt;\`,&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;data() {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;return {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;$8&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;},&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;props: {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;$9&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;},&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;methods: {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;$10&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;},&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;})&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;Vue\u5B9E\u4F8B\u6A21\u677F&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vm&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Vue\u5B9E\u4F8B\u6A21\u677F&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;var vm = new Vue({&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;el: \\&quot;#$1app\\&quot;,&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;data: {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;$2&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;},&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;props: {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;$3&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;},&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot; methods: {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;$4&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;},&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;computed: {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;$5&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;},&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;watch: {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;$6&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;},&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;components: {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;$7&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;})&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;Vue template\u6846\u67B6&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;temp&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;template\u6846\u67B6 VUE\u7EC4\u4EF6&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;div class=\\&quot;$TM_FILENAME_BASE\\&quot;&gt;$1&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/template&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;script&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;// import {} from &#39;/&#39;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;export default {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot; name: \\&quot;$TM_FILENAME_BASE\\&quot;,&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;data() {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;return {$2};&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;},&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;components: {},&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;watch: {},&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;mounted() {},&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;methods: {},&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;style scoped&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;$3&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/style&gt;&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;props&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;props&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;props VUE\u7EC4\u4EF6&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;props: {&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;$1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;},&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;jquery&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$(&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;props VUE\u7EC4\u4EF6&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;$(function () {&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;$1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;irr&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;irr&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;React\u7247\u6BB5&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;import React from &#39;react&#39;&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;ird&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ird&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;React\u7247\u6BB5&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;import ReactDOM from &#39;react-dom&#39;&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><a href="https://code.visualstudio.com/docs/editor/userdefinedsnippets" target="_blank" rel="noopener noreferrer">\u53C2\u8003</a></p><h2 id="vscode-\u8BBE\u7F6E-settings-json-\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#vscode-\u8BBE\u7F6E-settings-json-\u6587\u6863" aria-hidden="true">#</a> VScode \u8BBE\u7F6E settings.json \u6587\u6863</h2><ul><li>\u6211\u7684\u8BBE\u7F6E\u6587\u4EF6\uFF082022-5-20 update\uFF09</li></ul><details class="custom-container details"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;editor.suggest.showStatusBar&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.suggest.insertMode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;replace&quot;</span><span class="token punctuation">,</span> <span class="token comment">// insert \u63D2\u5165 replace \u66FF\u6362</span>
  <span class="token string-property property">&quot;editor.formatOnPaste&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//\u81EA\u52A8\u683C\u5F0F\u5316</span>
  <span class="token comment">// &quot;editor.minimap.showSlider&quot;: &quot;always&quot;, // \u4E00\u76F4\u663E\u793A\u6EDA\u52A8\u6761</span>
  <span class="token string-property property">&quot;editor.renderLineHighlight&quot;</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5F53\u524D\u884C\u5BF9\u5E94\u7684\u884C\u53F7\u680F\u4E5F\u9AD8\u4EAE\u663E\u793A</span>
  <span class="token string-property property">&quot;editor.cursorWidth&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// \u5149\u6807\u5BBD</span>
  <span class="token string-property property">&quot;editor.wordWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6298\u884C\u65B9\u5F0F on \u6298\u884C off \u4E0D\u6298\u884C</span>
  <span class="token string-property property">&quot;editor.fontWeight&quot;</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53\u5BBD\u5EA6\u4ECE1\u52301000\u7684\u503C\uFF0C\u4EE5\u53CA\u5B57\u7B26\u4E32\u503C\u201C normal\u201D\u548C\u201C bold\u201D</span>
  <span class="token comment">// \u5DF2\u5B89\u88C5\u5B57\u4F53 Source Code Pro \\ DejaVu Sans Code \\Sarasa Term SC \\JetBrains Mono \\ Fira Code \\ Victor Mono \\  Cascadia Code \\ Iosevka</span>
  <span class="token comment">// &quot;editor.fontFamily&quot;: &quot;Consolas,&#39;Source Code Pro&#39;, monospace,&#39;\u66F4\u7EB1\u9ED1\u4F53 Mono SC Nerd&#39;&quot;, // \u539F\u5B57\u4F53</span>
  <span class="token string-property property">&quot;editor.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Fira Code&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8FDE\u5B57\u4F53  Fira Code \u3001JetBrains Mono \u3001DejaVu Sans Code</span>
  <span class="token string-property property">&quot;editor.fontLigatures&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u7528\u8FDE\u4F53\u5B57</span>
  <span class="token string-property property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53\u5927\u5C0F</span>
  <span class="token string-property property">&quot;editor.detectIndentation&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// vscode\u9ED8\u8BA4\u542F\u7528\u4E86\u6839\u636E\u6587\u4EF6\u7C7B\u578B\u81EA\u52A8\u8BBE\u7F6Etabsize\u7684\u9009\u9879</span>
  <span class="token string-property property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.smoothScrolling&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5E73\u6ED1\u6EDA\u52A8</span>
  <span class="token string-property property">&quot;editor.scrollBeyondLastLine&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u7981\u6B62\u6EDA\u52A8\u5230\u6587\u4EF6\u6700\u540E\u4E00\u884C\u540E\u8FD8\u80FD\u7EE7\u7EED\u6EDA\u52A8</span>
  <span class="token comment">// \u7981\u6B62\u8FDE\u63A5\u6587\u5B57\u53EF\u70B9\u51FB\uFF0C\u53D6\u6D88\u4E0B\u5212\u7EBF</span>
  <span class="token comment">// &quot;editor.links&quot;: false,</span>
  <span class="token comment">// &quot;editor.renderWhitespace&quot;: &quot;trailing&quot;,//??</span>
  <span class="token comment">// \u7F16\u8F91\u5668\u4FDD\u5B58\u65F6\u8981\u6267\u884C\u7684\u52A8\u4F5C</span>
  <span class="token comment">// \u6307\u5B9A\u67D0\u7C7B\u6587\u6863\u4FDD\u5B58\u683C\u5F0F\u5316 formatOnSave \u662F\u5168\u90E8\u6587\u6863\u90FD\u683C\u5F0F\u5316</span>
  <span class="token string-property property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;source.organizeImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// &quot;source.fixAll&quot;: true, // \u6253\u5F00ESLint\u7684\u6240\u6709\u652F\u6301\u7684\u81EA\u52A8\u4FEE\u590D</span>
    <span class="token string-property property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u4FDD\u5B58\u81EA\u52A8\u4FEE\u590D eslint \u683C\u5F0F\u9519\u8BEF(\u4F1A\u6839\u636E\u9879\u76EE\u76EE\u5F55\u4E2D\u7684 eslintrc.js \u6587\u4EF6\u7684\u914D\u7F6E\u4FEE\u6539\u9519\u8BEF)</span>
    <span class="token string-property property">&quot;source.fixAll.markdownlint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u{1F53A} \u4FDD\u5B58\u81EA\u52A8\u4FEE\u590D markdownlint \u683C\u5F0F\u9519\u8BEF</span>
    <span class="token comment">// &quot;source.fixAll.stylelint&quot;: true, //\u4FDD\u5B58\u81EA\u52A8\u4FEE\u590D stylelint \u683C\u5F0F\u9519\u8BEF</span>
    <span class="token comment">// &quot;source.fixAll.prettier&quot;: true //\u4FDD\u5B58\u81EA\u52A8\u4FEE\u590D prettier \u683C\u5F0F\u9519\u8BEF</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5168\u5C40\u4FDD\u5B58\u683C\u5F0F\u5316</span>
  <span class="token comment">// &quot;editor.formatOnSave&quot;: true, // \u4F1A\u548C codeActionsOnSave \u51B2\u7A81</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u6839\u636E\u989C\u8272\u4E3B\u9898\u7684\u53EF\u81EA\u5B9A\u4E49\u914D\u7F6E\u5F00\u59CB\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token comment">// \u5F53\u524D\u4E3B\u9898</span>
  <span class="token string-property property">&quot;workbench.colorTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;One Dark Pro Darker&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u81EA\u5B9A\u4E49\u672C\u4E3B\u9898\u989C\u8272</span>
  <span class="token string-property property">&quot;workbench.editor.enablePreviewFromQuickOpen&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u989C\u8272\u4E3B\u9898</span>
  <span class="token comment">// &quot;workbench.iconTheme&quot;: &quot;material-icon-theme&quot;, // VSCode\u56FE\u6807\u4E3B\u9898 | One Monokai</span>
  <span class="token string-property property">&quot;workbench.colorCustomizations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u989C\u8272\u4E3B\u9898One Dark Pro\u8BBE\u7F6E(\u6587\u4EF6\u5916)</span>
    <span class="token string-property property">&quot;[One Dark Pro Darker]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u25BC\u25BC\u25BC \u7F16\u8F91\u533A\u57DF\u80CC\u666F\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B</span>
      <span class="token string-property property">&quot;editor.background&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#2E2E2E&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u25BC\u25BC\u25BC \u4FA7\u8FB9\u680F\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B</span>
      <span class="token string-property property">&quot;sideBar.background&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#272a2f&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;sideBar.foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#bec0c2&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;sideBar.border&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#212F3C&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u25BC\u25BC\u25BC \u4FA7\u8FB9\u680F\u5217\u8868\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B</span>
      <span class="token comment">// \u76EE\u5F55\u4E2D\u88AB\u9009\u4E2D\u9879\u7684\u80CC\u666F\u8272</span>
      <span class="token string-property property">&quot;list.inactiveSelectionBackground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#4a4f59&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u76EE\u5F55\u4E2D\u88AB\u9009\u4E2D\u9879\u7684\u5B57\u4F53\u8272</span>
      <span class="token string-property property">&quot;list.inactiveSelectionForeground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#03A9F4&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u76EE\u5F55\u6BCF\u9879\u9F20\u6807\u79FB\u5165\u7684\u80CC\u666F\u8272</span>
      <span class="token string-property property">&quot;list.hoverBackground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#616161&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u76EE\u5F55\u6BCF\u9879\u9F20\u6807\u79FB\u5165\u7684\u5B57\u4F53\u8272</span>
      <span class="token string-property property">&quot;list.hoverForeground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#EEEEEE&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// peek \u7A97\u53E3</span>
      <span class="token comment">// &quot;peekView.border&quot;: &quot;#5b99fc9c&quot;,</span>
      <span class="token comment">// \u25BC\u25BC\u25BC \u9876\u90E8 \u6807\u7B7Etab \u680F\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B</span>
      <span class="token comment">// \u6807\u7B7Etab \u9009\u4E2D\u65F6\u7684\u680F\u8FB9\u6846\u80CC\u666F\u8272</span>
      <span class="token string-property property">&quot;tab.activeBackground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#FDFEFE&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6807\u7B7Etab \u9009\u4E2D\u65F6\u7684\u680F\u8FB9\u6846\u5B57\u4F53\u8272</span>
      <span class="token string-property property">&quot;tab.activeForeground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#000000&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6807\u7B7Etab \u9009\u4E2D\u65F6\u7684\u680F\u5206\u754C\u7EBF\u4E24\u4FA7</span>
      <span class="token string-property property">&quot;tab.border&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#37474F&quot;</span><span class="token punctuation">,</span> <span class="token comment">//2e2e2e</span>
      <span class="token comment">// \u6807\u7B7Etab \u9009\u4E2D\u65F6\u7684\u680F\u5206\u754C\u7EBF--\u5E95</span>
      <span class="token string-property property">&quot;tab.activeBorder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#37474F&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// Tab\u6807\u7B7E\u9F20\u6807\u79FB\u5165\u7684\u80CC\u666F\u8272</span>
      <span class="token string-property property">&quot;tab.hoverBackground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#B3B6B7&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// Tab\u6807\u7B7E\u9F20\u6807\u79FB\u5165\u7684 \u680F\u5206\u754C\u7EBF--\u5E95</span>
      <span class="token string-property property">&quot;tab.hoverBorder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#8e8e8e&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6807\u7B7Etab \u672A\u9009\u4E2D\u65F6\u7684\u5B57\u4F53\u989C\u8272</span>
      <span class="token string-property property">&quot;tab.inactiveForeground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#dddfe6&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u25BC\u25BC\u25BC \u5176\u4ED6\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B</span>
      <span class="token comment">// \u6700\u5DE6\u4FA7\u5DE5\u5177\u680F</span>
      <span class="token string-property property">&quot;activityBar.background&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#2e2e2e&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u72B6\u6001\u680F</span>
      <span class="token string-property property">&quot;statusBar.background&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#2a2a2a&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u5149\u6807\u989C\u8272</span>
      <span class="token string-property property">&quot;editorCursor.foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#CCFF00&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u5F53\u524D\u7F16\u8F91\u884C</span>
      <span class="token string-property property">&quot;editor.lineHighlightBackground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#32363d&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u884C\u53F7\u680F\u7684\u5F53\u524D\u884C\u9AD8\u4EAE</span>
      <span class="token string-property property">&quot;editorLineNumber.activeForeground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ffec3e&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u884C\u53F7</span>
      <span class="token comment">// &quot;editorLineNumber.foreground&quot;: &quot;#274c5e&quot;,</span>
      <span class="token comment">// \u5355\u51FB\u4E00\u4E2A\u8BCD\u65F6\uFF0C\u5176\u5B83\u76F8\u540C\u5355\u8BCD</span>
      <span class="token string-property property">&quot;editor.selectionHighlightBackground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#999999&quot;</span><span class="token punctuation">,</span> <span class="token comment">//#e3dede</span>
      <span class="token comment">// \u9009\u4E2D\u9AD8\u4EAE\u7684\u989C\u8272</span>
      <span class="token string-property property">&quot;editor.selectionBackground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#004e66&quot;</span><span class="token punctuation">,</span> <span class="token comment">//&quot;#434e61c9&quot;,</span>
      <span class="token comment">// //\u4FA7\u8FB9\u680F\u8D44\u6E90\u7BA1\u7406\u5668\u533A\u57DF\u7684\u6807\u9898\u680F\u989C\u8272</span>
      <span class="token string-property property">&quot;sideBarSectionHeader.background&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#32363d&quot;</span>
      <span class="token comment">// // \u533A\u57DF\u83B7\u53D6\u7126\u70B9\u65F6</span>
      <span class="token comment">// &quot;focusBorder&quot;: &quot;#5b99fc36&quot;</span>
      <span class="token comment">// &quot;editor.selectionHighlightBorder&quot;: &quot;#90e97259&quot;,</span>
      <span class="token comment">// // \u5FEB\u6377\u63D0\u793A\u7A97\u53E3</span>
      <span class="token comment">// &quot;editorSuggestWidget.highlightForeground&quot;: &quot;#7bfc5ba2&quot;,</span>
      <span class="token comment">// &quot;editorSuggestWidget.selectedBackground&quot;: &quot;#333f5c&quot;,</span>
      <span class="token comment">// // panel \u7A97\u53E3</span>
      <span class="token comment">// &quot;panelTitle.activeBorder&quot;: &quot;#5b99fc5b&quot;,</span>
      <span class="token comment">// &quot;panelTitle.activeForeground&quot;: &quot;#cfcfcf&quot;,</span>
      <span class="token comment">// // \u6807\u5C3A</span>
      <span class="token comment">// &quot;editorRuler.foreground&quot;: &quot;#d44949&quot;,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B \u5DE5\u4F5C\u533Aworkbench\u8BBE\u7F6E\u7ED3\u675F \uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B</span>
  <span class="token string-property property">&quot;editor.tokenColorCustomizations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u989C\u8272\u4E3B\u9898One Dark Pro\u8BBE\u7F6E(\u4EE3\u7801\u4E2D)</span>
    <span class="token string-property property">&quot;[One Dark Pro Darker]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u8BBE\u7F6E\u6CE8\u91CA</span>
        <span class="token string-property property">&quot;fontStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53\u6837\u5F0F  bold\u52A0\u7C97  italic\u659C\u4F53 underline\u4E0B\u5212\u7EBF</span>
        <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#467888&quot;</span> <span class="token comment">// \u5B57\u4F53\u989C\u8272</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#FFEB3B&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5173\u952E\u5B57 26A69A  FFCA28</span>
      <span class="token string-property property">&quot;variables&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#FF6F00&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u53D8\u91CF\u540D 00aeff ff0055</span>
      <span class="token string-property property">&quot;strings&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#00b890&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u7B26\u4E32 2874A6  03A9F4  03A9F4</span>
      <span class="token string-property property">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#14db02&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u51FD\u6570\u540D</span>
      <span class="token string-property property">&quot;numbers&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ff01ea&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6570\u5B57 ff01ea</span>
      <span class="token string-property property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ff5245&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6570\u636E\u7C7B\u578B\\vue\u7EC4\u4EF6\u540D FF0000 c8ff00 ff2600</span>
      <span class="token comment">// &quot;storage&quot;: &quot;#FF0000&quot;,</span>
      <span class="token string-property property">&quot;textMateRules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// \u5B57\u7B26\u4E32 \u53CC\u5F15\u53F7</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string.quoted.double.js&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// &quot;fontStyle&quot;: &quot;bold&quot;, // \u5B57\u4F53\u6837\u5F0F </span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#03f08dd7&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5B57\u7B26\u4E32 \u5355\u5F15\u53F7</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string.quoted.single.js&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// &quot;fontStyle&quot;: &quot;bold&quot;, // \u5B57\u4F53\u6837\u5F0F </span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#03e434&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// ;</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;meta.function.method.js&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// &quot;fontStyle&quot;: &quot;bold&quot;, // \u5B57\u4F53\u6837\u5F0F </span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ffc400&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// .</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword.operator.accessor.js&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// &quot;fontStyle&quot;: &quot;bold&quot;, // \u5B57\u4F53\u6837\u5F0F </span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#00a2ff&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u53D8\u91CF\u7684\u503C false</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;constant.language.boolean.false.js&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;fontStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53\u6837\u5F0F</span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#d6d4d4a4&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u53D8\u91CF\u7684\u503C true</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;constant.language.boolean.true.js&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;fontStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53\u6837\u5F0F</span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#03b10cec&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u6CE8\u91CA</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;comment.block.html&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;fontStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53\u6837\u5F0F</span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#028697&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \uFF1A</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;punctuation.separator.key-value.js&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// &quot;fontStyle&quot;: &quot;bold&quot;, // \u5B57\u4F53\u6837\u5F0F</span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#c6f009&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u6839\u636E\u989C\u8272\u4E3B\u9898\u7684\u53EF\u81EA\u5B9A\u4E49\u914D\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5168\u5C40\u7F16\u8F91\u5668editor\u8BBE\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5173\u4E8Ewindow\u63D2\u4EF6\u914D\u7F6E\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token comment">// \u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846\u6837\u5F0F  button.secondaryBackground</span>
  <span class="token string-property property">&quot;window.dialogStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;custom&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5168\u5C40\u7F16\u8F91\u5668window\u8BBE\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5173\u4E8Eeslint\u63D2\u4EF6\u914D\u7F6E\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token comment">//\u4FDD\u5B58\u65F6eslint\u81EA\u52A8\u4FEE\u590D\u9519\u8BEF/\u662F\u5426\u6839\u636Eeslint\u8FDB\u884C\u683C\u5F0F\u5316</span>
  <span class="token comment">// &quot;eslint.codeActionsOnSave.mode&quot;: &quot;problems&quot;, // all | problems</span>
  <span class="token comment">// eslint\u914D\u7F6E\u6587\u4EF6</span>
  <span class="token string-property property">&quot;eslint.options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;extensions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;.vue&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;.ts&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;.html&quot;</span> <span class="token comment">//??? \u672A\u9A8C\u8BC1</span>
    <span class="token punctuation">]</span>
    <span class="token comment">// &quot;configFile&quot;: &quot;C:/.eslintrc.json&quot;, // \u5916\u90E8\u7684 eslint \u914D\u7F6E\u6587\u4EF6\u4F4D\u7F6E \uFF08\u672A\u542F\u7528\uFF09</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//\u914D\u7F6E ESLint \u68C0\u67E5\u7684\u6587\u4EF6\u7C7B\u578B </span>
  <span class="token string-property property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;html5&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;css3&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vue-html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;jsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;json&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// &quot;eslint.enable&quot;: false, // \u662F\u5426\u5F00\u542Feslint\u68C0\u6D4B</span>
  <span class="token comment">//  &quot;eslint.run&quot;: &quot;onSave&quot;,  // exlint \u8FD0\u884C\u7684\u65F6\u5019\uFF1A \u4FDD\u5B58\u65F6</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5168\u5C40\u7F16\u8F91\u5668eslint\u8BBE\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token string-property property">&quot;prettier.jsxSingleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5728JSX\u4E2D\u4F7F\u7528\u5355\u5F15\u53F7\u800C\u4E0D\u662F\u53CC\u5F15\u53F7</span>
  <span class="token string-property property">&quot;prettier.semi&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u662F\u5426\u5728\u6BCF\u884C\u672B\u5C3E\u6DFB\u52A0\u5206\u53F7</span>
  <span class="token string-property property">&quot;prettier.tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token comment">// \u7F29\u8FDB\u5B57\u8282\u6570</span>
  <span class="token comment">// &quot;prettier.bracketSpacing&quot;: true, // \u5728\u5BF9\u8C61\uFF0C\u6570\u7EC4\u62EC\u53F7\u4E0E\u6587\u5B57\u4E4B\u95F4\u52A0\u7A7A\u683C &quot;{ foo: bar }&quot;</span>
  <span class="token comment">// \u8BA9prettier\u4F7F\u7528eslint\u7684\u4EE3\u7801\u683C\u5F0F\u8FDB\u884C\u6821\u9A8C</span>
  <span class="token comment">// &quot;prettier.eslintIntegration&quot;: true,</span>
  <span class="token comment">// js\u4F7F\u7528\u5355\u5F15\u53F7(\u6682\u65F6\u7981\u7528\u4E86)</span>
  <span class="token comment">// &quot;prettier.singleQuote&quot;: true,</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}stylelint\u548Cprettier\u8BBE\u7F6E\u5F00\u59CB\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token string-property property">&quot;css.validate&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;less.validate&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scss.validate&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[scss]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}stylelint\u548Cprettier\u8BBE\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token string-property property">&quot;liveSassCompile.settings.formats&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;compressed&quot;</span><span class="token punctuation">,</span> <span class="token comment">//expanded</span>
      <span class="token string-property property">&quot;extensionName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.min.css&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;savePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/dist/css&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4E0D\u8F93\u51FA\u5730\u56FE\u6587\u4EF6</span>
  <span class="token string-property property">&quot;liveSassCompile.settings.generateMap&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}Markdownlint\u8BBE\u7F6E\u5F00\u59CB\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token string-property property">&quot;markdownlint.config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;MD003&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;MD004&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// &quot;MD013&quot;: false,</span>
    <span class="token string-property property">&quot;MD011&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// md\u6587\u4EF6\u4E2D\u4F7F\u7528\u7C7B\u9009\u62E9\u5668</span>
    <span class="token string-property property">&quot;MD024&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;MD025&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;MD029&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;MD033&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;MD035&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;MD036&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;MD046&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u9690\u85CF\u6700\u5DE6\u4FA7\u7684\u6D3B\u52A8\u680F true\u663E\u793A | false\u9690\u85CF</span>
  <span class="token comment">// \u6253\u5F00\u6587\u4EF6\u65F6\uFF0C\u5173\u95ED\u9884\u89C8\u6A21\u5F0F\uFF0C\u76F4\u63A5\u6253\u5F00\u6587\u4EF6</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}Markdownlint\u8BBE\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}code-runner\u63D2\u4EF6\u914D\u7F6E\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token comment">// \u9ED8\u8BA4\u8FD0\u884C\u7684\u8BED\u8A00</span>
  <span class="token string-property property">&quot;code-runner.defaultLanguage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8F93\u51FA\u7684\u5185\u5BB9</span>
  <span class="token string-property property">&quot;code-runner.customCommand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo Hello&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u662F\u5426\u6E05\u9664\u4E0A\u6B21\u7684\u8F93\u51FA\u8BB0\u5F55</span>
  <span class="token string-property property">&quot;code-runner.clearPreviousOutput&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8FD0\u884C\u65F6\u662F\u5426\u663E\u793A [Running] &amp; [Done]</span>
  <span class="token string-property property">&quot;code-runner.showExecutionMessage&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8FD0\u884C\u8BED\u8A00\u7684\u8DEF\u5F84\u6216\u73AF\u5883\u53D8\u91CF</span>
  <span class="token string-property property">&quot;code-runner.executorMap&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;javascript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}code-runner\u8BBE\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5173\u4E8Efiles\u914D\u7F6E\u5F00\u59CB\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token comment">// \u4FDD\u5B58\u6587\u4EF6\u65F6\uFF0C\u53BB\u9664\u884C\u5C3E\u7A7A\u683C</span>
  <span class="token string-property property">&quot;files.trimTrailingWhitespace&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">//\u6839\u636E\u6587\u4EF6\u540E\u7F00\u540D\u5B9A\u4E49vue\u6587\u4EF6\u7C7B\u578B /\u6839\u636E\u6587\u4EF6\u540E\u7F00\u540D\u5B9A\u4E49vue\u7B49\u6587\u4EF6\u7C7B\u578B</span>
  <span class="token string-property property">&quot;files.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;*.vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;*.cjson&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsonc&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;*.wxss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;*.wxs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;*.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;*.jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5728 vscode \u8D44\u6E90\u7BA1\u7406\u5668\u663E\u793A\u4E2D\u6392\u9664 node_modules \u7B49\u6587\u4EF6\u5939</span>
  <span class="token string-property property">&quot;files.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;**/node_modules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//     &quot;**/.git&quot;: true,</span>
    <span class="token comment">//     &quot;**/.svn&quot;: true,</span>
    <span class="token comment">//     &quot;**/.hg&quot;: true,</span>
    <span class="token comment">//     &quot;**/CVS&quot;: true,</span>
    <span class="token comment">//     &quot;**/.DS_Store&quot;: true,</span>
    <span class="token comment">//     //&quot;**/package-lock.json&quot;: true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// &quot;search.exclude&quot;: {</span>
  <span class="token comment">//     &quot;**/node_modules&quot;: true,</span>
  <span class="token comment">//     &quot;**/bower_components&quot;: true,</span>
  <span class="token comment">//     &quot;**/dist&quot;: true</span>
  <span class="token comment">// },</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5173\u4E8Efiles\u914D\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5173\u4E8Eterminal\u914D\u7F6E\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token comment">//\u5728\u91CD\u65B0\u52A0\u8F7D\u7A97\u53E3\u65F6\u4FDD\u7559\u7EC8\u7AEF\u8FDB\u7A0B</span>
  <span class="token string-property property">&quot;terminal.integrated.enablePersistentSessions&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// terminal \u7EC8\u7AEF\u4E2D\u7684\u5149\u6807</span>
  <span class="token string-property property">&quot;terminal.Cursor.foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#CCFF00&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// terminal \u5149\u6807\u6837\u5F0F</span>
  <span class="token string-property property">&quot;terminal.integrated.cursorBlinking&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// &quot;terminal.integrated.cursorStyle&quot;: &quot;line&quot;,</span>
  <span class="token comment">// VSCode \u4E2D\u7684\u7EC8\u7AEF\u4F7F\u7528\u4EC0\u4E48shell</span>
  <span class="token comment">// &quot;terminal.integrated.automationShell.windows&quot;: &quot;C:\\\\Program Files\\\\PowerShell\\\\7\\\\pwsh.exe&quot;,</span>
  <span class="token comment">//  &quot;C:\\\\WINDOWS\\\\System32\\\\cmd.exe&quot;, //cmd</span>
  <span class="token comment">//  &quot;C:\\\\WINDOWS\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\powershell.exe&quot;, //powershell 5.x</span>
  <span class="token string-property property">&quot;terminal.integrated.profiles.windows&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;PowerShell&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PowerShell&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;overrideName&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token comment">// &quot;icon&quot;: &quot;terminal-powershell&quot;,</span>
      <span class="token comment">// &quot;env&quot;: {</span>
      <span class="token comment">//     &quot;TEST_VAR&quot;: &quot;value&quot;</span>
      <span class="token comment">// }</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// &quot;terminal.integrated.defaultProfile.windows&quot;: &quot;PowerShell&quot;,</span>
  <span class="token comment">//\u7EC8\u7AEF\u9009\u9879\u5361\u53EF\u4EE5\u4F5C\u4E3A\u9884\u89C8\u529F\u80FD</span>
  <span class="token string-property property">&quot;terminal.integrated.tabs.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5173\u4E8Eterminal\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5173\u4E8Eemmet\u914D\u7F6E\u5F00\u59CB\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token string-property property">&quot;emmet.includeLanguages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;javascript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;wxml&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// (\u672A\u542F\u7528)</span>
  <span class="token comment">// // \u914D\u7F6Eemmet\u662F\u5426\u542F\u7528tab\u5C55\u5F00\u7F29\u5199</span>
  <span class="token string-property property">&quot;emmet.triggerExpansionOnTab&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5728vue\u6587\u4EF6\u91CC\u8BBE\u7F6Ehtml\u5173\u8054\u914D\u7F6E -- emmet\u5BF9\u6587\u4EF6\u7C7B\u578B\u7684\u652F\u6301</span>
  <span class="token string-property property">&quot;emmet.syntaxProfiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;javascript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vue-html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// &quot;emmet.includeLanguages&quot;: {</span>
  <span class="token comment">//     &quot;wxml&quot;: &quot;html&quot;</span>
  <span class="token comment">// },</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5173\u4E8Eemmet\u63D2\u4EF6\u914D\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5173\u4E8Evetur\u63D2\u4EF6\u5F00\u59CB\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token comment">// (vue\u5DE5\u4F5C\u533A\u7528)</span>
  <span class="token comment">//****vue\u6587\u4EF6template\u683C\u5F0F\u5316\u652F\u6301\uFF0C\u5E76\u4F7F\u7528js-beautify-html\u63D2\u4EF6******</span>
  <span class="token comment">//\u8BA9vue\u4E2D\u7684js\u6309\u7F16\u8F91\u5668\u81EA\u5E26\u7684ts\u683C\u5F0F\u8FDB\u884C\u683C\u5F0F\u5316</span>
  <span class="token comment">// &quot;vetur.format.defaultFormatter.js&quot;: &quot;prettier&quot;, //prettier  \\  vscode-typescript</span>
  <span class="token comment">//\u8BA9vue\u4E2D\u7684html\u6309prettier\u683C\u5F0F\u8FDB\u884C\u683C\u5F0F\u5316 ??</span>
  <span class="token comment">// &quot;vetur.format.defaultFormatter.html&quot;: &quot;prettier&quot;,</span>
  <span class="token comment">//js-beautify-html\u683C\u5F0F\u5316\u914D\u7F6E\uFF0C\u5C5E\u6027\u5F3A\u5236\u6362\u884C</span>
  <span class="token string-property property">&quot;vetur.format.defaultFormatterOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;js-beautify-html&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// vue\u7EC4\u4EF6\u4E2Dhtml\u4EE3\u7801\u683C\u5F0F\u5316\u6837\u5F0F</span>
      <span class="token string-property property">&quot;wrap_attributes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;force-aligned&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//\u6CE8\uFF1AVetur\u81EA\u5E26\u4E86\u683C\u5F0F\u5316\uFF0C\u89C4\u8303\u5C31\u662F\u4F7F\u7528prettier\u5982\u679C\u4F60\u6709\u88C5prettier\u63D2\u4EF6\uFF0C\u5E76\u4E14\u5728\u8BBE\u7F6E\u6216setting.json\u91CC\u914D\u7F6E\u4E86prettier\u7684\u8BDD\u662F\u65E0\u6548\u7684</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5173\u4E8Evetur\u63D2\u4EF6\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5173\u4E8EEasy Sass\u63D2\u4EF6\u5F00\u59CB\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5173\u4E8E TODO \u63D2\u4EF6\u5F00\u59CB\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token string-property property">&quot;todohighlight.isEnable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;todohighlight.isCaseSensitive&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;todohighlight.keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;DEBUG:&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;REVIEW:&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NOTE:&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;overviewRulerColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;grey&quot;</span>
      <span class="token comment">//FIXME:</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HACK:&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#000&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;isWholeLine&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TODO:&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;border&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2px solid red&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;borderRadius&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2px&quot;</span><span class="token punctuation">,</span> <span class="token comment">//NOTE: using borderRadius along with \`border\` or you will see nothing change</span>
      <span class="token string-property property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0,0,0,.2)&quot;</span>
      <span class="token comment">//other styling properties goes here ...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u81EA\u5B9A\u4E49</span>
  <span class="token string-property property">&quot;todohighlight.keywordsPattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TODO:|FIXME:|NOTE:&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u539F\u7248\u8BBE\u7F6E</span>
  <span class="token comment">//  &quot;todohighlight.keywordsPattern&quot;: &quot;TODO:|FIXME:|\\\\(([^)]+)\\\\)&quot;, //highlight \`TODO:\`,\`FIXME:\` or content between parentheses</span>
  <span class="token string-property property">&quot;todohighlight.defaultStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ffab00&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;overviewRulerColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#42A5F5&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// &quot;cursor&quot;: &quot;pointer&quot;,</span>
    <span class="token string-property property">&quot;border&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1px solid #eee&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;borderRadius&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8px&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;isWholeLine&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token comment">//other styling properties goes here ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;todohighlight.include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;**/*.vue&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.js&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.jsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.tsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.php&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.css&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.scss&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;todohighlight.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;**/node_modules/**&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/bower_components/**&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/dist/**&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/build/**&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/.vscode/**&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/.github/**&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/_output/**&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.min.*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.map&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.json&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/.next/**&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;todohighlight.maxFilesForSearch&quot;</span><span class="token operator">:</span> <span class="token number">5120</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;todohighlight.toggleURI&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5173\u4E8E TODO \u63D2\u4EF6\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// (\u672A\u542F\u7528)</span>
  <span class="token comment">// &quot;easysass.formats&quot;: [</span>
  <span class="token comment">//     {</span>
  <span class="token comment">//         &quot;format&quot;: &quot;compressed&quot;, // \u538B\u7F29</span>
  <span class="token comment">//         &quot;extension&quot;: &quot;.css&quot;</span>
  <span class="token comment">//     }</span>
  <span class="token comment">// ],</span>
  <span class="token comment">// &quot;easysass.targetDir&quot;: &quot;./&quot;, // \u81EA\u5B9A\u4E49css\u8F93\u51FA\u6587\u4EF6\u8DEF\u5F84</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5173\u4E8EEasy Sass\u63D2\u4EF6\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5173\u4E8Efile-size\u63D2\u4EF6\u5F00\u59CB\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token string-property property">&quot;file-size.position&quot;</span><span class="token operator">:</span> <span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span> <span class="token comment">//right/left \u4F4D\u7F6E</span>
  <span class="token string-property property">&quot;file-size.priority&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5173\u4E8Efile-size\u63D2\u4EF6\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5BF9\u5404\u7C7B\u578B\u6587\u6863\u7684\u914D\u7F6E\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token comment">// \u5173\u4E8Ereact\u7684prettier\u6821\u9A8C \uFF1F\uFF1F</span>
  <span class="token string-property property">&quot;[javascriptreact]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B57\u4F53\u8FDE\u5B57\u8BBE\u7F6E</span>
    <span class="token string-property property">&quot;editor.fontLigatures&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;ss02&#39;, &#39;ss19&#39;&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u81EA\u52A8\u4FDD\u5B58</span>
    <span class="token comment">// &quot;editor.formatOnSave&quot;: true,</span>
    <span class="token comment">// \u5982\u679C\u62A5\u9519\uFF0C\u7528\u7B2C\u4E8C\u4E2A</span>
    <span class="token string-property property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.typescript-language-features&quot;</span>
    <span class="token comment">// &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[jsonc]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span>
    <span class="token comment">//\u9700\u8981HookyQR.beautify\u63D2\u4EF6</span>
    <span class="token comment">// &quot;editor.defaultFormatter&quot;: &quot;HookyQR.beautify&quot;,</span>
    <span class="token comment">// &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[html]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.html-language-features&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[css]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u81EA\u52A8\u4FDD\u5B58</span>
    <span class="token comment">// &quot;editor.formatOnSave&quot;: true,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5173\u4E8Emarkdown\u7684 prettier\u6821\u9A8C</span>
  <span class="token comment">// &quot;[markdown]&quot;: {</span>
  <span class="token comment">// &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;,</span>
  <span class="token comment">// },</span>
  <span class="token comment">// \u914D\u7F6E\u9009\u9879\u63A7\u5236\u7A7A\u683C\u662F\u5426\u63D2\u5165\u7A7A\u62EC\u53F7 \u9ED8\u8BA4\u503C\u4E3A true</span>
  <span class="token comment">// &quot;javascript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces&quot;: false,</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5BF9\u5404\u7C7B\u578B\u6587\u6863\u7684\u914D\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}background\u80CC\u666F\u56FE\u7247\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token string-property property">&quot;background.useDefault&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u4F7F\u7528\u9ED8\u8BA4\u56FE\u7247</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}background\u80CC\u666F\u56FE\u7247\u914D\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5176\u4ED6\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token string-property property">&quot;cssrem.rootFontSize&quot;</span><span class="token operator">:</span> <span class="token number">75</span><span class="token punctuation">,</span>
  <span class="token comment">//\u8BA9\u51FD\u6570\u540D\u548C\u540E\u9762\u7684\u62EC\u53F7\u4E4B\u95F4\u52A0\u4E2A\u7A7A\u683C \uFF08\u65E0\u6548\u6216\u51B2\u7A81\uFF09</span>
  <span class="token comment">// &quot;javascript.format.insertSpaceBeforeFunctionParenthesis&quot;: true,</span>
  <span class="token comment">// &quot;minapp-vscode.disableAutoConfig&quot;: true, //?</span>
  <span class="token comment">// \u9690\u85CF\u5DE6\u4FA7\u8FB9\u680F\u4E0A\u7684 OpenEditors \u6253\u5F00\u7684\u7F16\u8F91\u5668</span>
  <span class="token string-property property">&quot;explorer.openEditors.visible&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;explorer.confirmDelete&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;explorer.confirmDragAndDrop&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;git.autofetch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;tabnine.experimentalAutoImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;settingsSync.ignoredExtensions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// &quot;vsicons.dontShowNewVersionMessage&quot;: true,</span>
  <span class="token comment">// &quot;todo-tree.tree.showScanModeButton&quot;: false,</span>
  <span class="token comment">// &quot;php.validate.executablePath&quot;: &quot;1&quot;, //0|1</span>
  <span class="token comment">// &quot;guides.enabled&quot;: false,</span>
  <span class="token comment">// &quot;git.confirmSync&quot;: false,</span>
  <span class="token comment">// gitee\u5907\u4EFD\u547D\u4EE4 \u8F93\u5165giteeID(\u65E0\u6548\u679C)</span>
  <span class="token comment">// &quot;gitee.gist&quot;: &quot;4qwlobruja60fcnhdv25t11&quot;,</span>
  <span class="token comment">// gitee\u5907\u4EFD \u8F93\u5165torken\u503C</span>
  <span class="token comment">// &quot;gitee.access_token&quot;: &quot;9d4aabc67430fd2f150f6de8ccc292c7&quot;</span>
  <span class="token comment">// \u4EE5\u4E0B\u4E3A\u672A\u5206\u7C7B\u914D\u7F6E\u9879</span>
  <span class="token string-property property">&quot;editor.cursorSmoothCaretAnimation&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.cursorSurroundingLines&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;diffEditor.ignoreTrimWhitespace&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8FF7\u4F60\u5730\u56FE</span>
  <span class="token string-property property">&quot;editor.minimap.size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fill&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4EE3\u7801\u5EFA\u8BAE\u63D0\u793A</span>
  <span class="token string-property property">&quot;editor.suggest.localityBonus&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5F03\u7528 -\u5EFA\u8BAE\u6700\u5927\u663E\u793A\u6570</span>
  <span class="token comment">// &quot;editor.suggest.maxVisibleSuggestions&quot;: 10,</span>
  <span class="token string-property property">&quot;editor.suggest.shareSuggestSelections&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5EFA\u8BAE</span>
  <span class="token string-property property">&quot;editor.suggestFontSize&quot;</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.suggestLineHeight&quot;</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;files.autoSaveDelay&quot;</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.cursorBlinking&quot;</span><span class="token operator">:</span> <span class="token string">&quot;solid&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;workbench.editor.enablePreview&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;iceworks.materialSources&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// auto-rename-tag \u63D2\u4EF6\u8BBE\u7F6E</span>
  <span class="token string-property property">&quot;auto-rename-tag.activationOnLanguage&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;xml&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;php&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;jsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vue&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;minapp-vscode.disableAutoConfig&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[markdown]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yzhang.markdown-all-in-one&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[vue]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// &quot;editor.defaultFormatter&quot;: &quot;octref.vetur&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4E0B\u9762\u7684\u914D\u7F6E\u672A\u9A8C\u8BC1</span>
  <span class="token string-property property">&quot;hediet.vscode-drawio.local-storage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eyIuZHJhd2lvLWNvbmZpZyI6IntcImxhbmd1YWdlXCI6XCJcIixcImN1c3RvbUZvbnRzXCI6W10sXCJsaWJyYXJpZXNcIjpcImdlbmVyYWxcIixcImN1c3RvbUxpYnJhcmllc1wiOltcIkwuc2NyYXRjaHBhZFwiXSxcInBsdWdpbnNcIjpbXSxcInJlY2VudENvbG9yc1wiOltdLFwiZm9ybWF0V2lkdGhcIjpcIjI0MFwiLFwiY3JlYXRlVGFyZ2V0XCI6ZmFsc2UsXCJwYWdlRm9ybWF0XCI6e1wieFwiOjAsXCJ5XCI6MCxcIndpZHRoXCI6ODI3LFwiaGVpZ2h0XCI6MTE2OX0sXCJzZWFyY2hcIjp0cnVlLFwic2hvd1N0YXJ0U2NyZWVuXCI6dHJ1ZSxcImdyaWRDb2xvclwiOlwiI2QwZDBkMFwiLFwiZGFya0dyaWRDb2xvclwiOlwiIzZlNmU2ZVwiLFwiYXV0b3NhdmVcIjp0cnVlLFwicmVzaXplSW1hZ2VzXCI6bnVsbCxcIm9wZW5Db3VudGVyXCI6MCxcInZlcnNpb25cIjoxOCxcInVuaXRcIjoxLFwiaXNSdWxlck9uXCI6ZmFsc2UsXCJ1aVwiOlwiXCJ9In0=&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.accessibilitySupport&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.linkedEditing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;liveServer.settings.donotShowInfoMsg&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;terminal.external.windowsExec&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:\\\\Program Files\\\\PowerShell\\\\7\\\\pwsh.exe&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[json]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.json-language-features&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.formatOnType&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;vscodePluginDemo.showTip&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;workbench.iconTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;material-icon-theme&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;bracket-pair-colorizer-2.depreciation-notice&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;files.autoSave&quot;</span><span class="token operator">:</span> <span class="token string">&quot;onFocusChange&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.unicodeHighlight.ambiguousCharacters&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;vscode-edge-devtools.mirrorEdits&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><ul><li>\u4E3B\u9898\u989C\u8272\u8BBE\u7F6E</li></ul><details class="custom-container details"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;editor.suggest.showStatusBar&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.suggest.insertMode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;replace&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u81EA\u52A8\u683C\u5F0F\u5316</span>
  <span class="token comment">// &quot;editor.minimap.showSlider&quot;: &quot;always&quot;, // \u4E00\u76F4\u663E\u793A\u6EDA\u52A8\u6761</span>
  <span class="token string-property property">&quot;editor.renderLineHighlight&quot;</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5F53\u524D\u884C\u5BF9\u5E94\u7684\u884C\u53F7\u680F\u4E5F\u9AD8\u4EAE\u663E\u793A</span>
  <span class="token string-property property">&quot;editor.cursorWidth&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// \u5149\u6807\u5BBD</span>
  <span class="token string-property property">&quot;editor.wordWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6298\u884C\u65B9\u5F0F on \u6298\u884C off \u4E0D\u6298\u884C</span>
  <span class="token string-property property">&quot;editor.fontWeight&quot;</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53\u5BBD\u5EA6\u4ECE1\u52301000\u7684\u503C\uFF0C\u4EE5\u53CA\u5B57\u7B26\u4E32\u503C\u201C normal\u201D\u548C\u201C bold\u201D</span>
  <span class="token comment">// \u5DF2\u5B89\u88C5\u5B57\u4F53 Source Code Pro \\ DejaVu Sans Code \\Sarasa Term SC \\JetBrains Mono \\ Fira Code \\ Victor Mono \\  Cascadia Code \\ Iosevka</span>
  <span class="token comment">// &quot;editor.fontFamily&quot;: &quot;Consolas,&#39;Source Code Pro&#39;, monospace,&#39;\u66F4\u7EB1\u9ED1\u4F53 Mono SC Nerd&#39;&quot;, // \u539F\u5B57\u4F53</span>
  <span class="token string-property property">&quot;editor.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;DejaVu Sans Code&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8FDE\u5B57\u4F53g  Fira Code \u3001JetBrains Mono \u3001DejaVu Sans Code</span>
  <span class="token string-property property">&quot;editor.fontLigatures&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u7528\u8FDE\u4F53\u5B57</span>
  <span class="token string-property property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53\u5927\u5C0F</span>
  <span class="token string-property property">&quot;editor.detectIndentation&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// vscode\u9ED8\u8BA4\u542F\u7528\u4E86\u6839\u636E\u6587\u4EF6\u7C7B\u578B\u81EA\u52A8\u8BBE\u7F6Etabsize\u7684\u9009\u9879</span>
  <span class="token string-property property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.smoothScrolling&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5E73\u6ED1\u6EDA\u52A8</span>
  <span class="token string-property property">&quot;editor.scrollBeyondLastLine&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u7981\u6B62\u6EDA\u52A8\u5230\u6587\u4EF6\u6700\u540E\u4E00\u884C\u540E\u8FD8\u80FD\u7EE7\u7EED\u6EDA\u52A8</span>
  <span class="token comment">// \u7981\u6B62\u8FDE\u63A5\u6587\u5B57\u53EF\u70B9\u51FB\uFF0C\u53D6\u6D88\u4E0B\u5212\u7EBF</span>
  <span class="token comment">// &quot;editor.links&quot;: false,</span>
  <span class="token comment">// &quot;editor.renderWhitespace&quot;: &quot;trailing&quot;,//??</span>
  <span class="token comment">// \u7F16\u8F91\u5668\u4FDD\u5B58\u65F6\u8981\u6267\u884C\u7684\u52A8\u4F5C</span>
  <span class="token comment">// \u6307\u5B9A\u67D0\u7C7B\u6587\u6863\u4FDD\u5B58\u683C\u5F0F\u5316 formatOnSave \u662F\u5168\u90E8\u6587\u6863\u90FD\u683C\u5F0F\u5316</span>
  <span class="token string-property property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;source.organizeImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// &quot;source.fixAll&quot;: true, // \u6253\u5F00ESLint\u7684\u6240\u6709\u652F\u6301\u7684\u81EA\u52A8\u4FEE\u590D</span>
    <span class="token string-property property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u4FDD\u5B58\u81EA\u52A8\u4FEE\u590D eslint \u683C\u5F0F\u9519\u8BEF(\u4F1A\u6839\u636E\u9879\u76EE\u76EE\u5F55\u4E2D\u7684 eslintrc.js \u6587\u4EF6\u7684\u914D\u7F6E\u4FEE\u6539\u9519\u8BEF)</span>
    <span class="token string-property property">&quot;source.fixAll.markdownlint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u{1F53A} \u4FDD\u5B58\u81EA\u52A8\u4FEE\u590D markdownlint \u683C\u5F0F\u9519\u8BEF</span>
    <span class="token comment">// &quot;source.fixAll.stylelint&quot;: true, //\u4FDD\u5B58\u81EA\u52A8\u4FEE\u590D stylelint \u683C\u5F0F\u9519\u8BEF</span>
    <span class="token comment">// &quot;source.fixAll.prettier&quot;: true //\u4FDD\u5B58\u81EA\u52A8\u4FEE\u590D prettier \u683C\u5F0F\u9519\u8BEF</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5168\u5C40\u4FDD\u5B58\u683C\u5F0F\u5316</span>
  <span class="token comment">// &quot;editor.formatOnSave&quot;: true, // \u4F1A\u548C codeActionsOnSave \u51B2\u7A81</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u6839\u636E\u989C\u8272\u4E3B\u9898\u7684\u53EF\u81EA\u5B9A\u4E49\u914D\u7F6E\u5F00\u59CB\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token comment">// \u5F53\u524D\u4E3B\u9898</span>
  <span class="token string-property property">&quot;workbench.colorTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;One Dark Pro Darker&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u81EA\u5B9A\u4E49\u672C\u4E3B\u9898\u989C\u8272</span>
  <span class="token string-property property">&quot;workbench.editor.enablePreviewFromQuickOpen&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u989C\u8272\u4E3B\u9898</span>
  <span class="token comment">// &quot;workbench.iconTheme&quot;: &quot;material-icon-theme&quot;, // VSCode\u56FE\u6807\u4E3B\u9898 | One Monokai</span>
  <span class="token string-property property">&quot;workbench.colorCustomizations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u989C\u8272\u4E3B\u9898One Dark Pro\u8BBE\u7F6E(\u6587\u4EF6\u5916)</span>
    <span class="token string-property property">&quot;[One Dark Pro Darker]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u25BC\u25BC\u25BC \u7F16\u8F91\u533A\u57DF\u80CC\u666F\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B</span>
      <span class="token string-property property">&quot;editor.background&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#2E2E2E&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u25BC\u25BC\u25BC \u4FA7\u8FB9\u680F\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B</span>
      <span class="token string-property property">&quot;sideBar.background&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#272a2f&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;sideBar.foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#bec0c2&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;sideBar.border&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#212F3C&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u25BC\u25BC\u25BC \u4FA7\u8FB9\u680F\u5217\u8868\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B</span>
      <span class="token comment">// \u76EE\u5F55\u4E2D\u88AB\u9009\u4E2D\u9879\u7684\u80CC\u666F\u8272</span>
      <span class="token string-property property">&quot;list.inactiveSelectionBackground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#4a4f59&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u76EE\u5F55\u4E2D\u88AB\u9009\u4E2D\u9879\u7684\u5B57\u4F53\u8272</span>
      <span class="token string-property property">&quot;list.inactiveSelectionForeground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#03A9F4&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u76EE\u5F55\u6BCF\u9879\u9F20\u6807\u79FB\u5165\u7684\u80CC\u666F\u8272</span>
      <span class="token string-property property">&quot;list.hoverBackground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#616161&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u76EE\u5F55\u6BCF\u9879\u9F20\u6807\u79FB\u5165\u7684\u5B57\u4F53\u8272</span>
      <span class="token string-property property">&quot;list.hoverForeground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#EEEEEE&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// peek \u7A97\u53E3</span>
      <span class="token comment">// &quot;peekView.border&quot;: &quot;#5b99fc9c&quot;,</span>
      <span class="token comment">// \u25BC\u25BC\u25BC \u9876\u90E8 \u6807\u7B7Etab \u680F\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B</span>
      <span class="token comment">// \u6807\u7B7Etab \u9009\u4E2D\u65F6\u7684\u680F\u8FB9\u6846\u80CC\u666F\u8272</span>
      <span class="token string-property property">&quot;tab.activeBackground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#FDFEFE&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6807\u7B7Etab \u9009\u4E2D\u65F6\u7684\u680F\u8FB9\u6846\u5B57\u4F53\u8272</span>
      <span class="token string-property property">&quot;tab.activeForeground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#000000&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6807\u7B7Etab \u9009\u4E2D\u65F6\u7684\u680F\u5206\u754C\u7EBF\u4E24\u4FA7</span>
      <span class="token string-property property">&quot;tab.border&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#37474F&quot;</span><span class="token punctuation">,</span> <span class="token comment">//2e2e2e</span>
      <span class="token comment">// \u6807\u7B7Etab \u9009\u4E2D\u65F6\u7684\u680F\u5206\u754C\u7EBF--\u5E95</span>
      <span class="token string-property property">&quot;tab.activeBorder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#37474F&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// Tab\u6807\u7B7E\u9F20\u6807\u79FB\u5165\u7684\u80CC\u666F\u8272</span>
      <span class="token string-property property">&quot;tab.hoverBackground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#B3B6B7&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// Tab\u6807\u7B7E\u9F20\u6807\u79FB\u5165\u7684 \u680F\u5206\u754C\u7EBF--\u5E95</span>
      <span class="token string-property property">&quot;tab.hoverBorder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#8e8e8e&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6807\u7B7Etab \u672A\u9009\u4E2D\u65F6\u7684\u5B57\u4F53\u989C\u8272</span>
      <span class="token string-property property">&quot;tab.inactiveForeground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#dddfe6&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u25BC\u25BC\u25BC \u5176\u4ED6\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B</span>
      <span class="token comment">// \u6700\u5DE6\u4FA7\u5DE5\u5177\u680F</span>
      <span class="token string-property property">&quot;activityBar.background&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#2e2e2e&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u72B6\u6001\u680F</span>
      <span class="token string-property property">&quot;statusBar.background&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#2a2a2a&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u5149\u6807\u989C\u8272</span>
      <span class="token string-property property">&quot;editorCursor.foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#CCFF00&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u5F53\u524D\u7F16\u8F91\u884C</span>
      <span class="token string-property property">&quot;editor.lineHighlightBackground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#32363d&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u884C\u53F7\u680F\u7684\u5F53\u524D\u884C\u9AD8\u4EAE</span>
      <span class="token string-property property">&quot;editorLineNumber.activeForeground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ffec3e&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u884C\u53F7</span>
      <span class="token comment">// &quot;editorLineNumber.foreground&quot;: &quot;#274c5e&quot;,</span>
      <span class="token comment">// \u5355\u51FB\u4E00\u4E2A\u8BCD\u65F6\uFF0C\u5176\u5B83\u76F8\u540C\u5355\u8BCD</span>
      <span class="token string-property property">&quot;editor.selectionHighlightBackground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#999999&quot;</span><span class="token punctuation">,</span> <span class="token comment">//#e3dede</span>
      <span class="token comment">// \u9009\u4E2D\u9AD8\u4EAE\u7684\u989C\u8272</span>
      <span class="token string-property property">&quot;editor.selectionBackground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#004e66&quot;</span><span class="token punctuation">,</span> <span class="token comment">//&quot;#434e61c9&quot;,</span>
      <span class="token comment">// //\u4FA7\u8FB9\u680F\u8D44\u6E90\u7BA1\u7406\u5668\u533A\u57DF\u7684\u6807\u9898\u680F\u989C\u8272</span>
      <span class="token string-property property">&quot;sideBarSectionHeader.background&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#32363d&quot;</span>
      <span class="token comment">// // \u533A\u57DF\u83B7\u53D6\u7126\u70B9\u65F6</span>
      <span class="token comment">// &quot;focusBorder&quot;: &quot;#5b99fc36&quot;</span>
      <span class="token comment">// &quot;editor.selectionHighlightBorder&quot;: &quot;#90e97259&quot;,</span>
      <span class="token comment">// // \u5FEB\u6377\u63D0\u793A\u7A97\u53E3</span>
      <span class="token comment">// &quot;editorSuggestWidget.highlightForeground&quot;: &quot;#7bfc5ba2&quot;,</span>
      <span class="token comment">// &quot;editorSuggestWidget.selectedBackground&quot;: &quot;#333f5c&quot;,</span>
      <span class="token comment">// // panel \u7A97\u53E3</span>
      <span class="token comment">// &quot;panelTitle.activeBorder&quot;: &quot;#5b99fc5b&quot;,</span>
      <span class="token comment">// &quot;panelTitle.activeForeground&quot;: &quot;#cfcfcf&quot;,</span>
      <span class="token comment">// // \u6807\u5C3A</span>
      <span class="token comment">// &quot;editorRuler.foreground&quot;: &quot;#d44949&quot;,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B \u5DE5\u4F5C\u533Aworkbench\u8BBE\u7F6E\u7ED3\u675F \uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B\uFE4B</span>
  <span class="token string-property property">&quot;editor.tokenColorCustomizations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u989C\u8272\u4E3B\u9898One Dark Pro\u8BBE\u7F6E(\u4EE3\u7801\u4E2D)</span>
    <span class="token string-property property">&quot;[One Dark Pro Darker]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u8BBE\u7F6E\u6CE8\u91CA</span>
        <span class="token string-property property">&quot;fontStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53\u6837\u5F0F(\u53EF\u4EE5\u53E0\u52A0)  bold\u52A0\u7C97  italic\u659C\u4F53 underline\u4E0B\u5212\u7EBF</span>
        <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#4d8396fb&quot;</span> <span class="token comment">// \u5B57\u4F53\u989C\u8272</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u5173\u952E\u5B57</span>
        <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#FFEB3B&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5173\u952E\u5B57 26A69A  FFCA28</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;variables&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#FF6F00&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u53D8\u91CF\u540D 00aeff ff0055</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;strings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#00b890&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u7B26\u4E32 2874A6  03A9F4  03A9F4</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#14db02&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u51FD\u6570\u540D</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;numbers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ff01ea&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6570\u5B57 ff01ea</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ff5245&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6570\u636E\u7C7B\u578B\\vue\u7EC4\u4EF6\u540D FF0000 c8ff00 ff2600</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// &quot;storage&quot;: &quot;#FF0000&quot;,</span>
      <span class="token comment">//  \u4F5C\u7528\u57DF\u5185 \u4EE3\u7801\u989C\u8272\u89C4\u5219</span>
      <span class="token string-property property">&quot;textMateRules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// \u5B57\u7B26\u4E32 \u53CC\u5F15\u53F7</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string.quoted.double.js&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// &quot;fontStyle&quot;: &quot;bold&quot;, // \u5B57\u4F53\u6837\u5F0F </span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#03f08dd7&quot;</span> <span class="token comment">// 03f08dd7</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5B57\u7B26\u4E32 \u5355\u5F15\u53F7</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string.quoted.single.js&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// &quot;fontStyle&quot;: &quot;bold&quot;, // \u5B57\u4F53\u6837\u5F0F </span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#03f08dd7&quot;</span> <span class="token comment">// 03e434</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \uFF1A</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;punctuation.separator.key-value.js&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// &quot;fontStyle&quot;: &quot;bold&quot;, // \u5B57\u4F53\u6837\u5F0F</span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#b4b2b2dc&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// , \`\u5B57\u7B26\`</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;meta.function.method.js&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// &quot;fontStyle&quot;: &quot;bold&quot;, // \u5B57\u4F53\u6837\u5F0F </span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#9dff00&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// .</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword.operator.accessor.js&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;fontStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53\u6837\u5F0F </span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#00a2ff&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// ;</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;punctuation.terminator.statement.js&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;fontStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53\u6837\u5F0F </span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ffbb00&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u63A5\u53E3\u65B9\u6CD5\u540D</span>
        <span class="token comment">// {</span>
        <span class="token comment">//   &quot;scope&quot;: &quot;variable.other.readwrite.js&quot;,</span>
        <span class="token comment">//   &quot;settings&quot;: {</span>
        <span class="token comment">//     &quot;fontStyle&quot;: &quot;bold&quot;, // \u5B57\u4F53\u6837\u5F0F </span>
        <span class="token comment">//     &quot;foreground&quot;: &quot;#03d1ecfb&quot;</span>
        <span class="token comment">//   }</span>
        <span class="token comment">// },</span>
        <span class="token comment">// \u53D8\u91CF\u7684\u503C false</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;constant.language.boolean.false.js&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;fontStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53\u6837\u5F0F</span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#d6d4d4a4&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u53D8\u91CF\u7684\u503C true</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;constant.language.boolean.true.js&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;fontStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53\u6837\u5F0F</span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#03b10cec&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// js\u4E2D\u7684\u5355\u5F15\u53F7\u5B57\u7B26\uFF0C</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string.quoted.single.js&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// &quot;fontStyle&quot;: &quot;bold&quot;, // \u5B57\u4F53\u6837\u5F0F</span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#71f0dbd7&quot;</span> <span class="token comment">// #03b1a8</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u6CE8\u91CA</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;comment.block.html&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;fontStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53\u6837\u5F0F</span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#028697&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// keyword ??</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword.operator.nullcoalesce.js&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;fontStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53\u6837\u5F0F</span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#a200ffe0&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// keyword == ===</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7B49\u4E8E&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword.operator.comparison.js&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;fontStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53\u6837\u5F0F</span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#fffb00fb&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// keyword &gt; &gt;= &lt; &lt;=</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword.operator.relational.js&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;fontStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53\u6837\u5F0F</span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#fffb00fb&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// keyword || &amp;&amp;</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword.operator.logical.js&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;fontStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53\u6837\u5F0F</span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#a200ffe0&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// html text</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text.html.vue-html&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// &quot;fontStyle&quot;: &quot;bold&quot;, // \u5B57\u4F53\u6837\u5F0F</span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#e2e2e2f1&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// css name</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;support.type.property-name.css&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;fontStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53\u6837\u5F0F</span>
            <span class="token string-property property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#6ab04c&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u6839\u636E\u989C\u8272\u4E3B\u9898\u7684\u53EF\u81EA\u5B9A\u4E49\u914D\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5168\u5C40\u7F16\u8F91\u5668editor\u8BBE\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5173\u4E8Ewindow\u63D2\u4EF6\u914D\u7F6E\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token comment">// \u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846\u6837\u5F0F  button.secondaryBackground</span>
  <span class="token string-property property">&quot;window.dialogStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;custom&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5168\u5C40\u7F16\u8F91\u5668window\u8BBE\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5173\u4E8Eeslint\u63D2\u4EF6\u914D\u7F6E\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token comment">//\u4FDD\u5B58\u65F6eslint\u81EA\u52A8\u4FEE\u590D\u9519\u8BEF/\u662F\u5426\u6839\u636Eeslint\u8FDB\u884C\u683C\u5F0F\u5316</span>
  <span class="token comment">// &quot;eslint.codeActionsOnSave.mode&quot;: &quot;problems&quot;, // all | problems</span>
  <span class="token comment">// eslint\u914D\u7F6E\u6587\u4EF6</span>
  <span class="token string-property property">&quot;eslint.options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;extensions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;.vue&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;.ts&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;.html&quot;</span> <span class="token comment">//??? \u672A\u9A8C\u8BC1</span>
    <span class="token punctuation">]</span>
    <span class="token comment">// &quot;configFile&quot;: &quot;C:/.eslintrc.json&quot;, // \u5916\u90E8\u7684 eslint \u914D\u7F6E\u6587\u4EF6\u4F4D\u7F6E \uFF08\u672A\u542F\u7528\uFF09</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//\u914D\u7F6E ESLint \u68C0\u67E5\u7684\u6587\u4EF6\u7C7B\u578B </span>
  <span class="token string-property property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;html5&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;css3&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vue-html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;jsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;json&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// &quot;eslint.enable&quot;: false, // \u662F\u5426\u5F00\u542Feslint\u68C0\u6D4B</span>
  <span class="token comment">//  &quot;eslint.run&quot;: &quot;onSave&quot;,  // exlint \u8FD0\u884C\u7684\u65F6\u5019\uFF1A \u4FDD\u5B58\u65F6</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5168\u5C40\u7F16\u8F91\u5668eslint\u8BBE\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token string-property property">&quot;prettier.jsxSingleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5728JSX\u4E2D\u4F7F\u7528\u5355\u5F15\u53F7\u800C\u4E0D\u662F\u53CC\u5F15\u53F7</span>
  <span class="token string-property property">&quot;prettier.semi&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u662F\u5426\u5728\u6BCF\u884C\u672B\u5C3E\u6DFB\u52A0\u5206\u53F7</span>
  <span class="token string-property property">&quot;prettier.tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token comment">// \u7F29\u8FDB\u5B57\u8282\u6570</span>
  <span class="token comment">// &quot;prettier.bracketSpacing&quot;: true, // \u5728\u5BF9\u8C61\uFF0C\u6570\u7EC4\u62EC\u53F7\u4E0E\u6587\u5B57\u4E4B\u95F4\u52A0\u7A7A\u683C &quot;{ foo: bar }&quot;</span>
  <span class="token comment">// \u8BA9prettier\u4F7F\u7528eslint\u7684\u4EE3\u7801\u683C\u5F0F\u8FDB\u884C\u6821\u9A8C</span>
  <span class="token comment">// &quot;prettier.eslintIntegration&quot;: true,</span>
  <span class="token comment">// js\u4F7F\u7528\u5355\u5F15\u53F7(\u6682\u65F6\u7981\u7528\u4E86)</span>
  <span class="token comment">// &quot;prettier.singleQuote&quot;: true,</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}stylelint\u548Cprettier\u8BBE\u7F6E\u5F00\u59CB\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token string-property property">&quot;css.validate&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;less.validate&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scss.validate&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[scss]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}stylelint\u548Cprettier\u8BBE\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token string-property property">&quot;liveSassCompile.settings.formats&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;compressed&quot;</span><span class="token punctuation">,</span> <span class="token comment">//expanded</span>
      <span class="token string-property property">&quot;extensionName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.min.css&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;savePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/dist/css&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4E0D\u8F93\u51FA\u5730\u56FE\u6587\u4EF6</span>
  <span class="token string-property property">&quot;liveSassCompile.settings.generateMap&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}Markdownlint\u8BBE\u7F6E\u5F00\u59CB\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token string-property property">&quot;markdownlint.config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;MD003&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;MD004&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// &quot;MD013&quot;: false,</span>
    <span class="token string-property property">&quot;MD011&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// md\u6587\u4EF6\u4E2D\u4F7F\u7528\u7C7B\u9009\u62E9\u5668</span>
    <span class="token string-property property">&quot;MD024&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;MD025&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;MD029&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;MD033&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;MD035&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;MD036&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;MD046&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u9690\u85CF\u6700\u5DE6\u4FA7\u7684\u6D3B\u52A8\u680F true\u663E\u793A | false\u9690\u85CF</span>
  <span class="token comment">// \u6253\u5F00\u6587\u4EF6\u65F6\uFF0C\u5173\u95ED\u9884\u89C8\u6A21\u5F0F\uFF0C\u76F4\u63A5\u6253\u5F00\u6587\u4EF6</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}Markdownlint\u8BBE\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}code-runner\u63D2\u4EF6\u914D\u7F6E\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token comment">// \u9ED8\u8BA4\u8FD0\u884C\u7684\u8BED\u8A00</span>
  <span class="token string-property property">&quot;code-runner.defaultLanguage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8F93\u51FA\u7684\u5185\u5BB9</span>
  <span class="token string-property property">&quot;code-runner.customCommand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo Hello&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u662F\u5426\u6E05\u9664\u4E0A\u6B21\u7684\u8F93\u51FA\u8BB0\u5F55</span>
  <span class="token string-property property">&quot;code-runner.clearPreviousOutput&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8FD0\u884C\u65F6\u662F\u5426\u663E\u793A [Running] &amp; [Done]</span>
  <span class="token string-property property">&quot;code-runner.showExecutionMessage&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8FD0\u884C\u8BED\u8A00\u7684\u8DEF\u5F84\u6216\u73AF\u5883\u53D8\u91CF</span>
  <span class="token string-property property">&quot;code-runner.executorMap&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;javascript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}code-runner\u8BBE\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5173\u4E8Efiles\u914D\u7F6E\u5F00\u59CB\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token comment">// \u4FDD\u5B58\u6587\u4EF6\u65F6\uFF0C\u53BB\u9664\u884C\u5C3E\u7A7A\u683C</span>
  <span class="token string-property property">&quot;files.trimTrailingWhitespace&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">//\u6839\u636E\u6587\u4EF6\u540E\u7F00\u540D\u5B9A\u4E49vue\u6587\u4EF6\u7C7B\u578B /\u6839\u636E\u6587\u4EF6\u540E\u7F00\u540D\u5B9A\u4E49vue\u7B49\u6587\u4EF6\u7C7B\u578B</span>
  <span class="token string-property property">&quot;files.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;*.vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;*.cjson&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsonc&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;*.wxss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;*.wxs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;*.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;*.jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5728 vscode \u8D44\u6E90\u7BA1\u7406\u5668\u663E\u793A\u4E2D\u6392\u9664 node_modules \u7B49\u6587\u4EF6\u5939</span>
  <span class="token string-property property">&quot;files.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;**/node_modules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//     &quot;**/.git&quot;: true,</span>
    <span class="token comment">//     &quot;**/.svn&quot;: true,</span>
    <span class="token comment">//     &quot;**/.hg&quot;: true,</span>
    <span class="token comment">//     &quot;**/CVS&quot;: true,</span>
    <span class="token comment">//     &quot;**/.DS_Store&quot;: true,</span>
    <span class="token comment">//     //&quot;**/package-lock.json&quot;: true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// &quot;search.exclude&quot;: {</span>
  <span class="token comment">//     &quot;**/node_modules&quot;: true,</span>
  <span class="token comment">//     &quot;**/bower_components&quot;: true,</span>
  <span class="token comment">//     &quot;**/dist&quot;: true</span>
  <span class="token comment">// },</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5173\u4E8Efiles\u914D\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5173\u4E8Eterminal\u914D\u7F6E\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token comment">//\u5728\u91CD\u65B0\u52A0\u8F7D\u7A97\u53E3\u65F6\u4FDD\u7559\u7EC8\u7AEF\u8FDB\u7A0B</span>
  <span class="token string-property property">&quot;terminal.integrated.enablePersistentSessions&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// terminal \u7EC8\u7AEF\u4E2D\u7684\u5149\u6807</span>
  <span class="token string-property property">&quot;terminal.Cursor.foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#CCFF00&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// terminal \u5149\u6807\u6837\u5F0F</span>
  <span class="token string-property property">&quot;terminal.integrated.cursorBlinking&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// &quot;terminal.integrated.cursorStyle&quot;: &quot;line&quot;,</span>
  <span class="token comment">// VSCode \u4E2D\u7684\u7EC8\u7AEF\u4F7F\u7528\u4EC0\u4E48shell</span>
  <span class="token comment">// &quot;terminal.integrated.automationShell.windows&quot;: &quot;C:\\\\Program Files\\\\PowerShell\\\\7\\\\pwsh.exe&quot;,</span>
  <span class="token comment">//  &quot;C:\\\\WINDOWS\\\\System32\\\\cmd.exe&quot;, //cmd</span>
  <span class="token comment">//  &quot;C:\\\\WINDOWS\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\powershell.exe&quot;, //powershell 5.x</span>
  <span class="token string-property property">&quot;terminal.integrated.profiles.windows&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;PowerShell&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PowerShell&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;overrideName&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token comment">// &quot;icon&quot;: &quot;terminal-powershell&quot;,</span>
      <span class="token comment">// &quot;env&quot;: {</span>
      <span class="token comment">//     &quot;TEST_VAR&quot;: &quot;value&quot;</span>
      <span class="token comment">// }</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// &quot;terminal.integrated.defaultProfile.windows&quot;: &quot;PowerShell&quot;,</span>
  <span class="token comment">//\u7EC8\u7AEF\u9009\u9879\u5361\u53EF\u4EE5\u4F5C\u4E3A\u9884\u89C8\u529F\u80FD</span>
  <span class="token string-property property">&quot;terminal.integrated.tabs.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5173\u4E8Eterminal\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5173\u4E8Eemmet\u914D\u7F6E\u5F00\u59CB\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token string-property property">&quot;emmet.includeLanguages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;javascript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;wxml&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// (\u672A\u542F\u7528)</span>
  <span class="token comment">// // \u914D\u7F6Eemmet\u662F\u5426\u542F\u7528tab\u5C55\u5F00\u7F29\u5199</span>
  <span class="token string-property property">&quot;emmet.triggerExpansionOnTab&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5728vue\u6587\u4EF6\u91CC\u8BBE\u7F6Ehtml\u5173\u8054\u914D\u7F6E -- emmet\u5BF9\u6587\u4EF6\u7C7B\u578B\u7684\u652F\u6301</span>
  <span class="token string-property property">&quot;emmet.syntaxProfiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;javascript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vue-html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// &quot;emmet.includeLanguages&quot;: {</span>
  <span class="token comment">//     &quot;wxml&quot;: &quot;html&quot;</span>
  <span class="token comment">// },</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5173\u4E8Eemmet\u63D2\u4EF6\u914D\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5173\u4E8Evetur\u63D2\u4EF6\u5F00\u59CB\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token comment">// (vue\u5DE5\u4F5C\u533A\u7528)</span>
  <span class="token comment">//****vue\u6587\u4EF6template\u683C\u5F0F\u5316\u652F\u6301\uFF0C\u5E76\u4F7F\u7528js-beautify-html\u63D2\u4EF6******</span>
  <span class="token comment">//\u8BA9vue\u4E2D\u7684js\u6309\u7F16\u8F91\u5668\u81EA\u5E26\u7684ts\u683C\u5F0F\u8FDB\u884C\u683C\u5F0F\u5316</span>
  <span class="token comment">// &quot;vetur.format.defaultFormatter.js&quot;: &quot;prettier&quot;, //prettier  \\  vscode-typescript</span>
  <span class="token comment">//\u8BA9vue\u4E2D\u7684html\u6309prettier\u683C\u5F0F\u8FDB\u884C\u683C\u5F0F\u5316 ??</span>
  <span class="token comment">// &quot;vetur.format.defaultFormatter.html&quot;: &quot;prettier&quot;,</span>
  <span class="token comment">//js-beautify-html\u683C\u5F0F\u5316\u914D\u7F6E\uFF0C\u5C5E\u6027\u5F3A\u5236\u6362\u884C</span>
  <span class="token string-property property">&quot;vetur.format.defaultFormatterOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;js-beautify-html&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// vue\u7EC4\u4EF6\u4E2Dhtml\u4EE3\u7801\u683C\u5F0F\u5316\u6837\u5F0F</span>
      <span class="token string-property property">&quot;wrap_attributes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;force-aligned&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//\u6CE8\uFF1AVetur\u81EA\u5E26\u4E86\u683C\u5F0F\u5316\uFF0C\u89C4\u8303\u5C31\u662F\u4F7F\u7528prettier\u5982\u679C\u4F60\u6709\u88C5prettier\u63D2\u4EF6\uFF0C\u5E76\u4E14\u5728\u8BBE\u7F6E\u6216setting.json\u91CC\u914D\u7F6E\u4E86prettier\u7684\u8BDD\u662F\u65E0\u6548\u7684</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5173\u4E8Evetur\u63D2\u4EF6\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5173\u4E8EEasy Sass\u63D2\u4EF6\u5F00\u59CB\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5173\u4E8E TODO \u63D2\u4EF6\u5F00\u59CB\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token string-property property">&quot;todohighlight.isEnable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;todohighlight.isCaseSensitive&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;todohighlight.keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;DEBUG:&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;REVIEW:&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NOTE:&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;overviewRulerColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;grey&quot;</span>
      <span class="token comment">//FIXME:</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HACK:&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#000&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;isWholeLine&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TODO:&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;border&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2px solid red&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;borderRadius&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2px&quot;</span><span class="token punctuation">,</span> <span class="token comment">//NOTE: using borderRadius along with \`border\` or you will see nothing change</span>
      <span class="token string-property property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0,0,0,.2)&quot;</span>
      <span class="token comment">//other styling properties goes here ...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u81EA\u5B9A\u4E49</span>
  <span class="token string-property property">&quot;todohighlight.keywordsPattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TODO:|FIXME:|NOTE:&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u539F\u7248\u8BBE\u7F6E</span>
  <span class="token comment">//  &quot;todohighlight.keywordsPattern&quot;: &quot;TODO:|FIXME:|\\\\(([^)]+)\\\\)&quot;, //highlight \`TODO:\`,\`FIXME:\` or content between parentheses</span>
  <span class="token string-property property">&quot;todohighlight.defaultStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ffab00&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;overviewRulerColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#42A5F5&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// &quot;cursor&quot;: &quot;pointer&quot;,</span>
    <span class="token string-property property">&quot;border&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1px solid #eee&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;borderRadius&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8px&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;isWholeLine&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token comment">//other styling properties goes here ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;todohighlight.include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;**/*.vue&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.js&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.jsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.tsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.php&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.css&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.scss&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;todohighlight.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;**/node_modules/**&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/bower_components/**&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/dist/**&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/build/**&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/.vscode/**&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/.github/**&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/_output/**&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.min.*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.map&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.json&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/.next/**&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;todohighlight.maxFilesForSearch&quot;</span><span class="token operator">:</span> <span class="token number">5120</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;todohighlight.toggleURI&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5173\u4E8E TODO \u63D2\u4EF6\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// (\u672A\u542F\u7528)</span>
  <span class="token comment">// &quot;easysass.formats&quot;: [</span>
  <span class="token comment">//     {</span>
  <span class="token comment">//         &quot;format&quot;: &quot;compressed&quot;, // \u538B\u7F29</span>
  <span class="token comment">//         &quot;extension&quot;: &quot;.css&quot;</span>
  <span class="token comment">//     }</span>
  <span class="token comment">// ],</span>
  <span class="token comment">// &quot;easysass.targetDir&quot;: &quot;./&quot;, // \u81EA\u5B9A\u4E49css\u8F93\u51FA\u6587\u4EF6\u8DEF\u5F84</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5173\u4E8EEasy Sass\u63D2\u4EF6\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5173\u4E8Efile-size\u63D2\u4EF6\u5F00\u59CB\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token string-property property">&quot;file-size.position&quot;</span><span class="token operator">:</span> <span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span> <span class="token comment">//right/left \u4F4D\u7F6E</span>
  <span class="token string-property property">&quot;file-size.priority&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5173\u4E8Efile-size\u63D2\u4EF6\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5BF9\u5404\u7C7B\u578B\u6587\u6863\u7684\u914D\u7F6E\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token comment">// \u5173\u4E8Ereact\u7684prettier\u6821\u9A8C \uFF1F\uFF1F</span>
  <span class="token string-property property">&quot;[javascriptreact]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B57\u4F53\u8FDE\u5B57\u8BBE\u7F6E</span>
    <span class="token string-property property">&quot;editor.fontLigatures&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;ss02&#39;, &#39;ss19&#39;&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u81EA\u52A8\u4FDD\u5B58</span>
    <span class="token comment">// &quot;editor.formatOnSave&quot;: true,</span>
    <span class="token comment">// \u5982\u679C\u62A5\u9519\uFF0C\u7528\u7B2C\u4E8C\u4E2A</span>
    <span class="token string-property property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.typescript-language-features&quot;</span>
    <span class="token comment">// &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[jsonc]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span>
    <span class="token comment">//\u9700\u8981HookyQR.beautify\u63D2\u4EF6</span>
    <span class="token comment">// &quot;editor.defaultFormatter&quot;: &quot;HookyQR.beautify&quot;,</span>
    <span class="token comment">// &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[html]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.html-language-features&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[css]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u81EA\u52A8\u4FDD\u5B58</span>
    <span class="token comment">// &quot;editor.formatOnSave&quot;: true,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5173\u4E8Emarkdown\u7684 prettier\u6821\u9A8C</span>
  <span class="token comment">// &quot;[markdown]&quot;: {</span>
  <span class="token comment">// &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;,</span>
  <span class="token comment">// },</span>
  <span class="token comment">// \u914D\u7F6E\u9009\u9879\u63A7\u5236\u7A7A\u683C\u662F\u5426\u63D2\u5165\u7A7A\u62EC\u53F7 \u9ED8\u8BA4\u503C\u4E3A true</span>
  <span class="token comment">// &quot;javascript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces&quot;: false,</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u5BF9\u5404\u7C7B\u578B\u6587\u6863\u7684\u914D\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}background\u80CC\u666F\u56FE\u7247\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token string-property property">&quot;background.useDefault&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u4F7F\u7528\u9ED8\u8BA4\u56FE\u7247</span>
  <span class="token comment">// \u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}background\u80CC\u666F\u56FE\u7247\u914D\u7F6E\u7ED3\u675F\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}\u{1F53A}</span>
  <span class="token comment">// \u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u5176\u4ED6\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}\u{1F53B}</span>
  <span class="token string-property property">&quot;cssrem.rootFontSize&quot;</span><span class="token operator">:</span> <span class="token number">75</span><span class="token punctuation">,</span>
  <span class="token comment">//\u8BA9\u51FD\u6570\u540D\u548C\u540E\u9762\u7684\u62EC\u53F7\u4E4B\u95F4\u52A0\u4E2A\u7A7A\u683C \uFF08\u65E0\u6548\u6216\u51B2\u7A81\uFF09</span>
  <span class="token comment">// &quot;javascript.format.insertSpaceBeforeFunctionParenthesis&quot;: true,</span>
  <span class="token comment">// &quot;minapp-vscode.disableAutoConfig&quot;: true, //?</span>
  <span class="token comment">// \u9690\u85CF\u5DE6\u4FA7\u8FB9\u680F\u4E0A\u7684 OpenEditors \u6253\u5F00\u7684\u7F16\u8F91\u5668</span>
  <span class="token string-property property">&quot;explorer.openEditors.visible&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;explorer.confirmDelete&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;explorer.confirmDragAndDrop&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;git.autofetch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;tabnine.experimentalAutoImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;settingsSync.ignoredExtensions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// &quot;vsicons.dontShowNewVersionMessage&quot;: true,</span>
  <span class="token comment">// &quot;todo-tree.tree.showScanModeButton&quot;: false,</span>
  <span class="token comment">// &quot;php.validate.executablePath&quot;: &quot;1&quot;, //0|1</span>
  <span class="token comment">// &quot;guides.enabled&quot;: false,</span>
  <span class="token comment">// &quot;git.confirmSync&quot;: false,</span>
  <span class="token comment">// gitee\u5907\u4EFD\u547D\u4EE4 \u8F93\u5165giteeID(\u65E0\u6548\u679C)</span>
  <span class="token comment">// &quot;gitee.gist&quot;: &quot;4qwlobruja60fcnhdv25t11&quot;,</span>
  <span class="token comment">// gitee\u5907\u4EFD \u8F93\u5165torken\u503C</span>
  <span class="token comment">// &quot;gitee.access_token&quot;: &quot;9d4aabc67430fd2f150f6de8ccc292c7&quot;</span>
  <span class="token comment">// \u4EE5\u4E0B\u4E3A\u672A\u5206\u7C7B\u914D\u7F6E\u9879</span>
  <span class="token string-property property">&quot;editor.cursorSmoothCaretAnimation&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.cursorSurroundingLines&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;diffEditor.ignoreTrimWhitespace&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8FF7\u4F60\u5730\u56FE</span>
  <span class="token string-property property">&quot;editor.minimap.size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fill&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4EE3\u7801\u5EFA\u8BAE\u63D0\u793A</span>
  <span class="token string-property property">&quot;editor.suggest.localityBonus&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5F03\u7528 -\u5EFA\u8BAE\u6700\u5927\u663E\u793A\u6570</span>
  <span class="token comment">// &quot;editor.suggest.maxVisibleSuggestions&quot;: 10,</span>
  <span class="token string-property property">&quot;editor.suggest.shareSuggestSelections&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5EFA\u8BAE</span>
  <span class="token string-property property">&quot;editor.suggestFontSize&quot;</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.suggestLineHeight&quot;</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;files.autoSaveDelay&quot;</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.cursorBlinking&quot;</span><span class="token operator">:</span> <span class="token string">&quot;solid&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;workbench.editor.enablePreview&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;iceworks.materialSources&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// auto-rename-tag \u63D2\u4EF6\u8BBE\u7F6E</span>
  <span class="token string-property property">&quot;auto-rename-tag.activationOnLanguage&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;xml&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;php&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;jsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vue&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;minapp-vscode.disableAutoConfig&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[markdown]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yzhang.markdown-all-in-one&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[vue]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// &quot;editor.defaultFormatter&quot;: &quot;octref.vetur&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4E0B\u9762\u7684\u914D\u7F6E\u672A\u9A8C\u8BC1</span>
  <span class="token string-property property">&quot;hediet.vscode-drawio.local-storage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eyIuZHJhd2lvLWNvbmZpZyI6IntcImxhbmd1YWdlXCI6XCJcIixcImN1c3RvbUZvbnRzXCI6W10sXCJsaWJyYXJpZXNcIjpcImdlbmVyYWxcIixcImN1c3RvbUxpYnJhcmllc1wiOltcIkwuc2NyYXRjaHBhZFwiXSxcInBsdWdpbnNcIjpbXSxcInJlY2VudENvbG9yc1wiOltdLFwiZm9ybWF0V2lkdGhcIjpcIjI0MFwiLFwiY3JlYXRlVGFyZ2V0XCI6ZmFsc2UsXCJwYWdlRm9ybWF0XCI6e1wieFwiOjAsXCJ5XCI6MCxcIndpZHRoXCI6ODI3LFwiaGVpZ2h0XCI6MTE2OX0sXCJzZWFyY2hcIjp0cnVlLFwic2hvd1N0YXJ0U2NyZWVuXCI6dHJ1ZSxcImdyaWRDb2xvclwiOlwiI2QwZDBkMFwiLFwiZGFya0dyaWRDb2xvclwiOlwiIzZlNmU2ZVwiLFwiYXV0b3NhdmVcIjp0cnVlLFwicmVzaXplSW1hZ2VzXCI6bnVsbCxcIm9wZW5Db3VudGVyXCI6MCxcInZlcnNpb25cIjoxOCxcInVuaXRcIjoxLFwiaXNSdWxlck9uXCI6ZmFsc2UsXCJ1aVwiOlwiXCJ9In0=&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.accessibilitySupport&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.linkedEditing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;liveServer.settings.donotShowInfoMsg&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;terminal.external.windowsExec&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:\\\\Program Files\\\\PowerShell\\\\7\\\\pwsh.exe&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[json]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.json-language-features&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.formatOnType&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;vscodePluginDemo.showTip&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;workbench.iconTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;material-icon-theme&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;bracket-pair-colorizer-2.depreciation-notice&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;files.autoSave&quot;</span><span class="token operator">:</span> <span class="token string">&quot;onFocusChange&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.unicodeHighlight.ambiguousCharacters&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;vscode-edge-devtools.mirrorEdits&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;oneDarkPro.italic&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;oneDarkPro.bold&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;oneDarkPro.editorTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;One Dark Pro Darker&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.cnblogs.com/maojs/p/13901828.html" target="_blank" rel="noopener noreferrer">\u53C2\u8003</a></p></details><h2 id="\u6211\u7684\u63D2\u4EF6\u5907\u4EFD2020-11-12" tabindex="-1"><a class="header-anchor" href="#\u6211\u7684\u63D2\u4EF6\u5907\u4EFD2020-11-12" aria-hidden="true">#</a> \u6211\u7684\u63D2\u4EF6\u5907\u4EFD2020-11-12</h2><details class="custom-container details"><p><img src="https://s1.ax1x.com/2020/11/11/BjVXtO.png" alt="Vscode \u63D2\u4EF6"></p></details><h2 id="\u73B0\u7528\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u73B0\u7528\u63D2\u4EF6" aria-hidden="true">#</a> \u73B0\u7528\u63D2\u4EF6</h2><details class="custom-container details"><p><img src="https://s4.ax1x.com/2022/02/09/H81man.png" alt="vscode \u63D2\u4EF6"></p></details>`,32),p=[e];function i(r,l){return s(),a("div",null,p)}var u=n(o,[["render",i],["__file","vscode.html.vue"]]);export{u as default};
