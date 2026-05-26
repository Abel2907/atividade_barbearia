js
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { nome, email, senha, cpf } = await request.json();

    if (!nome || !email || !senha || !cpf) {
      return Response.json({ mensagem: "Campos obrigatórios" }, { status: 400 });
    }

    const emailExiste = await prisma.cliente.findUnique({ where: { email } });
    if (emailExiste) {
      return Response.json({ mensagem: "Email já cadastrado" }, { status: 409 });
    }

    const cpfExiste = await prisma.cliente.findUnique({ where: { cpf } });
    if (cpfExiste) {
      return Response.json({ mensagem: "CPF já cadastrado" }, { status: 409 });
    }

    const senha_criptografada = await bcrypt.hash(senha, 10);

    const cliente = await prisma.cliente.create({
      data: { nome, email, senha: senha_criptografada, cpf },
    });

    const token = jwt.sign(
      { id: cliente.id, email: cliente.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const { senha: _, ...cliente_sem_senha } = cliente;

    return new Response(
      JSON.stringify({ mensagem: "Cadastro realizado!", cliente: cliente_sem_senha }),
      {
        status: 201,
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
