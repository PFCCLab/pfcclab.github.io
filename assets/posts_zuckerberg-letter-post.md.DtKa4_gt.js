import{_ as t,c as e,k as r,o}from"./chunks/framework.dvBHXsAq.js";const l="/assets/zuck_point.DdBiB58Z.jpg",i="/assets/robin_point.CkKI1JvS.jpeg",A=JSON.parse('{"title":"【睁眼看世界 🌍】｜扎克伯克写给开发者的一封信：开源 AI 是未来的前进之路","description":"","frontmatter":{"title":"【睁眼看世界 🌍】｜扎克伯克写给开发者的一封信：开源 AI 是未来的前进之路","date":"2024-10-17T00:00:00.000Z","author":{"name":"孙钟恺","github":"sunzhongkai588"}},"headers":[],"relativePath":"posts/zuckerberg-letter-post.md","filePath":"posts/zuckerberg-letter-post.md"}'),n={name:"posts/zuckerberg-letter-post.md"};function p(s,a,h,c,u,b){return o(),e("div",null,a[0]||(a[0]=[r('<p>本篇文章是小扎同志在 Llama 3.1 发布时给所有开发者写的“一封信”，全文都在阐述<strong>开源对于 AI 大模型发展的重要性</strong>。而比较有趣的是，在类似的时间点，我们的厂长李彦宏（Robin）在对外发布会和内网里发表过<strong>截然相反</strong>的观点，即“<strong>开源大模型会越来越落后</strong>”。在这俩种观点的背后，其实也蕴含着中、西方文化的差异，在文章结尾，我会简单聊聊这两种观点的碰撞和思考。</p><hr><blockquote><p>原文：<a href="https://about.fb.com/news/2024/07/open-source-ai-is-the-path-forward/" target="_blank" rel="noreferrer">https://about.fb.com/news/2024/07/open-source-ai-is-the-path-forward/</a> <br> ✍️ 写于 2024 年 7 月 23 日 <br> By 马克·扎克伯格，创始人兼 CEO</p></blockquote><h2 id="开源-ai-是未来的前进之路" tabindex="-1">开源 AI 是未来的前进之路 <a class="header-anchor" href="#开源-ai-是未来的前进之路" aria-label="Permalink to &quot;开源 AI 是未来的前进之路&quot;">​</a></h2><p>在高性能计算的早期阶段，当时大部分科技公司都大力投资于开发自己的闭源版本 Unix。在那个时代，是很难想象可以有其他方法来发展出先进的软件。然而，最终是开源 Linux 脱颖而出获得了广泛的认可 —— 起初是因为它允许开发者可以按自己的想法随意修改其代码，并且更加省钱。而随着时间的推移，它变得更加先进、更加安全，并且拥有一个比任何闭源 Unix 更广泛的生态，能够支持更多功能。如今，Linux 已经成为云计算和大多数移动设备操作系统的行业标准基础——并且我们都受益于其衍生的优秀产品。</p><p>我相信人工智能将以类似的方式发展。如今，几家科技公司正在开发领先的闭源模型，但是开源模型正在迅速缩小差距。去年，Llama 2 只能与过时的模型相比较，而在今年，Llama 3 已经能与最先进的模型进行竞争，并且在某些方面处于领先。明年开始，我们预计未来的 Llama 系列模型将成为行业内最先进的模型。但在此之前，Llama 已经在开放性、可修改性和成本效益方面处于领先地位。</p><p>今天，我们正在迈向开源人工智能成为行业标准的下一步。我们发布了 Llama 3.1 405B，这是第一个达到业内前沿水平的开源人工智能模型，同时还推出了新的改进版 Llama 3.1 70B 和 8B 模型。相对闭源模型，除了拥有明显更好的性价比之外，405B 模型开源的事实将使其成为进行微调和蒸馏小模型的最佳选择。</p><p>除了发布模型，我们还与一系列公司合作，推动更广泛的生态建设。</p><ul><li>亚马逊、Databricks 和 NVIDIA 正在推出一整套服务，以支持开发者微调和蒸馏他们自己的模型。</li><li>像 Groq 这样的初创公司已经为所有新模型构建了低延迟、低成本的推理服务。</li><li>模型将在所有主流云厂商服务中可用，包括 AWS、Azure、Google、Oracle 等。</li><li>Scale.AI、DELL、德勤等公司已准备好帮助企业部署 Llama，并使用自有数据训练定制模型。</li></ul><p>随着社区发展和更多公司开发新服务，我们可以共同将 Llama 打造为行业标准，并让 AI 普惠于每个人。</p><p>Meta 致力于开源人工智能。稍后我将阐述<strong>为什么我认为开源是最好的开发栈，为什么开源 Llama 对 Meta 有利，以及为什么开源 AI 对世界有益</strong>。同时也正因如此，开源社区将会长期存在。</p><h3 id="为什么开源-ai-对开发者有利" tabindex="-1">为什么开源 AI 对开发者有利 <a class="header-anchor" href="#为什么开源-ai-对开发者有利" aria-label="Permalink to &quot;为什么开源 AI 对开发者有利&quot;">​</a></h3><p>当我与全球的开发者、CEO、政府官员交流时，通常会听到几个主题：</p><ul><li><strong>我们需要训练、微调和蒸馏我们自己的模型。</strong> 每个组织都有不同的需求，不同规模的模型能够最好的满足这些需求，并且这些模型使用他们自己的特定数据进行训练或微调。端侧任务和分类任务需要小的模型，而更复杂的任务则需要更大的模型。现在，你可以使用最先进的 Llama 模型，使用自己的数据继续进行训练，然后将其蒸馏成最合适的模型尺寸——无需我们或任何其他人看到你的数据。</li><li><strong>我们需要掌控自己的命运，而不是被一个闭源模型厂商所束缚。</strong> 许多组织不希望依赖他们无法自行运行和控制的模型。他们不希望闭源模型厂商能够更改自己的模型、修改使用条款，甚至完全停止服务。他们也不希望被束缚在拥有模型专属权的某单一云服务厂商中。开源使得生态圈内的公司拥有兼容的工具链，你可以轻松的在他们之间横跳。</li><li><strong>我们需要保护我们自己的数据。</strong> 许多组织需要处理敏感的数据，这些数据需要保密，并且不能通过云 API 传输到闭源模型。而其他有些组织仅仅只是不信任闭源模型厂商提供的数据。开源解决了这些问题，你可以在任何地方运行这些模型。另外开源软件由于开发过程更加透明，往往也更加安全，公众也认同这一观点。</li><li><strong>我们需要一个高效、可负担得起的模型。</strong> 开发者可以在自己的基础设施上以闭源模型（如 GPT-4o）大约 50% 的成本运行 Llama 3.1 405B 进行推理，无论是在线还是离线推理任务。</li><li><strong>我们想投资于一个能长期成为事实标准的生态。</strong> 许多人看到开源模型比闭源模型发展得更快，他们更希望在能够长期带来巨大优势的架构上建立自己的系统。</li></ul><h3 id="为什么开源-ai-对-meta-有利" tabindex="-1">为什么开源 AI 对 Meta 有利 <a class="header-anchor" href="#为什么开源-ai-对-meta-有利" aria-label="Permalink to &quot;为什么开源 AI 对 Meta 有利&quot;">​</a></h3><p>Meta 的商业模式是为用户建立最佳的体验和服务。为了实现这一目标，我们必须确保自己始终能够获得最先进的技术，并且不会被束缚在竞争对手的闭源生态系统中，这些系统可能会限制我们的产品创新。</p><p>我的一个重要经历是，在建设我们的服务时受到了 Apple 平台的诸多限制，从苹果的开发者税，到他们施加的任意规则，再到阻止我们推出的所有产品创新。显然，如果我们能够构建最好的产品，并且竞争对手不进行限制，Meta 和许多其他公司都将能够为用户建设更好的服务。从哲学层面上讲，这正是我如此坚定不移的为下一代 AI 和 AR/VR 领域建立开源生态的主要原因</p><p>人们经常问我是否担心开源 Llama 会让我们失去技术优势，但我认为这种担忧忽略了几个重要因素：</p><ul><li>首先，为了确保我们拥有最先进的技术，并且不会被长期束缚在某一封闭生态里，Llama 需要发展成为一个完整的生态系统，包括开发工具、效率提升、芯片优化和其他集成软件。如果我们是唯一使用 Llama 的公司，这种生态系统就不会发展，我们将不会比当初的闭源 Unix 好到哪去。</li><li>其次，我预计 AI 的发展将持续伴随着激烈的竞争，这意味着在当前时点开源某个模型，并不会使我们在推出下一个最佳模型时失去优势。Llama 成为行业标准的路径是一代又一代的保持竞争力、效率和开放性。</li><li>第三，Meta 与闭源模型厂商的的关键区别在于，出售 AI 模型的访问权并不是我们的商业模式。<strong>这意味着公开发布 Llama 不会削减公司的收入、可持续性或者投资 research 的能力</strong>，而闭源厂商则完全相反（这也是为什么几家闭源厂商一直在积极游说政府反对开源的原因之一）</li><li>最后，Meta 拥有着深耕开源项目的悠久历史和成功经验。通过 Open Compute Project 共享我们的服务器、网络和数据中心设计，以及让供应链标准化了我们的设计，我们节省了数十亿美元。同时我们也受益于开源生态的创新，如 PyTorch、React 以及其他业内领先的开源项目。当我们长期坚持开源的方法时，它始终是对我们有利的。</li></ul><h3 id="为什么开源-ai-对全世界有利" tabindex="-1">为什么开源 AI 对全世界有利 <a class="header-anchor" href="#为什么开源-ai-对全世界有利" aria-label="Permalink to &quot;为什么开源 AI 对全世界有利&quot;">​</a></h3><p>我坚信在实现 AI 光明前景的过程中，开源是不可或缺的一环。AI 技术相比任何其他现代技术都展现出了更大的潜力，可以提升人类的生产力、创造力和生活质量，加速经济增长，同时推动医学和科学研究领域的进步。而开源将确保全球更多人能够获得 AI 带来的好处和机会，避免权力集中在少数公司手中，使得技术能够更公平、更安全地服务于整个社会。</p><p>关于开源 AI 模型的安全性一直存在争论，而我的观点是，开源 AI 将比闭源更安全。我认为政府将会认识到开源是符合他们的自身利益的，因为开源会促进全世界的繁荣和安全。</p><p>我对安全性的认知是，我们需要防范两类危害： unintentional and intentional （非故意危害和故意危害）。非故意危害指设计和运行 AI 系统的人没有故意造成伤害的意图，但该系统仍然可能无意中引发一些负面后果。例如，现代 AI 模型可能无意中给出错误的健康建议。或者在未来场景中，有些人担心模型可能会无意中自我复制或过度追求目标，进而对人类造成危害。故意危害则是指恶意使用 AI 模型来造成危害的行为。</p><p>值得注意的是，人们对 AI 的担忧主要集中在非故意危害方面——从 AI 系统对数十亿使用者的影响，到人类未来面临的许多真正灾难性的科幻场景。在这方面，开源技术明显是更安全的，因为其系统更加透明，能够经得起更广泛的审查。从历史上看，正是由于这些原因，开源软件在安全性方面表现更为出色。同样，使用像 Llama Guard 这样安全系统的 Llama 模型，可能比闭源模型更安全和可靠。因此，大多数关于开源 AI 安全性的讨论都集中在故意危害上。</p><p>我们的安全流程包括严格的测试和红队攻击，以评估我们的模型是否具有造成实质性危害的能力，目的是在发布模型之前减轻风险。由于这些模型是开源的，任何人都可以自行进行测试。我们必须牢记，这些模型是通过互联网上已有的信息进行训练的。因此在考虑危害时，应该从模型造成的危害，是否能够比从 Google 或其他搜索结果中快速获取的信息中造成的危害更大这一点开始。</p><p>在思考关于故意危害的问题时，将个人或小规模单位能够做的事情，与像国家等这类拥有大量资源的大型单位能够做的事情区分开来，是非常有帮助的。</p><p>未来的某个时刻，个别不法分子可能会利用 AI 模型的智能，从互联网上的信息中制造出全新的危害。在那时，“权力”的平衡将对 AI 安全至关重要。我认为，生活在一个 AI 被广泛部署的世界中会更好，因为这样一来，实力更强的大型机构可以制约小型的不法分子。这种方式与我们在社交网络上管理安全的方式类似——我们更强大的 AI 系统能够识别并阻止那些使用小型 AI 系统的低级别威胁者。更广泛地来看，大型机构大规模部署 AI 将会促进社会的安全和稳定。只要大家都能获得同代的 AI 模型（开源技术有助于实现这一点），拥有更多计算资源的政府和机构就能够对抗那些计算资源较少的不法分子。</p><p>接下来的问题是，…… <strong>【请自行批判性阅读该段原文】</strong>。</p><p>在你展望未来的机遇时，请记住，当今大多数行业领先的科技公司和科学研究都是建立在开源软件之上的。下一代企业和科学研究也将基于开源 AI，只要我们共同投入其中。这包括刚刚起步的初创企业，以及那些因缺乏资源无法从头开始开发 SOTA AI 的大学和国家。</p><p>归根结底，开源 AI 是我们充分利用这项技术、为世界上所有人创造最大经济机遇和安全性的最佳途径。</p><h3 id="让我们共同构建这一切" tabindex="-1">让我们共同构建这一切 <a class="header-anchor" href="#让我们共同构建这一切" aria-label="Permalink to &quot;让我们共同构建这一切&quot;">​</a></h3><p>在过去，Meta 是为自身开发这一系列 Llama 模型，然后对外发布，但并未专注于构建更广泛的生态系统。然而在这次发布中，我们采用了不同的方式。我们正在内部组建团队，以支持尽可能多的开发者和合作伙伴使用 Llama，并积极建立合作关系，使生态系统中的更多公司也能够为其客户提供独特的功能。 我相信，Llama 3.1 的发布将成为行业的一个转折点，届时大多数开发者将主要采用开源方案，而这一趋势只会向前加速。我希望你能加入我们，共同推动 AI 的普惠发展，让全世界都能享受到这项技术的益处。</p><p>💪, MZ</p><hr><h3 id="编者碎碎念" tabindex="-1">编者碎碎念 <a class="header-anchor" href="#编者碎碎念" aria-label="Permalink to &quot;编者碎碎念&quot;">​</a></h3><p>看完小扎同志写的信，再聊聊厂长 Robin 的观点。在此我就不细说具体的理念，而是做个总结和对比。</p><p><img src="'+l+'" alt="zuck"><img src="'+i+'" alt="robin"></p><blockquote><p>厂长的公开言论可以看 <a href="https://www.163.com/dy/article/JBSQH9HD0511DSSR.html" target="_blank" rel="noreferrer">https://www.163.com/dy/article/JBSQH9HD0511DSSR.html</a> （随便找的）</p></blockquote><h4 id="robin-观点-1-论效率-开源模型没法跟闭源模型比" tabindex="-1">Robin 观点 1：论效率，开源模型没法跟闭源模型比 <a class="header-anchor" href="#robin-观点-1-论效率-开源模型没法跟闭源模型比" aria-label="Permalink to &quot;Robin 观点 1：论效率，开源模型没法跟闭源模型比&quot;">​</a></h4><ul><li><p>论据：闭源（商业）模型由于其共享资源和集中的管理，即通过大规模用户共享资源实现研发和算力成本的分摊，从而能确保 AI 系统持续优化和商业应用上的高效率，因此闭源（商业）模型在高效利用 GPU 和降低推理成本方面更具优势。例如，百度文心大模型每天调用超过 6 亿次，GPU 使用率超过 90%，开源模型是无法达到同样的规模和效率。</p><blockquote><p>小扎论点：随着时间推移，开源模型的成本效益会逐渐体现。Meta 开源的 Llama 3.1 系列在性能上已经可以与一些闭源模型竞争，并且比闭源模型在微调和蒸馏方面更具灵活性和经济性。开源模型能够建立一个更强大的生态系统，通过与合作伙伴（如 AWS、NVIDIA、Azure 等）紧密合作，将为开发者提供更多工具、资源和灵活性，推动行业标准的建立。</p></blockquote></li></ul><h4 id="robin-观点-2-开源美好-的逻辑在大模型时代不成立" tabindex="-1">Robin 观点 2：“开源美好”的逻辑在大模型时代不成立 <a class="header-anchor" href="#robin-观点-2-开源美好-的逻辑在大模型时代不成立" aria-label="Permalink to &quot;Robin 观点 2：“开源美好”的逻辑在大模型时代不成立&quot;">​</a></h4><ul><li><p>论据：开源的“美好”在大模型时代不再适用，因为在过去，开源系统如 Linux 代表了“免费”和“低成本”，在没有算力的制约下开发者能通过查看源代码不断改进。然而，在大模型时代，关键瓶颈是算力，开源无法免费提供算力来推动发展。因此开源大模型的主要价值体现在科研和教育领域，而不是商业应用中。因为科研需要因为需要搞清楚大模型的工作原理，而在商业应用中闭源模型能够更好地控制成本和效率，从而在市场上占据主导、建立商业优势，高效的算力管理和集中式运营才是未来的发展方向。</p><blockquote><p>小扎论点：我们不缺钱，开不开源大模型也不会影响我的主营业务，我就是要开源，让我们的模型有更多人用，更多人开发迭代，更多人加入我们的生态，确保自己处于行业领先。</p></blockquote></li></ul><h4 id="结论-表面是理念的分歧-但实际上是公司商业策略的差异" tabindex="-1">结论：表面是理念的分歧，但实际上是公司商业策略的差异 <a class="header-anchor" href="#结论-表面是理念的分歧-但实际上是公司商业策略的差异" aria-label="Permalink to &quot;结论：表面是理念的分歧，但实际上是公司商业策略的差异&quot;">​</a></h4><p>可以看到，Robin 更关注商业效率和闭源模型的市场应用，而扎克伯克则看重开源带来的长期生态建设和创新潜力。</p><p>往大的说，这两位科技领袖可能也反映了他们对 AI 未来发展的不同理解：Robin 代表着通过集中资源快速迭代获取竞争优势的中国模式，而小扎同志则提倡一种去中心化、开放合作的西方创新生态。</p><p>但往小的说，可能最根本的原因，就像小扎同志说的，公开发布 Llama 不会削减 Meta 公司的收入。但对于百度，公开发布开源大模型，可能真的会影响到自己的搜索业务收入。</p><hr><h2 id="写在最后" tabindex="-1">写在最后 <a class="header-anchor" href="#写在最后" aria-label="Permalink to &quot;写在最后&quot;">​</a></h2><p>【睁眼看世界 🌍】专栏旨在打破知识边界，通过将国际上的优秀文章、会议精华以及高质量学习资料翻译成中文，使得这些宝贵的知识资源能够为广大中文读者所共享，而不是局限于国内的小圈子。</p><p>对于对此有兴趣、愿意贡献力量的开发者，也可以联系<a href="https://github.com/sunzhongkai588" target="_blank" rel="noreferrer">孙师傅</a>，一同完善这个栏目，共同促进知识的自由流动和技术的共同进步。</p>',50)]))}const d=t(n,[["render",p]]);export{A as __pageData,d as default};