const coursesData = [
    {
        id: 1,
        title: "Career Accelerator",
        description: "Master to find the right path for you in this comprehensive course",
        price: 199,
        rating: 4.8,
        students: 12500,
        duration: "40 hours",
        instructor: "Dr. Faysal Ahmed",
        image: "https://i.postimg.cc/CxMQHLmw/cover-4.jpg",
        category: "Career Development"
    },
    {
        id: 1,
        title: "Career Accelerator",
        description: "Master to find the right path for you in this comprehensive course",
        price: 199,
        rating: 4.8,
        students: 12500,
        duration: "40 hours",
        instructor: "Dr. Faysal Ahmed",
        image: "https://i.postimg.cc/fyY7M8sm/cover-3.jpg",
        category: "Career Development"
    },
    {
        id: 1,
        title: "Career Accelerator",
        description: "Master to find the right path for you in this comprehensive course",
        price: 199,
        rating: 4.8,
        students: 12500,
        duration: "40 hours",
        instructor: "Dr. Faysal Ahmed",
        image: "https://i.postimg.cc/wB3h1qH6/cover-2.jpg",
        category: "Career Development"
    }
];

const curriculumData = [
    {
        module: "HTML & CSS Fundamentals",
        lessons: [
            { title: "Introduction to HTML", duration: "45 min", completed: false },
            { title: "CSS Styling and Layout", duration: "60 min", completed: false },
            { title: "Responsive Design", duration: "50 min", completed: false },
            { title: "CSS Grid and Flexbox", duration: "55 min", completed: false }
        ]
    },
    {
        module: "JavaScript Essentials",
        lessons: [
            { title: "JavaScript Basics", duration: "40 min", completed: false },
            { title: "DOM Manipulation", duration: "45 min", completed: false },
            { title: "ES6+ Features", duration: "50 min", completed: false },
            { title: "Async JavaScript", duration: "60 min", completed: false }
        ]
    },
    {
        module: "React Development",
        lessons: [
            { title: "React Components", duration: "55 min", completed: false },
            { title: "State and Props", duration: "50 min", completed: false },
            { title: "Hooks and Context", duration: "65 min", completed: false },
            { title: "React Router", duration: "40 min", completed: false }
        ]
    },
    {
        module: "Backend with Node.js",
        lessons: [
            { title: "Node.js Fundamentals", duration: "45 min", completed: false },
            { title: "Express.js Framework", duration: "60 min", completed: false },
            { title: "Database Integration", duration: "70 min", completed: false },
            { title: "Authentication & Security", duration: "55 min", completed: false }
        ]
    }
];

const reviewsData = [
    {
        name: "Alex Chen",
        rating: 5,
        comment: "Excellent course! Sarah explains everything clearly and the projects are very practical.",
        date: "2 weeks ago"
    },
    {
        name: "Maria Garcia",
        rating: 5,
        comment: "This course helped me land my first developer job. Highly recommended!",
        date: "1 month ago"
    },
    {
        name: "John Smith",
        rating: 4,
        comment: "Great content and structure. Would love to see more advanced topics covered.",
        date: "3 weeks ago"
    }
];

const enrolledCoursesData = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        progress: 65,
        totalLessons: 16,
        completedLessons: 10,
        nextLesson: "React Hooks Deep Dive",
        instructor: "Sarah Johnson",
        image: "https://via.placeholder.com/150x100/FFA500/000000?text=Web+Dev"
    },
    {
        id: 2,
        title: "Data Science with Python",
        progress: 30,
        totalLessons: 14,
        completedLessons: 4,
        nextLesson: "Pandas Data Manipulation",
        instructor: "Dr. Michael Chen",
        image: "https://via.placeholder.com/150x100/FFA500/000000?text=Data+Science"
    }
];

const activityData = [
    { action: "Completed lesson", course: "Web Development Bootcamp", lesson: "CSS Grid Layout", time: "2 hours ago" },
    { action: "Started course", course: "Data Science with Python", lesson: "Introduction to Python", time: "1 day ago" },
    { action: "Generated study guide", course: "Digital Marketing", lesson: "SEO Fundamentals", time: "2 days ago" },
    { action: "Completed quiz", course: "Web Development Bootcamp", lesson: "JavaScript Arrays", time: "3 days ago" }
];

const achievementsData = [
    { title: "First Course Completed", description: "Finished your first course", earned: true },
    { title: "Study Streak", description: "7 days of continuous learning", earned: true },
    { title: "Quiz Master", description: "Scored 90%+ on 5 quizzes", earned: false },
    { title: "Course Collector", description: "Enrolled in 5+ courses", earned: false }
];

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'index.html':
        case '':
            initHomePage();
            break;
        case 'course-detail.html':
            initCourseDetailPage();
            break;
        case 'study-guide.html':
            initStudyGuidePage();
            break;
        case 'dashboard.html':
            initDashboardPage();
            break;
        case 'login.html':
            initLoginPage();
            break;
        case 'signup.html':
            initSignupPage();
            break;
        case 'payment.html':
            initPaymentPage();
            break;
    }
});

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

function initHomePage() {
    renderCourses();
}

function renderCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    if (!coursesGrid) return;

    coursesGrid.innerHTML = coursesData.map(course => `
        <div class="course-card">
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}">
                <span class="course-category">${course.category}</span>
            </div>
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-meta">
                    <div class="meta-item">
                        <i class="fas fa-star"></i>
                        <span>${course.rating}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-users"></i>
                        <span>${course.students.toLocaleString()}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-clock"></i>
                        <span>${course.duration}</span>
                    </div>
                </div>
                <p class="course-instructor">by ${course.instructor}</p>
                <div class="course-footer">
                    <span class="course-price">$${course.price}</span>
                    <a href="course-detail.html?id=${course.id}" class="btn btn-primary">View Course</a>
                </div>
            </div>
        </div>
    `).join('');
}

function initCourseDetailPage() {
    renderCurriculum();
    renderReviews();
    
    showTab('overview');
}

function showTab(tabName) {
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => pane.classList.remove('active'));
    
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    const selectedPane = document.getElementById(tabName);
    if (selectedPane) {
        selectedPane.classList.add('active');
    }
    
    const selectedButton = document.querySelector(`[onclick="showTab('${tabName}')"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
}

function renderCurriculum() {
    const curriculumContainer = document.getElementById('curriculumModules');
    if (!curriculumContainer) return;

    curriculumContainer.innerHTML = curriculumData.map((module, moduleIndex) => `
        <div class="module-card">
            <div class="module-header">
                <h3 class="module-title">Module ${moduleIndex + 1}: ${module.module}</h3>
            </div>
            <div class="module-lessons">
                ${module.lessons.map(lesson => `
                    <div class="lesson-item">
                        <div class="lesson-info">
                            <i class="fas ${lesson.completed ? 'fa-check-circle' : 'fa-play-circle'}"></i>
                            <span>${lesson.title}</span>
                        </div>
                        <div class="lesson-duration">
                            <i class="fas fa-clock"></i>
                            <span>${lesson.duration}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderReviews() {
    const reviewsList = document.getElementById('reviewsList');
    if (!reviewsList) return;

    reviewsList.innerHTML = reviewsData.map(review => `
        <div class="review-card">
            <div class="review-header">
                <div class="review-author">
                    <h4>${review.name}</h4>
                    <div class="review-rating">
                        ${Array(5).fill().map((_, i) => `
                            <i class="fas fa-star ${i < review.rating ? '' : 'text-gray'}"></i>
                        `).join('')}
                    </div>
                </div>
                <span class="review-date">${review.date}</span>
            </div>
            <p class="review-comment">${review.comment}</p>
        </div>
    `).join('');
}

function enrollCourse() {
    alert('Redirecting to payment page...');
    window.location.href = 'payment.html';
}

function initStudyGuidePage() {
    const guideForm = document.getElementById('guideForm');
    if (guideForm) {
        guideForm.addEventListener('submit', handleStudyGuideGeneration);
    }
}

function handleStudyGuideGeneration(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const topic = formData.get('topic') || document.getElementById('topic').value;
    const difficulty = formData.get('difficulty') || document.getElementById('difficulty').value;
    const learningStyle = formData.get('learningStyle') || document.getElementById('learningStyle').value;
    const timeAvailable = formData.get('timeAvailable') || document.getElementById('timeAvailable').value;
    
    if (!topic || !difficulty) {
        alert('Please fill in all required fields');
        return;
    }
    
    const generateBtn = document.getElementById('generateBtn');
    const originalText = generateBtn.innerHTML;
    generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating Your Study Guide...';
    generateBtn.disabled = true;
    
    setTimeout(() => {
        generateStudyGuide(topic, difficulty, learningStyle, timeAvailable);
        generateBtn.innerHTML = originalText;
        generateBtn.disabled = false;
    }, 3000);
}

function generateStudyGuide(topic, difficulty, learningStyle, timeAvailable) {
    const studyGuideData = {
        title: `${topic} Study Guide`,
        sections: [
            {
                title: "Learning Objectives",
                content: [
                    "Understand core concepts and principles",
                    "Apply knowledge to practical scenarios",
                    "Develop problem-solving skills",
                    "Master key terminology and definitions"
                ]
            },
            {
                title: "Study Schedule",
                content: [
                    "Week 1: Foundation concepts and terminology",
                    "Week 2: Practical applications and examples",
                    "Week 3: Advanced topics and case studies",
                    "Week 4: Review and practice exercises"
                ]
            },
            {
                title: "Key Topics",
                content: [
                    "Fundamental principles and theories",
                    "Best practices and methodologies",
                    "Common challenges and solutions",
                    "Industry standards and trends"
                ]
            },
            {
                title: "Practice Exercises",
                content: [
                    "Multiple choice questions for concept review",
                    "Hands-on projects and assignments",
                    "Case study analysis",
                    "Peer discussion topics"
                ]
            },
            {
                title: "Additional Resources",
                content: [
                    "Recommended books and articles",
                    "Online tutorials and videos",
                    "Professional communities and forums",
                    "Certification programs"
                ]
            }
        ]
    };
    
    document.getElementById('studyGuideForm').style.display = 'none';
    document.getElementById('generatedGuide').style.display = 'block';
    
    document.getElementById('guideTitle').textContent = studyGuideData.title;
    
    const guideBadges = document.getElementById('guideBadges');
    guideBadges.innerHTML = `
        <span class="badge">${difficulty}</span>
        <span class="badge badge-outline">${learningStyle}</span>
        <span class="badge badge-outline">${timeAvailable}</span>
    `;
    
    const guideSections = document.getElementById('guideSections');
    guideSections.innerHTML = studyGuideData.sections.map(section => `
        <div class="guide-section">
            <h3>${section.title}</h3>
            <ul>
                ${section.content.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function generateNewGuide() {
    document.getElementById('generatedGuide').style.display = 'none';
    document.getElementById('studyGuideForm').style.display = 'block';
    
    document.getElementById('guideForm').reset();
}

function initDashboardPage() {
    renderEnrolledCourses();
    renderActivity();
    renderAchievements();
    
    showDashboardTab('courses');
}

function showDashboardTab(tabName) {
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => pane.classList.remove('active'));
    
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    const selectedPane = document.getElementById(tabName);
    if (selectedPane) {
        selectedPane.classList.add('active');
    }
    
    const selectedButton = document.querySelector(`[onclick="showDashboardTab('${tabName}')"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
}

function renderEnrolledCourses() {
    const enrolledCoursesContainer = document.getElementById('enrolledCourses');
    if (!enrolledCoursesContainer) return;

    enrolledCoursesContainer.innerHTML = enrolledCoursesData.map(course => `
        <div class="enrolled-course">
            <img src="${course.image}" alt="${course.title}" class="course-thumbnail">
            <div class="enrolled-course-content">
                <div class="enrolled-course-header">
                    <div class="enrolled-course-info">
                        <h3>${course.title}</h3>
                        <p>by ${course.instructor}</p>
                        <p class="next-lesson">Next: ${course.nextLesson}</p>
                    </div>
                    <a href="course-detail.html?id=${course.id}" class="btn btn-primary">
                        <i class="fas fa-play"></i>
                        Continue
                    </a>
                </div>
                <div class="course-progress">
                    <div class="progress-info">
                        <span>Progress: ${course.completedLessons}/${course.totalLessons} lessons</span>
                        <span>${course.progress}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${course.progress}%"></div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderActivity() {
    const activityList = document.getElementById('activityList');
    if (!activityList) return;

    activityList.innerHTML = activityData.map(activity => `
        <div class="activity-item">
            <div class="activity-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <div class="activity-content">
                <p>${activity.action}</p>
                <span>${activity.course} - ${activity.lesson}</span>
            </div>
            <span class="activity-time">${activity.time}</span>
        </div>
    `).join('');
}

function renderAchievements() {
    const achievementsGrid = document.getElementById('achievementsGrid');
    if (!achievementsGrid) return;

    achievementsGrid.innerHTML = achievementsData.map(achievement => `
        <div class="achievement-card ${achievement.earned ? 'earned' : 'not-earned'}">
            <div class="achievement-icon ${achievement.earned ? 'earned' : 'not-earned'}">
                <i class="fas fa-trophy"></i>
            </div>
            <div class="achievement-info">
                <h3>${achievement.title}</h3>
                <p>${achievement.description}</p>
                ${achievement.earned ? '<span class="earned-badge">Earned</span>' : ''}
            </div>
        </div>
    `).join('');
}

function initLoginPage() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}

function handleLogin(e) {
    e.preventDefault();
    
    const loginBtn = document.getElementById('loginBtn');
    const originalText = loginBtn.textContent;
    
    loginBtn.textContent = 'Signing in...';
    loginBtn.disabled = true;
    
    setTimeout(() => {
        alert('Login successful! Redirecting to dashboard...');
        window.location.href = 'dashboard.html';
    }, 2000);
}

function initSignupPage() {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
}

function handleSignup(e) {
    e.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    const signupBtn = document.getElementById('signupBtn');
    const originalText = signupBtn.textContent;
    
    signupBtn.textContent = 'Creating account...';
    signupBtn.disabled = true;
    
    setTimeout(() => {
        alert('Account created successfully! Redirecting to dashboard...');
        window.location.href = 'dashboard.html';
    }, 2000);
}

function initPaymentPage() {
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.addEventListener('submit', handlePayment);
    }
}

function handlePayment(e) {
    e.preventDefault();
    
    const paymentBtn = document.getElementById('paymentBtn');
    const originalText = paymentBtn.innerHTML;
    
    paymentBtn.innerHTML = '<div class="spinner"></div> Processing Payment...';
    paymentBtn.disabled = true;
    
    setTimeout(() => {
        paymentBtn.innerHTML = originalText;
        paymentBtn.disabled = false;
        
        document.getElementById('successModal').style.display = 'flex';
    }, 3000);
}

document.addEventListener('click', function(e) {
    const modal = document.getElementById('successModal');
    if (modal && e.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

document.addEventListener('click', function(e) {
    if (e.target.matches('.btn') && !e.target.disabled) {
        e.target.style.transform = 'translateY(-2px)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

document.addEventListener('input', function(e) {
    if (e.target.type === 'email') {
        const isValid = validateEmail(e.target.value);
        e.target.style.borderColor = isValid ? '#28a745' : '#dc3545';
    }
    
    if (e.target.type === 'password') {
        const isValid = validatePassword(e.target.value);
        e.target.style.borderColor = isValid ? '#28a745' : '#dc3545';
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.course-card, .feature-card, .stat-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});