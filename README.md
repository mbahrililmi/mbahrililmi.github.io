# Portfolio M. Bahril Ilmi

Modern portfolio website with contact management system.

## Features

- 🎨 Modern and responsive design
- 📱 Mobile-first approach
- ✨ Professional animations and effects
- 📧 Contact form with data storage
- 🔒 Admin panel for contact management
- 🚀 Fast loading with optimized assets

## Contact Management System

This portfolio includes a built-in contact management system that stores contact form submissions locally.

### User Features

- Contact form with validation
- Success/error feedback
- Smooth form submission

### Admin Features

- Secure admin access
- View all contact messages
- Delete individual contacts
- Clear all contacts

### Admin Access

**Username:** `heavenly-demon`

#### How to Access Admin Panel

1. **Keyboard Shortcut:** Press `Ctrl + Alt + A` anywhere on the page
2. **Login:** Enter username `heavenly-demon` when prompted

#### Admin Functions

- View all submitted contact messages
- See submission timestamps
- Delete individual messages
- Clear all messages
- **Download contacts as JSON file**
- **Upload JSON file to restore contacts**
- Contact information includes: Name, Email, Subject, Message, Date

## Data Storage

- Contact data is stored in browser's localStorage for temporary storage
- Admin can **download** contacts as JSON file for permanent backup
- Admin can **upload** JSON file to restore contacts
- Each contact has unique ID and timestamp
- Data export/import functionality for data portability

### Data Management Features

- **Download JSON:** Export all contacts to `contacts_YYYY-MM-DD.json` file
- **Upload JSON:** Import contacts from JSON file (replaces current data)
- **Auto-backup:** Recommended to download JSON regularly for backup
- **Data Portability:** JSON files can be shared between different instances

## Installation

1. Clone the repository
2. Open `index.html` in a web browser
3. No server setup required - runs locally

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- JavaScript (ES6+)
- Bootstrap 5.3.2
- AOS (Animate On Scroll)
- localStorage for data persistence

## Browser Compatibility

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Security Note

The admin system is for demonstration purposes. In a production environment, implement proper authentication and server-side data storage.

---

© 2025 M. Bahril Ilmi. Built with ❤️ and modern web technologies.
