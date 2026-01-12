# Veherex - Electric Vehicle Comparison Platform

A comprehensive React-based web application for comparing electric vehicles in India. Built with modern web technologies and focused on providing users with detailed information to make informed EV purchasing decisions.

## Features

### 🚗 Vehicle Comparison
- **EV Catalog**: Browse through an extensive collection of electric vehicles
- **Advanced Filtering**: Filter by brand, price range, battery range, and body type
- **Side-by-Side Comparison**: Compare up to 3 vehicles simultaneously
- **EV vs Fuel Comparison**: Compare electric vehicles with traditional fuel vehicles

### 🔋 Comprehensive Information
- **Detailed Specifications**: Battery capacity, range, charging time, and more
- **Cost Analysis**: Running costs per kilometer and total cost of ownership
- **Performance Metrics**: Top speed, acceleration, motor power
- **Features & Safety**: Key features and safety ratings

### 🛒 Accessories & Services
- **EV Accessories**: Charging equipment, solar panels, maintenance tools
- **Brand Information**: Detailed brand profiles and model listings
- **Educational Content**: EV vs Fuel guide with visual comparisons

### 🎨 Design & User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean white and green theme with smooth animations
- **Framer Motion**: Beautiful entrance animations and hover effects
- **Intuitive Navigation**: Easy-to-use interface with clear information hierarchy

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Lucide React** for icons

### Styling
- **Custom Color Palette**: White (#ffffff) and Green (#3FAE4D) theme
- **Typography**: Inter and Poppins fonts
- **Responsive Grid**: Mobile-first design approach
- **Smooth Animations**: Hover effects and page transitions

## Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Main navigation bar
│   ├── Hero.tsx        # Homepage hero section
│   ├── VehicleCard.tsx # Vehicle display card
│   └── Footer.tsx      # Site footer
├── pages/              # Main page components
│   ├── Home.tsx        # Homepage with features
│   ├── Catalog.tsx     # EV catalog with filters
│   ├── Compare.tsx     # Vehicle comparison tool
│   ├── Brands.tsx      # Brand listings and info
│   ├── Accessories.tsx # EV accessories store
│   └── Guide.tsx       # EV vs Fuel guide
├── data/               # Static data and types
│   └── vehicles.ts     # Vehicle data and interfaces
└── App.tsx             # Main app component with routing
```

## Features Overview

### Homepage
- Hero section with call-to-action buttons
- Feature highlights (trusted comparisons, EV expertise, cost analysis)
- Featured electric vehicles showcase
- Ready-to-go-electric CTA section

### EV Catalog
- Complete list of electric vehicles available in India
- Advanced filtering system (brand, price, range, body type)
- Search functionality
- Responsive grid layout with vehicle cards

### Vehicle Comparison
- Select up to 3 vehicles for comparison
- Detailed comparison table with multiple categories
- Support for EV vs Fuel vehicle comparisons

### EV vs Fuel Guide
- Comprehensive comparison across key factors
- Benefits of choosing electric vehicles
- Addressing common EV concerns with solutions

### Accessories Store
- EV charging equipment and accessories
- Category-based filtering and sorting
- Product ratings and pricing

### Brand Information
- Detailed profiles of EV manufacturers
- Model listings and market overview
- Brand comparison table

## Future Enhancements

- User authentication and saved comparisons
- Advanced cost calculator with TCO
- Downloadable PDF reports
- Real-time data integration
- Dealer network and test drive booking
- User reviews and ratings
- Charging station locator

---

Built with ❤️ for the Indian EV community
