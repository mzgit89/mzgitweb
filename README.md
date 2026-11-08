# Mirza — Portfolio

Static multilingual portfolio based on the RyanCV resume template in the parent folder, customized for Mirza Sutrisno. English is the default language; Indonesian and Arabic are available from the language selector. Arabic enables RTL layout.

## Local preview

Open `index.html` directly or run a local static server, for example `python -m http.server 8000` from this directory.

## CI/CD and GitHub Pages

Every push to `main` runs `.github/workflows/pages.yml`, packages the static site, and deploys it to GitHub Pages using the official Pages actions. Configure the repository's Pages source as **GitHub Actions** once in Settings → Pages.

Custom domain is configured via `CNAME`. In Cloudflare DNS, point the apex to GitHub Pages using A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; add AAAA records `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` if desired. Or use `CNAME` for `www` to `mzgit89.github.io` and redirect apex to www. Start with DNS-only (gray cloud) while GitHub verifies the domain; enable Cloudflare proxy after HTTPS is issued if wanted. Set the custom domain to `mirzasutrisno.my.id` in repository Settings → Pages and enforce HTTPS when available.

No GitHub or Cloudflare access token is stored in this repository.
