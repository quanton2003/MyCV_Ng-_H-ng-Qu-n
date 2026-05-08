# CV Builder Template

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=111827)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-Custom-2563EB?style=for-the-badge&logo=css&logoColor=white)

Đây là template tạo CV online bằng **React + TypeScript + Vite**. Dự án được thiết kế để người khác có thể clone về, thay dữ liệu mẫu bằng thông tin cá nhân của họ, rồi deploy thành một trang CV riêng.

Repository mặc định chỉ chứa **dữ liệu mẫu**. Không có thông tin CV thật, không có dữ liệu cá nhân, không có tracking người xem và không dùng ảnh đại diện cá nhân.

Nếu muốn dùng dữ liệu CV thật mà không đưa lên Git, tạo file `.env.local` ở thư mục gốc và đặt biến `VITE_CV_DATA_JSON`. File `.env.local` đã được ignore bởi `.gitignore`.

## Tính Năng

| Tính năng | Mô tả |
| --- | --- |
| CV theo dữ liệu | Toàn bộ nội dung CV nằm trong một file TypeScript. |
| Song ngữ | Có sẵn cấu trúc Tiếng Việt và English. |
| Thanh điều hướng sticky | Thanh nav cố định trên đầu và tự highlight section đang xem. |
| Tự nhận diện link | URL trong bullet tự chuyển thành link click được. |
| Responsive | Giao diện dùng tốt trên desktop và mobile. |
| Deploy tĩnh | Có thể deploy lên Vercel, Netlify, GitHub Pages hoặc static hosting. |
| Không chứa dữ liệu riêng tư | Dữ liệu mặc định là placeholder như `Your Name`, `you@example.com`. |

## Chạy Dự Án

Cài dependencies:

```bash
npm install
```

Chạy môi trường development:

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

## Cấu Trúc Thư Mục

```text
.
+-- public/
|   +-- icons.svg             # Asset public tùy chọn
+-- src/
|   +-- cv/
|   |   +-- CvNav.tsx         # Thanh điều hướng và nút đổi ngôn ngữ
|   |   +-- CvPage.tsx        # Component render CV
|   |   +-- cvData.ts         # Schema, label và dữ liệu CV mẫu
|   +-- App.tsx               # State ngôn ngữ và bố cục chính
|   +-- cv.css                # Toàn bộ CSS chính
|   +-- main.tsx              # Entry point của React
|   +-- vite-env.d.ts
+-- index.html
+-- package.json
+-- package-lock.json
+-- tsconfig.json
+-- vite.config.ts
+-- README.md
```

## Cách Tạo CV Riêng

Có hai cách tạo CV riêng.

## Cách Nhanh Nhất: Gửi CV Cho AI Để Tạo Env

Nếu bạn không muốn tự viết JSON, hãy gửi CV hiện tại của bạn cho AI. CV có thể là:

- Ảnh chụp CV.
- File PDF.
- File Word.
- Nội dung text copy từ CV cũ.

Sau đó yêu cầu AI tạo file `.env.local` theo đúng cấu trúc của dự án này.

Prompt gợi ý:

```text
Tôi đang dùng project CV Builder Template React/Vite.
Hãy đọc CV trong ảnh/file tôi gửi và tạo giúp tôi nội dung file .env.local.

Yêu cầu:
- Chỉ trả về đúng một biến VITE_CV_DATA_JSON=...
- JSON phải có đủ 2 key: vi và en.
- Mỗi key phải đúng schema:
  header, summary, skills, experience, projects, education, softSkills.
- Dịch bản en sang tiếng Anh chuyên nghiệp.
- Giữ tên riêng, tên công ty, link GitHub, email, số điện thoại chính xác.
- URL phải giữ đầy đủ https:// để website tự biến thành link.
- Không bọc kết quả trong markdown nếu tôi cần copy thẳng vào .env.local.
```

Khi AI trả về kết quả, tạo file ở thư mục gốc:

```text
.env.local
```

Dán toàn bộ nội dung AI trả về vào file đó:

```text
VITE_CV_DATA_JSON={"vi":{...},"en":{...}}
```

Sau đó chạy:

```bash
npm run dev
```

Hoặc trên Windows PowerShell:

```bash
npm.cmd run dev
```

Nếu trang chạy đúng, build thử:

```bash
npm.cmd run build
```

`.env.local` sẽ không bị đưa lên Git vì `.gitignore` đã ignore `*.local`.

### Cách 1: Sửa dữ liệu mẫu trong source

File cần sửa:

```text
src/cv/cvData.ts
```

Cách này phù hợp nếu bạn muốn repo public chứa luôn dữ liệu CV của bạn.

### Cách 2: Dùng file env riêng tư

Tạo file:

```text
.env.local
```

Thêm biến:

```text
VITE_CV_DATA_JSON={...}
```

Bạn có thể copy cấu trúc từ:

```text
.env.example
```

Ưu điểm của cách này:

- Dữ liệu CV thật không nằm trong source code.
- `.env.local` không bị Git commit vì `.gitignore` đang ignore `*.local`.
- Người khác clone repo chỉ thấy dữ liệu mẫu trong `src/cv/cvData.ts`.

Lưu ý: Vite sẽ nhúng biến `VITE_*` vào bundle frontend khi build. Nghĩa là dữ liệu CV vẫn công khai với người xem website sau khi deploy, chỉ là không nằm trong Git repository.

## Schema Env Cho AI

AI cần tạo JSON theo schema sau:

```ts
type CvData = {
  header: {
    name: string
    title: string
    location: string
    email: string
    github: string
    facebook: string
    youtube: string
    zaloPhone: string
  }
  summary: string
  skills: {
    label: string
    items: string[]
  }[]
  experience: {
    title: string
    date: string
    bullets: string[]
  }[]
  projects: {
    title: string
    date: string
    bullets: string[]
  }[]
  education: {
    school: string
    date: string
    major: string
    gpa: string
  }
  softSkills: string[]
}

type EnvShape = {
  vi: CvData
  en: CvData
}
```

Ví dụ rút gọn:

```text
VITE_CV_DATA_JSON={"vi":{"header":{"name":"Nguyen Van A","title":"Backend Developer","location":"Hanoi, Vietnam","email":"a@example.com","github":"https://github.com/example","facebook":"","youtube":"","zaloPhone":"0900000000"},"summary":"Tom tat ngan gon...","skills":[{"label":"BACKEND","items":["Node.js","Express.js"]}],"experience":[],"projects":[],"education":{"school":"Ten truong","date":"2022 - 2025","major":"Major: Web Development","gpa":"GPA: Optional"},"softSkills":["Lam viec nhom"]},"en":{"header":{"name":"Nguyen Van A","title":"Backend Developer","location":"Hanoi, Vietnam","email":"a@example.com","github":"https://github.com/example","facebook":"","youtube":"","zaloPhone":"0900000000"},"summary":"Short professional summary...","skills":[{"label":"BACKEND","items":["Node.js","Express.js"]}],"experience":[],"projects":[],"education":{"school":"School name","date":"2022 - 2025","major":"Major: Web Development","gpa":"GPA: Optional"},"softSkills":["Team collaboration"]}}
```

Các export quan trọng:

| Export | Vai trò |
| --- | --- |
| `CvData` | Kiểu dữ liệu mô tả cấu trúc CV. |
| `CvLanguage` | Danh sách ngôn ngữ hiện có: `'vi' | 'en'`. |
| `CvLabels` | Kiểu dữ liệu cho label UI. |
| `cvLabels` | Label của nav, section và aria text theo từng ngôn ngữ. |
| `cvDataByLanguage` | Nội dung CV theo từng ngôn ngữ. |
| `cvData` | Dữ liệu mặc định, hiện trỏ về bản Tiếng Việt mẫu. |

Các trường thường cần sửa:

| Trường | Ý nghĩa |
| --- | --- |
| `header.name` | Tên hiển thị trên nav và đầu CV. |
| `header.title` | Chức danh hoặc vị trí mục tiêu. |
| `header.location` | Thành phố, quốc gia. |
| `header.email` | Email liên hệ. |
| `header.github` | Link GitHub. |
| `header.facebook` | Link Facebook, có thể để rỗng để ẩn. |
| `header.youtube` | Link YouTube, có thể để rỗng để ẩn. |
| `header.zaloPhone` | Số Zalo/điện thoại, có thể để rỗng để ẩn. |
| `summary` | Tóm tắt bản thân. |
| `skills` | Nhóm kỹ năng. |
| `experience` | Kinh nghiệm làm việc. |
| `projects` | Dự án. |
| `education` | Học vấn. |
| `softSkills` | Kỹ năng mềm. |

Ví dụ thêm một dự án:

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

## Cơ Chế Song Ngữ

Ngôn ngữ hiện tại được quản lý trong:

```text
src/App.tsx
```

Luồng hiện tại:

```ts
const [language, setLanguage] = useState<CvLanguage>('vi')
const labels = cvLabels[language]
const data = cvDataByLanguage[language]
```

Nếu muốn thêm ngôn ngữ mới:

1. Mở rộng `CvLanguage`, ví dụ `'vi' | 'en' | 'ja'`.
2. Thêm label mới trong `cvLabels`.
3. Thêm dữ liệu CV mới trong `cvDataByLanguage`.
4. Cập nhật logic đổi ngôn ngữ trong `App.tsx`.

## Ghi Chú Về Component

`src/cv/CvPage.tsx` chịu trách nhiệm render:

- Header CV.
- Thông tin liên hệ.
- Link mạng xã hội, các link rỗng sẽ tự ẩn.
- Các section nội dung.
- Timeline kinh nghiệm và dự án.
- Tự động link hóa URL trong bullet.

`src/cv/CvNav.tsx` chịu trách nhiệm:

- Thanh điều hướng sticky.
- Theo dõi section đang xem.
- Nút đổi ngôn ngữ.
- Hiển thị tên ứng viên từ `data.header.name`.
- Tạo logo bằng chữ cái đầu, không dùng ảnh cá nhân.

## Giao Diện

CSS chính nằm trong:

```text
src/cv.css
```

Các class quan trọng:

| Class | Vai trò |
| --- | --- |
| `.cv-nav` | Thanh điều hướng trên cùng. |
| `.cv-nav-logo` | Logo chữ cái đầu. |
| `.cv-page` | Khung CV chính. |
| `.cv-header` | Phần tên, chức danh và liên hệ. |
| `.cv-section-title` | Tiêu đề từng section. |
| `.cv-skills` | Nhóm kỹ năng. |
| `.cv-timeline` | Timeline kinh nghiệm và dự án. |
| `.cv-bullets` | Danh sách bullet. |

Responsive và print style cũng nằm trong `src/cv.css`.

## Deploy

Cấu hình gợi ý cho Vercel:

| Mục | Giá trị |
| --- | --- |
| Framework Preset | Vite |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | `dist` |

Dự án là static frontend, không cần backend.

## Ghi Chú Cho AI / Coding Agent

- Đây là template tạo CV, không phải CV cá nhân hard-code.
- Không thêm dữ liệu cá nhân thật nếu người dùng không yêu cầu rõ.
- Nguồn dữ liệu chính là `src/cv/cvData.ts`.
- Tránh hard-code tên, email, link cá nhân vào component.
- Nếu link trong `header` rỗng, UI phải ẩn link đó.
- `CvNav` nhận tên từ `ownerName`, được truyền từ `App.tsx`.
- Logo nav là chữ cái đầu được tạo tự động, không dùng ảnh cá nhân.
- Dự án không có API tracking.
- Sau khi sửa TypeScript hoặc UI, chạy `npm.cmd run build` trên Windows nếu `npm run build` bị chặn.

## Quyền Riêng Tư

Trạng thái mặc định của repo chỉ có dữ liệu mẫu:

- `Your Name`
- `Your Target Role`
- `you@example.com`
- `https://github.com/your-username`
- URL dự án ví dụ

Trước khi deploy CV thật, hãy thay toàn bộ placeholder bằng thông tin của bạn.
