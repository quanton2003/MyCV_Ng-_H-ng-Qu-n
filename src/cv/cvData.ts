export type CvTextBlock = {
  title: string
  bullets: string[]
}

export type CvSkillGroup = {
  label: string
  items: string[]
}

export type CvTimelineItem = {
  title: string
  date: string
  bullets: string[]
}

export type CvData = {
  header: {
    name: string
    title: string
    location: string
    email: string
    github: string
    facebook: string
    youtube: string
    /** Số Zalo — dùng cho liên kết gọi tel: */
    zaloPhone: string
  }
  summary: string
  skills: CvSkillGroup[]
  experience: CvTimelineItem[]
  projects: CvTimelineItem[]
  education: {
    school: string
    date: string
    major: string
    gpa: string
  }
}

// Data lấy theo nội dung trong ảnh CV mẫu.
// Bạn có thể chỉnh lại email/số điện thoại/dates cho khớp 100%.
export const cvData: CvData = {
  header: {
    name: 'Ngô Hồng Quân',
    title: 'Backend Developer',
    location: 'Hanoi, Vietnam',
    email: 'quanvyyyb@gmail.com',
    github: 'https://github.com/quanton2003',
    facebook: 'https://www.facebook.com/nhin.cai.ccll',
    youtube: 'https://www.youtube.com/@ngohongquan4962',
    zaloPhone: '0343147165',
  },
  summary:
    'Làm việc chăm chỉ trong một môi trường công nghệ cao. Kinh nghiệm phát triển ứng dụng Full Stack sử dụng MERN Stack (MongoDB, Express.js, React.js, Node.js). Có kinh nghiệm xây dựng FrontEnd API, hệ thống xác thực người dùng và quản lý dữ liệu. Đam mê học hỏi và phát triển các dự án thực tế.',
  skills: [
    { label: 'LANGUAGES', items: ['JavaScript', 'PHP', 'HTML', 'CSS'] },
    { label: 'FRONTEND', items: ['React.js', 'Next.js', 'Redux Toolkit', 'Bootstrap'] },
    { label: 'BACKEND', items: ['Node.js', 'Express.js', 'Laravel'] },
    { label: 'DATABASES', items: ['MongoDB', 'MySQL', 'PostgreSQL'] },
    { label: 'TOOLS', items: ['Git', 'GitHub', 'GitLab', 'Deployment (Vercel/Render)'] },
    { label: 'OTHER', items: ['REST API Design', 'JWT Authentication', 'API Integration'] },
  ],
  experience: [
    {
      title: 'AI Automation Intern – ECOSINH',
      date: '05/2025 – 01/2026',
      bullets: [
        'Tích lũy kiến thức về tự động hóa công việc và quản lý dự án.',
        'Thiết kế và cải tiến các quy trình tự động hóa nhằm tối ưu vận hành.',
        'Xây dựng pipeline tự động để xử lý/phân tích dữ liệu từ các nguồn liên quan.',
        'Tối ưu quy trình giảm dung lượng dữ liệu hạ tầng.',
        'Làm việc với automation tools và API để tích hợp dữ liệu vào workflow.',
      ],
    },
    {
      title: 'Intern Developer – Solana Superteam',
      date: '09/2024 – 12/2024',
      bullets: [
        'Tham gia phát triển ứng dụng web cho blockchain với mục tiêu kết nối dữ liệu.',
        'Xây dựng backend API bằng Laravel và MySQL để hỗ trợ các luồng chính.',
        'Phát triển các tính năng quan trọng cho hệ thống.',
        'Tích hợp blockchain vào trong các phần của ứng dụng.',
        'Phối hợp với team để hoàn thiện các tính năng chính của dự án.',
      ],
    },
  ],
  projects: [
    {
      title: 'E-Commerce Platform - Personal Project',
      date: '09/2023 – 01/2024',
      bullets: [
        'Xây dựng nền tảng thương mại điện tử full-stack sử dụng MongoDB, Express.js, React.js và Node.js.',
        'Thiết kế RESTful API và xây dựng luồng quản lý dữ liệu.',
        'Xây dựng hệ thống xác thực đăng nhập bằng JWT Authentication.',
        'Phát triển dashboard quản trị và các trang người dùng.',
        'Tối ưu tốc độ tải trang và hiệu suất tổng thể.',
        'GitHub Backend: https://github.com/quanton2003 | Frontend: https://github.com/quanton2003/front-end',
      ],
    },
    {
      title: 'AI Workflow System - ECOSINH',
      date: '05/2024 – 01/2025',
      bullets: [
        'Xây dựng hệ thống tự động tạo nội dung/giải pháp dựa trên các input đầu vào.',
        'Thiết lập workflow tự động bằng automation API/luồng tích hợp.',
        'Tích hợp các thành phần để vận hành ổn định và có thể mở rộng.',
        'Xây dựng các chiến lược tự động nhằm tối ưu thời gian và chi phí.',
        'Giám sát và điều chỉnh quy trình dựa trên kết quả đầu ra.',
      ],
    },
  ],
  education: {
    school: 'FPT Polytechnic College',
    date: '07/2022 – 05/2025',
    major: 'Chuyên ngành: Web Programming (Web Backend)',
    gpa: 'GPA: 3.5',
  },
}

