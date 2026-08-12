/*
 * @Author: Cqs 18897653566@163.com
 * @Date: 2026-08-12 15:03:08
 * @LastEditors: Cqs 18897653566@163.com
 * @LastEditTime: 2026-08-12 15:30:58
 * @Description: 
 * Copyright (c) 2026 by 18897653566@163.com All Rights Reserved. 
 */
import { useReveal } from '../hooks/useReveal'

// 联系方式数据
const socials = [
  { label: 'Email', value: '18897653566@163.com', href: 'mailto:18897653566@163.com' },
  { label: 'GitHub', value: 'github.com/Xizeee', href: 'https://github.com/Xizeee' },
]

// 联系方式区块
export function Contact() {
  const { ref, visible } = useReveal()

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* 标题 */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
          联系我
        </h2>
        <p className="text-white/70 mb-12 max-w-xl">
          如果你有任何合作意向或问题，欢迎通过以下方式与我联系。
        </p>

        {/* 联系方式卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors"
            >
              <div className="text-sm text-white/50 mb-1">{item.label}</div>
              <div className="text-white font-medium break-all">{item.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
