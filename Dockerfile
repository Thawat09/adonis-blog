FROM node:22-alpine

# ตั้ง working directory
WORKDIR /usr/src/app

# คัดลอก package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm ci --omit=dev

# คัดลอกไฟล์ .env.example และเปลี่ยนชื่อเป็น .env
COPY .env.example .env

# คัดลอกไฟล์ทั้งหมด
COPY . .

# ติดตั้ง dependencies ที่เหลือ
RUN npm install

# สร้างแอป
RUN npm run build

# เปิดพอร์ตที่ใช้
EXPOSE 3333

# สั่งให้ container รันเซิร์ฟเวอร์
CMD ["node", "ace", "serve"]
