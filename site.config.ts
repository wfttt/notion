import { siteConfig } from './lib/site-config' // 导入 siteConfig 函数

export default siteConfig({
  // 站点的根 Notion 页面 (必需)
  rootNotionPageId: 'eff6e710bb4f4cb5b4266e16b0367c89',

  // 如果你想限制页面到一个 Notion 工作区 (可选)
  // (这应该是一个 Notion ID; 查看文档以了解如何提取此 ID)
  rootNotionSpaceId: null,

  // 基本站点信息 (必需)
  name: 'Wiki.8Hedia', // 站点名称
  domain: 'wiki.8h.ink', // 站点域名
  author: '8Hedia', // 作者名

  // Open Graph 元数据 (可选)
  description: '私人分享，禁止外传', // 站点描述

  // 社交账号用户名 (可选)
  //twitter: 'transitive_bs', // Twitter 用户名
  //github: 'transitive-bullshit', // GitHub 用户名
  //linkedin: 'fisch2', // LinkedIn 用户名
  // mastodon: '#', // 可选 mastodon 个人资料 URL，用于链接验证
  // newsletter: '#', // 可选的 newsletter URL
  // youtube: '#', // 可选的 YouTube 频道名称或 `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // 默认 Notion 图标和封面图片，以保持站点的一致性 (可选)
  // 页面特定的值将覆盖这些站点默认设置
  defaultPageIcon: null, // 默认页面图标
  defaultPageCover: null, // 默认页面封面图片
  defaultPageCoverPosition: 0.5, // 默认封面图片位置

  // 是否启用低质量图像预览 (LQIP) 支持 (可选)
  isPreviewImageSupportEnabled: true, // 是否启用 LQIP 预览图片支持

  // 是否启用 Redis 以缓存生成的预览图片 (可选)
  // 注意：如果启用 Redis，需要设置 `REDIS_HOST` 和 `REDIS_PASSWORD` 环境变量。详见 README
  isRedisEnabled: false, // 是否启用 Redis 缓存

  // Notion 页面 ID 到 URL 路径的映射 (可选)
  // 这里定义的任何页面将覆盖其默认 URL 路径
  // 例如:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null, // 页面 URL 重写

  // 是否使用默认的 Notion 导航风格或自定义导航风格。要使用 `navigationLinks`，需将 `navigationStyle` 设置为 `custom`
  navigationStyle: 'custom' // 导航风格设置为默认
  // navigationStyle: 'custom', // 导航风格设置为自定义（被注释）
  // navigationLinks: [ // 自定义导航链接（被注释）
  //   {
  //     title: 'About', // 链接标题
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a' // 页面 ID
  //   },
  //   {
  //     title: 'Contact', // 链接标题
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1' // 页面 ID
  //   }
  // ]
})
