import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { withSSRContext } from "aws-amplify";
import { tokenValue } from "../../store/user.store";
import { setAuthStorageServer } from "@nitric/amplify-secure-js";
import axios from "axios";
import { setCookie } from "cookies-next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  const { token, id } = req.query;
  setCookie("token", token, { req, res });
  // res.setHeader(
  //   "Set-Cookie",
  //   ("token",
  //   token,
  //   {
  //     path: "/",
  //     sameSite: "lax",
  //   })
  // );
  console.log(token, id);

  axios.defaults.headers.common["Authorization"] = token;
  res.writeHead(308, { Location: `/steam/${id}`, Token: token }).end();
}
