import React, { useEffect, useState } from 'react';

const GradientLine = ({ value }) => {
  const [bmi, setBMI] = useState(null);
  const minValue = 26;
  const maxValue = 50;

  const isOutOfRange = value < minValue || value > maxValue;

  useEffect(() => {
    const weight = localStorage.getItem('weight');
    const height = localStorage.getItem('height');

    if (weight && height && !isNaN(weight) && !isNaN(height)) {
      const weightValue = parseFloat(weight);
      const heightValue = parseFloat(height);

      const calculatedBMI = weightValue / Math.pow(heightValue / 100, 2);
      
      const roundedBMI = calculatedBMI.toFixed(1);
      console.log(roundedBMI);
      setBMI(roundedBMI);
    } else {
      console.error('error');
    }
  }, []);

  let correctedValue = value;
  if (isOutOfRange) {
    correctedValue = value < minValue + 1 ? minValue : maxValue - 1;
  }

  const calculatePosition = (value) => {
    const width = 500;
    const scaledValue = (value - minValue) / (maxValue - minValue);
    return scaledValue * width;
  };

  const containerStyle = {
    marginTop:'100px',
    position: 'relative',
    width: '500px',
    height: '40px',
    textAlign: 'center',
  };

  const lineStyle = {
    borderRadius: '50px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
    height: '10px',
    background: 'linear-gradient(to right, #4CBF72, #F3CD7D, #F49692)',
  };

  const pointStyle = {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    left: `${calculatePosition(correctedValue)}px`, 
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    backgroundColor: 'white',
    border: '7px solid white',
    textAlign: 'center',
    lineHeight: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'transparent'
  };

  const bmiTextStyle = {
    padding: '5px',
    fontSize: '15px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    width: '90px',
    position: 'absolute',
    top: '-60px',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  const labelsStyle = {
    position: 'absolute',
    bottom: '-25px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
  };

  const upperTextStyle = {
    fontWeight: '700',
    position: 'absolute',
    top: '-80px',
    left: '10px',
    fontSize: '16px',
  };

  const upperRightTextStyle = {
    fontWeight: '700',
    position: 'absolute',
    top: '-80px',
    right: '10px',
    fontSize: '16px',
  };

  const infoBlockStyle = {
    paddingTop: '10px',
    marginTop: '20px',
    textAlign: 'left',
    display: 'flex',
    width: '100%',

  };

  const columnStyle = {
    marginTop:'50px',
    flex: '1',
    padding: '0 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative', 
  };

  const titleStyle = {
    fontSize: '12px',
    color: '#999999',
    marginBottom: '5px',
  };

  const subtitleStyle = {
    fontSize: '16px',
    fontWeight: '600',
  };

  const verticalLineStyle = {
    position: 'absolute',
    height: '100%',
    width: '1px',
    backgroundColor: '#D9D9D9',
    right: '0',
    top: '0',
    bottom: '0',
  };

  const horizontalLine = {
    position: 'absolute',
    width: '100%',
    height: '1px',
    backgroundColor: '#D9D9D9',
    top:'90px',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  return (
    <div style={containerStyle}>
      <div style={upperTextStyle}>Body-Mass-Index (BMI)</div>
      <div style={upperRightTextStyle}>Normal: 21.5</div>
      <div style={lineStyle}></div>
      <div style={pointStyle}>
        <div style={bmiTextStyle}>Your BMI is <strong>{bmi}</strong></div>
      </div>
      <div style={labelsStyle}>
        <div>Normal</div>
        <div>Overweight</div>
        <div>Obese</div>
      </div>
      <div style={infoBlockStyle}>
      <div style={horizontalLine}></div>
        <div style={columnStyle}>
          <div style={titleStyle}>LIFESTYLE</div>
          <div style={subtitleStyle}>Active</div>
          <div style={verticalLineStyle}></div> 
        </div>
        <div style={columnStyle}>
          <div style={titleStyle}>TYPE OF EATER</div>
          <div style={subtitleStyle}>Gourmand</div>
          <div style={verticalLineStyle}></div> 

        </div>
        <div style={columnStyle}>
          <div style={titleStyle}>FASTING MOTIVATION</div>
          <div style={subtitleStyle}>High</div>
        </div>
      </div>
    </div>
  );
};

export default GradientLine;
