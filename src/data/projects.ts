import { imageUrl } from '../lib/image'

// 项目数据
export interface Project {
  id: number
  name: string
  description: string
  techStack: string[]
  link: string
  image: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: '电商前台系统',
    description:
      '基于 React 的现代电商平台，支持商品浏览、购物车与订单管理，拥有流畅的用户体验。',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    link: 'https://github.com/',
    image: imageUrl(
      'modern e-commerce website homepage UI, product grid, dark theme, clean minimal design',
    ),
  },
  {
    id: 2,
    name: '任务管理工具',
    description:
      '看板式任务管理应用，支持拖拽排序、团队协作与实时同步，提升团队协作效率。',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
    link: 'https://github.com/',
    image: imageUrl(
      'task management kanban board dashboard UI, dark mode, cards and columns',
    ),
  },
  {
    id: 3,
    name: '数据可视化平台',
    description:
      '企业级数据可视化平台，提供丰富的图表组件与自定义看板，助力数据驱动决策。',
    techStack: ['Vue', 'D3.js', 'Express', 'Redis'],
    link: 'https://github.com/',
    image: imageUrl(
      'data visualization dashboard with charts and graphs, dark theme, analytics',
    ),
  },
  {
    id: 4,
    name: 'AI 对话助手',
    description:
      '集成大语言模型的智能对话应用，支持多轮对话、上下文记忆与流式输出。',
    techStack: ['Next.js', 'TypeScript', 'OpenAI', 'Tailwind CSS'],
    link: 'https://github.com/',
    image: imageUrl('AI chat application interface, conversation bubbles, dark mode UI'),
  },
]
