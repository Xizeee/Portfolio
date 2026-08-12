import { useReveal } from '../hooks/useReveal'
import { projects } from '../data/projects'

// 项目展示区块：项目卡片列表
export function Projects() {
  const { ref, visible } = useReveal()

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* 标题 */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
          项目展示
        </h2>

        {/* 项目卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
            >
              {/* 项目截图（懒加载） */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* 内容区 */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* 技术栈标签 */}
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-xs bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {/* 项目链接 */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors"
                >
                  查看项目
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
