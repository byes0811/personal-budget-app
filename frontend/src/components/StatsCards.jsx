import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const StatsCards = ({ transactions }) => {
  return (
    <Row className="mb-4">
      <Col xl={3} md={6}>
        <Card className="bg-primary text-white mb-4">
          <Card.Body>
            <h5>Total Transactions</h5>
            <h2>{transactions.length}</h2>
          </Card.Body>
          <Card.Footer className="d-flex align-items-center justify-content-between">
            <span>View Details</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default StatsCards;