FROM jenkins/inbound-agent:alpine


USER root
# Update package list
RUN apk update

# Install Node.js 22
RUN apk add --no-cache nodejs=22.0.0-r0 npm=22.0.0-r0

# Verify installation
RUN node -v && npm -v

VOLUME ["/home/jenkins/"]

USER jenkins

