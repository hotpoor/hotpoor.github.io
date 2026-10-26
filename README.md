# 夏力维的个人主页

原站域名： https://github.xialiwei.com

纯静态个人主页，直接由 GitHub Pages 发布，无构建步骤。保留原有 CNAME 与 static 资源。

本地预览：`python -m http.server 8765`，打开 http://localhost:8765。

- `index.html`：个人介绍、足迹、GitHub 入口。
- `assets/home.css`：响应式页面样式。
- `assets/home.js`：完整目的地数据、全部总览与三种交通模式、Three.js 地图。
- `assets/china.json`：来自 https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json 的地图展示数据。
- `assets/three.module.js`：本地托管 Three.js 0.170.0，许可见 THREE-LICENSE.txt。

所有连接均表示上海至目的地的到访关系，不代表真实航线、铁路或驾车轨迹。统计为 25 个去重目的地、36 条分模式连接（飞机 10、火车 11、自驾 15）。

地图资源和 Three.js 均本地托管。地图初始化失败仍可切换完整目的地列表；动画尊重减少动态效果的系统偏好，并在页面隐藏或地图离屏时停止绘制。

首屏人物：`assets/portrait-helmet.png`，基于本人最新照片生成的直立侧身透明背景形象，替代原 GitHub 头像展示。
