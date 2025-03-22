module.exports = {
    apps: [
      {
        name: "react-app",
        script: "serve",
        args: "-s build -l 3001",
        env: {
          PORT: 3001, // Legge la porta direttamente qui
          NODE_ENV: "production"
        }
      }
    ]
  };
  