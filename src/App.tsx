iimport { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useEffect, useState } from "react";
import { StorageBrowser } from '@aws-amplify/ui-react-storage';

const client = generateClient<Schema>();

function App() {
  const defaultPrefixes = [
    'public/',
    (identityId: string) => `protected/${identityId}/`,
    (identityId: string) => `private/${identityId}/`,
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
