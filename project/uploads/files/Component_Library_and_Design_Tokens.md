# Engineered Safety Platform
## Component Library & Design Tokens Reference

---

## DESIGN TOKENS

### Color Palette

#### Semantic Colors (Laing O'Rourke Brand Aligned)
```
PRIMARY (USE SPARINGLY - per LOR brand guidelines)
  - LOR Red: #e30613 (Pantone 485 CP) — Primary action buttons, critical alerts, high-impact accents
  - LOR Red Hover: #b80409 — Button hover state
  - LOR Red Active: #7a0206 — Button active/pressed state
  - LOR Yellow: #ffcd00 (Pantone 116 CP - Motif) — Status highlights, "new" badges, featured items

SECONDARY (EXTENDED USE)
  - LOR Teal: #00a7b5 (Pantone 7710 CP) — Secondary buttons, links, focus states, hover effects
  - LOR Teal Dark: #009cde (Pantone 2925 CP) — Button hover, active tabs, emphasis
  - LOR Green (Success): #64a70b (Pantone 369 CP) — Approved, positive actions, confirmation
  - LOR Orange (Warning): #fe5000 (Pantone Orange 021 CP) — At-risk, warnings, in-progress

NEUTRAL (LOR COOL GREY PALETTE - EXTENSIVE USE)
  - Almost Black (Text): #2d2d2d (Cool Grey 11) — Primary text, headlines
  - Very Dark Grey: #4d4d4d (Cool Grey 9) — Body text, strong secondary text
  - Dark Grey: #999999 (Cool Grey 7) — Secondary text, labels, helper text
  - Medium Grey: #cccccc (Cool Grey 5) — Input borders, form field dividers
  - Light Grey 2: #e6e6e6 (Cool Grey 3) — Subtle dividers, disabled states
  - Light Grey (Background): #f2f2f2 (Cool Grey 1) — Page background, cards, light panels
  - White: #ffffff — Modal backgrounds, card content areas

COLORBLIND-SAFE ALERTS
  - Status badge + icon + text label (never color alone)
  - Example: "✓ Approved" (green badge + checkmark + text)
  - Example: "⚠ At Risk" (orange badge + clock icon + text)
```

#### Background Colors (Laing O'Rourke Palette)
```
Page Background: #f2f2f2 (Cool Grey 1 - LOR standard)
Card Background: #ffffff
Hover State (cards): #e6e6e6 (Cool Grey 3 with light grey tint)
Sidebar Background: #f2f2f2 (Cool Grey 1)
Modal Backdrop: rgba(0, 0, 0, 0.5)
Success Background: Tinted green (#64a70b at 10% opacity) + white text
Warning Background: Tinted orange (#fe5000 at 10% opacity) + dark text
Error Background: Tinted red (#e30613 at 10% opacity) + white text
Info Background: Tinted teal (#00a7b5 at 10% opacity) + white text
```

#### Text Colors (Laing O'Rourke Palette)
```
Primary Text: #2d2d2d (Almost Black - LOR Cool Grey 11)
Secondary Text: #999999 (Dark Grey - LOR Cool Grey 7)
Disabled Text: #cccccc (Medium Grey - LOR Cool Grey 5)
Link Color: #00a7b5 (LOR Teal - underline on hover)
Link Visited: #009cde (LOR Teal Dark)
Link Hover: #009cde + underline
Success Text: #64a70b (LOR Green)
Warning Text: #fe5000 (LOR Orange)
Error Text: #e30613 (LOR Red)
Critical/Accent Text: #e30613 (LOR Red - use sparingly)
```

---

### Typography

#### Font Family (Laing O'Rourke Standards)
```
PRIMARY TYPEFACE: Century Gothic
  - Primary: Century Gothic, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif
  - Fallback: Arial, Helvetica, sans-serif
  - USAGE: All user-facing text, forms, buttons, system messaging

SECONDARY TYPEFACE: Ginger (Professional Designers Only)
  - Licensing: Must purchase from F37 Foundry (https://f37foundry.com/font-library/f37-ginger/)
  - RESTRICTION: Staff members of Laing O'Rourke CANNOT use Ginger without express permission
  - Not recommended for platform use (use Century Gothic instead)

MONOSPACE (Code/Technical):
  - "Courier New", Courier, monospace
  - Usage: Code snippets, technical documentation only
```

#### Font Sizes & Weights

| Level | Size (Desktop) | Size (Mobile) | Line Height | Weight | Usage |
|-------|---|---|---|---|---|
| H1 | 32px | 24px | 1.2 | 700 (Bold) | Page title, hero section |
| H2 | 24px | 20px | 1.3 | 600 (Semibold) | Section title, major heading |
| H3 | 18px | 16px | 1.4 | 600 (Semibold) | Subsection, card title |
| H4 | 16px | 14px | 1.5 | 600 (Semibold) | Subheading, form section |
| Body (Regular) | 14px | 14px | 1.5 | 400 (Regular) | Main paragraph text |
| Body (Small) | 12px | 12px | 1.5 | 400 (Regular) | Helper text, captions |
| Label | 12px | 12px | 1.5 | 500 (Medium) | Form labels, badges, tags |
| Button Text | 14px | 14px | 1.5 | 600 (Semibold) | Button labels |
| Link | 14px | 14px | 1.5 | 400 (Regular) | Hyperlinks (underlined on hover) |

#### Line Heights
```
Headings: 1.2–1.3 (tighter)
Body: 1.5 (standard, improves readability)
Form fields: 1.5
```

#### Letter Spacing
```
Default: 0
Headings: 0 (normal)
Labels: 0.02em (slight increase for clarity)
Buttons: 0.5px (0.03em)
```

---

### Spacing Scale

```
Base Unit: 8px (all spacing is multiple of 8)

Scale:
  2px   (0.25 unit) — Rarely used
  4px   (0.5 unit)  — Micro spacing (borders, dividers)
  8px   (1 unit)    — Padding within small elements
  12px  (1.5 units) — Input padding, small field spacing
  16px  (2 units)   — Standard padding, field spacing
  24px  (3 units)   — Section internal spacing
  32px  (4 units)   — Between major sections
  48px  (6 units)   — Large section spacing
  64px  (8 units)   — Extra large spacing (rare)

Component-Specific Spacing:
  - Button: Vertical 12px, Horizontal 24px (total height 44px min)
  - Input: Vertical 8px, Horizontal 12px (total height 40px)
  - Card: Padding 16px (all sides)
  - Card Gap: 16px between cards
  - Form Field Gap: 16px (field to field)
  - Section Gap: 24px–32px
  - Page Margin: 16px (mobile), 24px (tablet), 32px (desktop)
```

---

### Shadows & Elevation

```
Elevation 0 (No shadow): Flat (backgrounds, sections)
Elevation 1 (Subtle): 
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  Usage: Cards (default state), input fields (focus)

Elevation 2 (Medium):
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12);
  Usage: Cards (hover), modals, dropdowns

Elevation 3 (High):
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10);
  Usage: Modal backdrop, floating action buttons, overlays

Elevation 4 (Very High):
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05);
  Usage: Modal windows (primary), tooltips
```

### Border Radius

```
Small (form elements): 4px
Medium (cards, buttons): 8px
Large (modals, panels): 8px (corners), 12px (inside dialogs)
Full (circular): 50% (avatars, toggle switches)
None: 0 (table headers, full-width elements)

Usage:
  - Buttons: 4–6px (slight rounding)
  - Input fields: 4px
  - Cards: 8px
  - Modals: 8px (top corners), square bottom (mobile)
  - Avatars: 50% (full circle)
  - Images: 4–8px (subtle rounding)
```

### Borders

```
Border Width: 1px (standard)
Border Color: #dee2e6 (gray-300)
Focus Border: 3px solid #007bff (primary color)
Error Border: 2px solid #dc3545 (red)
Success Border: 2px solid #28a745 (green)

Divider: 1px solid #dee2e6 (light gray)
```

---

## COMPONENT SPECIFICATIONS

### Buttons

#### Primary Button
```
States:
  Default:
    - Background: #007bff
    - Text: white, 14px, weight 600
    - Padding: 12px 24px
    - Height: 44px min
    - Border: none
    - Border-radius: 4px
    - Cursor: pointer

  Hover:
    - Background: #0056b3 (darker blue)
    - Text: white
    - Shadow: Elevation 2

  Active/Pressed:
    - Background: #004085 (even darker)
    - Text: white
    - Shadow: none (inset effect)

  Disabled:
    - Background: #cccccc
    - Text: #999999
    - Cursor: not-allowed
    - Opacity: 0.6

  Loading:
    - Background: #0056b3
    - Text: faded white
    - Spinner icon (right side)
    - Cursor: not-allowed

Usage: Submit, Approve, Save, Primary CTAs
```

#### Secondary Button
```
States:
  Default:
    - Background: white
    - Border: 2px solid #007bff
    - Text: #007bff, 14px, weight 600
    - Padding: 10px 22px (adjust for border width)
    - Height: 44px min
    - Border-radius: 4px

  Hover:
    - Background: #e7f1ff (light blue)
    - Border: 2px solid #0056b3
    - Text: #0056b3
    - Shadow: Elevation 1

  Active:
    - Background: #d4e4ff
    - Border: 2px solid #004085
    - Text: #004085

  Disabled:
    - Background: #f8f9fa
    - Border: 2px solid #cccccc
    - Text: #999999
    - Cursor: not-allowed

Usage: Cancel, Save Draft, Secondary CTAs, Back buttons
```

#### Danger Button
```
States:
  Default:
    - Background: #dc3545 (red)
    - Text: white, 14px, weight 600
    - Padding: 12px 24px
    - Height: 44px min

  Hover:
    - Background: #c82333 (darker red)
    - Shadow: Elevation 2

  Disabled:
    - Background: #cccccc
    - Text: #999999
    - Cursor: not-allowed

Usage: Delete, Reject, Cancel (destructive), close dialogs
```

#### Text Button / Link
```
States:
  Default:
    - Background: transparent
    - Text: #007bff, 14px, weight 400
    - Padding: 0 (no padding; text only)
    - Text-decoration: none
    - Cursor: pointer

  Hover:
    - Text: #0056b3
    - Text-decoration: underline

  Active:
    - Text: #004085

  Disabled:
    - Text: #999999
    - Cursor: not-allowed

Usage: Links, "Learn More", secondary actions
```

#### Icon Button
```
States:
  Default:
    - Background: transparent (or light gray #f8f9fa)
    - Icon: #212529 (dark gray), 24×24px
    - Padding: 8px (to reach 40px min touch target)
    - Border-radius: 4–8px

  Hover:
    - Background: #e7f1ff or #f0f0f0
    - Icon: #0056b3

  Disabled:
    - Icon: #999999
    - Cursor: not-allowed

Usage: Close modal (X), menu (⋮), edit, delete, action icons
```

---

### Form Elements

#### Input Field (Text, Email, Number)
```
States:
  Default:
    - Background: white
    - Border: 1px solid #dee2e6
    - Text: #212529, 14px, line-height 1.5
    - Padding: 8px 12px (height 40px total)
    - Border-radius: 4px
    - Placeholder: #999999
    - Font-family: Sans-serif

  Hover:
    - Border: 1px solid #999999
    - Background: white

  Focus:
    - Border: 1px solid #007bff
    - Outline: 3px solid rgba(0, 123, 255, 0.25)
    - Box-shadow: inset 0 0 0 1px #007bff

  Disabled:
    - Background: #f8f9fa (light gray)
    - Text: #666666
    - Border: 1px solid #dee2e6
    - Cursor: not-allowed

  Error:
    - Border: 2px solid #dc3545 (red)
    - Background: #fff5f5 (light red tint)
    - Error text below (red, 12px)

  Success:
    - Border: 2px solid #28a745 (green)
    - Background: white

Width: Full width (100%) in container
Max-width: 600px (for long-form inputs on desktop)
```

#### Label
```
Format:
  - Position: Above input field
  - Text: #212529, 12px, weight 500
  - Margin-bottom: 4–8px

Mandatory Field Indicator:
  - Red asterisk (*) after text
  - Color: #dc3545

Optional Field Indicator:
  - Gray text "(Optional)" after label
  - Color: #666666
  - Weight: 400
```

#### Textarea (Multi-Line Input)
```
States:
  Default:
    - Same as input field (border, shadow, padding)
    - Padding: 12px
    - Min-height: 100px
    - Max-height: 400px
    - Resize: vertical (allow user to resize down only)

  Focus:
    - Same as input field

  Error:
    - Same as input field (red border)

Width: Full width (100%) in container
Placeholder: #999999
Font: 14px, line-height 1.5, sans-serif
Auto-expand: Optional (grow as user types, max 400px)
```

#### Dropdown / Select
```
States:
  Default:
    - Background: white
    - Border: 1px solid #dee2e6
    - Padding: 8px 36px 8px 12px (make room for chevron)
    - Text: #212529, 14px
    - Height: 40px
    - Border-radius: 4px
    - Chevron icon (right side): #666666, 20px

  Hover:
    - Border: 1px solid #999999
    - Chevron: #212529

  Focus:
    - Border: 2px solid #007bff
    - Outline: 3px solid rgba(0, 123, 255, 0.25)

  Open Dropdown Menu:
    - Position: absolute, below input
    - Background: white
    - Border: 1px solid #dee2e6
    - Shadow: Elevation 2
    - Width: 100% of input
    - Z-index: 100

Dropdown Options:
  - Padding: 8px 12px
  - Height: 40px (min, for touch)
  - Text: #212529, 14px
  - Hover: Background #e7f1ff
  - Selected: Background #e7f1ff, checkmark icon (left side)

Disabled:
  - Background: #f8f9fa
  - Text: #999999
  - Cursor: not-allowed

Width: Full width in container (100%)
```

#### Checkbox
```
States:
  Default (Unchecked):
    - Box: 20×20px, border 2px solid #dee2e6, background white
    - Cursor: pointer

  Hover (Unchecked):
    - Border: 2px solid #999999

  Checked:
    - Box: 20×20px, background #007bff, border 2px solid #007bff
    - Checkmark: white, 12px, centered

  Focus:
    - Outline: 3px solid rgba(0, 123, 255, 0.25)
    - Box shadow: 0 0 0 1px #007bff

  Disabled (Unchecked):
    - Border: 2px solid #cccccc
    - Background: #f8f9fa
    - Cursor: not-allowed

  Disabled (Checked):
    - Background: #cccccc
    - Border: 2px solid #cccccc
    - Checkmark: white
    - Cursor: not-allowed

Label:
  - Position: right of checkbox
  - Text: #212529, 14px, weight 400
  - Margin-left: 8px
  - Click on label also toggles checkbox (use <label for="id">)

Spacing:
  - 12px between checkboxes (vertical)
  - Group spacing: 16px from other groups
```

#### Radio Button
```
States:
  Default (Unchecked):
    - Circle: 20×20px, border 2px solid #dee2e6, background white
    - Cursor: pointer

  Hover:
    - Border: 2px solid #999999

  Checked:
    - Circle: 20×20px, border 2px solid #007bff
    - Inner dot: 10×10px, background #007bff

  Focus:
    - Outline: 3px solid rgba(0, 123, 255, 0.25)

  Disabled:
    - Border: 2px solid #cccccc
    - Background: #f8f9fa
    - Cursor: not-allowed

Label:
  - Same as checkbox (right side, 8px margin)
  - Click toggles radio

Spacing:
  - 12px between radio buttons (vertical)
  - 16px between radio groups
```

#### Date Picker
```
Default:
  - Input field (same as text input): [📅 MM/DD/YYYY]
  - Icon: Calendar, 20px, #666666

Click on Input:
  - Calendar popup appears
  - Format: Month/Year header + day grid
  - Selected date: Blue background
  - Today: Blue outline (not filled)
  - Previous/Next month buttons: < >
  - Close on selection or click outside

Min/Max Date:
  - Disabled dates: Gray out
  - Disabled dates: Cursor not-allowed
  - Prevent range selection outside bounds

Keyboard Support:
  - Arrow keys: Navigate dates
  - Enter: Select date
  - Escape: Close popup

Width: Full width in container
```

#### Multi-Select / Chip Picker
```
Display:
  - Container: Full width
  - Selected items shown as "chips" (tags)
  - Below chips: Input field for typing/filtering

Chip (Selected Item):
  - Background: #e7f1ff (light blue)
  - Text: #007bff, 12px
  - Padding: 4px 8px
  - Border-radius: 12px (pill shape)
  - Close button (×): Right side, #999999, click to remove
  - Margin-right: 4px
  - Margin-bottom: 4px

Input Field (for typing):
  - Inside container, below chips
  - Placeholder: "Search or type…"
  - Border: 1px solid #dee2e6
  - Focus: Same as text input

Dropdown Menu (while typing):
  - Position: Below input
  - Background: white
  - Options: Checkboxes + text
  - Hover: Light blue background
  - Selected: Checkmark visible, blue highlight
  - Max-height: 300px, scroll if more items

Disabled:
  - Chips: Faded color, no close button
  - Input: Disabled (not-allowed cursor)

Width: Full width in container (100%)
Max-width: 600px (on desktop, for long lists)
```

#### File Upload
```
Default State:
  - Container: Full width, light gray background (#f8f9fa)
  - Border: 2px dashed #dee2e6
  - Padding: 32px
  - Border-radius: 8px
  - Text: Centered, "Drag and drop files here, or click to select"
  - Icon: Folder/upload icon (48px, gray #666666)

Hover State:
  - Border: 2px dashed #007bff
  - Background: #e7f1ff

File Selected / Dropped:
  - Show file preview cards (stacked):
    - File name (truncate if long)
    - File size (12px, gray)
    - File type icon
    - Progress bar (if uploading)
    - [×] Remove button (right side, red on hover)

Uploading:
  - Progress bar: Full width, #007bff
  - Percentage (12px): "35% uploaded"
  - Cancel button appears

Upload Complete:
  - Green checkmark next to file
  - [✓] [Filename.pdf] [×]

Constraints:
  - Max file size: Show warning if exceeded
  - Accepted formats: Display list ("PDF, DOCX, XLSX, JPG, PNG, MP4")
  - Multiple files: [+] Add More Files button appears

Disabled State:
  - Border: 1px solid #dee2e6 (solid, not dashed)
  - Background: #f8f9fa
  - Text: #999999
  - Cursor: not-allowed
```

---

### Cards

#### Solution Card (Search Results)
```
Container:
  - Background: white
  - Border: 1px solid #dee2e6
  - Border-radius: 8px
  - Padding: 0 (no padding; sections have padding)
  - Shadow: Elevation 1 (default), Elevation 2 (hover)
  - Transition: smooth 200ms

Header Section (Image):
  - Background: #f8f9fa (if no image)
  - Image: 100% width, 200px height, object-fit: cover
  - If no image: Icon (lightbulb, 48px, gray) + sector color background

Title Section:
  - Padding: 16px 16px 8px
  - Title: H3, 18px, weight 600, dark blue #007bff (clickable link)
  - Truncate to 2 lines (text-overflow: ellipsis)

Summary Section:
  - Padding: 0 16px
  - Text: Gray #666666, 13px, italic, 1 line (ellipsis)
  - Example: "Lightweight barrier system reducing worker fall risk"

Meta Section:
  - Padding: 12px 16px
  - 4 columns: Sector badge | Status badge | Star rating | Date
  - Font: 12px, gray
  - Sector badge: Colored pill background, white text
  - Status badge: Green/Orange/Blue, white text
  - Stars: Gold #ffc107, small (16px), "4.2★ (23)"

Footer / Actions:
  - Padding: 12px 16px
  - [View Details] button: Secondary, full width
  - Height: 36px (smaller button)

Hover State:
  - Shadow: Elevation 2
  - Scale: 1.02 (slight zoom)
  - Title: Underline appears
  - Button: Blue fill (becomes primary)

Focus State (Keyboard):
  - Outline: 3px solid #007bff
```

#### Metric / KPI Card
```
Container:
  - Background: white
  - Border: 1px solid #dee2e6
  - Border-radius: 8px
  - Padding: 20px
  - Shadow: Elevation 1
  - Height: Auto (min 150px)

Header:
  - Title: H4, 14px, weight 500, gray #666666
  - Example: "Total Submitted"

Number Section:
  - Number: H2, 32px, weight 700, dark blue #007bff
  - Example: "247"

Trend Indicator:
  - Position: Top-right, small
  - Format: "+12%" (green if positive) or "-5%" (red if negative)
  - Icon: Arrow up/down, 12px

Footer / CTA (Optional):
  - Link or button: 12px, gray, underline on hover
  - Example: "View Details" or "View Trend"

Skeleton Loader State:
  - Same layout, but:
    - Title: Skeleton rectangle (8px height)
    - Number: Skeleton rectangle (24px height)
    - Trend: Skeleton rectangle (12px height)
    - Animate with gradient pulse (subtle gray animation)
```

#### Comment Card
```
Structure:
  - Avatar (left side): 32×32px, circular, user initials
  - Content (right side): Flex column

Header Row:
  - User name: Bold, 14px
  - Timestamp: 12px gray, "May 23, 2024 at 3:45 PM"
  - Menu icon (⋮): Right-aligned, 12px gray

Comment Body:
  - Padding: 8px 0
  - Text: 14px, line-height 1.5
  - Links: Blue, underlined
  - Mentions (@username): Bold, blue
  - Max-width: 500px

Actions Row:
  - [Reply] link | [Like] count | [More] menu

Nested Reply:
  - Same structure, but indented 24px left
  - Slightly smaller font (13px)
  - Fainter color (#999999)

Hover State:
  - Background: #f8f9fa
  - Menu icon: More visible (#212529)
```

---

### Navigation & Layout

#### Header / Navigation Bar
```
Container:
  - Background: white
  - Border-bottom: 1px solid #dee2e6
  - Height: 60px
  - Padding: 0 24px
  - Position: sticky (stays at top on scroll)
  - Z-index: 50
  - Shadow: Elevation 1

Left Side:
  - Logo: 32×32px icon + "Engineered Safety" text, 16px, weight 600
  - Click: Navigate to home
  - Margin-right: 32px

Primary Nav (Desktop):
  - Tabs: Home | Submit | Search | Admin (if user is admin)
  - Format: Text, 14px, weight 500, dark gray
  - Active tab: Blue text #007bff + underline (2px)
  - Hover: Blue text
  - Spacing: 24px between tabs

Secondary Items (Right Side):
  - Search box (optional, desktop only): 200px wide, light gray background
  - Notifications bell icon: 20px, dark gray
    - Red badge (count): 12px circle, white text, background red
    - Click: Open notification dropdown
  - Help icon: Tooltip "Keyboard shortcuts, user manual, contact support"
  - Settings icon: Dropdown menu
  - User avatar: 32×32px circle + name
    - Hover: Show dropdown menu (Profile, Preferences, Logout)
  - Spacing between items: 12px

Mobile (Hamburger Menu):
  - Hide primary nav tabs
  - Show hamburger icon (3 lines) on left side
  - Click: Slide-out menu from left (60% width)
  - Menu structure: Same items, vertical layout

Responsive Breakpoints:
  - Desktop (>1024px): Full header as described
  - Tablet (768–1024px): Hide "Admin" tab; condense spacing
  - Mobile (<768px): Hamburger menu; remove search box; stack items vertically in menu
```

#### Sidebar / Filter Panel
```
Position: Left side, sticky (stays visible on scroll)
Width: 280px (desktop), collapsible on tablet/mobile
Background: #f8f9fa
Border-right: 1px solid #dee2e6
Padding: 20px

Title Section:
  - "Refine Results" (H3, 16px, weight 600)
  - Margin-bottom: 16px

Search Box (if applicable):
  - Full width, same as input field
  - Placeholder: "Search filters…"
  - Clear button (×) on right

Filter Groups (Collapsible):
  - Group title: 12px, weight 600, dark gray
  - [+] / [-] Chevron (right side)
  - Click title to expand/collapse
  - Default: First group expanded, others collapsed

  Options Inside Group:
    - Checkboxes (for discrete options): Road | Rail | Defence
    - Multi-select chips (for many options)
    - Range slider (for dates): Min/Max inputs
    - Search input (for long lists): Type to filter options
    - Spacing: 8px between options

Active Filters Display:
  - Chips shown above filter groups
  - Format: [Filter Name] [×]
  - Color: Light blue (#e7f1ff)
  - Removable (click × to remove)
  - Spacing: 4px between chips

Buttons:
  - [Clear All Filters] (secondary button, full width): Bottom of sidebar
  - Margin-top: 24px

Mobile Behavior:
  - Hamburger menu icon (top-left) opens sidebar as overlay
  - Sidebar width: 85vw (max 300px)
  - Backdrop darkens
  - Swipe left / click outside to close
  - "X" close button (top-right)
```

#### Breadcrumb
```
Container:
  - Padding: 8px 0
  - Font: 12px, gray #666666
  - Margin-bottom: 16px

Items:
  - Format: Home > Search > Current Page
  - Separator: > (space-padded)
  - Links: Blue (#007bff), underline on hover
  - Current page: Bold, not linked

Example:
  [Home] > [Search Solutions] > Solution Title

Click Behavior:
  - Links take you to that page
  - Preserve filter state if applicable

Mobile:
  - Show only: [Home] > [Current]
  - Truncate middle items if space is limited
```

#### Modal / Dialog
```
Container:
  - Position: fixed (center of screen)
  - Width: 600px (desktop), 90vw (mobile), min 320px
  - Max-height: 90vh
  - Background: white
  - Border-radius: 8px
  - Shadow: Elevation 4
  - Z-index: 1000

Backdrop:
  - Position: fixed (behind modal)
  - Background: rgba(0, 0, 0, 0.5)
  - Z-index: 999
  - Click outside to close (escape key also closes)

Header:
  - Padding: 20px
  - Border-bottom: 1px solid #dee2e6
  - Display: Flex, space-between

  Title (left):
    - H2, 20px, weight 600, dark blue

  Close Button (right):
    - "X" icon, 24px, dark gray
    - Hover: Red (#dc3545)
    - Cursor: pointer

Body (Content):
  - Padding: 20px
  - Max-height: calc(90vh - 160px) — allows scrolling if content is long
  - Overflow-y: auto

Footer:
  - Padding: 20px
  - Border-top: 1px solid #dee2e6
  - Display: Flex, justify-content: flex-end, gap 12px

  Buttons:
    - Primary action (right): "Save", "Approve", "Submit"
    - Secondary action (left): "Cancel"

Mobile Adjustments:
  - Width: Full screen (100vw)
  - Height: Full screen (100vh)
  - Border-radius: 0 (no rounded corners on mobile)
  - No header border (cleaner look)
  - Buttons: Full width stacked (not side-by-side)

Keyboard Support:
  - Escape key: Close modal
  - Tab: Focus through focusable elements (within modal only)
  - Enter: Confirm primary action (if button focused)
```

---

### Progress Indicators

#### Progress Bar (Form Steps)
```
Container:
  - Full width (100%)
  - Height: 4px
  - Background: #e0e0e0 (light gray)
  - Border-radius: 2px
  - Margin-bottom: 24px

Filled Portion:
  - Background: #007bff (blue)
  - Height: 4px
  - Width: Percentage (e.g., 25% for step 1/4)
  - Transition: smooth 300ms cubic-bezier(0.4, 0, 0.2, 1)

Text Label (Above or Below Bar):
  - Format: "Step 1 of 4"
  - Font: 12px, gray #666666
  - Position: Left-aligned

Step Indicators (Optional):
  - 4 circles (one per step)
  - Completed: Filled blue circle + checkmark
  - Current: Blue circle, larger border
  - Upcoming: Gray outline circle
  - Click to jump to step (if allowed)

Example:
  ● (1. Complete) — ● (2. Current) — ○ (3. Upcoming) — ○ (4. Upcoming)
```

#### Linear Progress Indicator (File Upload)
```
Container:
  - Full width
  - Height: 4px
  - Background: #e0e0e0
  - Border-radius: 2px

Filled Bar:
  - Background: #007bff
  - Height: 4px
  - Width: 0–100% based on progress
  - Transition: smooth 200ms

Text (Below Bar):
  - Format: "35% uploaded" or "Uploading..." (animated dots)
  - Font: 12px, gray
  - Right-aligned: [Cancel] button

Indeterminate State (Unknown Duration):
  - Bar: Animating gradient (blue stripe moving left-to-right, infinite loop)
  - Text: "Processing…"
```

#### Spinner / Loading Indicator
```
Size Options:
  - Small: 20px (inline with text)
  - Medium: 40px (button/card loader)
  - Large: 80px (page loader)

Animation:
  - Rotating circle border
  - Color: #007bff
  - Rotation: 2s linear infinite (continuous)

Usage:
  - Inline in buttons: Show during form submission
  - Page load: Center of content area
  - Card load: Center of card

Best Practice:
  - Prefer skeleton loaders over spinners (less disruptive)
  - Use spinners for short operations (<3 seconds)
  - Use skeleton loaders for predictable content (cards, tables)
```

#### Skeleton Loader
```
Appearance:
  - Placeholder rectangle, light gray (#e0e0e0)
  - Same dimensions as actual content
  - Border-radius: 4px (same as actual content)

Animation:
  - Subtle gradient pulse (left-to-right)
  - Duration: 1.5s
  - Infinite repeat
  - Opacity: Fade between 0.8–1.0

Usage:
  - KPI cards: Rectangle for number, smaller for label
  - Tables: Full-width bars for rows
  - Search results: Card shape (image + title + text)
  - Modals: Full modal with placeholder content

Best Practice:
  - Use skeleton shapes that match actual content
  - Don't show more than 5 skeleton items (UX best practice: <2 sec load time)
  - Replace with real content smoothly (no jarring transition)
```

---

### Data Display

#### Table
```
Container:
  - Full width
  - Border-collapse: collapse (no double borders)
  - Border: 1px solid #dee2e6 (around entire table)
  - Shadow: Elevation 1
  - Border-radius: 8px (container, not individual cells)
  - Overflow: hidden (to apply radius to corners)

Header Row:
  - Background: #f8f9fa (light gray)
  - Font: 12px, weight 600, dark gray
  - Padding: 12px 16px
  - Text-align: left (default), right (for numbers)
  - Border-bottom: 2px solid #dee2e6
  - Cursor: pointer (on sortable columns)
  - Icon: Arrow up/down (12px, gray) next to sortable columns

Body Rows:
  - Background: white (odd rows) | #fafbfc (even rows, light tint)
  - Font: 14px, dark gray
  - Padding: 12px 16px
  - Vertical-align: middle
  - Height: 44px (min, for touch)
  - Border-bottom: 1px solid #dee2e6

Row States:
  - Hover: Background #f0f5ff, shadow Elevation 1
  - Selected (checkbox): Background #e7f1ff, left border 3px blue
  - Disabled: Opacity 0.6, cursor not-allowed

Cell Content:
  - Text: Truncate if long (text-overflow: ellipsis, white-space: nowrap, max-width: 200px)
  - Hover on truncated: Tooltip shows full text
  - Numbers: Right-aligned
  - Status badges: Inline
  - Links: Blue (#007bff), underline on hover
  - Images: 32×32px, centered

Expandable Rows:
  - Chevron icon (left side): ^ (expanded) | > (collapsed)
  - Click row or chevron to expand
  - Expanded row: Additional content in sub-rows, indented 16px
  - Sub-rows: Light gray background (#f8f9fa)

Checkbox Column:
  - First column, 44px wide
  - Header: Master checkbox (select all)
  - Body rows: Individual checkboxes
  - Spacing: Centered

Sticky Header (on scroll):
  - position: sticky
  - top: 0
  - z-index: 10
  - Background: white
  - Shadow: Elevation 1 (on scroll)

Sticky First Column (if table scrolls horizontally):
  - position: sticky
  - left: 0
  - z-index: 5
  - Background: white
  - Border-right: 2px solid #dee2e6

Mobile (Tablet/Mobile):
  - Stack table into cards (not horizontal scroll)
  - Format: Label + Value pairs (stacked)
  - Example:
    Solution Name
    Approved
    
    Submitter
    Sarah Johnson
    
    Due Date
    June 1, 2024

  - Cards: Full width, padding 16px, shadow Elevation 1, margin-bottom 16px
```

#### List View (Card Alternative to Table)
```
Container:
  - Full width
  - Stacked vertical layout
  - Spacing: 12px between cards

Card:
  - Background: white
  - Border: 1px solid #dee2e6
  - Border-radius: 8px
  - Padding: 16px
  - Shadow: Elevation 1 (default), Elevation 2 (hover)
  - Transition: smooth 200ms

Content Layout (Flex Row on Desktop):
  - Left (70%): Title + Subtitle + Meta
    - Title: H4, 16px, weight 600, dark blue (clickable)
    - Subtitle: 13px, gray, 1 line (optional)
    - Meta: 12px, gray, [Status Badge] [Category] [Date]

  - Right (30%): Action indicator + Menu
    - Status progress bar (optional)
    - Action menu (⋮) dropdown

Row Hover:
  - Card shadow: Elevation 2
  - Background: #fafbfc
  - Action buttons reveal

Mobile:
  - Full width, single column
  - Same layout, but title on top, meta below

Checkbox (Optional):
  - Left side, 44px wide
  - Checkbox: 20×20px, centered
  - Click row or checkbox to select
  - Selected: Row background #e7f1ff
```

---

### Badges & Tags

#### Status Badge
```
Approved:
  - Background: #28a745 (green)
  - Text: white, 12px, weight 600
  - Padding: 4px 12px
  - Border-radius: 12px (pill)
  - Icon: Checkmark (optional, left side)

Under Review:
  - Background: #ffc107 (amber)
  - Text: #856404 (dark amber, for contrast)
  - Padding: 4px 12px
  - Icon: Clock (optional)

Pending Decision:
  - Background: #17a2b8 (teal)
  - Text: white
  - Padding: 4px 12px
  - Icon: Question mark (optional)

Rejected:
  - Background: #dc3545 (red)
  - Text: white
  - Padding: 4px 12px
  - Icon: X (optional)

Closed:
  - Background: #6c757d (gray)
  - Text: white
  - Padding: 4px 12px

Size Options:
  - Small: 10px font, 3px 10px padding (inline)
  - Medium: 12px font, 4px 12px padding (standard)
  - Large: 14px font, 6px 14px padding (prominent)

Display:
  - Inline-block
  - Vertical-align: middle (align with text)
```

#### Sector Tag / Category Badge
```
Colors (Per Sector):
  - Road: #007bff (blue)
  - Rail: #6f42c1 (purple)
  - Defence: #dc3545 (red)
  - Maritime: #17a2b8 (teal)
  - Aviation: #ffc107 (amber)
  - Other: #6c757d (gray)

Format:
  - Background: Sector color
  - Text: white, 11px, weight 500
  - Padding: 3px 10px
  - Border-radius: 12px (pill)
  - Display: Inline-block
  - Margin-right: 4px (when multiple)

Hover (Optional):
  - Opacity: 0.8
  - Cursor: pointer (if filterable)
```

#### Chip / Removable Tag
```
Container:
  - Background: #e7f1ff (light blue)
  - Border: 1px solid #cce5ff
  - Padding: 6px 10px (left) 6px 4px (right, for close button)
  - Border-radius: 16px (rounded pill)
  - Display: Inline-flex, align-items: center
  - Margin-right: 4px
  - Margin-bottom: 4px

Text:
  - Color: #007bff (blue)
  - Font: 12px, weight 500

Close Button (×):
  - Right side
  - Width: 20px (touch target)
  - Icon: ×, 12px, gray
  - Hover: Red (#dc3545), cursor pointer

Disabled State:
  - Background: #f0f0f0
  - Text: #999999
  - Close button: Disabled (not-allowed cursor)
  - Opacity: 0.6

Usage:
  - Selected filters
  - Selected items in multi-select
  - Tags / categories (removable in edit mode)
```

---

## AI DESIGN TOOL USAGE GUIDE

When using an AI design tool (e.g., Claude, Figma AI, Penpot), use these token specifications to ensure consistency:

### Example Prompt Structure
```
Create a [Component Name] with:
- Color: [Semantic Color from Palette]
- Typography: [H1–Body, Font Size, Weight]
- Spacing: [Margin/Padding values]
- Border: [Width, Color, Radius]
- Shadow: [Elevation level]
- States: Default, Hover, Focus, Disabled, [others]

Usage: [Where this component appears]
Accessibility: [WCAG requirements]
Mobile: [Responsive behavior]
```

### Example for Button
```
Create a Primary Button component:
- Background: #007bff
- Text: white, 14px, weight 600
- Padding: 12px 24px
- Border-radius: 4px
- Height: 44px (min)
- States:
  * Default: #007bff background
  * Hover: #0056b3 background, Elevation 2
  * Active: #004085 background
  * Disabled: #cccccc background, #999999 text, opacity 0.6
  * Loading: #0056b3 background, white spinner icon
- Accessibility: WCAG AA contrast (white on blue = 4.5:1 ✓)
- Mobile: Full width or 50% width (side-by-side with other button)
```

---

**End of Component Library & Design Tokens Document**

Reference this document when:
1. Creating new UI designs
2. Auditing existing designs for consistency
3. Onboarding new designers
4. Generating AI-based wireframes/prototypes
5. Documenting design specifications for developers

Last Updated: April 29, 2026
