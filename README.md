# blog.vophuthinh.com

Website blog cá nhân song ngữ (Việt/Anh) được xây bằng Astro để chia sẻ kiến thức, xây dựng thương hiệu cá nhân và làm portfolio.

## 1) Giới thiệu project

Mục tiêu của project:

- Blog kỹ thuật song ngữ (`/vi`, `/en`)
- Portfolio dự án cá nhân
- Nội dung viết bằng Markdown/MDX
- Tối ưu SEO và tốc độ theo hướng static site
- Không cần backend/database ở giai đoạn đầu

## 2) Tech stack

- Astro (latest stable)
- TypeScript
- Tailwind CSS
- Markdown + MDX
- Astro Content Collections
- Static Site Generation (SSG)
- RSS + Sitemap
- Deploy target: Cloudflare Pages (output `dist`)

## 3) Cách chạy local

Yêu cầu Node.js >= 22.12.0

```bash
npm install
npm run dev
```

Sau đó truy cập `http://localhost:4321`.

## 4) Cách tạo bài viết mới

Tạo file `.md` hoặc `.mdx` trong:

- `src/content/blog/vi/`
- `src/content/blog/en/`

Frontmatter mẫu:

```md
---
title: 'Tiêu đề bài viết'
description: 'Mô tả ngắn'
pubDate: 2026-05-01
updatedDate: 2026-05-02
lang: 'vi'
slug: 'my-clean-slug'
translationKey: 'my-clean-slug'
category: 'Automation'
tags: ['python', 'workflow']
series: 'Tên series'
cover: '/images/blog/my-cover.svg'
draft: false
featured: true
---
```

Lưu ý quan trọng:

- Bài chỉ hiển thị khi `draft: false`
- Bài chỉ hiển thị khi `pubDate <= thời điểm build`
- Dùng `slug` sạch để có URL đẹp

## 5) Cách tạo project mới

Tạo file `.md` hoặc `.mdx` trong:

- `src/content/projects/vi/`
- `src/content/projects/en/`

Frontmatter mẫu:

```md
---
title: 'Project name'
description: 'Short description'
lang: 'en'
slug: 'my-project'
translationKey: 'my-project'
techStack: ['Python', 'Docker']
cover: '/images/projects/my-project.svg'
demoUrl: 'https://example.com'
githubUrl: 'https://github.com/your-repo'
featured: true
---
```

## 6) Cách build

```bash
npm run build
```

Build output sẽ nằm ở thư mục `dist`.

## 7) Cách deploy Cloudflare Pages

1. Push source code lên GitHub.
2. Vào Cloudflare Pages -> Create project -> Connect GitHub repo.
3. Chọn branch deploy production: `main`.
4. Thiết lập build như mục dưới.

## 8) Cấu hình build Cloudflare

- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`

## 9) Cấu hình domain `blog.vophuthinh.com`

1. Vào Cloudflare Pages project -> Custom domains.
2. Add custom domain `blog.vophuthinh.com`.
3. Cloudflare sẽ hướng dẫn tạo/cập nhật DNS record phù hợp.
4. Chờ SSL certificate active.

## 10) Cấu hình scheduled publish bằng deploy hook

Project hỗ trợ hẹn giờ publish qua workflow:

- File workflow: `.github/workflows/scheduled-publish.yml`
- Trigger:
    - chạy hằng ngày (cron)
    - chạy thủ công (`workflow_dispatch`)

### Cấu hình secret

Trong GitHub repo:

- Settings -> Secrets and variables -> Actions
- Tạo secret: `CLOUDFLARE_DEPLOY_HOOK`
- Giá trị là Cloudflare Pages Deploy Hook URL

Workflow sẽ gọi hook này mà không hardcode URL trong source code.

---

## Cấu trúc chính

```txt
public/
  images/
  files/
src/
  components/
  content/
  layouts/
  pages/
  styles/
  utils/
  content.config.ts
```

## Lệnh hữu ích

```bash
npm run dev
npm run build
npm run preview
```

## Ghi chú

- Sitemap tự sinh qua `@astrojs/sitemap`
- RSS endpoint tại `/rss.xml`
- Redirect `/` -> `/vi`
- Có hỗ trợ `404` page
- Tìm kiếm nội bộ dùng [Pagefind](https://pagefind.app/)

## 11) Tìm kiếm nội bộ (Pagefind)

Search được tích hợp sẵn qua Pagefind — chạy client-side, không cần backend.

- Trang search: `/vi/search` và `/en/search`
- Pagefind index được sinh tự động khi build (`pagefind --site dist`)
- Script `build` trong `package.json` đã bao gồm bước này

### Kiểm tra search local

```bash
npm run build
npm run preview
```

Mở `http://localhost:4321/vi/search` hoặc `/en/search` để test.

> **Lưu ý:** Search không hoạt động ở `npm run dev` — cần build trước để Pagefind sinh index.
