files name
file inside

-- filename
what is inside of the file

-- install_docker.sh
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
sudo apt update
sudo apt install docker-ce -y
sudo usermod -aG docker ${USER}

-- DOCKERFILE
FROM ubuntu/ubuntu:18.04
apt update
apt install git -y
apt install npm -y
apt install node.js -y
cd ~
git clone https://github.com/healthhackersER/CAMA-CORE-Example.git
cd CAMA-CORE-Example
npm install
npm run web

-- build_dockerfile.sh
sudo docker build -t healthhacker .

#/docker_dir/CAMA ---> /ANY_WORKDIR/ of CAMA-CORE existing dir
#before running, please end the local expo client
-- run_testenv.sh
sudo docker run -ti -p 19001:19001 -p 19002:19002 -p 19003:19003 -v  /docker_dir/CAMA/:/home/ --name healthhacker healthhacker /bin/bash



