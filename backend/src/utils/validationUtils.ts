import { Request, Response } from 'express';
import * as Yup from 'yup';
import { setLocale } from 'yup';

setLocale({
  mixed: {
    default: 'Não é válido',
  },
  date: {
    max: 'Data não pode ser maior que a data atual'
  }
});



export async function validaEmpresaId(req: Request, res: Response) {

  const data = {
    requestEmpresaId: req.body.empresaId,
  };

  const schema = Yup.object().shape({
    requestEmpresaId: Yup.number().integer().positive().required('empresaId é um número obrigatório')
  });

  const valido = await schema.validate(data).catch(e => {
    return e;
  });
  return valido;
}

/* 
Esta função retorna o objeto schema ou false
*/
export async function validaLogin(req: Request, res: Response) {
  const data = {
    requestNomeEmpresa: req.body.nomeEmpresa,
    requestCnpj: req.body.cnpj,
  };

  const schema = Yup.object().shape({
    requestNomeEmpresa: Yup.string().required('requestNomeEmpresa é um campo obrigatório'),
    requestCnpj: Yup.number().required('requestCnpj é um campo obrigatório')
  });

  //abortEarly false para retornar todos os campos inválidos, e não apenas o primeiro
  const valido = await schema.validate(data, { abortEarly: false })
    .catch(e => { return e; });
  return valido;
}

export async function validaRequestExtrato(req: Request, res: Response) {

  const currentDate = new Date();

  const schema = Yup.object().shape({
    empresaId: Yup.number()
      .integer()
      .positive()
      .required('empresaId é um número obrigatório'),
    dataInicio: Yup.date()
      .max(Yup.ref('dataFim'), 'dataInicio não pode ser maior que dataFim'),
    dataFim: Yup.date()
      .max(currentDate, 'dataFim não pode ser maior que data atual'),
    flagCartao: Yup.string()
      .matches(/^(CREDITO|DEBITO|AMBOS)$/, 'flagCartao deve ser CREDITO, DEBITO ou AMBOS')
  });

  const data = {
    empresaId: req.body.empresaId,
    dataInicio: req.body.dataInicio,
    dataFim: req.body.dataFim,
    flagCartao: req.body.flagCartao,
  };

  //Se datas estiverem válidas, faz um casting da string para Date;
  data.dataInicio = Yup.date().cast(data.dataInicio);
  data.dataFim = Yup.date().cast(data.dataFim);

  // check validity
  const valido = await schema.validate(data, { abortEarly: false })
    .catch(e => { return e; });
  return valido;
}