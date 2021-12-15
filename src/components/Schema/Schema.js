import * as yup from "yup";

export const schema = yup.object().shape({
  password: yup.string().required(),
  email: yup.string().email().required(),
});

export const complainschema = yup.object().shape({
  username:yup.string().required(),
  description: yup.string().required(),
  complaint_rating:yup.number().typeError('Amount must be a number')
      .required("Please provide rate cost.")
      .min(1, "Too little")
      .max(10, 'To long!'),
  room_id:yup.number().typeError('You have to choose room first')
      .required("Please provide rate cost.")
});
