const projects=[
  {
    "title": "灵芽大模型 / LingAgent",
    "category": "AI 产品经理 · 2025.09 — 至今",
    "description": "主诉解析与方案生成：针对医生口语化主诉难以结构化的问题，设计从主诉解析、治疗计划生成到可追问、可修改的对话流程，并提供 3 套治疗方案对比。\n\n语义编辑与上下文：引入 MCP，将自然语言映射为分步、附件调整等 3D 编辑动作。进一步梳理 Agent 需要感知的方案状态、数据来源与取值优先级，与研发定义按需调用的工具接口及适用边界，让 Agent 读取当前总分步数等方案信息。\n\n验证结果：内部受控测试（6 位医生、1200 例病例）中，方案初稿产出总时长（含 AI 加载与医生调整）从超过 30 分钟降至 15 分钟以内；医生对 AI 方案的直接采纳率从 56% 提升至 85%（提升 29 个百分点）。\n\n上线后验证：通过埋点监控用户行为漏斗，面向新手医生对比对话录入与规则录入。A/B 测试中，信息录入耗时从平均 5 分钟降到 2 分钟以内，据此迭代对话逻辑和操作路径。",
    "scope": "Agent 产品规划 / Prompt 工程 / MCP 工具与上下文 / 可解释交互 / 埋点与 A/B 测试"
  },
  {
    "title": "3D 方案设计 / SaaS & AI+CAD",
    "category": "产品经理 & 项目负责人 · 2024.01 — 至今",
    "description": "项目背景：面向口腔正畸的 3D 方案设计软件，重点解决复杂业务流程、双端协同与数据流转问题。\n\n产品闭环：从 API 演示半成品出发，主导用户动线重构，规划“模型预处理 → 排牙 → 生产后处理”的完整链路，新增分牙、附件、导出等 6 个核心功能节点，推动首批客户签约。\n\n双端协同与数据规范：设计“医生端 + 技工端”协同架构、病例数据分层结构与实时同步机制，建立病例数据从采集、结构化到复用的全链路规范。\n\n商业化成果：已签署 10+ 份商业合作合同，4 家客户月用量达 1000+ 例，1 家超 3000 例。\n\n用户与市场研究：通过试用产品、官网与行业资料研究、实地咨询等方式，分析 20+ 款竞品，重点深挖 5+ 款，输出 30+ 份竞品分析报告。作为产品代表参加迪拜 AEEDC、美国 AAO 等展会，独立负责英文宣讲与答疑，累计接触潜在客户 50+ 家。",
    "scope": "产品重构 / 医生与技工协同 / 病例数据分层 / 数据流转规范 / 商业化交付"
  },
  {
    "title": "Looper / 医学影像采集",
    "category": "产品经理 · 2025.01 — 2026.01",
    "description": "产品与硬件验证：面向连锁口腔诊所集团，设计替代传统单反的影像采集设备。比较工业级与消费级摄像头在不同焦距下的成像效果，协助供应链完成样机。\n\n操作流程：串联影像采集、本地预览和自动上传云端，降低一线操作成本。负责内嵌软件功能定义和验收，协调解决摄像头驱动兼容与压缩延迟。\n\n交付结果：设备按期交付，在 3 家试点诊所部署，日均采集超过 200 人次。",
    "scope": "采集流程设计 / 影像质量与一致性 / 硬件产品落地"
  },
  {
    "title": "灵芽云 / 算法能力开放平台",
    "category": "客户经理 / 技术接口人 · 2024.01 — 至今",
    "description": "接口标准化：作为商务与研发之间的桥梁，将保持器自动化生产、2D 口腔影像 AI 分析等核心算法封装为标准化 API，制定接口数据格式与交付验收标准。\n\n客户交付：面向客户提供定制化解决方案，连接研发能力与业务需求。促成保持器自动化生产 API 与多家齿科加工厂签约，以及 2D 口腔影像 AI 分析 API 与多家齿科设备厂商签约。\n\n跨团队交付：协调商务、运维、基础设施与算法研发，解决客户对接中的传输协议及数据安全问题，平均响应时间少于 2 小时。",
    "scope": "接口数据格式 / API 方案 / 交付验收标准 / 客户技术对接"
  },
  {
    "title": "算法医学验证与评测体系",
    "category": "产品经理 / 验证负责人 · 2024.06 — 至今",
    "description": "规则参数化：与临床专家把分步设计经验拆成可核对的每步移动量与适用边界，并推动算法接入配置。4 位医生和 2 位技工对 50 例病例的新旧方案进行盲测（共 600 例次），合格率从 58.62% 提升到 89.66%，平均分从 5.38 提升到 8.07。片切规则落地后，抽查 100 例病例，均符合临床医生要求。\n\n可用性评测：按完全可用、可用但有改进空间、不可用三级定义交付标准，用完全可用率和可用率做轮次对比。按交付节点与病例类型归因，识别需要优先优化的薄弱场景。\n\n验证与带教：建立跑查、记录、汇总、复盘流程，输出记录字段和问题分类模板。带教 6 批医学评审实习生，覆盖 300+ 独立病例，累计跑查 2000+ 例次（含多版本与多环境重跑）。",
    "scope": "专家协同 / 规则参数化 / 盲测设计 / 可用性标准 / 问题归因 / 评审带教"
  }
];
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});document.querySelectorAll('.project').forEach(p=>p.hidden=button.dataset.filter!=='all'&&p.dataset.category!==button.dataset.filter)}));
const dialog=document.querySelector('dialog');document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{const p=projects[button.dataset.project];document.querySelector('#detail-art').replaceChildren(button.querySelector('.art').cloneNode(true));document.querySelector('#detail-title').textContent=p.title;document.querySelector('#detail-category').textContent=p.category;document.querySelector('#detail-description').textContent=p.description;document.querySelector('#detail-scope').textContent=p.scope;window.renderProjectDocuments?.(Number(button.dataset.project));dialog.showModal();document.body.style.overflow='hidden'}));function closeDetail(){dialog.close();document.body.style.overflow=''}document.querySelector('.close').addEventListener('click',closeDetail);dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDetail()}});dialog.addEventListener('close',()=>document.body.style.overflow='');
