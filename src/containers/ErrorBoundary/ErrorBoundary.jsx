// @flow
import React, { Component } from "react";
import Styled from "styled-components";
import * as Sentry from "@sentry/browser";

class ErrorBoundary extends Component {
  state = {
    hasError: null,
    eventId: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  render() {
    const { children } = this.props;
    const { hasError, eventId } = this.state;
    return hasError ? (
      <ErrorWrapper>
        <button
          type="button"
          onClick={() =>
            Sentry.showReportDialog({ eventId })
          }
        >
          Report feedback
        </button>
      </ErrorWrapper>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;

const ErrorWrapper = Styled.div`
    color: red
`;
