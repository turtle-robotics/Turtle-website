# The T.U.R.T.L.E Robotics Website

## 🚀 Features

- **Responsive Design** with mobile-first approach
- **Glass Morphism** design elements

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS with custom CSS variables
- **Font**: Inter (Google Fonts) - weights 100-900
- **Package Manager**: npm

## 🎨 Design System

### Color Scheme
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
│   ├── StatisticsCard.jsx      # Statistics cards
│   └── AnimatedBackground.jsx  # Canvas particle background
├── pages/
│   ├── Home.jsx                # Home page with hero and sections
│   ├── About.jsx               # About page with statistics
│   ├── Hatchling.jsx           # Hatchling program page
│   └── Apply.jsx               # Application page
├── hooks/
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

### StatisticsCard
Statistics with:
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
- Efficient re-renders with React.memo
- Minimal bundle size

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ for T.U.R.T.L.E Robotics
