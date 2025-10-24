# 💕 Rashmi & Deepankar - Wedding RSVP System

A beautiful, modern wedding website with integrated Google Sheets RSVP management. Built with React, TypeScript, and Google Apps Script for seamless guest responses.

![Wedding Website](https://img.shields.io/badge/React-18.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.0-blue) ![Framer Motion](https://img.shields.io/badge/Framer--Motion-10.0.0-pink)

## ✨ Features

### 🎨 **Beautiful Design**
- **Romantic Theme**: Elegant rose and pink color scheme
- **Responsive Design**: Perfect on all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion animations throughout
- **Modern UI**: Clean, professional interface with gradients and shadows
- **Audio Player**: Custom wedding music player with full controls

### 📱 **User Experience**
- **Interactive Hero**: Animated countdown to the wedding date
- **Audio Player**: Triple-mode music experience - full seek controls + floating button on all devices
- **Photo Gallery**: 5 beautiful couple photos in a carousel
- **Event Details**: Complete wedding information with map integration
- **RSVP Form**: Easy guest response system
- **Mobile-First**: Optimized for touch devices with touch-friendly controls

### 🔧 **Technical Features**
- **Google Sheets Integration**: Automatic RSVP data collection
- **Form Validation**: Client-side validation with error handling
- **SEO Optimized**: Meta tags, structured data, social sharing
- **Progressive Web App**: PWA-ready with service worker support
- **Performance**: Optimized images and lazy loading

### 📊 **RSVP Management**
- **Real-time Data**: Instant Google Sheets updates
- **WhatsApp Integration**: Collect guest contact numbers
- **Guest Tracking**: Number of guests attending
- **Message Collection**: Special wishes and dietary requirements
- **Timestamp Tracking**: Submission time tracking

## 🏗️ Architecture

```
Frontend (React + TypeScript)
├── Components
│   ├── Hero - Animated countdown & couple intro + Audio Player
│   ├── AudioPlayer - Custom music player with full controls
│   ├── Navigation - Mobile-responsive menu
│   ├── EventDetails - Photo carousel & wedding info
│   ├── RSVP - Google Sheets integrated form
│   ├── Gallery - Photo display
│   └── Footer - Contact & additional info
├── Utils
│   ├── Google Apps Script integration
│   └── Form validation
└── Assets
    ├── Images (hero, couple photos, icons)
    └── Favicons (multiple sizes for all devices)

Backend (Google Apps Script)
├── doPost() - Handle form submissions
├── doGet() - Handle direct URL access
├── Data Processing - FormData parsing
├── Google Sheets API - Data storage
└── Error Handling - Comprehensive logging
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Google Account (for Sheets integration)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd rashmi-and-deepankar-engagement
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
npm run dev
```

4. **Open** `http://localhost:5173`

## 📊 Google Sheets RSVP Integration Setup

### Step 1: Create Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create new spreadsheet: `"Rashmi & Deepankar - RSVP Responses"`
3. **Rename first tab to "RSVP"** (important!)
4. Copy the Sheet ID from URL:
   ```
   https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit
   ```

### Step 2: Set Up Google Apps Script
1. In your Google Sheet: **Extensions → Apps Script**
2. Replace all code with the content from `google-apps-script.js`
3. **Update the SHEET_ID** in the code:
   ```javascript
   const SHEET_ID = 'YOUR_SHEET_ID_HERE';
   ```

### Step 3: Deploy Apps Script
1. Click **"Deploy" → "New deployment"**
2. Type: **"Web app"**
3. Execute as: **"Me"**, Access: **"Anyone"**
4. **Copy the deployment URL**

### Step 4: Update React App
1. Open `src/components/RSVP.tsx`
2. Replace the scriptURL:
   ```javascript
   const scriptURL = 'YOUR_DEPLOYMENT_URL_HERE';
   ```

### Step 5: Test Integration
```javascript
// Test in browser console
const testScript = async () => {
  const scriptURL = 'YOUR_DEPLOYMENT_URL';
  const formData = new FormData();
  formData.append('name', 'Test Guest');
  formData.append('whatsapp', '+91 9876543210');
  formData.append('attendance', 'yes');

  const response = await fetch(scriptURL, { method: 'POST', body: formData });
  console.log('Response:', await response.text());
};
testScript();
```

## 🔧 How the Integration Works

### Frontend (React)
```javascript
// 1. Form submission
const handleSubmit = async (e) => {
  const formData = new FormData();
  formData.append('name', formData.name);
  formData.append('whatsapp', formData.whatsapp);
  // ... other fields

  // 2. Send to Google Apps Script
  const response = await fetch(scriptURL, {
    method: 'POST',
    body: formData
  });

  // 3. Handle response
  if (response.ok) {
    showSuccessMessage();
  }
};
```

### Backend (Google Apps Script)
```javascript
function doPost(e) {
  // 1. Parse FormData
  const data = parseFormData(e.postData.contents);

  // 2. Open Google Sheet
  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

  // 3. Append data
  sheet.appendRow([
    new Date(), // Timestamp
    data.name,
    data.whatsapp,
    data.attendance,
    data.guests,
    data.message
  ]);

  // 4. Return success
  return ContentService
    .createTextOutput('{"result":"success"}')
    .setMimeType(ContentService.MimeType.JSON);
}
```

### Data Flow
```
User Form → React App → Google Apps Script → Google Sheets
     ↓          ↓              ↓              ↓
  Validation  FormData     doPost()      appendRow()
     ↓          ↓              ↓              ↓
Success Msg  POST Request  Data Parsing  Data Stored
```

## 📋 Google Sheet Structure

| Column A | Column B | Column C | Column D | Column E | Column F | Column G |
|----------|----------|----------|----------|----------|----------|----------|
| **Submission Time** | **Full Name** | **WhatsApp Number** | **Attendance** | **Number of Guests** | **Special Message** | **Client Timestamp** |
| 2025-01-15 14:30:00 | John Doe | +91 9876543210 | yes | 2 | Looking forward! | 2025-01-15T14:30:00Z |

## 🎨 Customization Guide

### Colors & Theme
- **Primary**: Rose/Pink gradients
- **Secondary**: Soft purples and creams
- **Accent**: Gold highlights
- **Text**: Dark for readability

### Content Updates
1. **Names**: Update in Hero component
2. **Date**: Change in Hero.tsx and Apps Script
3. **Venue**: Update in EventDetails.tsx
4. **Images**: Replace in `/public/` folder
5. **Audio**: Replace `tumko-paya-hai-toh.mp3` in `/public/` folder
6. **Messages**: Customize toast messages

### Adding New Features
1. **New Form Fields**: Update both React form and Apps Script
2. **Email Notifications**: Add `MailApp.sendEmail()` in Apps Script
3. **Data Validation**: Add checks in doPost function
4. **Admin Dashboard**: Create separate sheet for analytics

## 🐛 Troubleshooting

### "postData is undefined"
- **Cause**: Testing via GET instead of POST
- **Fix**: Use the RSVP form or browser console test

### "Sheet not found"
- **Cause**: Wrong Sheet ID or no access
- **Fix**: Verify Sheet ID and ownership

### Form not submitting
- **Cause**: Network issues or wrong URL
- **Fix**: Check browser console and deployment URL

### Data in wrong sheet
- **Cause**: Apps Script using wrong sheet
- **Fix**: Ensure "RSVP" is the first tab name

## 📦 Technologies Used

### Frontend
- **React 18** - Modern UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **React Hook Form** - Form management
- **HTML5 Audio API** - Custom audio player
- **Lucide Icons** - Beautiful icons

### Backend
- **Google Apps Script** - Serverless functions
- **Google Sheets API** - Data storage
- **Content Service** - HTTP responses

### DevOps
- **Vite** - Fast build tool
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod

# Or deploy to Netlify
netlify deploy --prod --dir=dist
```

### Apps Script (Already Deployed)
- Apps Script is deployed as a web app
- No additional deployment needed
- URL is already configured in the code

## 📈 Performance Optimization

- **Image Optimization**: WebP format with fallbacks
- **Code Splitting**: Dynamic imports for large components
- **Lazy Loading**: Images and components load on demand
- **Caching**: Service worker for PWA features
- **Bundle Analysis**: Webpack bundle analyzer included

## 🔒 Security & Privacy

- **Data Encryption**: HTTPS everywhere
- **Access Control**: Apps Script configured for necessary access only
- **Input Validation**: Client and server-side validation
- **CORS Handling**: Proper cross-origin request handling
- **Privacy Compliance**: WhatsApp numbers stored securely

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Create Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 🙏 Acknowledgments

- **Framer Motion** for beautiful animations
- **Tailwind CSS** for rapid styling
- **Google Apps Script** for seamless integration
- **shadcn/ui** for component library
- **Lucide** for icon set

## 📞 Support

For technical support or questions:
- Check the troubleshooting section
- Review the Google Apps Script logs
- Test with the provided browser console script

---

## 🎉 Final Result

This wedding website provides:
- ✅ **Stunning Visual Design** with romantic theme
- ✅ **Mobile-Responsive** experience
- ✅ **SEO Optimized** with proper meta tags
- ✅ **Social Media Ready** with Open Graph integration
- ✅ **Professional RSVP System** with Google Sheets integration
- ✅ **Real-time Data Collection** with timestamp tracking
- ✅ **Error Handling** and user feedback
- ✅ **Performance Optimized** for fast loading

**Perfect for creating memorable wedding experiences!** 💕✨

## 🎵 **Audio Player Features**

- **Triple-Mode Experience** - Full seek controls + floating button on all devices
- **Always Accessible** - Fixed floating play/pause button positioned above chatbot for easy access
- **Smart UI Elements** - Chatbot close button only appears when chat is open, clean interface when closed
- **Full Seek Controls** - Progress bar, time display, and seek functionality on all devices
- **Mobile-First Design** - Touch-optimized controls with larger slider for mobile
- **Play/Pause Controls** with loading states and smooth animations
- **Elegant Visual Design** - Glass-morphism backdrop, rose/pink gradients, and sophisticated styling
- **Romantic Theme** - Wedding-appropriate colors with rose and pink gradients
- **Enhanced UI Elements** - Rounded containers, shadows, and hover effects
- **Universal Layout** - Consistent experience across mobile, tablet, and desktop
- **Smooth Animations** - Appears with elegant scale-in effect

---

*Built with ❤️ for Rashmi & Deepankar's special day*