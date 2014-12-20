source 'https://rubygems.org'
source 'https://rails-assets.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.1'
# Use sqlite3 as the database for Active Record
gem 'sqlite3', group: [:development, :test]
gem 'pg'
gem 'rails_12factor', group: :production # for heroku
# Use SCSS for stylesheets
gem 'sass', '3.2.19'
gem 'sass-rails', '~> 4.0.3'
gem 'zurui-sass-rails'
gem 'compass-rails'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer',  platforms: :ruby
gem 'therubyracer',  platforms: :ruby, group: :production
# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0',          group: :doc

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
gem 'spring',        group: :development
gem "spring-commands-rspec", group: :development
gem "spring-commands-cucumber", group: :development

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]

gem 'handlebars_assets'
gem 'redcarpet'
gem 'bootstrap-sass'


# Rails Asset
gem 'rails-assets-lodash'
gem 'rails-assets-backbone'
gem 'rails-assets-underscore'
gem 'rails-assets-backbone.stickit'
gem 'rails-assets-notifyjs'
gem 'rails-assets-highlightjs'
gem 'rails-assets-chai'
gem 'rails-assets-chai-jquery'
gem 'rails-assets-sinonjs'
gem 'pry-rails'

group :development, :test do
  gem 'rspec-rails'
  gem 'factory_girl_rails'
  gem 'byebug'
  gem "pry-stack_explorer"
  gem 'pry-doc'
  gem 'pry-byebug'
  gem "teaspoon"
end

group :development do
  gem 'coffee-rails-source-maps'
  gem "better_errors"
  gem "binding_of_caller"
  gem 'quiet_assets'
  gem 'annotate', :git => 'git://github.com/ctran/annotate_models.git'
end

gem 'erb2haml'
gem 'haml-rails'
gem 'html2haml'
gem 'awesome_print'
gem 'tapp'

group :test do
  gem 'fuubar'
  gem 'capybara'
  gem 'poltergeist'
end
