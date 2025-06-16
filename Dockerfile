#Setup environment
FROM node:18-alpine

#create a directory where code will be there
WORKDIR /app

#Copy all the package files
COPY package*.json ./

#Run Command
RUN npm install

#Copy all code to curent directory
COPY . .

#Map with Port
EXPOSE 3000

#Finally Execute
CMD ["npm", "start"]

