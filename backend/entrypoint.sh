#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /rails/tmp/pids/server.pid

# Run any pending migrations (optional)
# bundle exec rails db:migrate

# Start the server
exec bundle exec rails s -b 0.0.0.0
