import React from 'react';

type SpanProps = {
  text: string;
};
const ErrorSpan = (props: SpanProps) => {
  return <span className="error-text">{props.text}</span>;
};

export default ErrorSpan;
