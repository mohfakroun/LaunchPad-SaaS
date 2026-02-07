# Ready to deploy SaaS / Landing Page Template

A clean Next.js landing page template designed for founders, startups and agencies who want to ship fast, collect leads and deploy with minimal setup.

Built to be cloned, customised and deployed in minutes.


<img width="1710" height="1187" alt="Screenshot 2026-02-07 at 18 02 29" src="https://github.com/user-attachments/assets/b40f07fd-1068-4c19-b5ec-df9c26792d3f" />





## What this template is for?

This template is ideal if you want to:

- Launch a SaaS or product landing page quickly
- Collect leads via a contact or email capture form
- Run paid ads (Google, Meta, LinkedIn) and send traffic to a high-converting page
- Deploy on Vercel with zero backend setup
- Use a clean, modern UI with subtle motion and strong visual hierarchy


## Tech Stack

- **Next.js 14** – App Router, fast builds, production ready
- **React 18**
- **Tailwind CSS** – utility-first styling
- **Framer Motion** – smooth, modern animations
- **React Icons** – lightweight icon set
- **Class Variance Authority** – scalable component variants
- **Prettier + ESLint** – consistent formatting and linting

No database. No complex backend...Just simple (However future updates will integrate stripe so you will need some basic understanding of how documentations and the applicatio works)


## Forms & Environment Variables

This template uses **Formspree** for email capture / contact forms.

### 1. Create a Formspree form
- Go to https://formspree.io
- Create a new form
- Copy your **Form ID**

### 2. Add environment variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
```

## To run the project

- Clone the repo
- open the repo in your desired IDE(you may need to `cd /..` into the root project
- `npm i`
- `npm run dev`
- open "http://localhost:3000"


## Need help?

If you are stuck at any section or need help integrating your own components, you can contact me on `mohfakroun@gmail.com`


