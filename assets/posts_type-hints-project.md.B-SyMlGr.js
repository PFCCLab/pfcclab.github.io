import{c as e,k as s,o as a}from"./chunks/framework.dvBHXsAq.js";const t="/assets/typing_ide.Cam_rouQ.png",n="/assets/tensor_pyi.CiRhhzaO.png",l="/assets/hierarchy.FIAm2o23.png",p="/assets/typing_module.D14kdyIz.png",r="/assets/typing_ci.C7y7taHy.png",h="/assets/ci_con.C8s_udTf.png",o="/assets/ci_shift.B3L1KMlB.png",d="/assets/typing_doc.CCLKyBLL.png",c="/assets/tensor_pyi_stub.Cx_PkEfX.png",k="/assets/typing_participants.C01E7pZu.png",b=JSON.parse('{"title":"项目收官 | 为 Paddle 框架 API 添加类型提示（Type Hints）","description":"","frontmatter":{"title":"项目收官 | 为 Paddle 框架 API 添加类型提示（Type Hints）","date":"2024-09-01T00:00:00.000Z","author":{"name":"顺师傅","github":"megemini"}},"headers":[],"relativePath":"posts/type-hints-project.md","filePath":"posts/type-hints-project.md"}'),g={name:"posts/type-hints-project.md"},m=Object.assign(g,{setup(y){return(u,i)=>(a(),e("div",null,i[0]||(i[0]=[s(`<p>【为 Paddle 框架 API 添加类型提示（Type Hints）】的项目总结。</p><p>34 位开发者参与，16 项主任务，337 个子任务，2191 个 API，340+ 个 PR，自 2024 年 4 月起，至 8 月 30 日主体项目完结，近 5 个月 SAN 值归零的夜晚，Type Hints 总归算是有始有终、小有成果，这里就简单回顾与总结一下。</p><h2 id="项目介绍" tabindex="-1">项目介绍 <a class="header-anchor" href="#项目介绍" aria-label="Permalink to &quot;项目介绍&quot;">​</a></h2><p>此次项目是第六期飞桨黑客松引入 Fundable Projects 中的一个：<a href="https://github.com/PaddlePaddle/community/blob/master/hackathon/hackathon_6th/%E3%80%90Hackathon%206th%E3%80%91FundableProject%E4%BB%BB%E5%8A%A1%E5%90%88%E9%9B%86.md#%E4%B8%80%E4%B8%BA-paddle-%E6%A1%86%E6%9E%B6-api-%E6%B7%BB%E5%8A%A0%E7%B1%BB%E5%9E%8B%E6%8F%90%E7%A4%BAtype-hints" target="_blank" rel="noreferrer">为 Paddle 框架 API 添加类型提示（Type Hints）</a>。</p><blockquote><p>Fundable Projects 本身定位具有一定的挑战性，有兴趣的同学可以移步 <a href="https://github.com/PaddlePaddle/Paddle/issues/62908" target="_blank" rel="noreferrer">【Hackathon 6th】Fundable Projects</a></p></blockquote><p>Python 在 3.5 版本通过 <a href="https://peps.python.org/pep-0484/" target="_blank" rel="noreferrer">PEP 484 – Type Hints</a> 正式规范了「类型提示」功能。之后随着相关规范和工具的逐渐完善，类型提示逐渐成为 Python 代码中的标准实践，如今较新的主流库也基本都提供了类型提示。由于 Python 本身类型高度动态化，类型提示的存在可以帮助开发者更快地了解代码的类型信息，提高代码的可读性和可维护性，结合工具还可以提供静态类型检查，在开发阶段就能发现一些潜在的类型错误。Paddle 框架由于历史原因尚未提供类型提示，本项目希望引入尽可能多的对 Paddle 有利的类型提示。</p><p>以一段简单的 Python 代码为例：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> greeting</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Hello&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name</span></span></code></pre></div><p>添加上类型提示之后：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> greeting</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Hello&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name</span></span></code></pre></div><p>正如前文所讲，类型提示功能有诸多好处，如：</p><ul><li>帮助开发者了解代码类型信息</li><li>提高代码的可读性和可维护性</li><li>结合工具在开发阶段发现错误</li></ul><p>而最直观的反映就是，我们在诸如 VSCode 等 IDE 中，能够获取到接口的类型提示，并进行连续推导了：</p><div style="display:flex;justify-content:center;"><figure style="width:80%;"><img src="`+t+`"><figcaption>IDE 中使用类型提示</figcaption></figure></div><p>项目的 RFC <a href="https://github.com/PaddlePaddle/community/pull/858" target="_blank" rel="noreferrer">【Hackathon 6th】为 Paddle 框架 API 添加类型提示（Type Hints）</a> 经过大家讨论之后，将此次项目的目标最终标定为：</p><ul><li><strong>正确完成 Paddle 公开 API 的类型标注，但不声明 Paddle 类型标注的完备性。</strong></li></ul><p>这里需要单独说明一下「标注的完备性」。类型标注是个循序渐进的过程，Paddle 是个相对较大且复杂的项目，除了公开 API 之外，还存在较多非公开 API 与 C++ 接口，此次项目无法保证完成以上所有接口的类型标注，故此，不做 Paddle 类型标注的完备性说明。或者，换个说法，如果熟悉 Python 的类型标注和相关工具的使用，那么，此次项目不保证完成 Paddle 这个项目本身通过类型工具的检查，但是，需要保证外部项目使用 Paddle 时，能够正确识别、提示与检查 Paddle 所提供的公开 API。</p><p>项目中的任务，以任务模块的角度，分解为：</p><ul><li><code>_typing</code> 模块的引入</li><li>CI 流水线的建设</li><li>文档建设</li><li>公开 API 的类型标注</li></ul><p>具体的执行过程，通过 <a href="https://github.com/PaddlePaddle/Paddle/issues/63597" target="_blank" rel="noreferrer">Tracking Issue</a> 跟踪项目进展，分解为：</p><ul><li>第一阶段的前置任务</li><li>第二阶段的代码标注主体任务</li><li>第三阶段的补充测试</li><li>第四阶段的收尾与总结</li></ul><h2 id="项目实施" tabindex="-1">项目实施 <a class="header-anchor" href="#项目实施" aria-label="Permalink to &quot;项目实施&quot;">​</a></h2><h3 id="方案总览" tabindex="-1">方案总览 <a class="header-anchor" href="#方案总览" aria-label="Permalink to &quot;方案总览&quot;">​</a></h3><p>Python 官方提出了三种支持类型提示的 <a href="https://typing.readthedocs.io/en/latest/spec/distributing.html#packaging-typed-libraries" target="_blank" rel="noreferrer">包分发方式</a>：</p><ul><li><code>inline</code>，行内</li><li><code>stubs</code>，文件</li><li><code>third party</code>，第三方</li></ul><p>结合 Paddle 项目本身的结构，这里采用 <strong>Inline type annotation + Stub files in package</strong> 的方案实施类型提示，具体为：</p><ul><li>Python 接口，使用 <code>inline</code> 方式标注</li><li>非 Python 接口，提供 <code>stub</code> 标注文件，并打包在 Paddle 中</li></ul><p>所谓 <code>inline</code> ，是将类型直接标注在源文件的接口定义中，如：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    ...</span></span></code></pre></div><p>直接修改接口代码为：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x: Tensor, name: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; Tensor:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    ...</span></span></code></pre></div><p>而有些接口，Paddle 是通过 pybind 或 patch 的方式提供，则需要增加对应的 <code>stub</code> 文件。最基本的，如 <code>Tensor</code> 类，需要提供 <code>tensor.pyi</code> 文件：</p><div style="display:flex;justify-content:center;"><figure style="width:80%;"><img src="`+n+`"><figcaption>生成 tensor.pyi 文件</figcaption></figure></div><p><code>stub</code> 文件的写法与 Python 代码的写法相同，只是不需要写具体的实现部分。</p><p>另外，由于 Python 的类型标注特性一直在不断完善的过程之中，初期的一些特性很难支撑 Paddle 如此体量的项目，因此，我们提出项目实施过程中的一项基本原则：</p><p><strong>在不违背 Paddle 最低支持版本 3.8 语法的基础上，尽可能使用新版本 typing 特性</strong></p><p>所谓「不违背 Paddle 最低支持版本 3.8 语法」，一个典型的例子是，Python 3.8 版本不能在类型别名中使用 <code>|</code> 代替 UnionType，如：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> typing_extensions </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TypeAlias</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> typing </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Union</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t: TypeAlias </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Union[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>在 Python 3.8 的语法中无法转写为：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> typing_extensions </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TypeAlias</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t: TypeAlias </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> int</span></span></code></pre></div><p>但，我们希望「尽可能使用新版本 typing 特性」，因此，通过 <a href="https://peps.python.org/pep-0563/" target="_blank" rel="noreferrer">PEP 563 – Postponed Evaluation of Annotations</a> ，我们可以在函数签名中使用 Python 3.10 的语法特性，如：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __future__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> annotations</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bar: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    ...</span></span></code></pre></div><p>以上，为本项目实施的总体方案与基本原则，接下来，按照前文所讲的「以任务模块的角度」，简单拆分讲解一下。</p><h3 id="typing-模块的引入" tabindex="-1"><code>_typing</code> 模块的引入 <a class="header-anchor" href="#typing-模块的引入" aria-label="Permalink to &quot;\`_typing\` 模块的引入&quot;">​</a></h3><p>Paddle 中会用到很多公用的标注类型，比如数据布局 <code>NCHW</code>、<code>NHWC</code> 等。<code>_typing</code> 模块的引入，一方面可以统一规范开发者的标注行为，减少维护成本，另一方面，也可以减少各类书写错误。可以将 <code>_typing</code> 模块的地位与 Python 中的 <code>int</code>、<code>str</code> 等基础类型等同，由此，整个 Paddle 项目的标注体系可以分为：</p><ul><li>基础类型</li><li>基础类</li><li>接口</li></ul><p>三个部分。</p><div style="display:flex;justify-content:center;"><figure style="width:80%;"><img src="`+l+'"><figcaption>类型层级结构</figcaption></figure></div><p>具体到 <code>_typing</code> 模块，其本身作为 Paddle 的一个私有模块放置于 <code>python/paddle</code> 目录下：</p><div style="display:flex;justify-content:center;"><figure style="width:80%;"><img src="'+p+`"><figcaption>_typing 模块</figcaption></figure></div><p>其内部包括基础公共类型（<code>basic.py</code>）、数据布局（<code>layout.py</code>）等。</p><p>回顾项目整体实施过程中 <code>_typing</code> 模块的建设与使用，最大的收益是规范了一些公共类型的标注行为。比如，<code>NCHW</code>、<code>NHWC</code> 等这类数据布局，很容易出现书写错误，也确实发现过 Paddle 源码中错误的类型标注问题。再如，Paddle 中的设备类型 <code>CPUPlace</code>、<code>CUDAPlace</code> 等，与 <code>Place</code> ，实际上没有继承关系，这就需要在众多使用 <code>Place</code> 的地方引入 <code>PlaceLike</code> 类型。</p><p>但是，<code>_typing</code> 建设的过程中，也逐渐暴露出一些问题，最主要的有两个：</p><ul><li>粒度控制</li><li>单元测试</li></ul><p>所谓「粒度控制」是指，很难用统一的标注来划分哪些类型需要归类入 <code>_typing</code>，哪些则直接使用 Python 的基础类型进行组合。比如，<code>_typing</code> 中的 <code>IntSequence = Sequence[int]</code>，很多地方都会用到，但，具体到每个接口，也许直接标注 <code>Sequence[int]</code> 会更简单。</p><p>对于 <code>_typing</code> 模块缺少单元测试也是一个比较大的遗憾。这就不得不说明一下我们是如何保证项目类型标注的正确性这个问题了。</p><p>最理想的方式当然是对每个接口做类型检测的单元测试，但是，由于项目本身的人力与时间投入不允许我们这么做，我们选择通过对接口中的「示例代码」做类型检查这种方式。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x: Tensor, name: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; Tensor:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Calculates the natural log of the given input Tensor, element-wise.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    .. math::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        Out = \\ln(x)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Args:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        x (Tensor): Input Tensor. Must be one of the following types: int32, int64, float16, bfloat16, float32, float64, complex64, complex128.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        name (str|None): The default value is None. Normally there is no need for user to set this property. For more information, please refer to :ref:\`api_guide_Name\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Returns:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        Tensor: The natural log of the input Tensor computed element-wise.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Examples:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        .. code-block:: python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            &gt;&gt;&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">import paddle</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            &gt;&gt;&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">x = [[2, 3, 4], [7, 8, 9]]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            &gt;&gt;&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">x = paddle.to_tensor(x, dtype=&#39;float32&#39;)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            &gt;&gt;&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">print(paddle.log(x))</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            Tensor(shape=[2, 3], dtype=float32, place=Place(cpu), stop_gradient=True,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            [[0.69314718, 1.09861231, 1.38629436],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">             [1.94591010, 2.07944155, 2.19722462]])</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;</span></span></code></pre></div><p>也就是上面这段代码中的「Examples」部分。</p><p>由于 Paddle 之前对接口的建设都要求书写「示例代码」，其中包括了接口基本的使用方式，那么，我们就可以通过对其进行类型检查，从而保证 Paddle 整体接口的基础类型检查的正确性了。</p><p>不过，这样会牵扯出另一个问题：接口依赖。</p><p>如果仔细观察上述的示例代码，会发现，其中同时应用到了 <code>paddle.to_tensor</code> 与 <code>paddle.log</code> 两个接口。那么，如果需要保证 <code>paddle.log</code> 这段示例代码检查正确，就需要先把 <code>paddle.to_tensor</code> 这个接口标注正确。类似的依赖问题层出不穷，由于我们使用的工具 <code>mypy</code> 会将没有标注的接口统一识别为 <code>Any</code> ，这就导致，如果 review 不仔细就会放过一些实际上错误的标注问题。为了解决这个问题，一方面，我们在整理项目标注任务的时候，根据优先级进行排序，使相对基础或者简单的接口尽早完成；另一方面，我们单独创建了一个 PR 用于对所有接口做全量检查的监测，也就是说，即使有上述所谓的漏网之鱼，一旦依赖的接口进行了类型标注，不再是 <code>Any</code> ，那么问题则可以在这个 PR 中及时被发现并修正过来。</p><p>以上，便是 <code>_typing</code> 模块的引入以及一系列需要在项目主体标注前需要完成的任务。</p><h3 id="ci-流水线的建设" tabindex="-1">CI 流水线的建设 <a class="header-anchor" href="#ci-流水线的建设" aria-label="Permalink to &quot;CI 流水线的建设&quot;">​</a></h3><p>前面提到，我们使用 <code>mypy</code> 来保证类型标注的准确性，这就涉及到 CI 流水线的建设问题。</p><div style="display:flex;justify-content:center;"><figure style="width:80%;"><img src="`+r+'"><figcaption>CI 流水线</figcaption></figure></div><p>上图简单描述了 CI 流水线的整体流程：</p><ul><li>添加标注</li><li>抽取示例代码</li><li>静态检查</li></ul><p>这里不再详述赘述 CI 流水线的建设过程，主要有两处考量与大家分享：</p><ul><li>性能问题</li><li>流程问题</li></ul><p>所谓「性能问题」，如果使用过 <code>mypy</code> 的同学可能深有体会，这东西太慢了。我们在项目中同样遇到了性能问题，Paddle 中 2000+ 个接口，检查一遍需要 2 个多小时。因此，我们使用进程池的方式对接口做并行检查，也将整体检查时间缩减到 10 分钟左右（虽然有同学反馈，内存占用可能有几十个 GB，whatever，反正是在 CI 上做检查，而且也没有崩，就当是啥都没发生吧……）。</p><div style="display:flex;justify-content:center;"><figure style="width:80%;"><img src="'+h+'"><figcaption>并行处理</figcaption></figure></div><p>另外「流程问题」也是需要重点关注的。正如前文所讲，我们需要对接口做全量检查，但是，具体到每个接口的修改，则只能针对当前接口进行检查，否则问题无法收敛。因此，在整体类型标注完成之前，CI 的行为：</p><ul><li>默认：不检查类型</li><li><code>[Typing]</code> 的 PR 做增量检查；也就是只检查 PR 中修改的接口</li><li><code>[Typing all]</code> 的 PR 做全量检查；也就是检查所有接口</li></ul><p>由此，可以在容忍一定错误的状态下，逐步推进整体项目的进展。</p><p>截止到本文发表为止，CI 已经切换到常规行为：</p><ul><li>默认：PR 做增量检查；也就是只检查 PR 中修改的接口</li><li><code>[Typing]</code> 的 PR 做全量检查；也就是检查所有接口</li></ul><p>这里还需要单独说明一下，实际上，我们更推荐项目做「全量检查」作为默认行为，但是，由于全量检查对于资源的消耗实在太大，这里才退而求其次使用增量检查。</p><div style="display:flex;justify-content:center;"><figure style="width:80%;"><img src="'+o+'"><figcaption>CI 流水线切换</figcaption></figure></div><h3 id="文档建设" tabindex="-1">文档建设 <a class="header-anchor" href="#文档建设" aria-label="Permalink to &quot;文档建设&quot;">​</a></h3><p>文档建设是另一个需要单独关注的问题。Python 的类型标注虽然仍然是 Python 语言的一部分，但是，对于大部分没有接触过的同学来说，这东西就像是 Python 和 C++ 或者 Rust 的结合体。而且，类型标注本身不仅仅需要对标注熟悉，还需要明确各个接口的实际运行过程才能完成一个正确的标注过程。代码的运行流程需要同学在标注的过程中层层分析，而文档建设需要做的，相当于一个引子，引导大家进入到 Paddle 类型标注的最佳实践中来。</p><p>这里涉及到几个问题：</p><ul><li><code>What</code>：Paddle 的类型标注关注什么</li><li><code>How</code>：Paddle 的类型标注怎么做</li></ul><p>首先 <code>What</code>，也就是明确任务的具体范围，如，公开 API ，函数的 signature，文档等。其次 <code>How</code>，也就是 Paddle 做类型标注的最佳实践。比如「使用 PEP 563，延迟类型注解计算」。（这里有更详细的文档 <a href="https://www.paddlepaddle.org.cn/documentation/docs/zh/develop/dev_guides/style_guide_and_references/type_annotations_specification_cn.html" target="_blank" rel="noreferrer">《Python 类型提示标注规范》</a>）</p><p>文档的建设也不是一蹴而就的，由于类型标注这个主题本身就非常庞大，我们的做法是，先在「Tracking Issue」中添加一个「Q&amp;A」章节，让大家有个基础的入手指南，后续再逐步完善，并最终完成文档，形成 Paddle 项目本身的最佳实践。</p><div style="display:flex;justify-content:center;"><figure style="width:80%;"><img src="'+d+'"><figcaption>类型标注文档</figcaption></figure></div><h3 id="公开-api-的类型标注" tabindex="-1">公开 API 的类型标注 <a class="header-anchor" href="#公开-api-的类型标注" aria-label="Permalink to &quot;公开 API 的类型标注&quot;">​</a></h3><p>这个任务是整个项目的主体任务，可以根据参与者的范围不同划分为：</p><ul><li>内部，实现辅助的 <code>stub</code> 文件</li><li>开放，实现其他公开接口的类型标注，也就是 <code>Inline type annotation</code>；占主要工作部分。</li></ul><p>我们在开展主要的类型标注任务之前，首先在内部完成了必要的 <code>stub</code> 文件的生成与编写任务。</p><p>如前文所述，Paddle 很多接口是通过 pybind 或 patch 的方式对外开放的，这里最基础，也是最主要的是 <code>Tensor</code> 的实现。我们没有借鉴 <code>PyTorch</code> 等框架的做法使用「静态解析」的方式生成 <code>tensor.pyi</code> 文件，而是「动态解析」：</p><div style="display:flex;justify-content:center;"><figure style="width:80%;"><img src="'+c+'"><figcaption>静态解析 vs 动态解析</figcaption></figure></div><p>如上图所示，「静态解析」是指，通过解析 <code>yaml</code> 的配置项，结合模板与硬编码的方式生成 <code>stub</code> 文件。这样做的好处是，不会产生运行时依赖，也就是说，可以在项目编译的任意阶段导入。但是，这样的做法极其繁琐，非常容易出错，而且后续维护也会异常困难。由此，我们采用「动态解析」的方式，即，在项目编译的完成阶段，直接 <code>import paddle</code> ，再把相应的接口填入模板中一并打包进行分发。Python 目前最常采用，也是 Paddle 主要的分发方式是 <code>wheel</code> ，也就是将编译与打包分离，这也为「动态解析」提供了可行性。</p><p><code>_typing</code> 模块导入、CI 流水线建设、文档建设、<code>stub</code> 文件的生成，以上诸多任务的目的，便是推动「公开接口的类型标注」这个主体任务的进行。</p><p>借助飞桨的完善的开源社区建设，6 月初，我们开放了 <a href="https://github.com/PaddlePaddle/Paddle/issues/65008" target="_blank" rel="noreferrer">[Type Hints] 为公开 API 标注类型提示信息</a> 这个主体标注任务。任务划分为三批，共 337 个子任务，前后有 30 多位开发者参与，完成了 Paddle 的 2000 多个 API 的类型标注，PR 数量有 300 多个。</p><blockquote><p>说明：这里 API 的数量以函数或方法为计数单位，如，一个类有两个公开接口，则计数为 2 。</p></blockquote><p>项目的整体工程量，不应该只以数量的多少进行计算，因为，这个任务不仅仅是数量多，难度也不是修改一两个字符这么简单。</p><p>这里就不得不再提一下，很多人认为 Python 太简单没什么技术难度这个认知偏见。Python 从编程语言的学习曲线上来说，确实适合新手入门，但是，写代码或者编程，实际上是个工程问题，而不是简单的代码堆砌。在整个类型标注的任务过程中，我们发现太多的，不仅仅是编码习惯上的问题，更是工程问题，从基础上影响了 Paddle 这个项目的构建。比如上面提到的 <code>Place</code> 与 <code>CPUPlace</code> 的继承关系问题；再如，项目中用到了诸多的枚举方式，而没有使用 <code>enum</code> ；各个接口所使用的参数类型、范围不一致问题更是比比皆是。</p><p>说回项目的难度问题，由于 Python 语言的动态性，标注的过程中虽然有文档可以参考，但仍然需要人工逐个进行代码的跟踪，才能对具体的类型较为有把握。一旦接口的调用涉及到私有 API ，跟踪起来则尤为困难。这也是为何到目前为止，仍然没有一款工具，可以很好的辅助人工进行类型标注这个问题的根本原因。就算是目前大火的大模型也无法取代人工的标注工作，修改大模型的错误，与人工直接标注的工作量基本相当。</p><p>我们这里以 <code>10</code> 分钟一个接口（修改 + review）的工作量进行计算：</p><p><strong>10 min/task * 2191 task / 60 min / 8 hour ≈ 46 day</strong></p><p>也就是大约两个月的工作量，可以大体上估算所需投入的成本。</p><p>开源社区的介入，一方面缓解了项目的人力问题，使项目的完成成为可能；另一方面，也让更多的开发者接触到了类型标注这个特性。未来，Paddle 应该会将类型标注作为标准的编码行为，早点入坑也不至于开发的时候再抓瞎。</p><div style="display:flex;justify-content:center;"><figure style="width:80%;"><img src="'+k+'"><figcaption>开源贡献者</figcaption></figure></div><h2 id="项目结语" tabindex="-1">项目结语 <a class="header-anchor" href="#项目结语" aria-label="Permalink to &quot;项目结语&quot;">​</a></h2><p>将近 5 个月的时间，痛苦、喜悦、烦恼或者豁然开朗都已成过去，有始有终，项目总算有个交代，正如《黑神话：悟空》，完成比完美更重要。</p><p>如果说未来有什么计划，完善私有接口的标注、完善测试用例、完善文档与最佳实践，等等……</p><p>要做的可以有很多，而对于还没有接触过类型标注的同学，或者还在犹豫是否使用类型标注这个特性，今天突然想到一个不是很雅的比喻：</p><p>上完厕所，走出十丈远，突然意识到自己没有擦屁股……你要如何做呢？</p><p>最后，感谢飞桨各位大佬的支持，感谢开源社区的贡献！！！</p><p>导师：</p><ul><li>@<a href="https://github.com/SigureMo" target="_blank" rel="noreferrer">SigureMo</a></li></ul><p>开发者：</p><ul><li>@<a href="https://github.com/zrr1999" target="_blank" rel="noreferrer">zrr1999</a></li><li>@<a href="https://github.com/gouzil" target="_blank" rel="noreferrer">gouzil</a></li><li>@<a href="https://github.com/Asthestarsfalll" target="_blank" rel="noreferrer">Asthestarsfalll</a></li><li>@<a href="https://github.com/SigureMo" target="_blank" rel="noreferrer">SigureMo</a></li><li>@<a href="https://github.com/ooooo-create" target="_blank" rel="noreferrer">ooooo-create</a></li><li>@<a href="https://github.com/megemini" target="_blank" rel="noreferrer">megemini</a></li><li>@<a href="https://github.com/liyongchao911" target="_blank" rel="noreferrer">liyongchao911</a></li><li>@<a href="https://github.com/DrRyanHuang" target="_blank" rel="noreferrer">DrRyanHuang</a></li><li>@<a href="https://github.com/enkilee" target="_blank" rel="noreferrer">enkilee</a></li><li>@<a href="https://github.com/gsq7474741" target="_blank" rel="noreferrer">gsq7474741</a></li><li>@<a href="https://github.com/sunzhongkai588" target="_blank" rel="noreferrer">sunzhongkai588</a></li><li>@<a href="https://github.com/Liyulingyue" target="_blank" rel="noreferrer">Liyulingyue</a></li><li>@<a href="https://github.com/86kkd" target="_blank" rel="noreferrer">86kkd</a></li><li>@<a href="https://github.com/NKNaN" target="_blank" rel="noreferrer">NKNaN</a></li><li>@<a href="https://github.com/tlxd" target="_blank" rel="noreferrer">tlxd</a></li><li>@<a href="https://github.com/Luohongzhige" target="_blank" rel="noreferrer">Luohongzhige</a></li><li>@<a href="https://github.com/Fripping" target="_blank" rel="noreferrer">Fripping</a></li><li>@<a href="https://github.com/crazyxiaoxi" target="_blank" rel="noreferrer">crazyxiaoxi</a></li><li>@<a href="https://github.com/Caogration" target="_blank" rel="noreferrer">Caogration</a></li><li>@<a href="https://github.com/BHmingyang" target="_blank" rel="noreferrer">BHmingyang</a></li><li>@<a href="https://github.com/Lans1ot" target="_blank" rel="noreferrer">Lans1ot</a></li><li>@<a href="https://github.com/Whsjrczr" target="_blank" rel="noreferrer">Whsjrczr</a></li><li>@<a href="https://github.com/uanu2002" target="_blank" rel="noreferrer">uanu2002</a></li><li>@<a href="https://github.com/MikhayEeer" target="_blank" rel="noreferrer">MikhayEeer</a></li><li>@<a href="https://github.com/Jeff114514" target="_blank" rel="noreferrer">Jeff114514</a></li><li>@<a href="https://github.com/haoyu2022" target="_blank" rel="noreferrer">haoyu2022</a></li><li>@<a href="https://github.com/Betelgeuse" target="_blank" rel="noreferrer">Betelgeu</a></li><li>@<a href="https://github.com/Turingg" target="_blank" rel="noreferrer">Turingg</a></li><li>@<a href="https://github.com/inaomIIsfarell" target="_blank" rel="noreferrer">inaomIIsfarell</a></li><li>@<a href="https://github.com/Wizard-ZP" target="_blank" rel="noreferrer">Wizard-ZP</a></li><li>@<a href="https://github.com/Sekiro-x" target="_blank" rel="noreferrer">Sekiro-x</a></li><li>@<a href="https://github.com/successfulbarrier" target="_blank" rel="noreferrer">successfulbarrier</a></li><li>@<a href="https://github.com/MufanColin" target="_blank" rel="noreferrer">MufanColin</a></li><li>@<a href="https://github.com/luotao1" target="_blank" rel="noreferrer">luotao1</a></li></ul><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://github.com/PaddlePaddle/community/pull/858" target="_blank" rel="noreferrer">【Hackathon 6th】为 Paddle 框架 API 添加类型提示（Type Hints） RFC community#858</a></li><li><a href="https://github.com/PaddlePaddle/Paddle/issues/63597" target="_blank" rel="noreferrer">为 Paddle 框架 API 添加类型提示（Type Hints）Tracking Issue</a></li><li><a href="https://github.com/PaddlePaddle/Paddle/issues/65008" target="_blank" rel="noreferrer">[Type Hints] 为公开 API 标注类型提示信息</a></li></ul>',116)])))}});export{b as __pageData,m as default};