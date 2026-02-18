export default function handler(req, res) {
  // ACP에서 오는 요청 (contractAddress, chain 등)
  const { contractAddress, chain = 'Base' } = req.body || {};

  // 임시 성공 응답 (당신 Deliverables 형식 맞춤)
  res.status(200).json({
    riskScore: 42,
    honeypotDetected: false,
    liquidityStatus: "Medium - Partially locked",
    sentimentSummary: "Mixed on X, some hype but dev concerns",
    recommendation: "Hold"
  });
}
