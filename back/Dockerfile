FROM node:lts

#RUN apk add --no-cache --update curl bash
WORKDIR /src

ARG NODE_ENV=development
ARG PORT=3001
ENV PORT=$PORT

COPY package* ./
# Install the npm packages
RUN npm install

COPY . .

### Run the image as a non-root user
#RUN adduser -D myuser
#USER myuser

EXPOSE $PORT

CMD ["npm", "run", "start"]