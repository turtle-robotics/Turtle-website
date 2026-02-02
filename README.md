# The T.U.R.T.L.E Robotics Website

A modern React website for T.U.R.T.L.E Robotics, a student robotics research lab at Texas A&M University. This website showcases their 13+ advanced research projects, competition teams, and student leadership development programs.

## 🚀 Features

- **Modern React 18** with Vite for fast development
- **Responsive Design** with mobile-first approach
- **Dark/Light Theme** toggle with system preference detection
- **GSAP Animations** with ScrollTrigger for smooth scroll animations
- **Interactive ChromaGrid** with mouse-following spotlight effects
- **Animated Statistics** with counter animations
- **Glass Morphism** design elements
- **Tailwind CSS** with custom design system
- **React Router** for seamless navigation

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS with custom CSS variables
- **Animations**: GSAP (GreenSock) with ScrollTrigger
- **Font**: Inter (Google Fonts) - weights 100-900
- **Package Manager**: npm

## 🎨 Design System

### Color Scheme
- **Light Theme**: Clean white background with Turtle Red (#A60000) accents
- **Dark Theme**: Deep dark background with the same accent colors
- **Gradients**: Turtle Red gradient from #7B0000 to #A60000

### Typography
- **Primary Font**: Inter with weights 100-900
- **Hero Text**: 8xl-9xl, tracking-tight
- **Section Headers**: 5xl-6xl
- **Body Text**: font-light, tracking-wide

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.jsx              # Main layout with navigation
│   ├── ThemeToggleButton.jsx   # Theme toggle component
│   ├── ChromaGrid.jsx          # Interactive project grid
│   ├── StatisticsCard.jsx      # Animated statistics cards
│   └── AnimatedBackground.jsx  # Canvas particle background
├── pages/
│   ├── Home.jsx                # Home page with hero and sections
│   ├── About.jsx               # About page with statistics
│   ├── Projects.jsx            # Projects page with ChromaGrid
│   ├── Hatchling.jsx           # Hatchling program page
│   └── Apply.jsx               # Application page
├── hooks/
│   ├── useScrollAnimation.js   # Custom scroll animation hook
│   └── useCounter.js           # Animated counter hook
├── contexts/
│   └── ThemeContext.jsx        # Theme management context
├── data/
│   └── projects.js             # Project and statistics data
├── App.jsx                     # Main app component
├── main.jsx                    # React entry point
└── main.css                    # Global styles and CSS variables
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd turtle-robotics-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   The browser should open automatically, or navigate to `http://localhost:5173/` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎯 Key Components

### ChromaGrid
Interactive grid component with:
- Mouse-following spotlight effects
- GSAP animations for smooth interactions
- Custom gradients for each project card
- Responsive grid layout

### StatisticsCard
Animated statistics with:
- Scroll-triggered counter animations
- Spotlight hover effects
- Glass morphism design

### ThemeToggleButton
Theme management with:
- Sun/moon icon transitions
- Local storage persistence
- System preference detection

## 🎨 Customization

### Colors
Edit CSS variables in `src/main.css`:
```css
:root {
  --color-bg: #F5F5F5;
  --color-text: #1F1F1F;
  --color-accent: #A60000;
  --color-secondary: #FFD700;
}
```

### Animations
Modify GSAP animations in components or use the `useScrollAnimation` hook:
```javascript
const elementRef = useScrollAnimation({
  trigger: "top 80%",
  y: 50,
  opacity: 0,
  duration: 1
})
```

### Projects Data
Update project information in `src/data/projects.js`:
```javascript
export const roboticsProjects = [
  {
    image: "project-image-url",
    title: "Project Title",
    subtitle: "Project Subtitle",
    handle: "@project_handle",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)"
  }
]
```

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly interactions

## 🎭 Animations

### GSAP Animations
- Hero text staggered animations
- Scroll-triggered fade-in-up effects
- Counter animations
- Smooth theme transitions

### CSS Animations
- Pulse glow effects
- Bounce animations
- Hover transforms
- Custom keyframes

## 🔧 Development

### Code Quality
- ESLint configuration
- Prettier formatting
- React best practices
- Component-based architecture

### Performance
- Lazy loading for images
- Optimized GSAP animations
- Efficient re-renders with React.memo
- Minimal bundle size

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Install Vercel CLI: `npm i -g vercel`
3. Deploy: `vercel`

### Netlify
1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify

### Other Platforms
The project uses Vite, so it's compatible with any static hosting platform.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

For questions or support, contact the TURTLE Robotics team at Texas A&M University.

---

Built with ❤️ for T.U.R.T.L.E Robotics
