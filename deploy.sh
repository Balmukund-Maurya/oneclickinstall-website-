#!/bin/bash

# OneClickInstall Website Deployment Helper
# This script helps you deploy the website to GitHub Pages

echo "🚀 OneClickInstall Website Deployment Helper"
echo "============================================="
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Please run this script from the oneclick_website directory"
    exit 1
fi

echo "✅ Found website files"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git initialized"
    echo ""
fi

# Add all files
echo "📝 Adding files to git..."
git add .
echo "✅ Files staged"
echo ""

# Commit
echo "💾 Committing changes..."
git commit -m "Add OneClickInstall website" || echo "ℹ️  Nothing to commit (files already committed)"
echo ""

# Ask for GitHub repository URL
echo "🔗 GitHub Repository Setup"
echo "-------------------------"
echo "Please enter your GitHub repository URL:"
echo "Example: https://github.com/Balmukund-Maurya/oneclick-website.git"
read -p "Repository URL: " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ No repository URL provided. Exiting."
    exit 1
fi

# Add remote
echo ""
echo "🔗 Adding GitHub remote..."
git remote remove origin 2>/dev/null  # Remove if exists
git remote add origin "$REPO_URL"
echo "✅ Remote added"
echo ""

# Set branch to main
echo "🌿 Setting branch to main..."
git branch -M main
echo "✅ Branch set"
echo ""

# Push to GitHub
echo "📤 Pushing to GitHub..."
echo "You may be prompted for your GitHub credentials."
echo ""
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 SUCCESS! Website pushed to GitHub"
    echo ""
    echo "📋 Next Steps:"
    echo "1. Go to your GitHub repository"
    echo "2. Click 'Settings' → 'Pages'"
    echo "3. Under 'Source', select branch 'main' and folder '/root'"
    echo "4. Click 'Save'"
    echo "5. Wait a few minutes for deployment"
    echo "6. Your website will be live at:"
    echo "   https://YOUR_USERNAME.github.io/REPO_NAME/"
    echo ""
else
    echo ""
    echo "❌ Error pushing to GitHub"
    echo "Please check your repository URL and credentials"
    exit 1
fi
