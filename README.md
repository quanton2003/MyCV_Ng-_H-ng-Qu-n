# Ngô Hồng Quân - Backend Developer CV

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=111827)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-16A34A?style=for-the-badge)

Portfolio CV online được xây dựng bằng **React + TypeScript + Vite**, tập trung vào trải nghiệm đọc CV gọn, rõ ràng và dễ quét thông tin. Dự án vừa là trang CV cá nhân, vừa là codebase mẫu có thể chỉnh sửa nhanh để deploy lên Vercel hoặc các nền tảng static hosting khác.

## Thông tin nhanh

| Mục | Nội dung |
| --- | --- |
| Họ tên | Ngô Hồng Quân |
| Vai trò | Backend Developer |
| Địa điểm | Hanoi, Vietnam |
| Email | [quanyyyb@gmail.com](mailto:quanyyyb@gmail.com) |
| GitHub | [github.com/quanton2003](https://github.com/quanton2003) |
| YouTube | [@ngohongquan4962](https://www.youtube.com/@ngohongquan4962) |

## Điểm nổi bật

- Có kinh nghiệm phát triển ứng dụng Full Stack với MERN Stack.
- Xây dựng RESTful API, JWT Authentication và thiết kế cơ sở dữ liệu cho ứng dụng web.
- Tham gia dự án AI Automation, workflow n8n, thương mại điện tử và tích hợp blockchain Solana.
- UI CV có điều hướng sticky, các section rõ ràng, timeline kinh nghiệm/dự án và nút liên hệ mạng xã hội ở đầu trang.

## Kỹ năng chính

| Nhóm | Công nghệ |
| --- | --- |
| Languages | JavaScript, HTML, CSS, PHP |
| Frontend | React.js, Next.js, Redux Toolkit, Bootstrap |
| Backend | Node.js, Express.js, Laravel |
| Databases | MongoDB, MySQL, PostgreSQL |
| Tools | Git, GitHub, Gitflow, Vercel, Render |
| Other | RESTful API Design, JWT Authentication, API Integration |

## Dự án trong CV

### E-Commerce Platform

Nền tảng thương mại điện tử full-stack theo kiến trúc MERN Stack, có RESTful API, xác thực JWT, quản lý sản phẩm, giỏ hàng, đơn hàng và dashboard quản trị.

### AI Workflow System (n8n) - ECOSINH

Hệ thống tự động hóa đăng bài Facebook ứng dụng AI, có workflow lấy chủ đề, tạo nội dung, tạo hình ảnh, kiểm tra trùng lặp và đăng bài.

### Heart Daily

Website thương mại điện tử thời trang dùng PHP Laravel, có đăng ký/đăng nhập, phân quyền, thanh toán online, đánh giá sản phẩm, quản lý tồn kho và trang quản trị.

## Công nghệ sử dụng trong source code

```text
React 19
TypeScript 5.9
Vite 8
CSS thuần
Vercel Serverless Function cho API tracking
```

## Cấu trúc thư mục

```text
.
├── api/
│   └── track.js              # API tracking lượt truy cập
├── public/
│   ├── favicon.png
│   └── icons.svg
├── src/
│   ├── cv/
│   │   ├── CvNav.tsx         # Thanh điều hướng CV
│   │   ├── CvPage.tsx        # Layout và render nội dung CV
│   │   └── cvData.ts         # Toàn bộ dữ liệu CV
│   ├── App.tsx
│   ├── cv.css                # Giao diện chính của CV
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## Cài đặt và chạy local

Yêu cầu môi trường:

- Node.js 20 hoặc mới hơn
- npm

Cài dependencies:

```bash
npm install
```

Chạy development server:

```bash
npm run dev
```

Sau đó mở địa chỉ Vite hiển thị trong terminal, thường là:

```text
http://localhost:5173/
```

## Build production

Kiểm tra TypeScript và build bản production:

```bash
npm run build
```

Xem thử bản build:

```bash
npm run preview
```

## Cách chỉnh nội dung CV

Toàn bộ nội dung CV nằm trong:

```text
src/cv/cvData.ts
```

Các phần thường chỉnh:

- `header`: tên, chức danh, email, GitHub, Facebook, YouTube, Zalo.
- `summary`: tóm tắt bản thân.
- `skills`: nhóm kỹ năng.
- `experience`: kinh nghiệm làm việc.
- `projects`: dự án cá nhân hoặc dự án nhóm.
- `education`: học vấn.
- `softSkills`: kỹ năng mềm.

Ví dụ thêm một dự án mới:

```ts
projects: [
  {
    title: 'Tên dự án',
    date: '01/2026 - 03/2026',
    bullets: [
      'Mô tả nhiệm vụ chính.',
      'Công nghệ sử dụng.',
      'Kết quả hoặc điểm nổi bật.',
    ],
  },
]
```

## Cách chỉnh giao diện

Giao diện chính nằm trong:

```text
src/cv.css
```

Các nhóm CSS quan trọng:

- `.cv-nav`: thanh điều hướng trên cùng.
- `.cv-page`: khung CV chính.
- `.cv-header`: phần tên, chức danh, liên hệ và nút mạng xã hội.
- `.cv-section-title`: tiêu đề từng mục.
- `.cv-timeline`: layout kinh nghiệm và dự án.
- `.cv-social-link`: các nút mạng xã hội ở đầu CV.

## Deploy

Dự án có thể deploy trực tiếp lên Vercel:

```bash
npm run build
```

Nếu deploy qua GitHub + Vercel:

1. Push source code lên GitHub.
2. Import repository vào Vercel.
3. Framework Preset: `Vite`.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.

## Ghi chú

- CV đang dùng CSS thuần để dễ chỉnh sửa và không phụ thuộc UI framework.
- Các nút mạng xã hội nằm ở phần đầu CV trong `src/cv/CvPage.tsx`.
- API `api/track.js` chỉ hoạt động đúng khi deploy trên môi trường hỗ trợ serverless function như Vercel.

