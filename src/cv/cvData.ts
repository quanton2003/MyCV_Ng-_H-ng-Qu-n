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
    /** Số Zalo, dùng cho liên kết gọi tel: */
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
  softSkills: string[]
}

export const cvData: CvData = {
  header: {
    name: 'Ngô Hồng Quân',
    title: 'Backend Developer',
    location: 'Hanoi, Vietnam',
    email: 'quanyyyb@gmail.com',
    github: 'https://github.com/quanton2003',
    facebook: 'https://www.facebook.com/nhin.cai.ccll',
    youtube: 'https://www.youtube.com/@ngohongquan4962',
    zaloPhone: '0343174165',
  },
  summary:
    'Lập trình viên Web với nền tảng JavaScript và kinh nghiệm phát triển ứng dụng Full Stack sử dụng MERN Stack (MongoDB, Express.js, React.js, Node.js). Có kinh nghiệm xây dựng RESTful API, hệ thống xác thực người dùng và thiết kế cơ sở dữ liệu cho các ứng dụng web. Đã tham gia phát triển các dự án thực tế như nền tảng thương mại điện tử, hệ thống tự động hóa nội dung sử dụng AI. Mong muốn phát triển chuyên sâu về Backend và tham gia xây dựng các sản phẩm web có khả năng mở rộng và hiệu năng cao.',
  skills: [
    { label: 'LANGUAGES', items: ['JavaScript', 'HTML', 'CSS', 'PHP'] },
    { label: 'FRONTEND', items: ['React.js', 'Next.js', 'Redux Toolkit', 'Bootstrap'] },
    { label: 'BACKEND', items: ['Node.js', 'Express.js', 'Laravel'] },
    { label: 'DATABASES', items: ['MongoDB', 'MySQL', 'PostgreSQL'] },
    { label: 'TOOLS', items: ['Git', 'GitHub', 'Gitflow', 'Deployment (Vercel/Render)'] },
    { label: 'OTHER', items: ['RESTful API Design', 'JWT Authentication', 'API Integration'] },
  ],
  experience: [
    {
      title: 'AI Automation - ECOSINH',
      date: '05/2025 - 01/2026',
      bullets: [
        'Thiết kế và xây dựng workflow tự động tạo nội dung mạng xã hội sử dụng AI, tự động lấy thông tin từ các trang báo để tổng hợp tin mới và chống trùng nội dung đã viết.',
        'Tích hợp các API AI để tự động tạo nội dung văn bản và hình ảnh.',
        'Xây dựng pipeline tự động gồm các bước: nghiên cứu nội dung, tạo bài viết, tạo hình ảnh và đăng bài.',
        'Tối ưu quy trình giúp giảm đáng kể thời gian sản xuất nội dung thủ công.',
        'Làm việc với các công cụ automation và API để kết nối nhiều dịch vụ trong cùng một workflow.',
        'Tối ưu giao diện trang web và sử dụng AI để cải thiện hình ảnh trên website.',
        'Website: https://ecosinh.com',
      ],
    },
    {
      title: 'Intern Developer - Solana Superteam',
      date: '09/2024 - 12/2024',
      bullets: [
        'Tham gia phát triển ứng dụng web cho phép người dùng chat và chơi trò chơi Bầu Cua sử dụng token Solana.',
        'Xây dựng backend API bằng Laravel và MySQL để quản lý người dùng và dữ liệu trò chơi.',
        'Phát triển giao diện frontend bằng HTML và CSS.',
        'Tích hợp blockchain Solana để xử lý giao dịch trong hệ thống.',
        'Phối hợp với các thành viên trong nhóm để hoàn thiện các tính năng chính của ứng dụng.',
        'Ứng dụng được ban giám khảo và các team bình chọn là giải độc đáo mở riêng cho team.',
      ],
    },
    {
      title: 'IT Support - Healthcare Software - EHC GROUP',
      date: '03/2026 - 07/2026',
      bullets: [
        'Hỗ trợ kỹ thuật cho y bác sĩ và nhân viên bệnh viện trong quá trình sử dụng phần mềm HIS/LIS.',
        'Viết báo cáo về các lỗi và yêu cầu của khách hàng tại bệnh viện.',
        'Cấu hình báo cáo các phiếu hệ thống HIS của bệnh viện.',
        'Tiếp nhận và xử lý lỗi hệ thống, hỗ trợ vận hành quy trình khám chữa bệnh.',
        'Đào tạo và hướng dẫn người dùng sử dụng phần mềm.',
        'Phối hợp với team dev để kiểm tra và fix lỗi nghiệp vụ.',
      ],
    },
  ],
  projects: [
    {
      title: 'E-Commerce Platform - Personal Project',
      date: '09/2023 - 01/2024',
      bullets: [
        'Phát triển nền tảng thương mại điện tử full-stack theo kiến trúc MERN Stack, tập trung vào trải nghiệm người dùng và khả năng mở rộng hệ thống.',
        'Thiết kế và xây dựng RESTful API phục vụ quản lý người dùng, sản phẩm, giỏ hàng và đơn hàng.',
        'Triển khai xác thực và phân quyền bằng JWT Authentication cho người dùng và quản trị viên.',
        'Xây dựng cơ sở dữ liệu MongoDB với các collection và model phục vụ quản lý dữ liệu người dùng, sản phẩm và đơn hàng.',
        'Phát triển giao diện người dùng và hệ thống quản trị bằng React.js kết hợp Redux Toolkit để quản lý state hiệu quả.',
        'Tích hợp các chức năng quản trị như quản lý sản phẩm, cập nhật trạng thái đơn hàng và theo dõi hoạt động hệ thống.',
        'Tham gia xử lý logic backend, kết nối API với frontend và tối ưu luồng dữ liệu giữa các thành phần.',
        'GitHub Backend: https://github.com/quanton2003 | Frontend: https://github.com/quanton2003/front-end',
      ],
    },
    {
      title: 'AI Workflow System (n8n) - ECOSINH',
      date: '05/2025 - 01/2026',
      bullets: [
        'Phát triển hệ thống tự động hóa đăng bài Facebook ứng dụng AI nhằm tối ưu quy trình sản xuất nội dung số.',
        'Thiết kế workflow tự động từ khâu lấy chủ đề, tạo nội dung, tạo hình ảnh đến đăng bài lên Facebook theo quy trình khép kín.',
        'Tích hợp các API AI để hỗ trợ sinh nội dung và hình ảnh tự động, giúp tăng tốc độ tạo bài viết và đảm bảo tính đồng bộ.',
        'Xây dựng cơ chế kiểm tra và xử lý nội dung trùng lặp trước khi đăng nhằm nâng cao chất lượng và hạn chế spam nội dung.',
        'Tối ưu quy trình xử lý dữ liệu và tự động hóa các tác vụ lặp lại, giúp giảm thời gian sản xuất nội dung so với phương pháp thủ công.',
        'Tham gia triển khai logic workflow, kết nối API và xử lý luồng dữ liệu giữa các thành phần trong hệ thống.',
      ],
    },
    {
      title: 'Heart Daily - Website thương mại điện tử thời trang (dự án nhóm)',
      date: '2024',
      bullets: [
        'Tham gia phát triển website thương mại điện tử thời trang với vai trò Backend Developer.',
        'Xây dựng và xử lý các chức năng backend bằng PHP Laravel.',
        'Phát triển chức năng đăng ký, đăng nhập và phân quyền người dùng.',
        'Xây dựng hệ thống mua sắm sản phẩm, thanh toán online và đánh giá sản phẩm.',
        'Phát triển trang quản trị với các chức năng thống kê, quản lý sản phẩm, quản lý tài khoản và quản lý tồn kho.',
        'Hỗ trợ CRUD voucher và phân quyền Super Admin, Admin.',
        'Công nghệ sử dụng: HTML5, CSS3, PHP (Laravel), JavaScript, Bootstrap, Node.js, MySQL.',
        'GitHub: https://github.com/quanton2003/Du-an-heart-daily',
      ],
    },
  ],
  education: {
    school: 'FPT Polytechnic College',
    date: '07/2022 - 05/2025',
    major: 'Chuyên ngành: Web Programming (Web Backend)',
    gpa: 'GPA: 3.5',
  },
  softSkills: [
    'Có khả năng làm việc nhóm và phối hợp hiệu quả trong môi trường dự án.',
    'Chủ động học hỏi và nhanh chóng thích nghi với công nghệ, môi trường làm việc mới.',
    'Có tư duy logic và khả năng phân tích, xử lý vấn đề trong công việc.',
    'Có tinh thần trách nhiệm, hỗ trợ teamwork và đảm bảo tiến độ công việc.',
    'Có khả năng tự nghiên cứu tài liệu kỹ thuật và tìm giải pháp cho vấn đề phát sinh.',
    'Quản lý thời gian và sắp xếp công việc cá nhân hiệu quả.',
    'Có khả năng đọc hiểu tài liệu kỹ thuật tiếng Anh và giao tiếp tiếng Anh cơ bản trong môi trường làm việc.',
  ],
}
