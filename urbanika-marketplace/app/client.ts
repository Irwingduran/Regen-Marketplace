import { createThirdwebClient } from "thirdweb";
const clientId =  process.env.THIRDWEB_SECRET_KEY;

export const client = createThirdwebClient({
  clientId: clientId as string,
});