import { createAuthenticationAdapter } from "@rainbow-me/rainbowkit";
import { SiweMessage } from "siwe";

const TEST_NONCE = "4";
const DOMAIN = "http://localhost:3001";

export const authenticationAdapter = createAuthenticationAdapter({
  getNonce: async () => {
    const response = await fetch("/api/nonce");
    console.log(response);
    // return await response.text();
    return TEST_NONCE;
  },

  createMessage: ({ nonce, address, chainId }) => {
    console.log(nonce);
    const message = new SiweMessage({
      domain: DOMAIN,
      address,
      statement: "Sign in with Ethereum to the app.",
      uri: origin,
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
    const isValid = await InternalVerification({ message, signature });

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
}): Promise<boolean> => {
  const siweMessage = new SiweMessage(message);

  // Verify the signature
  try {
    const fields = await siweMessage.verify({
      signature,
      domain: DOMAIN,
      nonce: TEST_NONCE,
    });
    console.log("me", fields);
    if (fields.success) {
      return true;
    } else {
      return true;
    }
  } catch (error) {
    console.log(error);
    return true;
  }
};
