import React from 'react';
import { css } from 'emotion';
import Tooltip from '@material-ui/core/Tooltip';
import { SERVER_URL } from './config';

export default class SentimentMessageBubble extends React.Component {
  constructor(props) {
    super(props);
    const { flex, message } = this.props;
    this.state = {
      messageBody: message.source.state.body,
      flex
    };
    if (message.isFromMe) {
      this.state.sentimentColor = 'white';
    } else {
      this.state.sentimentColor = 'black';
      if (!message.isFromMe) {
        fetch(
          `${SERVER_URL}/sentiment-analysis?message=${message.source.state.body}`
        )
          .then(response => response.json())
          .then(sentiment => {
            console.log(sentiment);
            let scorePositive = sentiment.sentiment.score >= 0;
            let scoreValue = Math.abs(sentiment.sentiment.score);
            let colorIntensity = Math.min(
              Math.trunc(scoreValue * 255),
              255
            ).toString(16);
            this.setState({
              sentimentColor: scorePositive
                ? `#00${colorIntensity}00`
                : `#${colorIntensity}0000`,
              sentiment: sentiment.sentiment
            });
          });
      }
    }
  }

  render() {
    return (
      <div
        className={css`
          color: ${this.state.sentimentColor};
        `}
      >
        <Tooltip
          title={
            this.state.sentiment
              ? `Score: ${this.state.sentiment.score.toFixed(
                  4
                )} - Magnitude: ${this.state.sentiment.magnitude.toFixed(4)}`
              : ``
          }
        >
          <p>{this.state.messageBody}</p>
        </Tooltip>
      </div>
    );
  }
}
