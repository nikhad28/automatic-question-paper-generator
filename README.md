# 🤖 Automatic Question Paper Generator

An AI-powered web application that automatically generates **MCQ, Descriptive, Unit Test, and Semester Question Papers** from the uploaded syllabus using **OpenRouter/OpenAI AI models**. The system also supports **Course Outcome (CO) Mapping**, PDF/DOCX downloads, and a modern responsive user interface.

---

## 📌 Project Overview

The **Automatic Question Paper Generator** is designed to simplify the process of creating university-level question papers. Faculty members can upload a syllabus, choose the type of question paper, and instantly generate a well-structured paper with AI assistance.

---

## ✨ Features

- 🤖 AI-powered Question Generation
- 📚 Upload Syllabus (PDF, DOCX, TXT)
- 📝 Generate Multiple Question Paper Types
  - MCQ Paper
  - Descriptive Paper
  - Unit Test (20 Marks)
  - Semester Examination (80 Marks)
- 🎯 Course Outcome (CO) Mapping (CO1 – CO6)
- 📄 Download Question Papers as PDF
- 📝 Download Question Papers as DOCX
- 👤 User Login & Signup
- 🎨 Responsive & Modern UI
- ⚡ Fast Generation
- 🔒 Secure Authentication
- 🌙 Attractive Purple Theme

---

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| Python | Backend Programming |
| Flask | Web Framework |
| HTML5 | Frontend |
| CSS3 | Styling |
| JavaScript | Client-side Scripting |
| OpenRouter API | AI Question Generation |
| Firebase | Authentication & Database |
| ReportLab | PDF Generation |
| python-docx | DOCX Generation |

---

## 📂 Project Structure

```text
automatic-question-paper-generator/
│
├── app.py
├── requirements.txt
├── .env
├── firebase_credentials.json
│
├── templates/
│   ├── index.html
│   ├── login.html
│   ├── signup.html
│   ├── dashboard.html
│   ├── mcq_generator.html
│   ├── descriptive_generator.html
│   ├── ut_generator.html
│   └── semester_generator.html
│
├── static/
│   ├── css/
│   ├── js/
│   └── images/
│
├── uploads/
│
├── screenshots/
│   ├── index.jpeg
│   ├── login.jpeg
│   ├── home.jpeg
│   ├── dashboard.jpeg
│   ├── generate.jpeg
│   └── paper.jpeg
│
└── README.md
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/nikhad28/automatic-question-paper-generator.git
cd automatic-question-paper-generator
```

### Create Virtual Environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Linux / Mac

```bash
python3 -m venv venv
source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Configure Environment Variables

Create a `.env` file

```env
OPENROUTER_API_KEY=your_api_key_here
SECRET_KEY=your_secret_key
FIREBASE_CREDENTIALS=firebase_credentials.json
```

### Run the Application

```bash
python app.py
```

Open your browser:

```
http://127.0.0.1:5000
```

---

# 📸 Screenshots

## 🏠 Landing Page

![Landing Page](screenshots/index.jpeg)

---

## 🔐 Login Page

![Login Page](screenshots/login.jpeg)

---

## 🏡 Home Page

![Home Page](screenshots/home.jpeg)

---

## 📊 Dashboard

![Dashboard](screenshots/dashboard.jpeg)

---

## 🤖 Question Generator

![Question Generator](screenshots/generate.jpeg)

---

## 📄 Generated Question Paper

![Generated Paper](screenshots/paper.jpeg)

---

# 🎯 Future Enhancements

- AI Difficulty Level Selection
- Multiple University Templates
- Question Bank Management
- Faculty Dashboard
- Student Portal
- Email Question Papers
- Cloud Storage Integration
- Multi-language Support
- Analytics Dashboard

---

# 💡 Learning Outcomes

Through this project, I learned:

- Flask Web Development
- REST APIs
- AI Integration using OpenRouter
- Firebase Authentication
- File Handling in Python
- PDF & DOCX Generation
- Environment Variables
- Responsive Web Design
- Prompt Engineering
- Git & GitHub

---

# 🤝 Contributing

Contributions are welcome!

1. Fork this repository
2. Create your feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to the branch

```bash
git push origin feature-name
```

5. Create a Pull Request

---

# 📄 License

This project is intended for **educational and academic purposes only**.

---

# 👩‍💻 Developer

**Nikhad Shaikh**

📧 Email: *24dco07@aiktc.ac.in*

💼 LinkedIn: **https://www.linkedin.com/in/nikhad-shaikh-5a2b71394/**

🐙 GitHub: **https://github.com/nikhad28**

---

⭐ If you found this project helpful, don't forget to **star this repository**!