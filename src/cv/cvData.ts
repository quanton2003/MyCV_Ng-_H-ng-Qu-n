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

export type CvLanguage = 'vi' | 'en'

export type CvLabels = {
  navAria: string
  brandAria: string
  socialAria: string
  emailAria: string
  youtubeAria: string
  zaloAria: string
  zaloTitle: string
  switchLabel: string
  nav: {
    top: string
    summary: string
    skills: string
    experience: string
    projects: string
    education: string
    softSkills: string
  }
  sections: {
    summary: string
    skills: string
    experience: string
    projects: string
    education: string
    softSkills: string
  }
}

export const cvLabels: Record<CvLanguage, CvLabels> = {
  vi: {
    navAria: 'Điều hướng CV',
    brandAria: 'về đầu trang',
    socialAria: 'Liên hệ và mạng xã hội',
    emailAria: 'Gửi email tới',
    youtubeAria: 'Kênh YouTube',
    zaloAria: 'Gọi Zalo',
    zaloTitle: 'Gọi Zalo',
    switchLabel: 'English',
    nav: {
      top: 'Đầu trang',
      summary: 'Tóm tắt',
      skills: 'Kỹ năng',
      experience: 'Kinh nghiệm',
      projects: 'Dự án',
      education: 'Học vấn',
      softSkills: 'Kỹ năng mềm',
    },
    sections: {
      summary: 'TÓM TẮT BẢN THÂN',
      skills: 'KỸ NĂNG',
      experience: 'KINH NGHIỆM LÀM VIỆC',
      projects: 'DỰ ÁN',
      education: 'HỌC VẤN',
      softSkills: 'KỸ NĂNG MỀM',
    },
  },
  en: {
    navAria: 'CV navigation',
    brandAria: 'back to top',
    socialAria: 'Contact and social links',
    emailAria: 'Send email to',
    youtubeAria: 'YouTube channel',
    zaloAria: 'Call Zalo',
    zaloTitle: 'Call Zalo',
    switchLabel: 'Tiếng Việt',
    nav: {
      top: 'Top',
      summary: 'Summary',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      softSkills: 'Soft skills',
    },
    sections: {
      summary: 'PROFESSIONAL SUMMARY',
      skills: 'TECHNICAL SKILLS',
      experience: 'WORK EXPERIENCE',
      projects: 'PROJECTS',
      education: 'EDUCATION',
      softSkills: 'SOFT SKILLS',
    },
  },
}

export const cvDataByLanguage: Record<CvLanguage, CvData> = {
  "vi": {
    "header": {
      "name": "Ngô Hồng Quân",
      "title": "Backend Developer",
      "location": "Hanoi, Vietnam",
      "email": "quanyyyb@gmail.com",
      "github": "https://github.com/quanton2003",
      "facebook": "https://www.facebook.com/developer.quandepzai",
      "youtube": "https://www.youtube.com/@ngohongquan4962",
      "zaloPhone": "0343174165"
    },
    "summary": "Lập trình viên Web với nền tảng JavaScript và kinh nghiệm phát triển ứng dụng Full Stack sử dụng MERN Stack (MongoDB, Express.js, React.js, Node.js). Có kinh nghiệm xây dựng RESTful API, hệ thống xác thực người dùng và thiết kế cơ sở dữ liệu cho các ứng dụng web. Đã tham gia phát triển các dự án thực tế như nền tảng thương mại điện tử, hệ thống tự động hóa nội dung sử dụng AI. Mong muốn phát triển chuyên sâu về Backend và tham gia xây dựng các sản phẩm web có khả năng mở rộng và hiệu năng cao.",
    "skills": [
      {
        "label": "LANGUAGES",
        "items": [
          "JavaScript",
          "HTML",
          "CSS",
          "PHP"
        ]
      },
      {
        "label": "FRONTEND",
        "items": [
          "React.js",
          "Next.js",
          "Redux Toolkit",
          "Bootstrap"
        ]
      },
      {
        "label": "BACKEND",
        "items": [
          "Node.js",
          "Express.js",
          "Laravel"
        ]
      },
      {
        "label": "DATABASES",
        "items": [
          "MongoDB",
          "MySQL",
          "PostgreSQL"
        ]
      },
      {
        "label": "TOOLS",
        "items": [
          "Git",
          "GitHub",
          "Gitflow",
          "Deployment (Vercel/Render)"
        ]
      },
      {
        "label": "OTHER",
        "items": [
          "RESTful API Design",
          "JWT Authentication",
          "API Integration"
        ]
      }
    ],
    "experience": [
      {
        "title": "AI Automation - ECOSINH",
        "date": "05/2025 - 01/2026",
        "bullets": [
          "Thiết kế và xây dựng workflow tự động tạo nội dung mạng xã hội sử dụng AI, tự động lấy thông tin từ các trang báo để tổng hợp tin mới và chống trùng nội dung đã viết.",
          "Tích hợp các API AI để tự động tạo nội dung văn bản và hình ảnh.",
          "Xây dựng pipeline tự động gồm các bước: nghiên cứu nội dung, tạo bài viết, tạo hình ảnh và đăng bài.",
          "Tối ưu quy trình giúp giảm đáng kể thời gian sản xuất nội dung thủ công.",
          "Làm việc với các công cụ automation và API để kết nối nhiều dịch vụ trong cùng một workflow.",
          "Tối ưu giao diện trang web và sử dụng AI để cải thiện hình ảnh trên website.",
          "Website: https://ecosinh.com"
        ]
      },
      {
        "title": "Intern Developer - Solana Superteam",
        "date": "09/2024 - 12/2024",
        "bullets": [
          "Tham gia phát triển ứng dụng web cho phép người dùng chat và chơi trò chơi Bầu Cua sử dụng token Solana.",
          "Xây dựng backend API bằng Laravel và MySQL để quản lý người dùng và dữ liệu trò chơi.",
          "Phát triển giao diện frontend bằng HTML và CSS.",
          "Tích hợp blockchain Solana để xử lý giao dịch trong hệ thống.",
          "Phối hợp với các thành viên trong nhóm để hoàn thiện các tính năng chính của ứng dụng.",
          "Ứng dụng được ban giám khảo và các team bình chọn là giải độc đáo mở riêng cho team."
        ]
      },
      {
        "title": "IT Support - Healthcare Software - EHC GROUP",
        "date": "03/2026 - 07/2026",
        "bullets": [
          "Hỗ trợ kỹ thuật cho y bác sĩ và nhân viên bệnh viện trong quá trình sử dụng phần mềm HIS/LIS.",
          "Viết báo cáo về các lỗi và yêu cầu của khách hàng tại bệnh viện.",
          "Cấu hình báo cáo các phiếu hệ thống HIS của bệnh viện.",
          "Tiếp nhận và xử lý lỗi hệ thống, hỗ trợ vận hành quy trình khám chữa bệnh.",
          "Đào tạo và hướng dẫn người dùng sử dụng phần mềm.",
          "Phối hợp với team dev để kiểm tra và fix lỗi nghiệp vụ."
        ]
      }
    ],
    "projects": [
      {
        "title": "E-Commerce Platform - Personal Project",
        "date": "09/2023 - 01/2024",
        "bullets": [
          "Phát triển nền tảng thương mại điện tử full-stack theo kiến trúc MERN Stack, tập trung vào trải nghiệm người dùng và khả năng mở rộng hệ thống.",
          "Thiết kế và xây dựng RESTful API phục vụ quản lý người dùng, sản phẩm, giỏ hàng và đơn hàng.",
          "Triển khai xác thực và phân quyền bằng JWT Authentication cho người dùng và quản trị viên.",
          "Xây dựng cơ sở dữ liệu MongoDB với các collection và model phục vụ quản lý dữ liệu người dùng, sản phẩm và đơn hàng.",
          "Phát triển giao diện người dùng và hệ thống quản trị bằng React.js kết hợp Redux Toolkit để quản lý state hiệu quả.",
          "Tích hợp các chức năng quản trị như quản lý sản phẩm, cập nhật trạng thái đơn hàng và theo dõi hoạt động hệ thống.",
          "Tham gia xử lý logic backend, kết nối API với frontend và tối ưu luồng dữ liệu giữa các thành phần.",
          "GitHub Backend: https://github.com/quanton2003 | Frontend: https://github.com/quanton2003/front-end"
        ]
      },
      {
        "title": "AI Workflow System (n8n) - ECOSINH",
        "date": "05/2025 - 01/2026",
        "bullets": [
          "Phát triển hệ thống tự động hóa đăng bài Facebook ứng dụng AI nhằm tối ưu quy trình sản xuất nội dung số.",
          "Thiết kế workflow tự động từ khâu lấy chủ đề, tạo nội dung, tạo hình ảnh đến đăng bài lên Facebook theo quy trình khép kín.",
          "Tích hợp các API AI để hỗ trợ sinh nội dung và hình ảnh tự động, giúp tăng tốc độ tạo bài viết và đảm bảo tính đồng bộ.",
          "Xây dựng cơ chế kiểm tra và xử lý nội dung trùng lặp trước khi đăng nhằm nâng cao chất lượng và hạn chế spam nội dung.",
          "Tối ưu quy trình xử lý dữ liệu và tự động hóa các tác vụ lặp lại, giúp giảm thời gian sản xuất nội dung so với phương pháp thủ công.",
          "Tham gia triển khai logic workflow, kết nối API và xử lý luồng dữ liệu giữa các thành phần trong hệ thống."
        ]
      },
      {
        "title": "Heart Daily - Website thương mại điện tử thời trang (dự án nhóm)",
        "date": "2024",
        "bullets": [
          "Tham gia phát triển website thương mại điện tử thời trang với vai trò Backend Developer.",
          "Xây dựng và xử lý các chức năng backend bằng PHP Laravel.",
          "Phát triển chức năng đăng ký, đăng nhập và phân quyền người dùng.",
          "Xây dựng hệ thống mua sắm sản phẩm, thanh toán online và đánh giá sản phẩm.",
          "Phát triển trang quản trị với các chức năng thống kê, quản lý sản phẩm, quản lý tài khoản và quản lý tồn kho.",
          "Hỗ trợ CRUD voucher và phân quyền Super Admin, Admin.",
          "Công nghệ sử dụng: HTML5, CSS3, PHP (Laravel), JavaScript, Bootstrap, Node.js, MySQL.",
          "GitHub: https://github.com/quanton2003/Du-an-heart-daily"
        ]
      }
    ],
    "education": {
      "school": "FPT Polytechnic College",
      "date": "07/2022 - 05/2025",
      "major": "Chuyên ngành: Web Programming (Web Backend)",
      "gpa": "GPA: 3.5"
    },
    "softSkills": [
      "Có khả năng làm việc nhóm và phối hợp hiệu quả trong môi trường dự án.",
      "Chủ động học hỏi và nhanh chóng thích nghi với công nghệ, môi trường làm việc mới.",
      "Có tư duy logic và khả năng phân tích, xử lý vấn đề trong công việc.",
      "Có tinh thần trách nhiệm, hỗ trợ teamwork và đảm bảo tiến độ công việc.",
      "Có khả năng tự nghiên cứu tài liệu kỹ thuật và tìm giải pháp cho vấn đề phát sinh.",
      "Quản lý thời gian và sắp xếp công việc cá nhân hiệu quả.",
      "Có khả năng đọc hiểu tài liệu kỹ thuật tiếng Anh và giao tiếp tiếng Anh cơ bản trong môi trường làm việc."
    ]
  },
  "en": {
    "header": {
      "name": "Ngô Hồng Quân",
      "title": "Backend Developer",
      "location": "Hanoi, Vietnam",
      "email": "quanyyyb@gmail.com",
      "github": "https://github.com/quanton2003",
      "facebook": "https://www.facebook.com/developer.quandepzai",
      "youtube": "https://www.youtube.com/@ngohongquan4962",
      "zaloPhone": "0343174165"
    },
    "summary": "Web Developer with a JavaScript foundation and experience building full-stack applications with the MERN Stack (MongoDB, Express.js, React.js, Node.js). Experienced in building RESTful APIs, user authentication systems, and database designs for web applications. Contributed to real-world projects such as an e-commerce platform and an AI-powered content automation system. Seeking to grow deeper in Backend development and contribute to scalable, high-performance web products.",
    "skills": [
      {
        "label": "LANGUAGES",
        "items": [
          "JavaScript",
          "HTML",
          "CSS",
          "PHP"
        ]
      },
      {
        "label": "FRONTEND",
        "items": [
          "React.js",
          "Next.js",
          "Redux Toolkit",
          "Bootstrap"
        ]
      },
      {
        "label": "BACKEND",
        "items": [
          "Node.js",
          "Express.js",
          "Laravel"
        ]
      },
      {
        "label": "DATABASES",
        "items": [
          "MongoDB",
          "MySQL",
          "PostgreSQL"
        ]
      },
      {
        "label": "TOOLS",
        "items": [
          "Git",
          "GitHub",
          "Gitflow",
          "Deployment (Vercel/Render)"
        ]
      },
      {
        "label": "OTHER",
        "items": [
          "RESTful API Design",
          "JWT Authentication",
          "API Integration"
        ]
      }
    ],
    "experience": [
      {
        "title": "AI Automation - ECOSINH",
        "date": "05/2025 - 01/2026",
        "bullets": [
          "Designed and built an AI-powered workflow to automatically create social media content, collect information from news sites, summarize new articles, and prevent duplicate content.",
          "Integrated AI APIs to generate text and image content automatically.",
          "Built an automated pipeline covering content research, article generation, image creation, and publishing.",
          "Optimized the process and significantly reduced manual content production time.",
          "Worked with automation tools and APIs to connect multiple services in one workflow.",
          "Improved the website interface and used AI to enhance visuals on the website.",
          "Website: https://ecosinh.com"
        ]
      },
      {
        "title": "Intern Developer - Solana Superteam",
        "date": "09/2024 - 12/2024",
        "bullets": [
          "Contributed to a web application that allowed users to chat and play the Bau Cua game using Solana tokens.",
          "Built backend APIs with Laravel and MySQL to manage users and game data.",
          "Developed frontend interfaces with HTML and CSS.",
          "Integrated the Solana blockchain to process in-system transactions.",
          "Collaborated with team members to complete the main application features.",
          "The application was selected by judges and other teams for a special team award for originality."
        ]
      },
      {
        "title": "IT Support - Healthcare Software - EHC GROUP",
        "date": "03/2026 - 07/2026",
        "bullets": [
          "Provided technical support for doctors, nurses, and hospital staff using HIS/LIS software.",
          "Prepared reports on bugs and customer requirements at the hospital.",
          "Configured HIS system form reports for hospital operations.",
          "Received and resolved system issues while supporting hospital examination and treatment workflows.",
          "Trained and guided users on how to use the software.",
          "Coordinated with the development team to test and fix business workflow issues."
        ]
      }
    ],
    "projects": [
      {
        "title": "E-Commerce Platform - Personal Project",
        "date": "09/2023 - 01/2024",
        "bullets": [
          "Developed a full-stack e-commerce platform using the MERN Stack architecture, focusing on user experience and system scalability.",
          "Designed and built RESTful APIs for user, product, cart, and order management.",
          "Implemented authentication and authorization with JWT Authentication for users and administrators.",
          "Designed a MongoDB database with collections and models for managing users, products, and orders.",
          "Developed the user interface and admin system with React.js and Redux Toolkit for efficient state management.",
          "Integrated admin features such as product management, order status updates, and system activity tracking.",
          "Handled backend logic, connected APIs with the frontend, and optimized data flow between components.",
          "GitHub Backend: https://github.com/quanton2003 | Frontend: https://github.com/quanton2003/front-end"
        ]
      },
      {
        "title": "AI Workflow System (n8n) - ECOSINH",
        "date": "05/2025 - 01/2026",
        "bullets": [
          "Developed an AI-powered Facebook posting automation system to optimize the digital content production process.",
          "Designed an end-to-end automated workflow from topic collection, content generation, and image generation to Facebook publishing.",
          "Integrated AI APIs to support automatic text and image generation, speeding up article creation and improving consistency.",
          "Built a duplicate-content checking and handling mechanism before publishing to improve quality and reduce spam.",
          "Optimized data processing and automated repetitive tasks, reducing production time compared with manual methods.",
          "Implemented workflow logic, connected APIs, and handled data flow between system components."
        ]
      },
      {
        "title": "Heart Daily - Fashion E-Commerce Website (Team Project)",
        "date": "2024",
        "bullets": [
          "Contributed to a fashion e-commerce website as a Backend Developer.",
          "Built and handled backend features with PHP Laravel.",
          "Developed registration, login, and user authorization features.",
          "Built shopping, online payment, and product review features.",
          "Developed an admin dashboard with statistics, product management, account management, and inventory management features.",
          "Supported voucher CRUD operations and Super Admin/Admin authorization.",
          "Technologies used: HTML5, CSS3, PHP (Laravel), JavaScript, Bootstrap, Node.js, MySQL.",
          "GitHub: https://github.com/quanton2003/Du-an-heart-daily"
        ]
      }
    ],
    "education": {
      "school": "FPT Polytechnic College",
      "date": "07/2022 - 05/2025",
      "major": "Major: Web Programming (Web Backend)",
      "gpa": "GPA: 3.5"
    },
    "softSkills": [
      "Able to work in teams and coordinate effectively in project environments.",
      "Proactive in learning and quick to adapt to new technologies and work environments.",
      "Strong logical thinking and problem analysis skills.",
      "Responsible, supportive in teamwork, and focused on meeting deadlines.",
      "Able to independently research technical documentation and find solutions for arising issues.",
      "Effective at time management and organizing personal work.",
      "Able to read English technical documentation and communicate in basic English in a work environment."
    ]
  }
}

export const cvData = cvDataByLanguage.vi
