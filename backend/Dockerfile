FROM node:18

WORKDIR /app


COPY package*.json ./
RUN npm install

COPY . .


EXPOSE 3000


CMD ["sh", "-c", "node utils/bootstrap.js && node index.js"]
