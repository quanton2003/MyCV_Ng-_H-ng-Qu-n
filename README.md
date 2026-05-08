# Online CV - React + TypeScript + Vite

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=111827)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-Custom-2563EB?style=for-the-badge&logo=css&logoColor=white)

Đây là website CV online được xây dựng bằng **React + TypeScript + Vite**. Dự án dùng dữ liệu CV trực tiếp trong source code để khi push lên GitHub và deploy qua Vercel, website có thể build và hiển thị CV ngay, không cần cấu hình Environment Variables.

## Lý Do Không Dùng `.env.local`

Trước đó dự án từng thử đưa dữ liệu CV vào `.env.local` để không commit lên Git. Cách đó có nhược điểm:

- `.env.local` không được push lên Git.
- Vercel/GitHub khi build sẽ không có dữ liệu CV nếu chưa cấu hình env thủ công.
- Website deploy dễ bị rơi về dữ liệu mẫu hoặc mất nội dung CV.

Vì CV online vốn là nội dung công khai cho người xem, hướng hiện tại là **đặt dữ liệu CV trong `src/cv/cvData.ts`** để deploy ổn định hơn.

## Tính Năng

| Tính năng | Mô tả |
| --- | --- |
| CV song ngữ | Có dữ liệu Tiếng Việt và English. |
| Nút đổi ngôn ngữ | Chuyển nhanh giữa Tiếng Việt và English. |
| Thanh điều hướng sticky | Thanh nav cố định trên đầu và tự highlight section đang xem. |
| Tự nhận diện link | URL trong bullet tự chuyển thành link click được. |
| Responsive | Giao diện dùng tốt trên desktop và mobile. |
| Deploy đơn giản | Push GitHub và deploy Vercel trực tiếp, không cần env. |

## Chạy Dự Án

Cài dependencies:

```bash
npm install
```

Chạy development server:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Xem thử bản build:

```bash
npm run preview
```

Nếu dùng Windows PowerShell và bị chặn `npm.ps1`, dùng:

```bash
npm.cmd run dev
npm.cmd run build
```

## Cấu Trúc Chính

```text
.
+-- public/
|   +-- icons.svg
+-- src/
|   +-- cv/
|   |   +-- CvNav.tsx         # Thanh điều hướng và nút đổi ngôn ngữ
|   |   +-- CvPage.tsx        # Component render CV
|   |   +-- cvData.ts         # Toàn bộ dữ liệu CV và label UI
|   +-- App.tsx               # State ngôn ngữ và bố cục chính
|   +-- cv.css                # Toàn bộ CSS chính
|   +-- main.tsx              # Entry point của React
+-- index.html
+-- package.json
+-- vite.config.ts
+-- README.md
```

## Cách Sửa Nội Dung CV

File cần sửa:

```text
src/cv/cvData.ts
```

Các phần quan trọng:

| Phần | Ý nghĩa |
| --- | --- |
| `cvLabels` | Label giao diện cho Tiếng Việt và English. |
| `cvDataByLanguage.vi` | Nội dung CV bản Tiếng Việt. |
| `cvDataByLanguage.en` | Nội dung CV bản English. |
| `header` | Tên, chức danh, email, GitHub, Facebook, YouTube, Zalo. |
| `summary` | Tóm tắt bản thân. |
| `skills` | Nhóm kỹ năng. |
| `experience` | Kinh nghiệm làm việc. |
| `projects` | Dự án. |
| `education` | Học vấn. |
| `softSkills` | Kỹ năng mềm. |

Ví dụ một project:

```ts
{
  title: 'Project Name - Personal Project',
  date: '01/2026 - 03/2026',
  bullets: [
    'Built RESTful APIs for user, product, and order management.',
    'Implemented authentication and authorization with JWT.',
    'GitHub: https://github.com/your-username/project-name',
  ],
}
```

Các URL bắt đầu bằng `http://` hoặc `https://` trong bullet sẽ tự động được render thành link.

## Deploy Lên Vercel

Thiết lập gợi ý:

| Mục | Giá trị |
| --- | --- |
| Framework Preset | Vite |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | `dist` |

Quy trình:

1. Push code lên GitHub.
2. Import repository vào Vercel.
3. Chọn framework `Vite`.
4. Deploy.

Không cần cấu hình Environment Variables vì dữ liệu CV nằm trong source code.

## Ghi Chú Cho AI / Coding Agent

- Dữ liệu CV hiện nằm trực tiếp trong `src/cv/cvData.ts` để deploy GitHub/Vercel ổn định.
- Không dùng `.env.local` làm nguồn dữ liệu runtime.
- Không hard-code tên/email/link trong component. Nếu sửa nội dung CV, sửa trong `cvData.ts`.
- `CvNav` nhận tên từ `ownerName`, truyền từ `App.tsx`.
- `CvPage` render header, contact, skills, experience, projects, education và soft skills.
- Link rỗng trong `header` sẽ được ẩn khỏi UI.
- Sau khi sửa code, chạy `npm.cmd run build` để kiểm tra.

## Lưu Ý Quyền Riêng Tư

Repo này chứa dữ liệu CV thật trong source code để website deploy hoạt động ngay. Nếu repository public, người khác có thể xem nội dung này trên GitHub. Điều này phù hợp với CV online vì nội dung CV vốn được công khai cho nhà tuyển dụng xem.
