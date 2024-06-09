import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

type WeatherSearchFormProps = {
  onSearch: (query: string) => void;
};

const WeatherSearchForm = (props: WeatherSearchFormProps) => {
  const { onSearch } = props;
  const [query, setQuery] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex">
      <Form.Group controlId="query" className="mb-0 mx-3">
        <Form.Control
          type="text"
          placeholder="Enter location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default WeatherSearchForm;
