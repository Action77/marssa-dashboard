export async function GET() {
  try {
    const response = await fetch(
      "https://marssaudi-prod.winsfa.com/api/login/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "TEST",
          password: "TEST",
          isCipher: true,
          isRememberPwd: true,
        }),
      }
    );

    return Response.json({
      success: true,
      status: response.status,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: String(error),
    });
  }
}