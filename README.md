# My Portfolio

Dark, animated developer portfolio. Built with React + Vite + Tailwind CSS.

---

## ▶️ Running the project

**Step 1** — Delete your old `portfolio` folder completely.

**Step 2** — Open this new `portfolio` folder in VS Code.

**Step 3** — Open the terminal (`Ctrl + `` ` ``) and run:

```
npm install
npm start
```

**Step 4** — Open http://localhost:5173 in your browser.

> ⚠️ Never run `npm audit fix --force` — it breaks the project.

---

## ✏️ Customising your content

Open **`src/data.js`** — everything is in there:

- `PERSONAL` → your name, bio, email, phone, CV link, social links
- `PROJECTS` → your featured work
- `EXPERIENCE` → your job history  
- `EDUCATION` → your education
- `STATS` → your numbers (clients, projects, years)
- `STACK` → your tech stack
- `BLOG_POSTS` → your articles

---

## 🖼️ Adding your photo (Hero section)

1. Put your photo (e.g. `photo.jpg`) inside the `public/` folder
2. Open `src/components/Hero.jsx`
3. Find the comment `[ your photo ]` and replace the placeholder div with:

```jsx
<img src="/photo.jpg" alt="Your Name" className="w-full h-full object-cover" />
```

---

## 🎨 Changing accent color

Open `tailwind.config.js` and change:
```js
accent: "#c8ff57",  // ← any color you want
```

---

## 📁 Project structure

```
portfolio/
├── index.html              ← page shell (edit title & fonts here)
├── vite.config.js          
├── tailwind.config.js      ← colors, fonts, animations
├── postcss.config.js       
├── package.json            
└── src/
    ├── main.jsx            ← React entry point
    ├── App.jsx             ← root component
    ├── data.js             ← ⭐ ALL your content
    ├── index.css           ← global styles
    ├── hooks/
    │   └── useReveal.js    ← scroll animations
    └── components/
        ├── Cursor.jsx      ← custom cursor
        ├── Preloader.jsx   ← loading screen
        ├── Navbar.jsx      ← navigation
        ├── Hero.jsx        ← landing section
        ├── Projects.jsx    ← work grid
        ├── About.jsx       ← stats + experience
        ├── Blog.jsx        ← articles
        ├── Contact.jsx     ← contact form
        └── Footer.jsx
```

---

## 📬 Real contact form (optional)

By default the form opens your mail app. For actual submissions:

1. Sign up free at **formspree.io**, create a form, copy your form ID
2. In `src/components/Contact.jsx`, replace the `submit` function with:

```js
const submit = async (e) => {
  e.preventDefault()
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setSent(true)
}
```
