FROM node:25.2-bookworm


WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY docker-entrypoint.sh .
RUN chmod +x docker-entrypoint.sh

COPY docs ./docs

COPY gulpfile.js .
COPY tsconfig.json .
COPY tslint.json .

COPY .eslintrc.js .
COPY .eslintrc.prepublish.js .

COPY index.js .
COPY nodes ./nodes
COPY credentials ./credentials

VOLUME [ "/app/dist" ]

ENTRYPOINT ["/app/docker-entrypoint.sh"]
