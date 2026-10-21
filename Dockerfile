FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
WORKDIR /srv
COPY . /srv
EXPOSE 80 3000
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
