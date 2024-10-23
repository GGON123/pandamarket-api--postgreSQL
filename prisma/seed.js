import { PrismaClient } from "@prisma/client";
import {
  USERS,
  PRODUCTS,
  ARTICLES,
  ARTICLE_COMMENTS,
  PRODUCT_COMMENTS
} from "./mock.js";

const prisma = new PrismaClient();

async function main() {
  // 기존 데이터 삭제
  await prisma.user.deleteMany();
  await prisma.product.deleteMany();
  await prisma.article.deleteMany();
  await prisma.articleComment.deleteMany();
  await prisma.productComment.deleteMany();

  // 사용자 데이터 생성
  const users = await Promise.all(
    USERS.map(async (user) => {
      return await prisma.user.create({ data: user });
    })
  );

  // 제품 데이터 생성
  const createdProducts = await prisma.product.createMany({
    data: PRODUCTS.map((product, index) => ({
      ...product,
      userId: users[index % users.length].id // 사용자 ID를 순환하여 할당
    })),
    skipDuplicates: true
  });

  // 생성된 제품 ID를 가져옵니다.
  const products = await prisma.product.findMany();

  // 기사 데이터 생성
  const createdArticles = await prisma.article.createMany({
    data: ARTICLES.map((article, index) => ({
      ...article,
      userId: users[index % users.length].id // 사용자 ID를 순환하여 할당
    })),
    skipDuplicates: true
  });

  // 생성된 기사 ID를 가져옵니다.
  const articles = await prisma.article.findMany();

  // 댓글 데이터 생성
  await prisma.articleComment.createMany({
    data: ARTICLE_COMMENTS.map((comment, index) => ({
      ...comment,
      userId: users[index % users.length].id, // 사용자 ID를 순환하여 할당
      articleId: articles[index % articles.length].id // 기사 ID를 순환하여 할당
    })),
    skipDuplicates: true
  });

  await prisma.productComment.createMany({
    data: PRODUCT_COMMENTS.map((comment, index) => ({
      ...comment,
      userId: users[index % users.length].id, // 사용자 ID를 순환하여 할당
      productId: products[index % products.length].id // 제품 ID를 순환하여 할당
    })),
    skipDuplicates: true
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
