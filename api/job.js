export default function handler(req, res) {
  // GET 쿼리 파라미터로 입력 받기 (ACP가 쿼리 방식으로 보냄)
  const { contractAddress, chain = 'Base' } = req.query;

  if (!contractAddress) {
    return res.status(400).json({ error: "Missing contractAddress" });
  }

  // 임시 결과 (실제 분석 로직은 나중에 추가)
  const result = {
    riskScore: 42,
    honeypotDetected: false,
    liquidityStatus: "Medium - Partially locked",
    sentimentSummary: "Mixed on X, some hype but dev concerns",
    recommendation: "Hold"
  };

  res.status(200).json(result);
}
