FROM jenkins/agent:alpine


USER root
# Install nodejs 20 and other dependencies
RUN apk update && \
    apk add --no-cache nodejs npm curl

# Verify installation
RUN node --version && npm --version

VOLUME ["/home/jenkins/"]

USER jenkins

