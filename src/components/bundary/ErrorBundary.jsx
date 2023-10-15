import React from "react";
import "./style.scss";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2 className="error-boundary-content">
            Opp! Some thing went wrong.
          </h2>
          <div className="error-boundary-button">
            {" "}
            <h3
              className="error-boundary-reload"
              onClick={() => window.location.reload()}
            >
              Reload
            </h3>{" "}
            <h3
              className="error-boundary-reload"
              onClick={() => window.history.back()}
            >
              Go back
            </h3>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
