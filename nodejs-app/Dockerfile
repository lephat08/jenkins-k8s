FROM jenkins/inbound-agent:alpine

# Install dependencies
USER root
RUN apk add --no-cache curl tar gzip

# Set the Node.js version
ENV NODE_VERSION=22.0.0

# Download and install Node.js
RUN curl -fsSL https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz | tar -xz -C /usr/local --strip-components=1

# Verify installation
RUN node -v && npm -v

VOLUME ["/home/jenkins/"]

USER jenkins

