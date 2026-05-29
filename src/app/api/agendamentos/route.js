import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

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
    const usuario = pegar_user_token(request);

    if (!usuario) {
      return Response.json({ mensagem: "Não autorizado" }, { status: 401 });
    }

    const { servico, barbeiro, data_hora } = await request.json();

    // Validação básica
    if (!servico || !barbeiro || !data_hora) {
      return Response.json({ mensagem: "Campos obrigatórios" }, { status: 400 });
    }

    const agendamento = await prisma.schedule.create({
      data: {
        servico,
        barbeiro,
        dataHora: new Date(data_hora), // Ajustado para bater com o schema.prisma
        clienteId: usuario.id,         // Ajustado de userId para clienteId
      },
    });

    return Response.json({ mensagem: "Agendamento concluído", agendamento }, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ mensagem: "Erro no servidor" }, { status: 500 });
  }
}