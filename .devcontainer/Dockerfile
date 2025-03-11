# Use the official Node.js image.
FROM node:18

# Set the working directory in the container.
WORKDIR /workspace

# Install Angular CLI globally.
RUN npm install -g @angular/cli@18

# Install Zsh and Oh My Zsh.
RUN apt-get update && \
    apt-get install -y zsh && \
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended && \
    chsh -s $(which zsh)

# Set the Oh My Zsh theme to "xiong-chiamiov-plus".
RUN sed -i 's/ZSH_THEME=".*"/ZSH_THEME="xiong-chiamiov-plus"/' ~/.zshrc

# Copy the rest of the application code.
COPY . .

# Expose port 4200 for the Angular dev server.
EXPOSE 4200
