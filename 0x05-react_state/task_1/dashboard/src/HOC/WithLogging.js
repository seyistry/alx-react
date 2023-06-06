import React from 'react';

function WithLogging() {
  React.useEffect(() => {
    console.log('Component NAME_OF_THE_WRAPPED_COMPONENT is mounted');
    return () => {
      console.log(
        'Component NAME_OF_THE_WRAPPED_COMPONENT is going to unmount'
      );
    };
  });

  return <div>WithLogging</div>;
}

export default WithLogging;
