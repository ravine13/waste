# waste
# Skip Rental Website

A modern, responsive web application for skip rental services built with React, JavaScript, and Tailwind CSS. This application allows users to browse different skip sizes, view pricing information, and select skips for rental with an intuitive hover-based interface.

## 🚀 Features

- **Interactive Skip Selection**: Hover over skip cards to reveal detailed information including pricing and hire periods
- **Toggle Selection**: Click to select/deselect skips with visual feedback
- **Confirmation Modal**: Review selection details before proceeding
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient backgrounds and smooth animations
- **Progress Tracking**: Visual progress bar showing the current step in the rental process
- **Warning System**: Clear indicators for skips with usage restrictions

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **JavaScript (ES6+)** - No TypeScript dependencies
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Vite** - Fast build tool and development server

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repository-url>
   cd skip-rental-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Install required packages**
   \`\`\`bash
   npm install lucide-react
   \`\`\`

4. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to  ( the port shown in your terminal)


## 🎨 Design Features

### Color Scheme
- **Primary**: Cyan to Blue gradients (\`from-cyan-500 to-blue-500\`)
- **Background**: Dark slate gradients (\`from-slate-900 via-slate-800 to-slate-900\`)
- **Selected State**: Emerald green (\`from-emerald-500 to-green-500\`)
- **Warnings**: Amber to orange gradients (\`from-amber-500 to-orange-500\`)

### Interactive Elements
- **Hover Effects**: Smooth transitions revealing pricing and details
- **Selection States**: Visual feedback with color changes and text updates
- **Gradient Text**: Eye-catching gradient text for headings
- **Shadow Effects**: Subtle glowing shadows for depth

## 🔧 Component Overview


### SkipSelection
Main container component that manages:
- Skip data and state
- Selection logic
- Modal visibility
- Communication between child components

### SkipCard
Individual skip display component featuring:
- Hover-based information reveal
- Toggle selection functionality
- Warning badges for restricted skips
- Responsive image display

### ConfirmationModal
Modal dialog for confirming skip selection with:
- Skip details summary
- Confirm/Cancel actions
- Backdrop blur effect

## 📱 Responsive Breakpoints

- **Mobile**: Single column layout (\`grid-cols-1\`)
- **Tablet**: Two column layout (\`md:grid-cols-2\`)
- **Desktop**: Three column layout (\`lg:grid-cols-3\`)

## 🖼️ Image Integration

The application supports both placeholder images and real images from external sources:

## 🎯 Usage

1. **Browse Skips**: Hover over skip cards to view pricing and details
2. **Select Skip**: Click "Select This Skip" to choose a skip
3. **Review Selection**: Confirm your choice in the modal dialog
4. **Toggle Selection**: Click "Selected" to deselect if needed
5. **Proceed**: Use "Confirm & Continue" to move to the next step

## 🔄 State Management

The application uses React's built-in state management:

- \`selectedSkip\`: Currently selected skip ID
- \`showConfirmation\`: Modal visibility state
- \`selectedSkipDetails\`: Full details of selected skip
- \`isHovering\`: Individual card hover states

## 🚀 Deployment

### Build for Production
\`\`\`bash
npm run build
\`\`\`

### Preview Production Build
\`\`\`bash
npm run preview
\`\`\`

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request



**Built with ❤️ using React and Tailwind CSS**
