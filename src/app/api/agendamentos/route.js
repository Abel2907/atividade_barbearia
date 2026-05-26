import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

function pegar_user_token(request) {
  const cookie = request.headers.get("cookie") ?? "";
  const token = cookie.split(";").find(c => c.trim().startsWith("token="))?.split("=")[1];

  if (!token) return null;

  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return null;
  }
}

export async function POST(request) {
  try {
    // Ta loggado betinha?
    const usuario = pegar_user_token(request);

    if (!usuario) {
      return Response.json(
        { mensagem: "Não autorizado", redirecionar: "/login" },
        { status: 401 }
      );
    }

    const { servico, barbeiro, data_hora } = await request.json();

    if (!servico || !barbeiro || !data_hora) {
      return Response.json({ mensagem: "Campos obrigatórios" }, { status: 400 });
    }

    const agendamento = await prisma.schedule.create({
      data: {
        servico,
        barbeiro,
        data_hora: new Date(data_hora),
        userId: usuario.id,
      },
    });

    return Response.json({ mensagem: "Agendamento concluido", agendamento }, { status: 201 });

  } catch (error) {
    console.error(error);
    return Response.json({ mensagem: "Erro no servidor" }, { status: 500 });
  }
}