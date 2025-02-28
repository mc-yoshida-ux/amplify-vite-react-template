import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useEffect, useState } from "react";
import { StorageBrowser } from '@aws-amplify/ui-react-storage';

const client = generateClient<Schema>();

function App() {
  const defaultPrefixes = [
    'dev-bedrock-s3-us/web',
  ];

  return (
    <Authenticator>
      {({ signOut }) => (
        <StorageBrowser defaultPrefixes={defaultPrefixes} />
      )}
    </Authenticator>
  );
}

export default App;
