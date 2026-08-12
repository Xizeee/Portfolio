// 图片 URL 生成工具：统一调用文生图接口，避免使用占位图
const BASE = 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image'

export type ImageSize =
  | 'square_hd'
  | 'square'
  | 'portrait_4_3'
  | 'portrait_16_9'
  | 'landscape_4_3'
  | 'landscape_16_9'

/** 根据提示词生成图片地址 */
export function imageUrl(prompt: string, size: ImageSize = 'landscape_16_9'): string {
  return `${BASE}?prompt=${encodeURIComponent(prompt)}&image_size=${size}`
}
