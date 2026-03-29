# 🎓 EduPlatform - Online Learning Platform

### Project ID: B12-A10_category-0011  
### Video Link: B10-A10-C-0011  
A **full-stack online learning platform** where users can explore, enroll, and manage courses seamlessly. Instructors can add, update, and manage their courses, while students can browse and enroll in courses of interest.

---

## 🚀 Live Links

- 🌐 **Client Live Site:** [EduPlatform Client](https://cheerful-brigadeiros-0acc0f.netlify.app)  
- ⚙️ **Server Live (API) Link:** [Your Vercel Server URL Here](https://online-learning-platfrom-server.vercel.app)

---

## 🧩 Key Features

✅ **User Authentication**
- Secure Login & Registration using Firebase (Email/Password + Google)
- Toast notifications for success/error  
- Protected Private Routes with persistent login  

✅ **Instructor Dashboard**
- Add, update, and delete courses  
- Manage personal courses (“My Added Courses”)  
- Auto-fill instructor info (name, email, photo)  

✅ **Student Dashboard**
- Enroll in courses  
- View all enrolled courses (“My Enrolled Courses”)  
- Smooth navigation with persistent state  

✅ **Home Page Sections**
- Hero/Banner section with animations  
- Popular Courses (Featured 6)  
- “Why Choose Us” and “Top Instructors” static sections  

✅ **Dynamic Course Management**
- Add Course form with image upload via **imgbb**  
- View Course Details with “Enroll Now” button  
- CRUD operations integrated with MongoDB  

✅ **Additional Features**
- Filtering by Category on All Courses page  
- Loading spinner while fetching data  
- 404 custom page  
- Framer Motion & AOS animations  
- Responsive design using Tailwind CSS  
- Dark/Light mode toggle (optional)  

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | React.js, React Router, Axios / TanStack Query, Tailwind CSS, Framer Motion, AOS |
| **Backend** | Node.js, Express.js, MongoDB |
| **Authentication** | Firebase Auth (Email/Password + Google) |
| **Hosting** | Netlify / Surge (Client), Vercel (Server) |
| **Database** | MongoDB Atlas |
| **Image Hosting** | imgbb |

---

## ⚙️ Core Functionalities

### 👨‍🏫 Instructor
- Add new course with title, image, price, duration, category, and description  
- View and manage “My Added Courses”  
- Update or delete courses easily  

### 🎓 Student
- Explore all available courses  
- Filter by category  
- View full course details  
- Enroll in a course with a single click  
- See all enrolled courses in “My Enrolled Courses”  

---

## 🔐 Authentication Flow

| Action | Description |
|--------|--------------|
| **Register** | User signs up with name, email, password, photo URL |
| **Login** | Email/Password or Google login |
| **Protected Routes** | Only accessible when logged in |
| **Password Validation** | Must include uppercase, lowercase, and at least 6 characters |

---

## 🧠 Advanced Features (Challenges)

- Category-based filtering on “All Courses” page  
- Dark/Light Theme toggle  
- Framer Motion + AOS animations  
- Loading Spinner while fetching data  
- Responsive design for all devices  

---

## 💾 Database Collections

**Database Name:** `onlineLearningDB`

### Collections:
- `courses`
- `enrollments`
- `users`

---

## 📁 Folder Structure (Client Side)

