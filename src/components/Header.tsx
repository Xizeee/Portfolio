import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

// 导航项：锚点对应各区块 id
const navItems = [
  { label: '首页', href: '#home' },
  { label: '关于', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '联系', href: '#contact' },
]

// 顶部导航栏：滚动时背景由透明变为毛玻璃，移动端汉堡菜单
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // 监听滚动，切换导航栏样式
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur border-foreground/10'
          : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
        >
          Portfolio
        </a>

        <div className="flex items-center gap-6">
          {/* 桌面端导航 */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-foreground/70 hover:text-foreground transition-colors text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* 主题切换 */}
          <ThemeToggle />

          {/* 移动端菜单按钮 */}
          <button
            type="button"
            className="md:hidden text-foreground/80 hover:text-foreground"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="切换菜单"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* 移动端展开菜单 */}
      {menuOpen && (
        <ul className="md:hidden bg-background/95 backdrop-blur border-b border-foreground/10 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-foreground/70 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
