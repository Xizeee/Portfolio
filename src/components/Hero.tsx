/*
 * @Author: Cqs 18897653566@163.com
 * @Date: 2026-08-12 15:02:39
 * @LastEditors: Cqs 18897653566@163.com
 * @LastEditTime: 2026-08-12 21:39:47
 * @Description: 首页区块：大标题 + 简介 + 头像
 * Copyright (c) 2026 by 18897653566@163.com All Rights Reserved.
 */

// 首页区块：大标题 + 简介 + 头像
export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16"
    >
      {/* 背景渐变光晕 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* 头像（懒加载） */}
        <img
          src="https://picgocloud.com/m/121070ac-9c3c-4f9c-b235-233cafaeb691.jpg"
          alt="头像"
          loading="lazy"
          className="w-36 h-36 rounded-full object-cover ring-2 ring-foreground/20 shadow-xl"
        />

        {/* 大标题（渐变色） */}
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
          你好，我是陈巧圣
        </h1>

        {/* 简介 */}
        <p className="max-w-xl text-foreground/70 text-lg leading-relaxed">
          一名全栈工程师，热衷于用代码构建简洁、高效、优雅的产品。专注于前端工程与用户体验。
        </p>

        {/* 行动按钮 */}
        <div className="flex flex-wrap gap-4 mt-2 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white font-medium hover:opacity-90 transition-opacity"
          >
            查看作品
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-foreground/20 text-foreground/80 hover:bg-foreground/5 transition-colors"
          >
            联系我
          </a>
        </div>
      </div>
    </section>
  )
}
