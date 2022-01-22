import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string("E-mail-inválido.").email("E-mail-inválido.").required("Preencha o campo Email."),
  password: yup.string().min(4, "Campo Senha precisa ter entre 4 e 12 caracteres.")
                        .max(12, "Campo Senha precisa ter entre 4 e 12 caracteres.")
})

