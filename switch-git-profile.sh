#!/bin/bash

# Function to display current Git config
show_current_config() {
    echo "Current Git Configuration:"
    echo "------------------------"
    git config user.name
    git config user.email
    echo "------------------------"
}

# Function to switch to ARYZE profile
switch_to_aryze() {
    git config user.name "Jodi Usama Husain"
    git config user.email "devops@aryze.io"
    echo "Switched to ARYZE profile"
    show_current_config
}

# Function to switch to personal profile
switch_to_personal() {
    read -p "Enter your personal Git username: " username
    read -p "Enter your personal Git email: " email
    git config user.name "$username"
    git config user.email "$email"
    echo "Switched to personal profile"
    show_current_config
}

# Main menu
echo "Git Profile Switcher"
echo "1) Switch to ARYZE profile"
echo "2) Switch to personal profile"
echo "3) Show current configuration"
echo "4) Exit"

read -p "Choose an option (1-4): " choice

case $choice in
    1) switch_to_aryze ;;
    2) switch_to_personal ;;
    3) show_current_config ;;
    4) exit 0 ;;
    *) echo "Invalid option" ;;
esac
