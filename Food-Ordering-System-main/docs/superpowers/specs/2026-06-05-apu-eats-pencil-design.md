# APU Eats — Pencil UI Design Spec

**Date:** 2026-06-05  
**Scope:** Recreate all 7 HTML pages of the APU Eats food-ordering system as Pencil (.pen) frames  
**Approach:** Single new .pen file, all 7 screens in one batch_design call

---

## File Setup

| Setting | Value |
|---|---|
| File | New `.pen` file (created from scratch) |
| Total frames | 7 |
| Student frames | 375 × 812 px (mobile) |
| Staff frames | 1440 × 900 px (desktop) |

---

## Design Tokens (from style.css / HTML)

| Token | Value |
|---|---|
| Primary | `#003366` (dark navy) |
| Primary light | `#0055a5` |
| Accent / Gold | `#FFB800` |
| Surface | `#ffffff` |
| Background | `#f8fafc` |
| Border | `#e5e7eb` |
| Text muted | `#6b7280` |
| Success | `#16a34a` |
| Warning | `#f59e0b` |
| Danger | `#dc2626` |
| Font | Poppins 400 / 600 / 700 / 800 |
| Border radius | 12px (cards), 99px (pills) |
| Shadow | subtle card shadow |

---

## Screens

### 1. Login (index.html) — Mobile 375×812

**Purpose:** Entry point. Users pick a role then log in.

**Layers (top to bottom):**
- Full-screen background: diagonal gradient `#001f4d → #003366 → #0055a5`
- Brand block (centred, upper third):
  - 80×80 gold circle with 🍜 emoji
  - "APU **Eats**" h1 (white, gold accent on "Eats")
  - Subtitle: "Order your favourite meal from APU Cafeteria" (white 65% opacity)
- Login card (white, 20px radius, shadow):
  - Language row: EN / MY / 中文 pill buttons
  - Role tabs (3 equal columns): 🎓 Student/Staff · 🍳 Food Vendor · ⚙️ Admin
  - Email input field
  - Password input field
  - "Login →" primary button (full width, navy)
  - Footer note: "Demo credentials: any email & password"

---

### 2. Home (home.html) — Mobile 375×812

**Purpose:** Student browses stalls and re-orders.

**Layers:**
- Top nav bar (navy): APU Eats logo, language switcher, cart icon with badge
- Hero banner (navy gradient, ~100px tall): greeting text, student name, "APU Cafeteria · Block D", large decorative 🍜 (low opacity, bottom-right)
- Scroll content area (light grey bg):
  - Gold promo strip: ⚡ "Pre-order & Skip the Queue!"
  - Search bar with 🔍 icon
  - Category pills: All · Meals · Beverages · Snacks · Desserts (navy active state)
  - Section header: "🏪 Available Stalls" + "8 stalls open" count
  - Stall grid (2-col): each card has gradient emoji thumbnail (100px), stall name, type, queue badge (green/amber/red)
  - Section header: "🔄 Order Again"
  - Horizontal scroll row: 3 quick-reorder cards (emoji, item name, stall + price)
- Bottom nav (white, border-top): Home · Orders · Alerts · Profile icons + labels

---

### 3. Store (store.html) — Mobile 375×812

**Purpose:** Student browses a stall's menu and adds items to cart.

**Layers:**
- Top nav bar (navy): ← back, APU Eats logo, language switcher, cart
- Store banner (160px): navy gradient bg, large stall emoji centred, ← back button overlay (top-left circle)
- Store info strip (white): stall name (bold), rating ⭐ / time ⏱ / queue 👥 / Open badge
- Category pills row
- Menu list: each item row = 80×80 gradient emoji box + name + description + price + "+ Add" button
- Sticky cart bar (navy, fixed bottom): item count badge + "View Cart" label + total amount + "→"
- Customise bottom sheet (overlaid modal): item emoji, name, description; Sugar Level chips (Normal/Less/No Sugar); Add-Ons checkboxes; Remove Ingredient checkboxes; qty stepper; "Add to Cart · RM X.XX" button

---

### 4. Cart (cart.html) — Mobile 375×812

**Purpose:** 3-step checkout: review cart → order summary → payment.

**Layers:**
- Top nav (navy): ← back, APU Eats logo, language switcher
- Step indicator strip (white, border-bottom): 🛒 Cart · 📋 Summary · 💳 Payment (active = navy underline, done = green)
- **Step 1 — Cart:**
  - Cart item rows: 64×64 emoji box, item name, customisation note, price, qty stepper (−/+)
  - Order summary card: Subtotal, Service Fee RM 0.50, Total (bold)
  - Fixed bottom bar: "Proceed to Summary →" button
- **Step 2 — Summary:**
  - Order items review list
  - Collection details card: dropdown (Self Pickup / Delivery / Dine In), special instructions input
  - Pricing card
  - Fixed bottom bar: "Proceed to Payment →"
- **Step 3 — Payment:**
  - 4 payment option rows (radio): 📱 Touch 'n Go · 💳 Card · 🏦 FPX · 💵 Cash
  - QR mock card (visible for Touch 'n Go): light gradient square, amount, "APU CAFETERIA SDN BHD"
  - Fixed bottom bar: "💳 Pay Now"
- **Success screen** (full-screen centred): ✅ icon, "Order Placed!", track order + home buttons

---

### 5. Track Order (tracking.html) — Mobile 375×812

**Purpose:** Student tracks order status and queue position in real time.

**Layers:**
- Top nav (navy): ← back, APU Eats logo, Orders nav link active, language switcher
- Status card (navy gradient): order ID + stall name, status emoji + label (e.g. "🍳 Preparing Your Order…"), sub-label, ETA pill (semi-transparent white, "⏱ ~8 minutes remaining")
- Stepper card (white): "Order Progress" title; 3-step vertical stepper:
  - Each step: numbered circle (done=green ✓, active=navy pulsing, pending=grey) + vertical connector line + step title + subtitle + timestamp
- Queue ticket card: ticket number (large, bold navy), "Now serving: XX" label
- Live queue panel: navy header "Queue — Uncle Lim's" + "● Live" blink; rows showing queue numbers with Serving/Waiting/Queued badges; user's row highlighted in light blue
- Order details card: item list with prices, divider, Total Paid
- "← Back to Home" outline button
- Bottom nav: Home · Orders (active) · Alerts · Profile

---

### 6. Admin Dashboard (admin.html) — Desktop 1440×900

**Purpose:** Platform admin monitors system-wide stats, manages vendors/users/orders.

**Layout:** Fixed left sidebar (240px) + main content area (fills remainder)

**Sidebar:**
- "APU Eats / Admin Panel" logo
- Nav items: Dashboard · Vendor Management · User Management · Order Monitoring · Reports · Logout (at bottom)
- Active item: navy background highlight

**Main content — Dashboard view (default):**
- Top header bar: hamburger icon, page title "Dashboard Overview", date, language switcher, "👤 Admin"
- 6 KPI stat cards (3×2 grid): Registered Users · Active Stalls · Orders Today · Revenue Today · Avg Wait Time · Platform Rating
- Two-col section:
  - Left: "Orders by Category" donut chart (navy/gold/green/red segments) + legend
  - Right: "Recent Activity" feed (icon + description + timestamp rows)
- "System Health" card: Uptime · Avg Response · Active Errors · CPU Usage stats

**Other sections (same layout, content changes):**
- **Vendor Management:** table — Stall / Type / Location / Status badge / Rating / Actions (Approve/Suspend/Reactivate)
- **User Management:** search input + table — Name / Email / Role / Joined / Status / Actions (View/Suspend)
- **Order Monitoring:** live orders table — Order ID / Customer / Stall / Items / Total / Status badge / Time
- **Reports:** 3 monthly KPI cards + export buttons (CSV/PDF)

---

### 7. Vendor Dashboard (vendor.html) — Desktop 1440×900

**Purpose:** Food stall owner manages incoming orders, menu, and reviews sales.

**Layout:** Fixed left sidebar (240px) + main content area

**Sidebar:**
- "APU Eats / Vendor Panel" logo
- Nav items: Orders (with red badge count) · Menu Management · Sales Analytics · Settings · Logout

**Main content — Orders view (default):**
- Top header: hamburger, "Order Management" title + "Uncle Lim's · Today", language switcher, "● Open" green badge
- Stall status bar: stall name/location + on/off toggle switch
- 4 quick stat cards: New Orders · Preparing · Completed · Revenue Today
- Kanban board (3 equal columns):
  - 🆕 New Orders (amber header): order cards with customer, items, total, Accept/Reject buttons
  - 🍳 Preparing (navy header): order cards with "Mark Ready ✓" button
  - ✅ Ready (green header): order cards with "Collected ✓" button

**Other sections:**
- **Menu Management:** list of menu items — emoji · name · price/category · availability toggle switch
- **Sales Analytics:** 3 stat cards + weekly bar chart + top-selling items list
- **Settings:** stall info form (name, location, hours, prep time) + Save button

---

## Implementation Plan

1. Call `get_editor_state(include_schema: true)` to get the current .pen file schema
2. Call `batch_design` with all 7 frames described above in a single request
3. Call `get_screenshot` on each frame to verify the output
4. Adjust any frames that need tweaking

---

## Success Criteria

- All 7 frames present in the .pen file
- Student frames at 375×812, staff frames at 1440×900
- Color scheme matches: navy primary, gold accent, white surface
- Each screen contains the key components described above
- Designs are visually clean and readable
