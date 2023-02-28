import React, { ErrorInfo, ReactNode } from 'react';
import PageErrorBoundary from 'components/pageErrorBoundary/ui/PageErrorBoundary';

interface ErrorBoundaryPropsType {
  children: ReactNode;
}
interface ErrorBoundaryStateType {
  hasError: boolean;
}
class ErrorBoundary extends React.Component<ErrorBoundaryPropsType, ErrorBoundaryStateType> {
  constructor(props: ErrorBoundaryPropsType) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <PageErrorBoundary></PageErrorBoundary>;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
