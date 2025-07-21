#!/bin/bash

set -e

echo "🔧 Setting up project structure..."

# Navigate to project root
PROJECT_ROOT=$(pwd)

# Step into backend folder
cd "$PROJECT_ROOT/backend" || { echo "❌ backend folder not found!"; exit 1; }

# Create missing folders
mkdir -p middlewares config

# Rename db to utils if it exists and looks like a helper folder
if [ -d "db" ]; then
  echo "📁 Renaming backend/db → backend/utils"
  mv db utils
fi

# Go back to project root
cd "$PROJECT_ROOT"

# Create .dockerignore
DOCKERIGNORE=".dockerignore"
if [ ! -f "$DOCKERIGNORE" ]; then
  echo "📄 Creating .dockerignore"
  cat <<EOL > $DOCKERIGNORE
# Node dependencies
node_modules
backend/node_modules

# dotenv files
.env
*.env

# Logs
*.log
logs/

# Test coverage
coverage/

# OS metadata
.DS_Store
EOL
else
  echo "✅ .dockerignore already exists"
fi

# Warn about node_modules in project root
if [ -d "node_modules" ]; then
  echo "⚠️  Warning: node_modules/ exists in project root. Consider removing if unused:"
  echo "    rm -rf node_modules"
fi

echo "✅ Folder structure and .dockerignore setup complete!"
