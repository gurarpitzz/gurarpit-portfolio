# Deployment Guide: Gurarpit Portfolio

This project is optimized for deployment on **Vercel**.

## Prerequisites
- A GitHub account.
- Vercel CLI installed (optional, but recommended).

## Deployment Steps

1.  **Push to GitHub**:
    Ensure all your changes are committed and pushed to a GitHub repository.

2.  **Import to Vercel**:
    - Go to [vercel.com/new](https://vercel.com/new).
    - Select your `gurarpit-portfolio` repository.

3.  **Configuring Settings**:
    - **Framework Preset**: Next.js
    - **Root Directory**: `./`
    - **Build Command**: `npm run build`
    - **Output Directory**: `.next`

4.  **Environment Variables**:
    Currently, the project does not require specific environment variables for the core build. However, if you add a contact form backend or analytics, add them in the "Environment Variables" section.

5.  **Deploy**:
    Click "Deploy". Vercel will automatically build and publish your site.

## Post-Deployment Checklist
- [ ] Verify the "System Architecture Highlight" animations are smooth.
- [ ] Test the dynamic project routes (e.g., `/projects/vibrobraille`).
- [ ] Run a Lighthouse scan on the live URL to ensure 90+ performance.
