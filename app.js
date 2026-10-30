const projects=[
  {
    "title": "灵芽大模型 / LingAgent",
    "category": "AI 产品经理 · 2025.09 — 至今",
    "description": "主诉解析与方案生成：针对医生口语化主诉难以结构化的问题，设计从主诉解析、治疗计划生成到可追问、可修改的对话流程，并提供 3 套治疗方案对比。\n\n语义编辑与上下文：引入 MCP，将自然语言映射为分步、附件调整等 3D 编辑动作。进一步梳理 Agent 需要感知的方案状态、数据来源与取值优先级，与研发定义按需调用的工具接口及适用边界，让 Agent 读取当前总分步数等方案信息。\n\n验证结果：内部受控测试（6 位医生、1200 例病例）中，方案初稿产出总时长（含 AI 加载与医生调整）从超过 30 分钟降至 15 分钟以内；医生对 AI 方案的直接采纳率从 56% 提升至 85%（提升 29 个百分点）。",
    "scope": "Agent 产品规划 / 主诉结构化 / MCP 工具与上下文定义 / 可解释交互 / 受控测试"
  },
  {
    "title": "3D 智能正畸 / SaaS & AI+CAD",
    "category": "产品经理 & 项目负责人 · 2024.01 — 至今",
    "description": "产品闭环：从 API 演示半成品出发，主导用户动线重构，规划“模型预处理 → 排牙 → 生产后处理”的完整链路，新增分牙、附件、导出等 6 个核心功能节点，推动首批客户签约。\n\n双端协同与数据规范：设计“医生端 + 技工端”协同架构、病例数据分层结构与实时同步机制，建立病例数据从采集、结构化到复用的全链路规范。\n\n商业化成果：已签署 10+ 份商业合作合同，其中 4 家客户月均病例超过 1000 例，为垂类数据资产持续积累提供真实业务场景。",
    "scope": "产品重构 / 医生与技工协同 / 病例数据分层 / 数据流转规范 / 商业化交付"
  },
  {
    "title": "Looper / 口腔影像采集硬件",
    "category": "产品经理 · 2025.01 — 2026.01",
    "description": "面向连锁口腔诊所集团，设计替代传统单反的口腔影像一站式采集设备。\n\n数据侧价值：通过标准化采集流程，保障影像数据的质量与一致性，连接临床采集与下游 2D 影像 AI 分析。\n\n落地结果：设备落地后日均采集超过 200 人次，为影像分析模型提供真实世界数据入口。",
    "scope": "采集流程设计 / 影像质量与一致性 / 硬件产品落地"
  },
  {
    "title": "灵芽云 / 算法能力开放平台",
    "category": "客户经理 / 技术接口人 · 2024.01 — 至今",
    "description": "接口标准化：作为商务与研发之间的桥梁，将保持器自动化生产、2D 口腔影像 AI 分析等核心算法封装为标准化 API，制定接口数据格式与交付验收标准。\n\n客户交付：面向客户提供定制化解决方案，连接研发能力与业务需求。促成保持器自动化生产 API 与多家齿科加工厂签约，以及 2D 口腔影像 AI 分析 API 与多家齿科设备厂商签约。",
    "scope": "接口数据格式 / API 方案 / 交付验收标准 / 客户技术对接"
  },
  {
    "title": "口腔算法医学验证与数据标注体系",
    "category": "产品经理 / 验证负责人 · 2024.06 — 至今",
    "description": "影像标注规范：面向全景片、侧位片、小牙片、面部正 / 侧 / 微笑像与口内像共 7 类模态，按图像级、区域级、牙齿级组织三层规范。为 30+ 疾病与修复项定义 0–4 级枚举判定，并以“-10 不可评估”区分无法判断与正常；逐项核对字段在产品中的可获取性，使标注口径与交付范围一致。\n\n专家经验参数化：与临床专家共建 9 项每步移动量参数与 3 条适用边界。由 4 位医生、2 位技工对 50 例方案的新旧两版盲测（共 600 例次），合格率从 58.62% 提升至 89.66%，平均分从 5.38 提升至 8.07。\n\n医学验证与问题归因：建立“跑查 → 记录 → 汇总 → 复盘”流程，输出命名规范、记录字段与问题分类模板，先后带教 6 批医学 review 实习生。累计覆盖 300+ 独立病例、跑查 2000+ 例次（含多版本与多环境重跑）；按交付节点和病例类型分层复盘，定位薄弱场景。\n\n自动评分效度验证：与主治医师共建 10 维度、0/1/2 三级评分标准，先组织 60 份计划盲评（15 例 × 4 份）并由 3 个大模型评分，再扩至 7 个模型、756 份计划复验。用斯皮尔曼秩相关及准确率、精确率、召回率检验与医师评分的一致性。\n\n评测边界：等级一致准确率均值为 60%；仅“空间账”（精确率 81%）与“尖磨牙可达”（精确率 90%）两个维度可用，据此将自动评测限定在这两个可计算维度。",
    "scope": "标注规范 / 专家协同 / 临床规则参数化 / 医学验证流程 / 分层 bad case 归因 / 自动评分效度验证"
  }
];
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});document.querySelectorAll('.project').forEach(p=>p.hidden=button.dataset.filter!=='all'&&p.dataset.category!==button.dataset.filter)}));
const dialog=document.querySelector('dialog');document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{const p=projects[button.dataset.project];document.querySelector('#detail-art').replaceChildren(button.querySelector('.art').cloneNode(true));document.querySelector('#detail-title').textContent=p.title;document.querySelector('#detail-category').textContent=p.category;document.querySelector('#detail-description').textContent=p.description;document.querySelector('#detail-scope').textContent=p.scope;window.renderProjectDocuments?.(Number(button.dataset.project));dialog.showModal();document.body.style.overflow='hidden'}));function closeDetail(){dialog.close();document.body.style.overflow=''}document.querySelector('.close').addEventListener('click',closeDetail);dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDetail()}});dialog.addEventListener('close',()=>document.body.style.overflow='');
