FROM rust

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update -y && \
    apt-get install -y apache2

RUN cargo install wasm-pack

RUN cd /opt && cargo new --lib wasm-test

COPY rust/lib.rs /opt/wasm-test/src/lib.rs
COPY rust/Cargo.toml /opt/wasm-test/Cargo.toml

RUN cd /opt/wasm-test && wasm-pack build --target web

RUN cp -r /opt/wasm-test/pkg /var/www/html/
COPY www_public/index.html /var/www/html/index.html
COPY www_public/fibonnacci.js /var/www/html/
COPY www_public/lib.js /var/www/html/

COPY entrypoint.sh /
RUN chmod +x entrypoint.sh
ENTRYPOINT ./entrypoint.sh && clear && bash
