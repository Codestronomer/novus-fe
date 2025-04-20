import { createAuthenticationAdapter } from "@rainbow-me/rainbowkit";
import { SiweMessage } from "siwe";
import { publicClient } from "./wagmi";
import { toast } from "sonner";
import axios from "axios";

const TEST_NONCE = "biHDQbBgib9rl8zWM";
const DOMAIN = "localhost:3001";

export const authenticationAdapter = createAuthenticationAdapter({
  getNonce: async () => {
    // const response = await fetch("/api/nonce");
    const nonce = await publicClient.getTransactionCount({
      address: "0x8816fa30064cef7e532e6597c0f4b0adaacf0401",
    });
    console.log(nonce);
    // return await response.text();
    return nonce.toString();
  },

  createMessage: ({ nonce, address, chainId }) => {
    console.log(nonce);
    const message = new SiweMessage({
      nonce: TEST_NONCE,
      domain: DOMAIN,
      address,
      statement: "Sign in with Ethereum to Novus Academy.",
      uri: DOMAIN,
      version: "1",
      chainId: chainId,
    });
    return message.prepareMessage();
  },

  verify: async ({ message, signature }) => {
    console.log(message);
    console.log(signature);

    // const verifyRes = await fetch("/api/verify", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ message, signature }),
    // });
    const [isValid, msg] = await InternalVerification({ message, signature });
    if (isValid && msg === "Successfully joined waitlist") {
      toast.dismiss();
      toast.success(msg);
    } else {
      toast.dismiss();
      toast.error(msg);
    }

    return isValid;
  },
  signOut: async () => {
    await fetch("/api/logout");
  },
});

const InternalVerification = async ({
  message,
  signature,
}: {
  message: string;
  signature: string;
}): Promise<[boolean, string]> => {
  const siweMessage = new SiweMessage(message);

  // Verify the signature
  try {
    const fields = await siweMessage.verify({
      signature,
      domain: DOMAIN,
      nonce: TEST_NONCE,
    });
    console.log("me", fields.data);
    if (fields.success) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const res = await axios.post("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          user_id: fields.data.address,
          connection_type: "wallet",
        },
      });

      return [true, "Successfully joined waitlist"];
    } else {
      return [false, ""];
    }
  } catch (error) {
    console.log(error);

    if (axios.isAxiosError(error) && error.response) {
      return [true, error.response.data.error];
    } else {
      return [false, "An error occured while joining waitlist"];
    }
  }
};
