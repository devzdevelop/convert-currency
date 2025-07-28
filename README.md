# 💱 Currency Converter

A modern, responsive currency converter web application built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Convert currencies in real-time with the latest exchange rates from around the world.

![Currency Converter](https://img.shields.io/badge/Next.js-14.0.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎯 **Real-time Conversion**: Get live exchange rates using the ExchangeRate-API
- 💱 **Multiple Currencies**: Support for major world currencies including USD, EUR, CNY, CAD, GBP, JPY, AUD, and CHF
- 📱 **Responsive Design**: Beautiful, modern UI that works on all devices
- ⚡ **Fast & Lightweight**: Built with Next.js for optimal performance
- 🎨 **Clean Interface**: Intuitive design with smooth animations and transitions
- 🔄 **Auto-conversion**: Results update automatically when you change currencies
- 📊 **Popular Currencies**: See conversions to all major currencies at once
- ♿ **Accessible**: Built with accessibility in mind (ARIA labels, keyboard navigation)

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **API**: [ExchangeRate-API](https://exchangerate-api.com/) (free tier)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter)

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd currency-converter
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Development Server Status

The development server will show:
- ✅ **Ready** - Server is running successfully
- 🔄 **Compiling** - Building the application
- ⚠️ **Warnings** - Non-critical issues (can be ignored)

## 📖 How to Use

### Basic Currency Conversion

1. **Enter Amount**: Type the amount you want to convert in the first input field
2. **Select From Currency**: Choose the currency you're converting from the dropdown
3. **Select To Currency**: Choose the currency you're converting to the dropdown
4. **View Results**: The conversion result appears automatically below

### Popular Currencies Section

- **Auto-populated**: Shows conversions to all major currencies
- **Real-time Updates**: Updates when you change the amount or base currency
- **Exchange Rates**: Displays current exchange rates for each currency

### Features

- **Auto-conversion**: Results update automatically when you change currencies
- **Error Handling**: Clear error messages for invalid inputs
- **Loading States**: Visual feedback during API calls
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on http://localhost:3000 |
| `npm run build` | Build the application for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |

## 🌐 API Information

This application uses the **ExchangeRate-API** which provides:

- ✅ **Free Tier**: 1,500 requests per month
- ✅ **Real-time Rates**: Updated exchange rates
- ✅ **170+ Currencies**: Support for major world currencies
- ✅ **No API Key**: Required for basic usage
- ✅ **HTTPS**: Secure API endpoints

**API Endpoint**: `https://api.exchangerate-api.com/v4/latest/{base_currency}`

## 📁 Project Structure

```
currency-converter/
├── app/                          # Next.js App Router directory
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Main currency converter page
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.js              # Next.js configuration
├── .gitignore                  # Git ignore rules
└── README.md                   # Project documentation
```

## 🎨 Design Features

- **Modern UI**: Clean, minimalist design with smooth animations
- **Color Scheme**: Professional blue gradient theme
- **Typography**: Inter font for excellent readability
- **Responsive**: Mobile-first design approach
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🔍 Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Kill the process using port 3000
   npx kill-port 3000
   # Then restart the dev server
   npm run dev
   ```

2. **Dependencies not installed**
   ```bash
   # Remove node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript errors**
   ```bash
   # Check for TypeScript issues
   npx tsc --noEmit
   ```

### Performance Tips

- The app uses client-side caching for better performance
- API calls are optimized to minimize requests
- Images and assets are optimized for fast loading

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure accessibility compliance
- Add proper error handling
- Write clean, readable code

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [ExchangeRate-API](https://exchangerate-api.com/) for providing free currency data
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Inter Font](https://fonts.google.com/specimen/Inter) for the beautiful typography

## 📞 Support

If you encounter any issues or have questions:

- 🐛 **Report Bugs**: Open an issue on GitHub
- 💡 **Feature Requests**: Submit a feature request
- 📧 **Contact**: Reach out through GitHub discussions

---

**Made with ❤️ using Next.js, TypeScript, and Tailwind CSS** 