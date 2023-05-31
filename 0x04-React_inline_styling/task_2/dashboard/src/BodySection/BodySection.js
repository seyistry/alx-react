import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function BodySection(props) {
  return (
    <div className={css(styles.bodySection)}>
      <h2 style={{ margin: '0px' }}>{props.title}</h2>
      {props.children}
    </div>
  );
}

const styles = StyleSheet.create({
  bodySection: {
    padding: '20px 0 0 40px',
  },
});

export default BodySection;
