import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface Props {
  reference?: any;
}

const CaptchaBox: React.FC<Props> = ({ reference }) => {
  return (
    <div>
      <ReCAPTCHA
        ref={reference}
        sitekey="6LfETQcqAAAAAAHZyi5xJPJcP9rcoQdaPdBtcqfU"
        size="invisible"
      />
    </div>
  );
};

export default CaptchaBox;
