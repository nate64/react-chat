source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.0'

gem 'rails', '~> 5.2.1'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 3.11'
gem 'redis', '~> 4.0'
gem 'message_bus'
gem 'omniauth'
gem 'devise'
gem 'devise_token_auth'
gem 'bootsnap', '>= 1.1.0', require: false

# gem 'jbuilder', '~> 2.5'
# gem 'bcrypt', '~> 3.1.7'
# gem 'mini_magick', '~> 4.8'
# gem 'capistrano-rails', group: :development
# gem 'rack-cors'

group :development, :test do
gem 'pry'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
