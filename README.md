# 🚀 Next.js Project - 396eebfc593a3cc135ad71275176af80

This is a **Next.js** project developed with TypeScript, React, and SCSS. It includes Storybook for UI component documentation and uses Vercel for deployment.

🔗 **Live Demo**: [396eebfc593a3cc135ad71275176af80.vercel.app](https://396eebfc593a3cc135ad71275176af80.vercel.app/)

---

## 📦 Technologies Used

- **Next.js** 15.1.6
- **React** 19.0.0
- **TypeScript** 5
- **SCSS**
- **ESLint & Prettier** (Code Formatting & Linting)
- **Storybook** 8.5.3 (Component Documentation)
- **Axios** (HTTP Requests)
- **rc-pagination** (Pagination Component)
- **Vercel** (Deployment)

---

## 🛠️ Installation & Setup

To set up the project locally, follow these steps:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3️⃣ Set Node Version (Using NVM)

This project uses **Node.js v22.11.0**. If you have **NVM** installed, you can set the correct version:

```bash
nvm use
```

or manually install:

```bash
nvm install v22.11.0
nvm use v22.11.0
```

### 4️⃣ Set Up Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
NEXT_PUBLIC_API_KEY=your_api_key_here
```

---

## 📜 Available Scripts

You can run the following commands:

### 🏗 Development Mode

```bash
npm run dev
```

Runs the Next.js development server at [http://localhost:3000](http://localhost:3000).

### 🚀 Production Build

```bash
npm run build
npm start
```

Builds the project and starts a production-ready server.

### ✅ Linting & Formatting

```bash
npm run lint
npm run format
```

Checks the code for linting errors and formats it using **Prettier**.

### 📖 Storybook (UI Component Documentation)

```bash
npm run storybook
```

Starts **Storybook** at [http://localhost:6006](http://localhost:6006).

To build Storybook for production:

```bash
npm run build-storybook
```

---

## 🚀 Deployment on Vercel

This project is deployed on **Vercel**. To manually deploy, run:

```bash
vercel --prod
```

If you want to push changes, make sure you have **Vercel CLI** installed:

```bash
npm install -g vercel
vercel login
vercel
```

---

## 🔗 Useful Links

- 🔗 **Live App**: [396eebfc593a3cc135ad71275176af80.vercel.app](https://396eebfc593a3cc135ad71275176af80.vercel.app/)
- 📚 **Next.js Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)
- 🎨 **Storybook Documentation**: [https://storybook.js.org/docs](https://storybook.js.org/docs)
- ⚡ **Vercel Deployment Guide**: [https://vercel.com/docs](https://vercel.com/docs)

---

## 📌 Contributing

If you'd like to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Added new feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Create a pull request.

---

## 📜 License

This project is licensed under **MIT License**.

---
