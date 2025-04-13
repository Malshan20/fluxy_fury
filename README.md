
markdown
Copy
Edit
# 🎮 Fluxy_Fury — Official eSports Team Landing Page

Welcome to **Fluxy_Fury**, the official landing page for one of the most explosive and competitive eSports teams in the USA. Whether you're a hardcore fan, potential sponsor, gamer, or just exploring, this site offers a front-row seat to our journey through the elite world of digital warfare. 💥

---

## 🏆 About Fluxy_Fury

**Fluxy_Fury** isn’t just a name — it’s a **legacy in motion**. Built by passion and powered by skill, we’re a tight-knit team blazing through top-tier games like **Valorant**, **CS2**, **Apex Legends**, and more.

Our roster is stacked with clutch-makers and strategic minds that thrive under pressure. From championship wins to community-driven events, our mission is simple: **dominate, inspire, and evolve** in the world of competitive gaming.

---

## 🌐 Live Demo

🚧 **Coming Soon...**  
Stay tuned for the live site where you'll be able to explore our achievements, meet the squad, and connect with us.

---

## 🧪 Tech Stack

| Tech            | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| [Next.js](https://nextjs.org)       | React framework powering a fast, scalable, SEO-optimized experience       |
| [Supabase](https://supabase.com)    | Handles our backend, database, and real-time contact form + achievements |
| [shadcn/ui](https://ui.shadcn.com/) | Modern, customizable UI components with accessibility in mind             |
| [Framer Motion](https://www.framer.com/motion/) | Smooth animations and interactive transitions throughout the site   |

---

## 🎯 Features

- **🔥 Hero Section** – Eye-catching intro with animated branding and call-to-action
- **🏅 Achievements** – Fully dynamic tournament wins, MVP highlights, and milestones (powered by Supabase)
- **🧑‍🤝‍🧑 Team Roster** – Player profiles, roles, and social handles with a slick, clean layout
- **📩 Contact Form** – Smooth and secure submission for sponsors, collabs, or community messages
- **📱 Responsive Design** – Mobile-first layout for flawless experience across devices
- **💫 Animated UI** – Seamless transitions and scroll animations with Framer Motion

---

## ⚙️ Getting Started

### 🛠️ Installation

# Clone the repository
git clone https://github.com/yourusername/fluxy_fury.git

# Navigate to the project directory
cd fluxy_fury

# Install dependencies
npm install

# Run the development server
npm run dev

## 🧩 Supabase Database Setup
## 🏅 Create the achievements Table

CREATE TABLE achievements (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  prize TEXT NOT NULL,
  date TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
## 🌟 Add Sample Data
INSERT INTO achievements (title, description, prize, date, image_url) VALUES
('2024 Fortnite World Cup', 'Champions of the most prestigious Fortnite tournament, defeating 100 teams.', '$3,000,000', 'March 2024', '/images/achievement1.jpg'),
('FNCS Chapter 4', 'Back-to-back champions in the Fortnite Champion Series.', '$1,200,000', 'November 2023', '/images/achievement2.jpg'),
('Dreamhack Open', 'First place in the international Dreamhack tournament.', '$500,000', 'July 2023', '/images/achievement3.jpg'),
('Winter Royale', 'Dominated the Winter Royale tournament with a record-breaking score.', '$800,000', 'December 2023', '/images/achievement1.jpg'),
('Twitch Rivals', 'First place in the Twitch Rivals Fortnite Showdown.', '$250,000', 'February 2024', '/images/achievement2.jpg');

## 🔐 Environment Setup
Create a .env.local file at the root and add your Supabase credentials:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

## 📫 Contact Us
Want to collaborate, sponsor, or just vibe with the team?
Feel free to reach out via the Contact Us section on the site, or hit us up on our socials.
