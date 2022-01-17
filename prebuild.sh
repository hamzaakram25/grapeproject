sudo apt-get update -y
sudo apt install nodejs -y
sudo apt install npm -y
sudo apt install libgconf-2-4 libatk1.0-0 libatk-bridge2.0-0 libgdk-pixbuf2.0-0 libgtk-3-0 libgbm-dev libnss3-dev libxss-dev
code-server --install-extension mgmcdermott.vscode-language-babel
sudo sysctl -w fs.inotify.max_user_watches=80000 && sudo sysctl -p

#initialize npm
npm install
node index.js