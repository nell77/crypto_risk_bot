export default function handler(req, res) {
  const source = req.method === "POST" ? (req.body || {}) : (req.query || {});
  const contractAddress = source.contractAddress;
  const chain = (source.chain || "base").toLowerCase();

  if (!contractAddress) {
    return res.status(400).json({ ok: false, error: "Missing contractAddress" });
  }

  return res.status(200).json({
    ok: true,
    contractAddress,
    chain,
    riskScore: 42,
    honeypotDetected: false,
    liquidityStatus: "Medium - Partially locked",
    sentimentSummary: "Mixed on X, some hype but dev concerns",
    recommendation: "Hold",
  });
}
