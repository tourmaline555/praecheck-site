# Praecheck website — Windows + GitHub Pages

This package is ready for a separate PUBLIC GitHub repository such as `praecheck-site`. Keep the Android app source repository private.

## Before uploading: edit one file
Open `site-config.js` in Notepad and replace:
- `REPLACE-WITH-YOUR-EMAIL`
- `REPLACE-WITH-YOUR-REGISTERED-OFFICE`
- `REPLACE-WITH-COMPANY-NUMBER`

Leave `checkoutUrl` blank until Paddle provides/approves your live checkout URL. The Buy button will activate automatically once a full URL is entered.

## Upload from Windows
1. Sign in to github.com.
2. Create a new PUBLIC repository named `praecheck-site`.
3. Open the repository -> Add file -> Upload files.
4. Drag ALL files from this folder into GitHub.
5. Commit to `main`.
6. Repository Settings -> Pages.
7. Build and deployment -> Deploy from a branch.
8. Branch `main`, folder `/ (root)`, Save.

## Connect the IONOS domain
1. In GitHub Settings -> Pages, enter your custom domain (using `www.yourdomain...` is usually simplest).
2. GitHub will show the DNS record it expects.
3. In IONOS -> Domains & SSL -> your domain -> DNS, add the exact record GitHub requests.
4. Wait for DNS verification, then enable `Enforce HTTPS` in GitHub Pages.

## Paddle readiness
Before submitting the domain to Paddle, confirm:
- product description is live
- £14.99 one-time price is shown
- Privacy, Terms, Refunds and Contact pages work
- no REPLACE-WITH placeholders remain
- HTTPS works

The site uses no external fonts, images, analytics or adtech.

The legal pages are practical templates and should be reviewed before taking live payments.
