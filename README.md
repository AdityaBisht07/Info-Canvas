# Interactive Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, TailwindCSS, and Framer Motion. Features smooth animations, dark/light mode toggle, and interactive elements.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Elements**: Custom cursor, hover effects, and smooth transitions
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Interactive project cards with modal details
- **Skills Visualization**: Animated progress bars and skill categories
- **Experience Timeline**: Beautiful timeline layout for work experience
- **SEO Optimized**: Meta tags and structured data for better SEO

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Tooltips**: React Tooltip

## 📁 Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── ThemeProvider.tsx
│   └── utils/
│       └── data.ts
├── public/
│   └── images/
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

Edit `src/utils/data.ts` to update your personal information:

```typescript
export const personalInfo = {
  name: "Your Name",
  role: "Your Role",
  tagline: "Your Tagline",
  bio: "Your Bio",
  email: "your.email@example.com",
  location: "Your Location",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  website: "https://yourwebsite.com"
}
```

### Projects

Add your projects to the `projects` array in `src/utils/data.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Project Title",
    description: "Project description",
    image: "/images/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://project-demo.com",
    category: "fullstack"
  }
]
```

### Skills

Update your skills in the `skills` array:

```typescript
export const skills: Skill[] = [
  {
    name: "React",
    level: 95,
    category: "frontend",
    icon: "react"
  }
]
```

### Experience

Modify your work experience in the `experience` array:

```typescript
export const experience: Experience[] = [
  {
    id: 1,
    title: "Job Title",
    company: "Company Name",
    period: "2022 - Present",
    description: ["Achievement 1", "Achievement 2"],
    technologies: ["React", "TypeScript", "Node.js"]
  }
]
```

## 🎨 Styling

### Colors

The color scheme is defined in `tailwind.config.js`. You can customize the primary colors:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
    900: '#0c4a6e',
  }
}
```

### Dark Mode

The website supports dark mode with automatic detection. Users can toggle between themes using the button in the navbar.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

You can deploy to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact me through the contact form on the website

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [React Icons](https://react-icons.github.io/react-icons/) for beautiful icons

---

Made with ❤️ by [Your Name]
