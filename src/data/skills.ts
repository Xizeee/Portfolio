// 技能数据：按分类组织，方便后续增删
export interface SkillCategory {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: '前端开发',
    items: ['React', 'TypeScript', 'Vue', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: '后端开发',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
  },
  {
    category: '工程化与工具',
    items: ['Vite', 'Git', 'Docker', 'Figma', 'CI/CD'],
  },
  {
    category: '其他',
    items: ['Python', 'Redis', 'GraphQL', 'AWS'],
  },
]
