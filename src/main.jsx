import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, ArrowRight, ArrowDown, Menu, X, Mail, Phone, Github, MapPin, Layers, MoveUpRight } from 'lucide-react'
import { person, projects, abilities, timeline } from './content'
import './styles.css'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

function Logo() { return <a href="#home" className="logo" aria-label="回到首页"><span className="logo-mark">L<span className="logo-mark-dot">.</span>Z</span><span className="logo-divider"/><span className="logo-side">SPATIAL<br/>STUDIES</span></a> }

function Header({ isDetail }) {
  const [open, setOpen] = useState(false)
  const links = [['项目', '#projects'], ['关于', '#about'], ['能力', '#expertise'], ['研究与荣誉', '#recognition']]
  useEffect(() => setOpen(false), [isDetail])
  return <header className="site-header"><div className="header-inner wrap">
    <Logo/>
    <nav className={`nav ${open ? 'nav-open' : ''}`} aria-label="主导航">
      {links.map(([text, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{text}</a>)}
      <a className="nav-mobile-contact" href="#contact" onClick={() => setOpen(false)}>联系我</a>
    </nav>
    <a className="header-contact" href="mailto:240385089@qq.com">LET'S TALK <ArrowUpRight size={16}/></a>
    <button className="menu-toggle" type="button" aria-label={open ? '关闭菜单':'打开菜单'} onClick={() => setOpen(v=>!v)}>{open ? <X/> : <Menu/>}</button>
  </div></header>
}

function SectionHeading({ eyebrow, title, right }) {return <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-square"/>{eyebrow}</div><h2>{title}</h2></div>{right && <p className="section-side-copy">{right}</p>}</div>}

function Hero(){return <section className="hero" id="home">
  <video className="hero-video" autoPlay muted playsInline loop poster={asset('media/hero-poster.jpg')} aria-hidden="true"><source src={asset('media/cartographic-motion.mp4')} type="video/mp4"/></video>
  <div className="hero-shade"/><div className="hero-grid"/>
  <div className="hero-content wrap"><div className="hero-topline"><span className="circle-pulse"/> PORTFOLIO / 2026 <span className="hero-topline-rule"/> GUANGZHOU · CHINA</div>
    <div className="hero-title-block"><p className="hero-kicker">LAND · ECOLOGY · COMPUTATION</p><h1>以空间为尺度<span className="hero-comma">，</span><br/><em>重构</em> 未来的可能。</h1><p className="hero-english">THINK IN SPACE. BUILD WITH DATA.</p></div>
    <div className="hero-bottom"><div><p className="hero-caption">GIS 工程实践者 / 国土空间规划方向</p><p className="hero-description">在土地、生态与城市之间，探索空间分析、规划研究与技术自动化的交汇。</p></div><div className="hero-actions"><a href="#projects" className="button-primary">探索精选项目 <ArrowUpRight size={18}/></a><a href="#contact" className="button-ghost">联系我 <ArrowRight size={17}/></a></div></div>
  </div><div className="hero-stamp">23°N—26°N <span/> GEOSPATIAL RESEARCH / DESIGN / AUTOMATION</div><a className="scroll-cue" href="#about" aria-label="向下滚动"><ArrowDown size={19}/><span>SCROLL TO EXPLORE</span></a>
</section>}

function About(){return <section className="section about" id="about"><div className="wrap"><SectionHeading eyebrow="01 / PROFILE" title={<>关于我<span className="dot">.</span></>} right="专业研究与技术实践并行，以可落地的成果回应复杂的空间问题。"/>
  <div className="about-layout"><div className="portrait-frame"><img src={asset('visuals/portrait-placeholder.svg')} alt="人物照片占位图，可替换为正式个人照片"/><div className="portrait-vertical">THE SPACE BETWEEN DATA & DECISION</div><span className="portrait-corner">FIG. 01 / PROFILE</span></div>
  <div className="about-details"><div className="about-index">ABOUT / LIANG ZILIN</div><h3>把地理问题变成<span>可分析、</span><br/>可表达、可交付的成果。</h3><p className="about-paragraph">{person.intro}</p><p className="about-paragraph muted">广东工业大学土地资源管理本科在读。先后参与第三次全国土壤普查、自然资源评估与 GIS 数据处理项目，持续实践空间分析、Python / ArcPy 自动化制图与研究型项目组织。</p>
  <div className="identity-line"><span>研究领域</span><strong>空间规划 / 生态评价 / GIS 自动化</strong></div><div className="identity-line"><span>教育背景</span><strong>广东工业大学 · 2027 届</strong></div>
  <div className="about-links"><a href={`mailto:${person.email}`}><Mail size={15}/>{person.email}</a><a href={person.github} target="_blank" rel="noreferrer"><Github size={15}/> GitHub <ArrowUpRight size={14}/></a></div>
  </div></div>
  <div className="stats-line"><div><strong>135<span>+</span></strong><small>土壤专题成果图</small></div><div><strong>66</strong><small>地价专题图</small></div><div><strong>02</strong><small>网络首发论文</small></div><div><strong>03</strong><small>创新训练项目</small></div></div>
</div></section>}

function Featured(){return <section className="section featured" id="projects"><div className="wrap"><SectionHeading eyebrow="02 / SELECTED WORKS" title={<>精选项目<span className="dot">.</span></>} right="从规划研究到空间数据生产，精选具有代表性的项目实践。"/>
  <div className="project-grid">{projects.map((p, idx) => <a href={`#/project/${p.id}`} className={`project-card project-card-${idx+1}`} key={p.id} aria-label={`查看项目 ${p.title.replace('\n','')}`}><div className="project-img"><img src={asset(`visuals/${p.visual}`)} alt={`${p.title.replace('\n','')}的概念可视化示意`} /><span className="project-type">{p.category}</span><span className="project-arrow"><ArrowUpRight size={22}/></span></div><div className="project-meta"><span>{p.number} / {p.year}</span><span>{p.role}</span></div><h3>{p.title.split('\n').map((x,i)=><React.Fragment key={i}>{i>0&&<br/>}{x}</React.Fragment>)}</h3><p>{p.subtitle}</p><div className="project-tags">{p.methods.slice(0,4).map(m=><span key={m}>{m}</span>)}</div></a>)}</div>
  <div className="projects-note"><span>SELECTED CASE STUDIES · MORE IN PROGRESS</span><a href={person.github} target="_blank" rel="noreferrer">访问代码仓库 <ArrowUpRight size={16}/></a></div>
</div></section>}

function Expertise(){return <section className="section expertise" id="expertise"><div className="wrap"><SectionHeading eyebrow="03 / CORE CAPABILITIES" title={<>专业优势<span className="dot">.</span></>} right="不止使用工具，更关注方法、流程与真实业务问题之间的联系。"/>
  <div className="ability-grid">{abilities.map(a=><div className="ability-card" key={a.number}><div className="ability-top"><span>{a.number}</span><ArrowUpRight size={19}/></div><p className="ability-en">{a.en}</p><h3>{a.title}</h3><p className="ability-desc">{a.desc}</p><p className="ability-tags">{a.tags}</p></div>)}</div>
</div></section>}

function Recognition(){return <section className="section recognition" id="recognition"><div className="wrap"><SectionHeading eyebrow="04 / RESEARCH & RECOGNITION" title={<>研究与荣誉<span className="dot">.</span></>} right="扎根空间分析方法，在科研、竞赛与产业实践中持续验证。"/>
  <div className="recognition-layout"><div className="research-column"><p className="column-name">PUBLICATIONS / 代表论文</p><article className="research-item"><span className="research-year">2026 · 二作</span><h3>基于GEE的深圳市生态环境质量的时空变化及驱动因素</h3><p>《生态学杂志》 · 网络首发</p><span>GEE / RSEI / GeoDetector</span></article><article className="research-item"><span className="research-year">2026 · 三作</span><h3>基于PLUS-InVEST模型的北部湾红树林海岸带碳储量的时空演变与预测</h3><p>《环境科学》 · 网络首发</p><span>PLUS / InVEST / Carbon Storage</span></article></div>
  <div className="awards-column"><p className="column-name">AWARDS / 专业竞赛</p><div className="award-item"><span>2024 / 2025</span><strong>全国大学生GIS应用技能大赛</strong><em>连续两届 · 二等奖</em></div><div className="award-item"><span>全国性赛事</span><strong>第四届全国大学生乡村国土空间价值提升规划设计大赛</strong><em>特等奖</em></div><div className="award-item"><span>2026</span><strong>南岭生态网络构建与优化 · 大学生创新训练项目</strong><em>项目负责人 · 中期通过、拟推荐省级</em></div></div></div>
  <div className="career-strip"><span>EXPERIENCE</span>{timeline.map((item,i)=><div key={i}><small>{item.date}</small><strong>{item.label}</strong><p>{item.note}</p></div>)}</div>
</div></section>}

function Contact(){return <section className="contact" id="contact"><div className="contact-graphic" aria-hidden="true"/><div className="wrap contact-content"><div className="eyebrow"><span className="eyebrow-square"/>05 / CONTACT</div><p className="contact-intro">新的空间问题，新的合作可能。</p><h2>一起构想<br/><em>下一种</em>未来<span className="dot">.</span></h2><a className="contact-email" href={`mailto:${person.email}`}>{person.email} <ArrowUpRight size={32}/></a><div className="contact-footer"><div><strong>LIANG ZILIN / 梁子林</strong><span>GIS · SPATIAL PLANNING · AUTOMATION</span></div><div className="footer-links"><a href={`tel:${person.phone}`}><Phone size={15}/> 联系电话</a><a href={person.github} target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={15}/></a><a href="#home">返回顶部 ↑</a></div><span>© 2026 · ALL RIGHTS RESERVED</span></div></div></section>}

function ProjectDetail({ id }){const p=projects.find(x=>x.id===id);if(!p)return <main className="notfound"><h1>未找到项目</h1><a href="#projects">返回项目列表</a></main>;return <main className="detail"><div className="detail-hero wrap"><a href="#projects" className="back-link">← 返回精选项目</a><p className="eyebrow"><span className="eyebrow-square"/>{p.category}</p><div className="detail-head"><h1>{p.title.replace('\n',' ')}</h1><span>{p.year} / CASE STUDY {p.number}</span></div><p className="detail-subtitle">{p.subtitle}</p></div><div className="detail-art"><img src={asset(`visuals/${p.visual}`)} alt="项目概念图"/></div><div className="detail-body wrap"><div className="detail-aside"><p>PROJECT / {p.number}</p><strong>{p.role}</strong><div className="project-tags">{p.methods.map(m=><span key={m}>{m}</span>)}</div></div><div className="detail-copy"><div className="detail-content-block"><span>01 / CONTEXT</span><h2>项目概述</h2><p>{p.description}</p></div><div className="detail-content-block"><span>02 / WORK & OUTCOME</span><h2>参与工作与阶段成果</h2><p>{p.contribution}</p></div><div className="detail-notice">资料说明：{p.note} 当前版本为作品集框架，后续可替换真实图件、技术路线图及项目成果。</div><a className="next-project" href={`#/project/${projects[(projects.indexOf(p)+1)%projects.length].id}`}>查看下一项目 <ArrowUpRight size={20}/></a></div></div></main>}

function App(){const [route,setRoute]=useState(window.location.hash);useEffect(()=>{const handler=()=>setRoute(window.location.hash);window.addEventListener('hashchange',handler);return()=>window.removeEventListener('hashchange',handler)},[]);useEffect(()=>{if(route.startsWith('#/project/'))window.scrollTo({top:0,behavior:'instant'});else if(route && route.length>1){requestAnimationFrame(()=>{const elem=document.querySelector(route);elem?.scrollIntoView({behavior:'smooth'})})}},[route]);const match=route.match(/^#\/project\/([a-z-]+)/);return <><Header isDetail={!!match}/>{match?<ProjectDetail id={match[1]}/>:<main><Hero/><About/><Featured/><Expertise/><Recognition/><Contact/></main>}</>}

createRoot(document.getElementById('root')).render(<App/>)
