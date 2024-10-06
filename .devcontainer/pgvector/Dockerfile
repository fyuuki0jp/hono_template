FROM postgres:latest

RUN apt-get update && apt-get install -y git make gcc postgresql-server-dev-16

WORKDIR /tmp
RUN git clone https://github.com/pgvector/pgvector.git

WORKDIR /tmp/pgvector
RUN make
RUN make install