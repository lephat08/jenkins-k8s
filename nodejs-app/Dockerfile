FROM jenkins/agent:alpine

# Install nodejs 20 and other dependencies
RUN apk update && \
    apk add --no-cache nodejs npm curl

# Verify installation
RUN node --version && npm --version

VOLUME ["/home/jenkins/"]

USER jenkins

