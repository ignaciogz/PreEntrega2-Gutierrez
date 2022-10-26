import Spinner from 'react-bootstrap/Spinner';

const SpinnerWidget = () => {
	return (
    <Spinner className="d-block mx-auto text-light" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default SpinnerWidget;