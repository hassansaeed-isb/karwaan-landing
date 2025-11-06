# Karvaan Landing Page

A fully responsive React landing page for Karvaan - Travel Agency Management Software, optimized for mobile devices.

## Features

- **Fully Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Mobile-First Approach**: Prioritizes mobile user experience
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **React Components**: Modular, reusable components
- **Accessibility**: WCAG compliant with proper focus states and ARIA labels
- **Performance Optimized**: Fast loading with optimized assets

## Mobile Optimizations

- Touch-friendly button sizes (minimum 44px)
- Responsive typography scaling
- Mobile-optimized navigation with hamburger menu
- Optimized spacing and padding for mobile screens
- Swipe-friendly card layouts
- Mobile-first breakpoints

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd karvaan-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
karvaan-landing/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── index.js
│   └── index.css
├── components/
│   ├── Home.js          # Main landing page component
│   ├── KarvaanLogo.js   # Logo component
│   ├── MobileMenu.js    # Mobile navigation menu
│   └── ScrollToTop.js   # Scroll to top button
├── App.js
├── App.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)
- **Large Desktop**: > 1280px (xl)

## Key Components

### Home.js
Main landing page with all sections:
- Hero section with CTA
- Problem identification
- Solution presentation
- Features showcase
- Benefits section
- Early access CTA
- Footer

### MobileMenu.js
Responsive navigation menu with:
- Hamburger menu for mobile
- Slide-out navigation panel
- Touch-friendly menu items

### ScrollToTop.js
Floating scroll-to-top button that appears after scrolling

## Customization

### Colors
Primary and accent colors are defined in `tailwind.config.js` and can be easily customized.

### Typography
Uses Poppins font family loaded from Google Fonts. Can be changed in `App.css`.

### Animations
Custom animations defined in `App.css`:
- `animate-float` - Floating elements
- `animate-glow` - Glowing buttons
- `animate-pulse` - Pulsing elements

## Performance Tips

- Images should be optimized and use appropriate formats (WebP when possible)
- Consider lazy loading for images below the fold
- Use React.memo() for components that don't need frequent re-renders
- Implement code splitting for larger applications

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

Build the project for production:

```bash
npm run build
```

The build folder will contain the optimized production files ready for deployment.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on multiple devices
5. Submit a pull request

## License

This project is licensed under the MIT License.