import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

// 主题切换按钮：深色 / 浅色
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark')

  // 初始化：读取本地存储，应用到 <html> 上
  useEffect(() => {
    const saved = (localStorage.getItem('theme') as Theme) ?? 'dark'
    setTheme(saved)
    document.documentElement.classList.toggle('light', saved === 'light')
  }, [])

  // 切换主题并持久化
  const toggle = () => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.classList.toggle('light', next === 'light')
      localStorage.setItem('theme', next)
      return next
    })
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="切换主题"
      className="text-foreground/70 hover:text-foreground transition-colors p-1"
    >
      {theme === 'dark' ? (
        // 当前深色：显示太阳（点击切到浅色）
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        // 当前浅色：显示月亮（点击切到深色）
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  )
}
