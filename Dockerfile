FROM node:16.18.0
COPY ./build ./app
WORKDIR /app
RUN npm install -g serve
# RUN npm run build
CMD ["serve", "-s", ".","-l", "3005"]
# CMD ["npm", "run", "deploy"]
# CMD serve -s . -l 3005