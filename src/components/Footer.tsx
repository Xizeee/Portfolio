// 页脚：版权信息
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-foreground/10 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/50">
        <p>© {year} 个人作品集. All rights reserved.</p>
        <p>Built with React · TypeScript · Tailwind CSS</p>
      </div>
    </footer>
  )
}
