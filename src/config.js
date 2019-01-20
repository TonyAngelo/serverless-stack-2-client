const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-ui55qs8ffier"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://k3e23934uj.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_rGg68hTZ9",
    APP_CLIENT_ID: "5f265s6lgem4dl0vljioaaf5lp",
    IDENTITY_POOL_ID: "us-east-1:6e2e581e-d66d-4f7a-a163-8b0cb1d2d275"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-q5rhn2auoe1m"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://i9pp97hne8.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_pwIjOVdxJ",
    APP_CLIENT_ID: "2ldflo7svalobtgchdcvlv5e0d",
    IDENTITY_POOL_ID: "us-east-1:ca5dec0c-694b-4ba9-868e-c7ac53610b52"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};