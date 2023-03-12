# stage1 as builder

FROM node:16-alpine as builder

# copy the package.json to install dependencies

COPY /frontend/package.json /frontend/package-lock.json ./

# Install the dependencies and make the folder

RUN npm install && mkdir /activate-science && mv ./node_modules ./activate-science

WORKDIR /activate-science

COPY /frontend/. .
# Build the project and copy the files

RUN npm run build

COPY /backend/. ./backend/.
# Build the project and copy the files

WORKDIR /activate-science/backend

RUN npm install
RUN ls

From node:18.14.2-alpine3.17

RUN apk update
RUN apk add nginx



#COPY /backend/. /
COPY --from=builder /activate-science/backend /
COPY --from=builder /activate-science/build /var/www/localhost/htdocs/activate-science/20481
COPY /start.sh /
RUN chmod +x /start.sh

COPY default.conf /etc/nginx/http.d/default.conf

ENTRYPOINT ["/bin/sh", "-c", "/start.sh"]
