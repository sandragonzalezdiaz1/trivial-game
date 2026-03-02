# 🎯 Trivial Game (React)

A web-based quiz application built with **React + Vite** that allows users to answer trivial questions with multimedia support and interactive feedback.

---

## 🌐 Live Demo
[Demo](https://sandragonzalezdiaz1.github.io/trivial-game/)

---

## ✨ Features

* Randomized questions using the Fisher–Yates shuffle algorithm
* Responsive UI built with **styled-components**
* Multimedia support per question:

  * Images
  * Audio
  * Video

* Visual feedback:

  * Green for correct answers
  * Red with shake animation for incorrect answers

* Confetti animation on correct answers
* Automatic transition to the next question
* Button locking to prevent multiple clicks

---

## 🧱 Project Structure

```
src/
│
├── components/
│   ├── AnswersList.jsx
│   ├── Media.jsx
│   └── QuestionHeader.jsx
│
├── hooks/
│   ├── useTrivialGame.js
│   └── useWindowSize.js
│
├── data/
│   └── preguntas.js
│
├── styled/
│   └── index.js
│
├── App.jsx
└── main.jsx
```

### Architecture

* **Custom Hooks**

  * `useTrivialGame` → game logic and state management
  * `useWindowSize` → window size handling for animations

* **Reusable components**
* Clear separation between **logic and presentation**

---

## 🛠️ Technologies

* React
* Vite
* JavaScript (ES6+)
* styled-components
* react-confetti

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/trivial-game.git
cd trivial-game
npm install
npm run dev
```

The app will run at:

```
http://localhost:5173
```

---

## 📚 React Concepts Applied

* useState, useEffect, useRef
* Custom Hooks
* Component architecture
* State and side effects management
* List rendering and keys

---

## 🔮 Possible Improvements

* Score system
* Progress indicator
* Final results screen
* LocalStorage persistence
* Unit tests

---

## 👩‍💻 Author

Sandra González Díaz - [GitHub](https://github.com/sandragonzalezdiaz1)


