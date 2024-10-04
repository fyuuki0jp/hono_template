-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "user_name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);
