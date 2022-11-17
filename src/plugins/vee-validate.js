import { extend } from "vee-validate";
import {
  required,
  numeric,
  email,
  max,
  min,
  ext,
  size,
} from "vee-validate/dist/rules";

function isPhoneNumber(str) {
  const reg = /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{2,4}$/;
  return reg.test(str);
}

extend("required", {
  ...required,
  message: (_, values) => `${values._field_} tidak boleh kosong`,
});

extend("selected", {
  ...required,
  message: (_, values) => `${values._field_} harus dipilih`,
});

extend("phone", {
  validate: (value) => {
    return isPhoneNumber(value);
  },
  message: (_, values) => `${values._field_} harus diisi dengan nomor telepon`,
});

extend("numeric", {
  ...numeric,
  message: (_, values) => `${values._field_} harus diisi angka`,
});

extend("email", {
  ...email,
  message: (_, values) => `${values._field_} harus valid`,
});

extend("max", {
  ...max,
  message: "maksimal {length} karakter",
});

extend("min", {
  ...min,
  message: "minimal {length} karakter",
});

extend("ext", {
  ...ext,
  message: "format file tidak valid",
});

extend("size", {
  ...size,
  message: "ukuran file tidak boleh lebih dari {size} KB",
});
