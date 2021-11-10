module.exports = [
  {
    url: "/v1/auth/login",
    type: "post",
    response: () => {
      return {
        user: {
          role: "admin",
          isEmailVerified: false,
          isDel: 0,
          email: "test@test.com",
          name: "Jay",
          id: "6185164b533fc7b09f16bee1",
        },
        tokens: {
          access: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTg1MTY0YjUzM2ZjN2IwOWYxNmJlZTEiLCJpYXQiOjE2MzY1NDczMzYsImV4cCI6MTYzNjU0OTEzNiwidHlwZSI6ImFjY2VzcyJ9.Ef4odXAmTJJ7qvNYKgeTsIHcGLMk4oPXCBfoeAVjB_8",
            expires: "2021-11-10T12:58:56.078Z",
          },
          refresh: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTg1MTY0YjUzM2ZjN2IwOWYxNmJlZTEiLCJpYXQiOjE2MzY1NDczMzYsImV4cCI6MTYzOTEzOTMzNiwidHlwZSI6InJlZnJlc2gifQ.dv9Lf6JRI2sDlxscFFzL69rr319-bPI9soZzQ_YNH9c",
            expires: "2021-12-10T12:28:56.078Z",
          },
        },
      };
    },
  },
];
