FROM node:22-alpine

# Instala dependências nativas necessárias para o Prisma no Alpine
RUN apk add --no-cache openssl libc6-compat

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY prisma ./prisma/

# Variável para o build (pode manter a do passo anterior)
ENV DATABASE_URL="postgresql://admin:senha-barbearia-banco@db:5432/barbearia_db?schema=public"

RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]