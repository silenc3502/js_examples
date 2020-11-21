# js_examples
It's for JavaScript Examples

# How to setup on Ubuntu 18.04
```make
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

sudo apt install nodejs

node --version

npm --version
```

# How to make React Project
```make
npx create-react-app js_test
```

# How to install VSCode
```make
sudo sh -c 'curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > /etc/apt/trusted.gpg.d/microsoft.gpg'

sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'

sudo apt update

sudo apt install code

code
```
