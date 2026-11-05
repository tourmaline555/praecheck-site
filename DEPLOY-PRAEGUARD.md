# Praescius website integration — PraeGuard

Source: `tourmaline555/praecheck-site` ZIP uploaded by the site owner.

## What changed

- Existing homepage `index.html`: added a slim Praescius Products bar, a PraeGuard feature section, product navigation and footer links. Praecheck hero, checkout, download and activation links are retained.
- New `products/index.html`: distinct Praecheck and PraeGuard product identities.
- New `praeguard/index.html`: PraeGuard product landing page with proposed pricing, limitations and a real development app screenshot.
- New `praeguard/support/index.html`, `praeguard/privacy/index.html`, `praeguard/terms/index.html`: product-specific help and policy drafts.
- New stylesheets and image files for these pages.

## URLs after GitHub Pages publication

- https://www.praescius.org.uk/ — existing Praecheck homepage with product switcher
- https://www.praescius.org.uk/products/
- https://www.praescius.org.uk/praeguard/
- https://www.praescius.org.uk/praeguard/support/
- https://www.praescius.org.uk/praeguard/privacy/
- https://www.praescius.org.uk/praeguard/terms/

## Publishing in Termux (recommended branch / PR)

```bash
cd ~
gh repo clone tourmaline555/praecheck-site praescius-site
cd ~/praescius-site
git switch -c praeguard-website
unzip -o ~/storage/downloads/Praescius-Website-Update-Files.zip -d .
git status --short
git add index.html assets/praescius-portfolio.css assets/products.css products/ praeguard/
git commit -m "Add Praescius product navigation and PraeGuard pages"
git push -u origin praeguard-website
```

Open a Pull Request against `main` in GitHub to inspect changes before merging.

If `~/praescius-site` already exists, do not clone a second time: `cd` into it, run `git status` (ensure no unrelated edits), fetch/pull `main`, then create the branch.

## Before public release

- Review and finalise the PraeGuard privacy notice and terms against the exact published APK/AAB and current Google Play / Google OAuth requirements.
- Add an actual Google Play listing URL only after PraeGuard is published. No fake Play purchase link is present.
- Confirm Free/Pro feature availability and price with the Play Console product configuration.
- Keep Praecheck's existing licence and purchase system separate. This patch does not alter its activation or download files.
- Review authorised-use disclosures and recording law considerations for intended jurisdictions.

## No changes to existing Praecheck endpoints

The patch leaves `site-config.js`, `site.js`, `activate/`, `download/`, `reviewer-activation/`, `CNAME`, and existing Praecheck legal pages unchanged.
