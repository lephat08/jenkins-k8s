FROM jenkinsci/jnlp-slave

USER root

RUN apt-get update && \
    apt-get install -y sudo git && \
    echo "jenkins ALL=NOPASSWD: /usr/bin/docker" >> /etc/sudoers

RUN curl -sL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g typescript yarn && \
    chown -R jenkins:jenkins /home/jenkins/.config && \
    chown -R jenkins:jenkins /home/jenkins/.npm

USER jenkins

RUN mkdir -p /home/jenkins/script

ENV PATH="/home/jenkins/script:$PATH"

COPY script/docker.sh /home/jenkins/script/docker