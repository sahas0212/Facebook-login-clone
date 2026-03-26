# Facebook UI Clone

A pixel-accurate, front-end clone of the Facebook login experience, built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies.

![Facebook Clone Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 🔗 Live Demo

👉 **[View Live on GitHub Pages](https://fb-loginclone272.netlify.app/)**

---

## 📸 Pages

| Page | Description |
|------|-------------|
| `login.html` | Main login page with email/password validation |
| `signup.html` | Account creation form with full field validation |
| `forgot.html` | Forgot password / account recovery page |

---

## ✨ Features

- **Responsive two-column layout** — hero panel on the left, form card on the right
- **Client-side form validation** — inline error messages, no page reloads
- **Multi-page navigation** — Login → Sign Up → Forgot Password flows
- **Pixel-accurate Facebook styling** — matching colors (`#1877f2`), typography, and spacing
- **Header & Footer components** — consistent nav bar and footer across all pages
- **Zero dependencies** — pure HTML, CSS, and vanilla JavaScript

---

## 📁 Project Structure

```
facebook-clone/
├── index.html        # Entry point (redirects to login)
├── login.html        # Login page
├── signup.html       # Sign up / registration page
├── forgot.html       # Forgot password page
├── styles.css        # All styles (global, header, footer, forms, layout)
├── script.js         # Form validation logic for all pages
└── README.md         # You are here
```

---

## 🚀 Running Locally

No build step required. Just open any HTML file in your browser:

```bash
# Option 1: Open directly
open login.html

# Option 2: Use a local server (recommended to avoid CORS issues)
npx serve .
# Then visit http://localhost:3000
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Flexbox layout, responsive design, Facebook theming |
| Vanilla JavaScript | Form validation, page navigation |

---

## 📋 Form Validation Rules

**Login**
- Email/phone: required
- Password: required, minimum 6 characters

**Sign Up**
- First & last name: required
- Email/phone: required
- Password: required, minimum 8 characters
- Confirm password: must match password
- Terms checkbox: must be checked

**Forgot Password**
- Email/phone: required

---

## ⚠️ Disclaimer

This project is built for **educational purposes only** as a front-end development exercise. It is not affiliated with, endorsed by, or connected to Meta Platforms, Inc. in any way. No real authentication or data storage is implemented.

---

## 👤 Author

**Sahas** — Computer Science & Engineering, GPREC  
[GitHub](https://github.com/sahas0212) · [LinkedIn](https://www.linkedin.com/in/s-sahas-reddy-704b80297/)
