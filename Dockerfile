FROM node:lts

#RUN apk add --no-cache --update curl bash
WORKDIR /back

ARG PORT=3001
ENV PORT=$PORT

COPY package* ./
# Install the npm packages
RUN npm install

COPY back .

EXPOSE $PORT

CMD ["npm", "start"]