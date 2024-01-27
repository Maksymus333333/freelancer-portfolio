import React, { useState } from 'react';

const Calculator = () => {
  const [createwebHours, setCreatewebHours] = useState();
  const [webdesignHours, setWebdesignHours] = useState();
  const [modelingHours, setModelingHours] = useState();
  const [gamedevHours, setGamedevHours] = useState();
  const [totalCost, setTotalCost] = useState();
  const [darkMode, setDarkMode] = useState(false);

  const calculateTotalCost = (e) => {
    e.preventDefault();

    const createwebprice = 30;
    const webdesignprice = 20;
    const modelingprice = 25;
    const gamedevprice = 40;

    const total =
      createwebHours * createwebprice +
      webdesignHours * webdesignprice +
      modelingHours * modelingprice +
      gamedevHours * gamedevprice;
    setTotalCost(total.toFixed());
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className={`section ${darkMode ? 'dark' : ''}`}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="title-1">Service Rate Calculator</h2>

        <form onSubmit={calculateTotalCost} className="content-list__item">
          <table style={{ margin: '0 auto' }}>
            <tbody>
              <tr>
                <td className="service-cell" style={{ border: `1px solid ${darkMode ? 'white' : 'black'}`, padding: '1px' }}>
                  <label htmlFor="createwebHours" className="service-label">
                    <h2 className="title-2">Creating a website (Rate: $30/hr):</h2>
                    <input
                      className="hours input-with-border"
                      type="number"
                      id="createwebHours"
                      placeholder="Hours"
                      value={createwebHours}
                      onChange={(e) => setCreatewebHours(Math.max(0, Number(e.target.value)))}
                      required
                      style={{ width: '100px', marginLeft: '10px', textAlign: 'center' }}
                    />
                  </label>
                </td>
              </tr>
              <tr>
                <td className="service-cell" style={{ border: `1px solid ${darkMode ? 'white' : 'black'}`, padding: '1px' }}>
                  <label htmlFor="webdesignHours" className="service-label">
                    <h2 className="title-2">Website design (Rate: $20/hr):</h2>
                    <input
                      className="hours input-with-border"
                      type="number"
                      id="webdesignHours"
                      placeholder="Hours"
                      value={webdesignHours}
                      onChange={(e) => setWebdesignHours(Math.max(0, Number(e.target.value)))}
                      required
                      style={{ width: '100px', marginLeft: '10px',  textAlign: 'center' }}
                    />
                  </label>
                </td>
              </tr>
              <tr>
                <td className="service-cell" style={{ border: `1px solid ${darkMode ? 'white' : 'black'}`, padding: '1px' }}>
                  <label htmlFor="gameHours" className="service-label">
                    <h2 className="title-2">Gaming development (Rate: $40/hr):</h2>
                    <input
                      className="hours input-with-border"
                      type="number"
                      id="gameHours"
                      placeholder="Hours"
                      value={gamedevHours}
                      onChange={(e) => setGamedevHours(Math.max(0, Number(e.target.value)))}
                      required
                      style={{ width: '100px', marginLeft: '10px', textAlign: 'center' }}
                    />
                  </label>
                </td>
              </tr>
              <tr>
                <td className="service-cell" style={{ border: `1px solid ${darkMode ? 'white' : 'black'}`, padding: '1px' }}>
                  <label htmlFor="modelingHours" className="service-label">
                    <h2 className="title-2">Modeling (Rate: $25/hr):</h2>
                    <input
                      className="hours input-with-border"
                      type="number"
                      id="modelingHours"
                      placeholder="Hours"
                      value={modelingHours}
                      onChange={(e) => setModelingHours(Math.max(0, Number(e.target.value)))}
                      required
                      style={{ width: '100px', marginLeft: '10px',  textAlign: 'center' }}
                    />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>

          <button
            className="btn calc calc-with-border"
            onClick={handleDarkModeToggle}
            style={{ marginTop: '20px' }}
          >
            Calculate
          </button>
        </form>

        <div className="result title-3 text-center">Total Cost: ${totalCost}</div>
        <div className="title-3 text-center">All rates are in dollars per hour.</div>
      </div>
    </main>
  );
};

export default Calculator;