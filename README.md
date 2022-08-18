# Speedrail (Rails 7 template)
boilerplate Rails repo by [@ryanckulp](https://twitter.com/ryanckulp), created to accelerate side project development.

features include:
* user authentication via [Devise](https://github.com/plataformatec/devise)
* design via [Tailwind UI](https://tailwindui.com/)
* user billing management via [Stripe Checkout](https://stripe.com/payments/checkout) portal
* safely manage ENV variables with [Figaro](https://github.com/laserlemon/figaro)
* responsive toggle navbar w/ logic for login, signup, settings
* SEO toolbelt via [metamagic](https://github.com/lassebunk/metamagic)
* rename your app in 1 command with [Rename](https://github.com/get/Rename)
* increased debugging power with [Better Errors](https://github.com/charliesome/better_errors)
* seed your DB in seconds via [Seed Dump](https://github.com/rroblak/seed_dump)
* production-ready DB via Postgres
* easy API requests with [HTTParty](https://github.com/jnunemaker/httparty)
* Postmark for transactional emails, [letter_opener](https://github.com/ryanb/letter_opener) for local dev mailers
* script tag partial (Google Analytics, etc)
* testing suite via [RSpec](https://github.com/rspec/rspec-rails/)
* cron job task scheduler (`lib/tasks/scheduler.rake`)
* random data generation with [Faker](https://github.com/faker-ruby/faker)
* Heroku <> Cloudflare HTTPS via `lib/cloudflare_proxy.rb`
* background job queue via [Delayed](https://rubygems.org/gems/delayed)
* full billing CRUD via [Stripe Checkout](https://stripe.com/checkout)

## Installation
1. clone the repo
2. `cd speedrail && bundle`
3. `rails g rename:into new_app_name` (then `cd` back into new directory)
4. `rails db:setup && rails db:migrate` (optional) to create db and Users table
5. `bundle exec figaro install`
6. `cp config/application-sample.yml config/application.yml`

## Development
```sh
bin/dev # uses foreman to boot server, frontend, and bg job queue
```

**troubleshooting**
`Turbo Drive` lazy-loads pages following form submission, causing script tags at the bottom of following views to not always load.

```html
<!-- add data-turbo=false to form submission buttons if the following view needs a full render -->
<button data-turbo="false" type="submit" ...>Submit</button>
```

## Testing
```
bundle exec rspec # run all tests inside spec/
bundle exec rspec spec/dir_name # run all tests inside given directory
```

## Deploying
```sh
figaro heroku:set -e production # you only need to do this once
heroku git:remote -a heroku_app_name_here # you only need to do this once
```

```sh
git push heroku master # deploys master branch
git push heroku some_branch_name:master # deploys non-master branch
```

**note**: Heroku must have 2 'dynos' enabled, `web` + `worker`, to process background jobs. if you don't need a queue, simply remove the `worker` task from `Procfile` and don't invoke `.delayed` functions.

## Miscellaneous
to use Postmark for emails, set `postmark_api_token` inside `application.yml`, then [verify your sending domain](https://account.postmarkapp.com/signature_domains/initialize_verification).
