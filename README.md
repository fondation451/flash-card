# Flash Cards

A beautiful, interactive flash card application built with React and TypeScript. Study and test your knowledge with randomized cards and score tracking.

## ✨ Features

- **Random Card Order**: Cards are shuffled each session for better learning
- **Score Tracking**: Keep track of your correct answers
- **Flip Animation**: Smooth 3D card flip to reveal answers
- **Progress Bar**: Visual indicator of your progress
- **Responsive Design**: Works on desktop and mobile devices
- **Keyboard Accessible**: Full keyboard navigation support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/nicolasassouad/flash-card.git
cd flash-card

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/flash-card/`

### Build for Production

```bash
npm run build
```

## 📝 Customizing Flash Cards

Edit the `public/flashcards.json` file to add your own flash cards. The format is simple key-value pairs:

```json
{
  "Question 1?": "Answer 1",
  "Question 2?": "Answer 2",
  "Question 3?": "Answer 3"
}
```

## 🌐 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment (GitHub Actions)

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: "GitHub Actions"

### Manual Deployment

```bash
npm run deploy
```

Your site will be available at: `https://nicolasassouad.github.io/flash-card/`

## 🛠️ Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type Safety (Strict Mode)
- **Vite** - Build Tool
- **CSS3** - Styling with animations

## 📁 Project Structure

```
flash-card/
├── public/
│   ├── flashcards.json    # Your flash card data
├── src/
│   ├── components/        # React components
│   ├── hooks/             # Custom React hooks
│   ├── types.ts           # TypeScript types
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── index.html
├── package.json
├── tsconfig.json          # TypeScript config (strict mode)
└── vite.config.ts         # Vite config for GitHub Pages
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
