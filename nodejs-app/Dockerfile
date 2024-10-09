# Base image for Jenkins agent
FROM jenkins/inbound-agent:latest

# Set environment variables for Jenkins agent
ENV JENKINS_AGENT_HOME /home/jenkins

# Install Node.js, npm, and Podman
USER root

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y nodejs zip git && \
    apt-get install -y software-properties-common \
    apt-get clean

VOLUME ["/home/jenkins/"]
# Change back to Jenkins user
USER jenkins
