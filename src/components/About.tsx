import { useReveal } from '../hooks/useReveal'
import { skills } from '../data/skills'

// 关于我区块：详细介绍 + 技能列表
export function About() {
  const { ref, visible } = useReveal()

  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* 标题 */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
          关于我
        </h2>

        {/* 详细介绍 */}
        <p className="text-foreground/70 leading-relaxed max-w-2xl mb-12">
          我是一名拥有多年经验的全栈工程师，擅长从前端到后端的完整产品开发。
          喜欢钻研新技术，注重代码质量与用户体验，致力于交付可维护、可扩展的解决方案。
        </p>

        {/* 技能列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/10"
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">{group.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 rounded-full text-sm bg-foreground/5 text-foreground/70 border border-foreground/10"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
