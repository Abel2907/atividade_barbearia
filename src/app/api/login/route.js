import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { email, senha } = await request.json();

    if (!email || !senha) {
      return Response.json({ mensagem: "Campos obrigatórios" }, { status: 400 });
    }

    const cliente = await prisma.cliente.findUnique({ where: { email } });

    if (!cliente || !(await bcrypt.compare(senha, cliente.senha))) {
      return Response.json({ mensagem: "Credenciais inválidas" }, { status: 401 });
    }

    const token = jwt.sign(
      { id: cliente.id, email: cliente.email },
      process.env.JWT_SECRET,
      { expiresIn: "3h" }
    );

    const { senha: _, ...cliente_sem_senha } = cliente;

    return new Response(
      JSON.stringify({ mensagem: "Login bem-sucedido!", cliente: cliente_sem_senha }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": `token=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=604800`,
        },
      }
    );

  } catch (error) {
    console.error(error);
    return Response.json({ mensagem: "Erro no servidor" }, { status: 500 });
  }
}