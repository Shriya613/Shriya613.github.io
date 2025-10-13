# Shriya613.github.io

A personal portfolio website showcasing projects, skills, and experience.

## 📁 Repository Structure

```
Shriya613.github.io/
├── assets/
│   └── images/          # Store your images here
│       ├── .keep        # Keeps directory in git
│       └── profile.jpg  # Your profile photo (upload this)
├── resume/
│   ├── .keep           # Keeps directory in git
│   └── resume.pdf      # Your resume PDF (upload this)
├── index.html          # Main portfolio page
├── styles.css          # Styling
├── script.js           # Interactive features
└── README.md           # This file
```

## 🚀 Getting Started

### Step 1: Upload Your Profile Photo

1. Navigate to the `assets/images/` folder in your repository
2. Click **Add file** → **Upload files**
3. Upload your profile photo with the exact filename: `profile.jpg`
4. **Recommended specifications:**
   - **Dimensions:** 500x500 pixels (1:1 aspect ratio)
   - **Format:** JPG or JPEG
   - **File size:** Under 500KB for optimal loading
   - **Content:** Professional headshot with good lighting
5. Commit the file with a message like "Add profile photo"

> **Note:** The `.keep` file in this folder ensures the directory is tracked by git even when empty. Don't delete it!

### Step 2: Upload Your Resume

1. Navigate to the `resume/` folder in your repository
2. Click **Add file** → **Upload files**
3. Upload your resume with the exact filename: `resume.pdf`
4. **Recommended specifications:**
   - **Format:** PDF only
   - **File size:** Under 2MB
   - **Content:** Updated and professional resume
5. Commit the file with a message like "Add resume PDF"

> **Note:** The `.keep` file in this folder ensures the directory is tracked by git even when empty. Don't delete it!

### Step 3: Personalize Your Content

Edit `index.html` to update your personal information:

1. Click on `index.html` in your repository
2. Click the pencil icon (✏️) to edit
3. Update the following sections:

#### Personal Information
- **Line 39:** Replace `Your Name` with your actual name
- **Line 40:** Update your professional tagline
- **Line 45:** Update LinkedIn URL
- **Line 204:** Update your email address
- **Line 208:** Update your location

#### About Section (Lines 54-76)
- Update the bio paragraphs with your story
- Modify the skills tags to match your expertise

#### Education Section (Lines 78-109)
- Update university/college name, degree, and dates
- Update CGPA/grades
- Update school name and details

#### Projects Section (Lines 111-178)
- Replace project titles, descriptions, and technologies
- Update GitHub and demo links

4. Commit your changes with a descriptive message

## 📸 Adding More Images

To add additional images to your portfolio (e.g., project screenshots, logos):

1. Upload images to `assets/images/` folder
2. Give them descriptive names (e.g., `project1-screenshot.png`, `company-logo.jpg`)
3. Reference them in your HTML using the path: `/assets/images/your-image-name.jpg`

**Example:**
```html
<img src="/assets/images/project-screenshot.png" alt="Project Screenshot">
```

## 🎨 Customization Tips

### Changing Colors
- Edit the CSS variables in `styles.css` (lines 1-20) to change the color scheme

### Adding Sections
- Copy an existing section structure in `index.html`
- Update the content and IDs
- Add navigation links in the navbar (lines 16-23)

### Social Links
- Update GitHub and LinkedIn URLs in the hero section (lines 42-47)
- Update social links in the contact section (lines 211-218)

## 🌐 Viewing Your Website

Your portfolio is automatically published via GitHub Pages at:
```
https://shriya613.github.io/
```

After making changes, wait 1-2 minutes for GitHub Pages to rebuild and deploy your site.

## 📝 Quick Edit Checklist

Before going live, make sure you've updated:
- [ ] Profile photo uploaded to `/assets/images/profile.jpg`
- [ ] Resume uploaded to `/resume/resume.pdf`
- [ ] Name and tagline in hero section
- [ ] About me bio and skills
- [ ] Education details
- [ ] Project information and links
- [ ] Contact email and location
- [ ] Social media links (LinkedIn, GitHub)
- [ ] Footer copyright name

## 🔧 Technical Notes

### About .keep Files
- `.keep` files are placeholder files that ensure empty directories are tracked by git
- Git doesn't track empty directories by default
- Once you upload your actual files (profile.jpg, resume.pdf), the `.keep` files serve as documentation
- You can safely keep them in the repository - they won't affect your website

### File Paths
- Paths starting with `/` are absolute paths from the root of your website
- This ensures files are found correctly regardless of the current page location
- Example: `/assets/images/profile.jpg` always points to the same file

### Best Practices
- Keep image file sizes optimized (compress before uploading)
- Use descriptive filenames (avoid spaces, use hyphens instead)
- Test your website after each major change
- Keep your resume updated regularly

## 📞 Need Help?

If you encounter any issues:
1. Check that filenames match exactly (case-sensitive)
2. Ensure files are in the correct directories
3. Wait a few minutes for GitHub Pages to deploy changes
4. Clear your browser cache if changes don't appear

## 📄 License

This project is open source and available for personal use.

---

**Happy building! 🚀** Make this portfolio truly yours by personalizing every section.