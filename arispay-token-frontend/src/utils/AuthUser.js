class AuthUserHelper {
  getUserWalletAddress() {
    const walletAddress = localStorage.getItem("wallet_address");
    return walletAddress ? walletAddress : "";
  }

  getProvider() {
    const signer = localStorage.getItem("signer");
    return signer || [];
  }
}

export const AuthUser = new AuthUserHelper();
