# HNG Stage 1 — Multi-Page Web Application

A continuation of my **HNG Internship Stage 0 project**, this task upgrades the single profile card into a **multi-page web application**.  
It now includes an **About Me** page and a **Contact Us** page with form validation — all built with accessibility, responsiveness, and semantic HTML in mind.

---

## Overview
This project showcases fundamental **frontend development skills** using **HTML**, **CSS**, and **JavaScript**.  
It emphasizes:
- Semantic HTML structure
- Accessibility and keyboard navigation
- Responsive design
- Clean, maintainable code
- Proper `data-testid` usage for testing

---

## Pages

### Home Page
The home page retains the **Stage 0 profile card** design, displaying:
- Developer’s name, role, and bio  
- Social links (GitHub, LinkedIn, Twitter)  
- Live UTC time (updated dynamically via JavaScript)  
- Consistent styling and theme from Stage 0  

**File:** `index.html`  
**TestID Example:** `data-testid="test-home-page"`

---

### About Me Page
A reflective page that highlights my journey and insights in the HNG internship.  
Each section is displayed inside a **dark-themed card** (not too dark for readability).  

#### Required Sections:
| Section | Test ID |
|----------|----------|
| Bio | `test-about-bio` |
| Goals in the Program | `test-about-goals` |
| Areas of Low Confidence | `test-about-confidence` |
| Note to Future Self | `test-about-future-note` |
| Extra Thoughts | `test-about-extra` |

**Structure:**  
- Wrapped inside `<main data-testid="test-about-page">`  
- Each section uses `<section>` and proper `<h2>` or `<h3>` headings  

**File:** `about.html`

---

### Contact Us Page
A form where users can send messages, built with **validation and accessibility best practices**.

#### Form Fields:
| Field | Test ID |
|--------|----------|
| Full Name | `test-contact-name` |
| Email | `test-contact-email` |
| Subject | `test-contact-subject` |
| Message | `test-contact-message` |
| Submit Button | `test-contact-submit` |
| Error Message | `test-contact-error-<field>` |
| Success Message | `test-contact-success` |

#### Validation Rules:
- All fields are **required**
- Email must follow a **valid format** (e.g., `name@example.com`)
- Message must be at least **10 characters long**
- On valid submission → shows a **success message**

**Accessibility:**
- Each input linked to a `<label for="">`
- Error messages tied via `aria-describedby`
- Fully keyboard navigable

**File:** `contact.html`

---

## Navigation
A **persistent navigation bar** appears at the top of every page:
- Links: **Home | About Me | Contact Us**
- Highlights active page
- Responsive layout (mobile, tablet, desktop)
- Matches the visual theme from Stage 0

**File:** Included in all pages (`<nav>` in header)

---

## Technologies Used
- **HTML5** — for semantic structure  
- **CSS3** — for styling and responsive layout  
- **Vanilla JavaScript (ES6)** — for dynamic time & form validation  

---

## Design Theme
The design maintains the **clean and elegant look** of Stage 0:
- Simple color palette with soft dark tones  
- Readable typography  
- Smooth card shadows  
- Fully responsive for all screen sizes  

---

## Accessibility & Testing
- Semantic tags (`<main>`, `<section>`, `<nav>`, `<footer>`)  
- Screen-reader-friendly with proper labels and ARIA attributes  
- `data-testid` attributes for automated tests  
- Validated through both HTML5 and JS  

---

## How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hng-stage1-multipage-app.git


## 🚀 How to Run
1. Clone or download this repository:  
   ```bash
   git clone https://github.com/yourusername/hng13-stage0-profile-card.git
2. Open index.html in any modern web browser

## Author
Excel Israel
