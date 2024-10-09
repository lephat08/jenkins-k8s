FROM jenkins/inbound-agent:alpine

# Install dependencies
USER root
RUN apk add --no-cache curl

# Install Node.js 22 from NodeSource
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apk add --no-cache nodejs

# Verify installation
RUN node -v && npm -v

VOLUME ["/home/jenkins/"]

USER jenkins

