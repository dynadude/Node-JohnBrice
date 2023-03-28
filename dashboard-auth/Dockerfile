FROM alpine
WORKDIR /dashboard-auth
USER root
COPY . .
RUN apk add --update --no-cache nodejs npm && npm install
CMD node ./app.js
