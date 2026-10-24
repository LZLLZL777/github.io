export const person = {
  name: '梁子林',
  romanized: 'LIANG ZILIN',
  title: 'GIS 工程实践者 · 国土空间规划方向',
  school: '广东工业大学 · 土地资源管理',
  intro: '关注空间信息如何从数据走向规划决策，也关注如何把繁复的地理处理工作变成可靠、可复用的技术流程。以 GIS 为专业基础，以 Python / ArcPy 为生产工具，在研究与实践之间寻找更好的空间解决方案。',
  email: '240385089@qq.com',
  phone: '18675166183',
  github: 'https://github.com/LZLLZL777',
}

export const projects = [
  {
    id: 'nanling', number: '01',
    category: 'ECOLOGICAL PLANNING / 生态网络',
    title: '南岭生态功能区\n生态网络构建与优化',
    subtitle: '以生态系统服务与景观连通性识别生态空间结构',
    year: '2026', role: '大学生创新训练项目负责人',
    visual: 'nanling.svg',
    methods: ['PLUS', 'InVEST', 'MSPA', 'MCR'],
    description: '面向“双碳”目标及南岭生态功能区保护需求，构建融合土地利用模拟、生态系统服务评价、景观形态识别与最小累积阻力分析的研究路径，探索生态源地、生态廊道及生态网络优化。',
    contribution: '负责主要实验进程推进、研究技术路线落实与文章主体逻辑撰写。校级立项，已通过中期检查，拟推荐省级。',
    note: '项目研究内容与中期情况；部分成果图待补充。'
  },
  {
    id: 'mapping', number: '02',
    category: 'GIS AUTOMATION / 自动化制图',
    title: '广州标定地价\n批量制图工作流',
    subtitle: '让多区域、多用途的成果制图进入可重复执行的流程',
    year: '2026', role: '卓越实习 · GIS 技术应用',
    visual: 'mapping.svg',
    methods: ['Python', 'ArcPy', 'ArcGIS Pro', 'Excel'],
    description: '围绕广州 11 个行政区、6 类用地的标定地价专题图生产，构建批量制图与成果检查流程，覆盖图层更新、布局维护及专题图输出。',
    contribution: '参与组织并输出 66 套专题图，探索图层符号化、批量导出和成果一致性检查等自动化处理方法。',
    note: '示意图不含真实业务数据；实际地图成果需经脱敏和授权后展示。'
  },
  {
    id: 'soil', number: '03',
    category: 'SPATIAL ASSESSMENT / 空间评价',
    title: '广州第三次全国土壤普查\n空间评价与成果生产',
    subtitle: '从多指标分级、空间统计到专题制图与质量校核',
    year: '2025–2026', role: '土壤所实习 · 农业资源评价',
    visual: 'soil.svg',
    methods: ['ArcGIS Pro', 'ArcPy', 'Raster', 'QA/QC'],
    description: '参与广州市第三次全国土壤普查成果编制，涉及耕地质量、粮食生产潜力、农业利用适宜性与土壤酸化评价，开展土壤空间数据处理、栅格分区统计与专题表达。',
    contribution: '累计参与整理输出 135 幅以上矢量与栅格专题成果图，并参与评价单元检查、剖面图自动绘制与成果校核。',
    note: '示意图为概念表达，非实际土壤评价地图。'
  },
  {
    id: 'gee', number: '04',
    category: 'REMOTE SENSING / 生态评价',
    title: '深圳市生态环境质量\n时空变化与驱动研究',
    subtitle: '遥感云计算支持的城市生态质量长期监测',
    year: '2026', role: '《生态学杂志》论文 · 第二作者',
    visual: 'gee.svg',
    methods: ['GEE', 'Landsat 8/9', 'RSEI', 'GeoDetector'],
    description: '基于 GEE 与 2013—2023 年 Landsat 8/9 影像，融合绿度、湿度、热度和干度构建 RSEI，分析深圳市生态环境质量时空演变特征。',
    contribution: '论文结合 GIS 网格分析与地理探测器识别空间分异驱动因素，结果显示植被覆盖度具有较强解释力（q=0.69）。论文于 2026 年 10 月网络首发。',
    note: '项目卡片为抽象遥感视觉；论文结果来自已发表研究。'
  },
]

export const abilities = [
  { number: '01', en: 'SPATIAL INTELLIGENCE', title: '空间分析与规划评价', desc: '空间叠加、矢量与栅格分析、生态环境评价、土地利用变化及国土空间相关研究。', tags: 'ArcGIS Pro · GIS · Remote Sensing' },
  { number: '02', en: 'GEOPROCESSING', title: '自动化与流程化开发', desc: '从真实业务需求出发，将数据清洗、空间匹配、批量制图和成果检查转化为可复用流程。', tags: 'Python · ArcPy · Pandas' },
  { number: '03', en: 'RESEARCH METHODS', title: '空间模拟与模型研究', desc: '参与生态网络构建、碳储量评估及遥感生态指数研究，理解模型与规划决策之间的联系。', tags: 'PLUS · InVEST · MSPA · MCR · GEE' },
  { number: '04', en: 'TOOLS & WORKFLOW', title: '工程协作与 AI 工具', desc: '借助 AI 辅助代码开发与排查，使用 Git / GitHub 管理版本，强调验证、复现与交付。', tags: 'AI-assisted Coding · Git · QA/QC' },
]

export const timeline = [
  { date: '2026', label: '卓越 · 自然资源评估与 GIS 技术实践', note: '地价专题图、空间数据与成果自动化' },
  { date: '2026', label: '中地 · 自然资源咨询与 GIS 数据处理', note: '数据建库、字段标准化、地理处理流程化' },
  { date: '2025–26', label: '广东省科学院生态环境与土壤研究所', note: '第三次全国土壤普查、农业资源评价与制图' },
  { date: '2023–27', label: '广东工业大学 · 土地资源管理', note: 'GIS、遥感、土地规划与生态研究' },
]
